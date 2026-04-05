'use client'

import React, { useRef, useState, useEffect } from 'react'

type ServiceSliderProps = {
  images: string[]
  width: string // e.g. '24.143vw'
  height: string // e.g. '17.361vw'
  className?: string
}

export default function ServiceSlider({
  images,
  width,
  height,
  className = '',
}: ServiceSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Бесконечный цикл: добавляем склонированные элементы в начало и конец
  const extendedImages = [images[images.length - 1], ...images, images[0]]
  const [activeIndex, setActiveIndex] = useState(1) // Начинаем с 1
  const [isJumping, setIsJumping] = useState(false)

  // Инициализация позиции скролла
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const slideWidth = container.clientWidth
    if (slideWidth > 0) {
      container.scrollLeft = 1 * slideWidth
    } else {
      const timer = setTimeout(() => {
        container.scrollLeft = 1 * container.clientWidth
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [])

  // Обновляем активный индекс при скролле
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (isJumping) return 
      const slideWidth = container.clientWidth
      if (slideWidth === 0) return
      
      const newIndex = Math.round(container.scrollLeft / slideWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [activeIndex, isJumping])

  // Логика "прыжка"
  useEffect(() => {
    const container = containerRef.current
    if (!container || isJumping) return

    const slideWidth = container.clientWidth
    
    if (activeIndex === extendedImages.length - 1) {
      const jumpTo = () => {
        setIsJumping(true)
        container.style.scrollBehavior = 'auto'
        container.scrollLeft = 1 * slideWidth
        setActiveIndex(1)
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth'
          setIsJumping(false)
        }, 50)
      }
      const timer = setTimeout(jumpTo, 400)
      return () => clearTimeout(timer)
    }
    
    if (activeIndex === 0) {
      const jumpTo = () => {
        setIsJumping(true)
        container.style.scrollBehavior = 'auto'
        container.scrollLeft = (extendedImages.length - 2) * slideWidth
        setActiveIndex(extendedImages.length - 2)
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth'
          setIsJumping(false)
        }, 50)
      }
      const timer = setTimeout(jumpTo, 400)
      return () => clearTimeout(timer)
    }
  }, [activeIndex, extendedImages.length, isJumping])

  // Реализация мышиного drag-to-scroll
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return
    setIsDown(true)
    container.style.scrollSnapType = 'none'
    setStartX(e.pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
  }

  const handleMouseLeave = () => {
    if (!isDown) return
    setIsDown(false)
    if (containerRef.current) {
      containerRef.current.style.scrollSnapType = 'x mandatory'
    }
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDown) return
    setIsDown(false)
    
    const container = containerRef.current
    if (!container) return
    
    const x = e.pageX - container.offsetLeft
    const diff = startX - x
    const slideWidth = container.clientWidth
    
    let targetIndex = activeIndex
    if (diff > 30) {
      targetIndex = activeIndex + 1
    } else if (diff < -30) {
      targetIndex = activeIndex - 1
    }

    container.style.scrollBehavior = 'smooth'
    container.scrollTo({
      left: targetIndex * slideWidth,
    })
    
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.scrollSnapType = 'x mandatory'
      }
    }, 400)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return
    e.preventDefault()
    const container = containerRef.current
    if (!container) return
    const x = e.pageX - container.offsetLeft
    const walk = x - startX
    container.scrollLeft = scrollLeft - walk
  }

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        WebkitUserSelect: 'none', // Запрет синего выделения фото
        userSelect: 'none',
      }}
    >
      {/* Слайдер с картинками */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none', // скрываем скроллбар в Firefox
          msOverflowStyle: 'none', // скрываем скроллбар в IE
          cursor: isDown ? 'grabbing' : 'grab',
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />
        
        {extendedImages.map((imgSrc, index) => (
          <div
            key={`${imgSrc}-${index}`}
            style={{
              width: '100%',
              height: '100%',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              pointerEvents: 'none', // Предотвращаем Drag картинки браузором
            }}
          >
            <img
              src={imgSrc}
              alt=""
              aria-hidden="true"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      {/* Градиент поверх слайдера (для текста и кнопок снизу) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 74.89%, rgba(0, 0, 0, 0.2) 100%)',
          pointerEvents: 'none', // градиент не должен блокировать клики по слайдеру
        }}
      />

      {/* iOS-style Page Control (честная анимация сдвига) */}
      {images.length > 1 && (
        <div
          className="service-slider-pagination"
          style={{
            position: 'absolute',
            bottom: '0.694vw', // 10px
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3.472vw', // 50px (строгая ширина окна 5 точек)
            height: '1.111vw', // 16px
            zIndex: 10,
          }}
        >
          {/* Контейнер самих точек (выровнен по центру) */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 }}>
            {images.map((_, i) => {
              // Нормализуем индекс для точек (чтобы клоны подсвечивали правильную точку)
              const normalizedActiveIndex = (activeIndex - 1 + images.length) % images.length

              // Ищем кратчайшее расстояние по кругу
              let distance = i - normalizedActiveIndex
              if (distance > images.length / 2) distance -= images.length
              if (distance < -images.length / 2) distance += images.length

              // Размеры и координаты в зависимости от дистанции
              let translateX = '0vw'
              let dotW = '0vw'
              let dotH = '0vw'
              let opacity = 0
              let zIndex = 1

              if (distance === 0) {
                translateX = '0vw'
                dotW = '0.556vw' // 8px
                dotH = '0.278vw' // 4px
                opacity = 1
                zIndex = 5
              } else if (distance === 1) {
                translateX = '0.938vw' // 13.5px
                dotW = '0.208vw' // 3px
                dotH = '0.208vw'
                opacity = 0.3
                zIndex = 4
              } else if (distance === -1) {
                translateX = '-0.938vw'
                dotW = '0.208vw'
                dotH = '0.208vw'
                opacity = 0.3
                zIndex = 4
              } else if (distance === 2) {
                translateX = '1.667vw' // 24px
                dotW = '0.139vw' // 2px
                dotH = '0.139vw'
                opacity = 0.3
                zIndex = 3
              } else if (distance === -2) {
                translateX = '-1.667vw'
                dotW = '0.139vw'
                dotH = '0.139vw'
                opacity = 0.3
                zIndex = 3
              } else if (distance > 2) {
                translateX = '2.361vw' // Спрятана справа
                dotW = '0vw'
                dotH = '0vw'
                opacity = 0
              } else if (distance < -2) {
                translateX = '-2.361vw' // Спрятана слева
                dotW = '0vw'
                dotH = '0vw'
                opacity = 0
              }

              return (
                <div
                  key={i}
                  className="service-slider-dot"
                  data-active={distance === 0}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: dotW,
                    height: dotH,
                    backgroundColor: '#ffffff',
                    opacity: opacity,
                    borderRadius: distance === 0 ? '2.604vw' : '50%', // 8px oval vs 3px circle
                    transform: `translate(calc(-50% + ${translateX}), -50%)`,
                    '--mobile-translateX': translateX === '0vw' ? '0px' : 
                                          translateX === '13.5px' || translateX === '0.938vw' ? '13.5px' :
                                          translateX === '-13.5px' || translateX === '-0.938vw' ? '-13.5px' :
                                          translateX === '24px' || translateX === '1.667vw' ? '24px' :
                                          translateX === '-24px' || translateX === '-1.667vw' ? '-24px' : '0px',
                    transition: 'all 0.3s ease',
                    zIndex,
                    pointerEvents: 'none',
                  } as React.CSSProperties}
                />
              )
            })}
          </div>

          {/* Невидимые зоны для легкого клика по нужной точке */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: '0vw' }}>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const normalizedActiveIndex = (activeIndex - 1 + images.length) % images.length
              const targetIndex = (normalizedActiveIndex + offset + images.length) % images.length

              return (
                <div
                  key={offset}
                  onClick={() => {
                    if (containerRef.current) {
                      containerRef.current.scrollTo({
                         left: (targetIndex + 1) * containerRef.current.clientWidth,
                         behavior: 'smooth'
                      })
                    }
                  }}
                  style={{
                    flex: offset === 0 ? 2 : 1, // Центральная зона чуть шире
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                  }}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
