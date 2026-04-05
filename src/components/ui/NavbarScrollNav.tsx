'use client'

// NavbarScrollNav — Figma node 4026:321 (navbar-scroll-navigation)
// Размер в макете: 175×60px
// Состав:
//   - scroll-text-animation: горизонтальная прокрутка названий секций,
//     «Я» (hero) стоит в центре → текущая секция выводится посередине
//   - compass-needle: SVG-игла 12×12px, top=20px, по центру по X
//   - compass-crown-lottie: SVG с короной 44×20px, top=40px, left=65.5px
//
// Ассеты: public/assets/images/hero/compass-needle.svg
//         public/assets/images/hero/compass-crown-lottie.svg
//
// Формула: px / 14.4 = vw

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import crownAnimation from '../../../public/json/scroll-crown.json'

// Маппинг section id → название для центрального текста
const SECTIONS: { id: string; label: string }[] = [
  { id: 'hero',         label: 'Я' },
  { id: 'superpowers',  label: 'Суперсилы' },
  { id: 'flowwow',      label: 'Flowwow' },
  { id: 'works',        label: 'Работы' },
  { id: 'experience',   label: 'Опыт' },
  { id: 'services',     label: 'Как со мной работают' },
  { id: 'publications', label: 'Публичный след' },
  { id: 'contacts',     label: 'Контакты' },
]

const NavbarScrollNav = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [translateX, setTranslateX] = useState<number>(0)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const prevIndexRef = useRef<number>(0)

  // Запускаем Lottie-анимацию при каждой смене секции с учетом направления
  useEffect(() => {
    if (lottieRef.current) {
      const totalFrames = lottieRef.current.getDuration(true) as number // Получаем общее количество кадров
      
      if (activeIndex > prevIndexRef.current) {
        // Скролл вниз — играем вперед
        lottieRef.current.setDirection(1)
        lottieRef.current.goToAndPlay(0, true)
      } else if (activeIndex < prevIndexRef.current) {
        // Скролл вверх — играем назад
        lottieRef.current.setDirection(-1)
        // Запускаем с последнего кадра
        lottieRef.current.goToAndPlay(totalFrames || 100, true)
      }
      
      prevIndexRef.current = activeIndex
    }
  }, [activeIndex])

  // Слушаем скролл и определяем активную секцию более точно (строго по верхнему краю)
  useEffect(() => {
    const handleScroll = () => {
      let currentIdx = -1

      // Линия срабатывания - 82px. Так как в глобальных стилях стоит scroll-margin-top: 80px (высота меню),
      // секции при клике доезжают ровно до 80px. Мы ставим 82px, чтобы триггер 100% сработал, 
      // как только секция "упирается" в свой физический "верх" экрана.
      const triggerLine = 82

      SECTIONS.forEach(({ id }, idx) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Проверяем, что верх секции пересек триггерную линию
          // И низ секции все еще ниже этой линии
          if (rect.top <= triggerLine && rect.bottom > triggerLine) {
            currentIdx = idx
          }
        }
      })

      // Фикс: если находимся в самом низу страницы, принудительно активируем последнюю существующую секцию
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50

      if (isAtBottom) {
        // Находим последнюю секцию из массива SECTIONS, которая реально есть в DOM (отрендерена)
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
          if (document.getElementById(SECTIONS[i].id)) {
            currentIdx = i
            break
          }
        }
      }

      if (currentIdx !== -1) {
        setActiveIndex((prev) => (prev !== currentIdx ? currentIdx : prev))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // выставляем значение при инициализации

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Высчитываем смещение (TranslateX), чтобы активный элемент всегда был по центру
  useEffect(() => {
    const activeEl = itemsRef.current[activeIndex]
    const containerEl = containerRef.current
    if (activeEl && containerEl) {
      const offsetLeft = activeEl.offsetLeft
      const itemWidth = activeEl.offsetWidth
      const containerWidth = containerEl.offsetWidth
      
      const targetX = (containerWidth / 2) - offsetLeft - (itemWidth / 2)
      setTranslateX(targetX)
    }
  }, [activeIndex])

  return (
    // Контейнер: 175×60px → 12.15vw × 4.167vw (задаётся снаружи в Navbar)
    <div
      role="navigation"
      aria-label="Текущий раздел"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.556vw',        // 8px / 14.4 — между всеми тремя элементами
        justifyContent: 'center',
      }}
    >
      {/* Блок со всем списком разделов (карусель) */}
      <div
        ref={containerRef}
        className="nav-scroll-container-mobile"
        style={{
          position: 'relative',  // больше не absolute
          width: '18vw',           // Шире 175px, чтобы соседи по бокам помещались
          height: 'auto',          // Hug — обнимает текст
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          // Плавное затухание по краям
          maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
          pointerEvents: 'auto',   // Включаем клики
          flexShrink: 0,
        }}
      >
        <div
          className="nav-scroll-carousel-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.389vw',        // Отступ между названиями 20px (1.389vw)
            transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
            transform: `translateX(${translateX}px)`,
            willChange: 'transform',
          }}
        >
          {SECTIONS.map((section, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={section.id}
                ref={(el) => {
                  if (el) itemsRef.current[idx] = el
                }}
                className="nav-scroll-label-mobile"
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.833vw',   // 12px / 14.4
                  lineHeight: '1',
                  color: isActive ? '#0b0e15' : 'rgba(11,14,21,0.4)',
                  transition: 'color 0.5s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {section.label}
              </div>
            )
          })}
        </div>
      </div>

      {/* Compass needle: 12×12px → 0.833vw, по центру */}
      <div
        className="compass-needle-mobile"
        style={{
          position: 'relative',  // больше не absolute
          width: '0.833vw',      // 12px / 14.4
          height: '0.833vw',
          flexShrink: 0,
        }}
      >
        <Image
          src="/assets/images/hero/compass-needle.svg"
          alt=""
          aria-hidden="true"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Compass crown (animated Lottie): 44×20px */}
      <div
        className="compass-crown-mobile"
        style={{
          position: 'relative',  // больше не absolute
          width: '3.056vw',      // 44px / 14.4
          height: '1.389vw',     // 20px / 14.4
          flexShrink: 0,
        }}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={crownAnimation}
          loop={false}
          autoplay={false}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}

export default NavbarScrollNav
