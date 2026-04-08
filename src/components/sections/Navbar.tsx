'use client'

// Navbar — Figma node 4026:313
// Цвет ссылок: black-main (#0b0e15) — без mix-blend-mode
// Hover: тонкая линия снизу, слева → направо (CSS класс .nav-link в globals.css)
//
// При экране > 2560px navbar прибит к краям max-width контейнера (2560px),
// поэтому используем max-width:2560px wrapper с margin:auto.
// При меньших экранах всё работает как раньше (vw = 1vw, никаких изменений).

import NavbarScrollNav from '@/components/ui/NavbarScrollNav'
import { useCurrentTime } from '@/hooks/useCurrentTime'

// Базовые inline-стили для ссылок (без hover-эффектов — они в .nav-link CSS)
const baseLinkStyle: React.CSSProperties = {
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 600,
  fontSize: 'calc(0.833 * var(--1vw))',   // 12px / 14.4
  lineHeight: 1.2,
  color: '#0b0e15',      // black-main
}

export default function Navbar() {
  const time = useCurrentTime()

  return (
    <>
      {/* ─── ОБЁРТКА: фиксированная полоса наверху ──────────────────────── */}
      {/*
        position: fixed, left/right: 0 — тянется на весь экран.
        Внутри — div с maxWidth 2560px, margin: 0 auto — контент не уходит за 2560px.
      */}
      <div
        className="navbar-fixed-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          pointerEvents: 'none', // сам бар прозрачный для кликов
        }}
      >
        {/* Внутренний контейнер: maxWidth замораживается на 2560px */}
        <div
          style={{
            width: '100%',
            maxWidth: 'calc(100 * var(--1vw))',
            margin: '0 auto',
            position: 'relative',
            height: 'calc(4.167 * var(--1vw))', // 60px / 14.4 — высота navbar
          }}
        >

          {/* ─── ЛЕВЫЙ БЛОК: Timezone Info ──────────── */}
          <div
            aria-label="Часовой пояс"
            className="navbar-desktop-left"
            style={{
              position: 'absolute',
              top: 'calc(0.694 * var(--1vw))',
              left: 'calc(0.694 * var(--1vw))',
              width: 'calc(24.097 * var(--1vw))',   // 347px / 14.4
              display: 'flex',
              gap: 'calc(0.556 * var(--1vw))',      // 8px / 14.4
              alignItems: 'center',
              fontFeatureSettings: '"salt" 1',
              pointerEvents: 'auto',
            }}
          >
            {/* Время: фиксированная ширина 52px → 3.611vw, чтобы цифры не сдвигали остальной текст */}
            <span
              style={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontWeight: 600,
                fontSize: 'calc(0.833 * var(--1vw))',
                lineHeight: 1.2,
                color: '#0b0e15',
                width: 'calc(3.611 * var(--1vw))',  // 52px / 14.4
                display: 'inline-block',
                flexShrink: 0,
              }}
            >
              {time}
            </span>
            <span
              style={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontWeight: 600,
                fontSize: 'calc(0.833 * var(--1vw))',
                lineHeight: 1.2,
                color: 'rgba(11,14,21,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              +3GMT
            </span>
          </div>

          {/* ─── ЦЕНТРАЛЬНЫЙ БЛОК: scroll-nav компас ─────────────────────── */}
          {/* По центру контейнера через left: 50% + transform */}
          <div
            aria-hidden="true"
            className="navbar-center-mobile"
            style={{
              position: 'absolute',
              top: 'calc(0.694 * var(--1vw))',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'calc(12.153 * var(--1vw))',   // 175px / 14.4
              height: 'calc(4.167 * var(--1vw))',   // 60px / 14.4
              pointerEvents: 'none',
            }}
          >
            <NavbarScrollNav />
          </div>

          {/* ─── ПРАВЫЙ БЛОК: CV / LinkedIn / Связаться ──────────────────── */}
          <div
            className="navbar-desktop-right"
            style={{
              position: 'absolute',
              top: 'calc(0.694 * var(--1vw))',
              right: 'calc(0.694 * var(--1vw))',
              display: 'flex',
              gap: 'calc(0.694 * var(--1vw))',      // 10px / 14.4
              alignItems: 'center',
              justifyContent: 'flex-end',
              pointerEvents: 'auto',
            }}
          >
            <a
              href="https://drive.google.com/file/d/1hAI5M7KumNeFMXH4ChrfKJVkGG6aQW0g/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label="Скачать CV"
              tabIndex={0}
              style={baseLinkStyle}
            >
              CV
            </a>
            <a
              href="http://linkedin.com/in/darya-buchakova-1aaa01212"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label="Перейти на LinkedIn"
              tabIndex={0}
              style={baseLinkStyle}
            >
              LinkedIn
            </a>
            {/* navbar-contact: Figma x=84, w=263px → 18.264vw */}
            {/* «Связаться» внутри: x=203 из 263 → прижата вправо (justify-end) */}
            <div
              style={{
                display: 'flex',
                width: 'calc(18.264 * var(--1vw))',     // 263px / 14.4
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexShrink: 0,
              }}
            >
              <a
                href="https://t.me/daryablacky"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                aria-label="Связаться"
                tabIndex={0}
                style={baseLinkStyle}
              >
                Связаться
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
