'use client'

// Navbar — Design node 4026:313
// Цвет ссылок: black-main (#0b0e15) — без mix-blend-mode
// Hover: тонкая линия снизу, слева → направо (CSS класс .nav-link в globals.css)
//
// Формула: px / 14.4 = vw
// Left (navbar-links):        x=10,  y=10, w=348  → left=0.694vw, w=24.17vw
// Center (scroll-navigation): x=633, y=10, w=175  → left=43.96vw, w=12.15vw
// Right (navbar-transitions): x=1083, y=10         → right=0.694vw, w=24.1vw

import NavbarScrollNav from '@/components/ui/NavbarScrollNav'
import { useCurrentTime } from '@/hooks/useCurrentTime'

// Базовые inline-стили для ссылок (без hover-эффектов — они в .nav-link CSS)
const baseLinkStyle: React.CSSProperties = {
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 600,
  fontSize: '0.833vw',   // 12px / 14.4
  lineHeight: 1.2,
  color: '#0b0e15',      // black-main
}

export default function Navbar() {
  const time = useCurrentTime()

  return (
    <>
      {/* ─── ЛЕВЫЙ БЛОК: Timezone Info (вместо бывших ссылок) ──────────── */}
      {/* Design: ширина блока 347px → 24.097vw */}
      <div
        aria-label="Часовой пояс"
        className="navbar-desktop-left"
        style={{
          position: 'fixed',
          top: '0.694vw',
          left: '0.694vw',
          width: '24.097vw',   // 347px / 14.4
          zIndex: 1000,
          display: 'flex',
          gap: '0.556vw',      // 8px / 14.4
          alignItems: 'center',
          fontFeatureSettings: '"salt" 1',
        }}
      >
        {/* Время: фиксированная ширина 52px → 3.611vw, чтобы цифры не сдвигали остальной текст */}
        <span
          style={{
            fontFamily: '"Pretendard Variable", sans-serif',
            fontWeight: 600,
            fontSize: '0.833vw',
            lineHeight: 1.2,
            color: '#0b0e15',
            width: '3.611vw',  // 52px / 14.4
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
            fontSize: '0.833vw',
            lineHeight: 1.2,
            color: 'rgba(11,14,21,0.4)',
            whiteSpace: 'nowrap',
          }}
        >
          +3GMT
        </span>
      </div>

      {/* ─── ЦЕНТРАЛЬНЫЙ БЛОК: scroll-nav компас ─────────────────────── */}
      {/* Идеально по центру экрана через left: 50% и transform */}
      <div
        aria-hidden="true"
        className="navbar-center-mobile"
        style={{
          position: 'fixed',
          top: '0.694vw',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '12.153vw',   // 175px / 14.4
          height: '4.167vw',   // 60px / 14.4
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      >
        <NavbarScrollNav />
      </div>

      {/* ─── ПРАВЫЙ БЛОК: CV / LinkedIn / Связаться ──────────────────── */}
      {/* Design: navbar-transitions, right=10px → right=0.694vw          */}
      <div
        className="navbar-desktop-right"
        style={{
          position: 'fixed',
          top: '0.694vw',
          right: '0.694vw',
          zIndex: 1000,
          display: 'flex',
          gap: '0.694vw',      // 10px / 14.4
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <a
          href="/cv.pdf"
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
        {/* navbar-contact: Design x=84, w=263px → 18.264vw */}
        {/* «Связаться» внутри: x=203 из 263 → прижата вправо (justify-end) */}
        <div
          style={{
            display: 'flex',
            width: '18.264vw',     // 263px / 14.4
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
    </>
  )
}
