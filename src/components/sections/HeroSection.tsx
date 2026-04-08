'use client'

// HeroSection — Figma node 4015:73
// Размер в макете: 1440×700px → 100vw × 100dvh
// Формула конвертации: px / 14.4 = vw
//
// Ключевые точки:
// - pt: 90px → 6.25vw (от верха до hero-content)
// - pb: 10px → 0.694vw (нижняя строка)
// - px: 10px → 0.694vw (боковые отступы)
// - hero-content: h=514px → 73.43dvh, w=1420px → 98.61vw
// - Центральный круг (hero-content-wrapper): 514px → 35.69vw, left=453px → 31.46vw
// - hero-tex-cta: left=57px → 3.96vw (внутри круга)
// - avatar-photo: 50×58px → 3.47vw × 8.29dvh
// - text-wrapper: w=400px → 27.78vw
// - Строка hero-advantages: top=299px → 42.71dvh
// - hero-add-content: строка y=676 → ≈96.57dvh

import Image from 'next/image'
import { useCurrentTime } from '@/hooks/useCurrentTime'
import Indicator from '@/components/ui/Indicator'

export default function HeroSection() {
  const time = useCurrentTime()

  return (
    <section
      id="hero"
      aria-label="Главный экран"
      style={{
        width: '100%',
        backgroundColor: '#f9f9fa',
      }}
    >
      {/* Внутренний контейнер: maxWidth замораживается на 2560px */}
      <div
        className="hero-section-mobile"
        style={{
          width: '100%',
          maxWidth: 'calc(100 * var(--1vw))',
          margin: '0 auto',
          height: '100dvh',
          backgroundColor: '#f9f9fa',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 'calc(0.694 * var(--1vw))',
          paddingRight: 'calc(0.694 * var(--1vw))',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* hero-content: w=1420px → 98.61vw, h=514px → 35.694vw */}
        <div
          className="hero-content-mobile"
          style={{
            width: 'calc(98.61 * var(--1vw))',
            height: 'calc(35.694 * var(--1vw))',
            position: 'relative',
          }}
        >
          {/* Строка hero-advantages: "10 лет опыта" слева, "15 наград" справа */}
          {/* Figma: точно по центру hero-content по высоте */}
          <div
            aria-label="Достижения"
            className="hero-advantages-mobile"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: 0,
              right: 0,
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* 10 лет опыта */}
            <span
              style={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontWeight: 600,
                fontSize: 'calc(1.389 * var(--1vw))', // 20px / 14.4
                lineHeight: 1.2,
                color: '#0b0e15',
                whiteSpace: 'nowrap',
                fontFeatureSettings: "'salt'",
              }}
            >
              10 лет опыта
            </span>

            {/* 15 наград */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {/* Ribbon SVG: 12×24px → 0.833vw × 1.667vw */}
              <div className="ribbon-mobile" style={{ width: 'calc(0.833 * var(--1vw))', height: 'calc(1.667 * var(--1vw))', position: 'relative', flexShrink: 0 }}>
                <Image
                  src="./assets/images/hero/ribbon.svg"
                  alt=""
                  aria-hidden="true"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: 'calc(1.389 * var(--1vw))', // 20px / 14.4
                  lineHeight: 1.2,
                  color: '#0b0e15',
                  whiteSpace: 'nowrap',
                  fontFeatureSettings: "'salt'",
                }}
              >
                15 наград
              </span>
            </div>
          </div>

          {/* hero-content-wrapper */}
          <div
            className="hero-content-wrapper-mobile"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: 0,
              width: 'calc(35.694 * var(--1vw))',
              height: 'calc(35.694 * var(--1vw))',
            }}
          >
            {/* Орнаментальный круг — вращающаяся SVG */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
              }}
            >
              {/* Stroke ellipse (статичный) */}
              <Image
                className="hero-repit-ellipse-mobile"
                src="./assets/images/hero/hero-repit-ellipse.svg"
                alt=""
                aria-hidden="true"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            {/* hero-tex-cta */}
            <div
              className="hero-tex-cta-mobile"
              style={{
                position: 'absolute',
                left: 'calc(3.958 * var(--1vw))',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'calc(2.778 * var(--1vw))',
                width: 'calc(27.78 * var(--1vw))',
              }}
            >
              {/* hero-text-wrapper: gap=24px → 1.667vw */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px',
                  width: '100%',
                }}
              >
                {/* Avatar photo */}
                <div
                  className="hero-avatar-mobile"
                  style={{
                    width: 'calc(3.472 * var(--1vw))',
                    height: 'calc(4.028 * var(--1vw))',
                    borderRadius: 'calc(1.111 * var(--1vw))',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="./assets/images/hero/avatar-photo.webp"
                    alt="Дарья Бучакова"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                    sizes="calc(3.472 * var(--1vw))"
                  />
                </div>

                {/* H1 и Подзаголовок (текст по центру) */}
                <div
                  className="hero-text-inner-mobile"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'calc(0.833 * var(--1vw))', // 12px / 14.4
                    textAlign: 'center',
                    fontFamily: '"Pretendard Variable", sans-serif',
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  <h1
                    className="hero-h1-mobile"
                    style={{
                      margin: 0,
                      fontSize: 'calc(1.389 * var(--1vw))', // 20px / 14.4
                      color: '#0b0e15',
                    }}
                  >
                    Дарья Бучакова.
                    <br />
                    Design &amp; Creative Director.
                  </h1>
                  <p
                    className="hero-desc-mobile"
                    style={{
                      margin: 0,
                      fontSize: 'calc(0.833 * var(--1vw))', // 12px / 14.4
                      color: 'rgba(11, 14, 21, 0.4)',
                      width: 'calc(17.222 * var(--1vw))',   // 248px / 14.4
                    }}
                  >
                    Строю масштабируемые дизайн-системы и сильные команды, которые усиливают бренды и бизнес.
                  </p>
                </div>
              </div>

              {/* CTA Button — "Обсудить задачу" */}
              {/* Figma: px=12px → 0.833vw, py=8px → 0.556vw, gap=8px → 0.556vw, radius=40px → 2.778vw */}
              <a
                className="hero-btn-mobile"
                href="https://t.me/daryablacky"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Обсудить задачу"
                tabIndex={0}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'calc(0.556 * var(--1vw))',         // 8px / 14.4
                  backgroundColor: '#0b0e15',
                  color: '#ffffff',
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: 'calc(0.833 * var(--1vw))',    // 12px / 14.4
                  lineHeight: 1.2,
                  paddingLeft: 'calc(0.833 * var(--1vw))', // 12px / 14.4
                  paddingRight: 'calc(0.833 * var(--1vw))',
                  paddingTop: 'calc(0.556 * var(--1vw))',  // 8px / 14.4
                  paddingBottom: 'calc(0.556 * var(--1vw))',
                  borderRadius: 'calc(2.778 * var(--1vw))',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a2f3e')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0b0e15')}
              >
                <Indicator className="indicator-mobile" />
                <span>Обсудить задачу</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
