'use client'

import React, { useRef, useState, useEffect } from 'react'

const textLines = [
  ['Создаю', 'не', 'просто', 'дизайн,'],
  ['а', 'систему,', 'в', 'которой', 'продукт,'],
  ['коммуникация', 'и', 'бренд'],
  ['говорят', 'единым', 'голосом.'],
]
const TOTAL_WORDS = textLines.reduce((acc, line) => acc + line.length, 0)

export default function QuoteSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLImageElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // ---- ЛОГИКА АНИМАЦИИ СКРОЛЛА ----
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      
      const scrollableDistance = rect.height - window.innerHeight
      if (scrollableDistance <= 0) return

      let p = -rect.top / scrollableDistance
      p = Math.min(Math.max(p, 0), 1)
      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // ---- ЛОГИКА ПОВОРОТА СТРЕЛКИ ЗА КУРСОРОМ ----
    const handleMouseMove = (e: MouseEvent) => {
      if (!arrowRef.current) return
      
      const rect = arrowRef.current.getBoundingClientRect()
      const arrowCenterX = rect.left + rect.width / 2
      const arrowCenterY = rect.top + rect.height / 2
      
      const dx = e.clientX - arrowCenterX
      const dy = e.clientY - arrowCenterY
      
      // Вычисляем угол в радианах и переводим в градусы
      let angle = Math.atan2(dy, dx) * (180 / Math.PI)
      
      // Изначально SVG стрелки направлено вверх (упирается в 0 градус на CSS).
      // А вектор Math.atan2 для "Вверх" равен -90 градусам. 
      // Поэтому прибавляем 90°, чтобы нулевой угол SVG соотносился с математикой курсора.
      angle += 90

      arrowRef.current.style.transform = `rotate(${angle}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  let absoluteWordIndex = 0

  return (
    <section
      ref={containerRef}
      style={{
        width: '100%',
        height: '300vh', // Дает 200vh чистого скролла (задержки) для анимации
        backgroundColor: '#ffffff',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Sticky блок — прилипает к верху экрана на все время скролла контейнера */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh', // Высота экрана
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="quote-container-mobile"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2.778vw', // 40px / 14.4
          }}
        >
          {/* Композитная иконка кавычек (dots + arrow) из макета */}
          <div
            className="quote-icon-container-mobile"
            style={{
              width: '3.472vw', // 50px / 14.4
              height: '3.472vw', // 50px / 14.4
              flexShrink: 0,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Внешние точки (50x50) */}
            <img 
              src="/assets/icons/quote-dots.svg" 
              alt="" 
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} 
            />
            {/* Внутренняя стрелка (12x12) */}
            <img 
              ref={arrowRef}
              src="/assets/icons/quote-arrow.svg" 
              alt="" 
              className="quote-arrow-mobile"
              aria-hidden="true"
              style={{ position: 'relative', width: '0.833vw', height: '0.833vw', display: 'block', zIndex: 1 }} 
            />
          </div>

          {/* Текстовый блок */}
          <div
            className="quote-text-mobile"
            style={{
              width: '34.722vw',
              textAlign: 'center',
              fontFamily: '"Pretendard Variable", sans-serif',
              fontWeight: 600,
              fontSize: '2.083vw',
              lineHeight: 1.2,
            }}
          >
            {textLines.map((line, lineIdx) => (
              <span key={lineIdx} style={{ display: 'block', whiteSpace: 'nowrap' }}>
                {line.map((word, wordIdx) => {
                  const idx = absoluteWordIndex++
                  
                  // Считаем рамки "прогресса" именно для этого слова
                  const start = idx / TOTAL_WORDS
                  const end = (idx + 1) / TOTAL_WORDS
                  
                  // Локальный прогресс слова от 0 до 1 (0 -> серый, 1 -> черный)
                  const localProgress = Math.min(Math.max((progress - start) / (end - start), 0), 1)
                  
                  // Альфа-канал цвета плавно меняется от 0.1 (black-10) до 1.0 (black-main)
                  const alpha = 0.1 + 0.9 * localProgress

                  return (
                    <span
                      key={wordIdx}
                      style={{
                        color: `rgba(11, 14, 21, ${alpha})`,
                      }}
                    >
                      {word}
                      {/* Ставим пробел после слова, если оно не последнее в строке */}
                      {wordIdx < line.length - 1 ? ' ' : ''}
                    </span>
                  )
                })}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
