'use client'

// Indicator — Design node 788:1858
// Два состояния:
//   Indicator-off: 4×4px, #91f271, opacity 0.1, border-radius 19px
//   Indicator-on:  4×8px, #91f271, border 1px solid rgba(145,242,113,0.3), border-radius 19px
//
// Анимация: пульсация между off и on через CSS keyframes + автоматическое переключение
// Размеры в vw (px / 14.4):
//   4px  → 0.278vw
//   8px  → 0.556vw
//   19px → 1.319vw
//
// Файл CSS-анимации: добавлена в globals.css через className

import { useEffect, useState } from 'react'

interface IndicatorProps {
  /** false = Indicator-off (dim dot), true = Indicator-on (glowing capsule) */
  isOn?: boolean
  /** Автопульсация: переключаться между on/off каждые `pulseMs` мс */
  pulse?: boolean
  pulseMs?: number
  className?: string
}

const Indicator = ({ isOn = true, pulse = true, pulseMs = 1000, className }: IndicatorProps) => {
  const [active, setActive] = useState(isOn)

  useEffect(() => {
    if (!pulse) return
    const timer = setInterval(() => setActive((v) => !v), pulseMs)
    return () => clearInterval(timer)
  }, [pulse, pulseMs])

  return (
    <span
      aria-hidden="true"
      className={`indicator ${className || ''}`}
      style={{
        display: 'inline-block',
        flexShrink: 0,
        backgroundColor: '#91f271',
        borderRadius: '19px',
        width: 'var(--indicator-w, 0.278vw)',
        height: active ? 'var(--indicator-h-on, 0.556vw)' : 'var(--indicator-h-off, 0.278vw)',
        opacity: active ? 1 : 0.1,
        border: active ? '1px solid rgba(145,242,113,0.3)' : 'none',
        transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out, border 0.3s ease-in-out',
        position: 'relative',
        zIndex: 10,
      }}
    />
  )
}

export default Indicator
