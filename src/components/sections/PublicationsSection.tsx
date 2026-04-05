'use client'

import React, { useState } from 'react'

const LinkHoverUnderline = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{
        display: 'inline', // Строго inline, чтобы не растягиваться на весь контейнер
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
      }}
      className="pub-hover-link"
    >
      <span style={{ display: 'inline', WebkitBoxDecorationBreak: 'clone' }}>
        {children}
      </span>
    </a>
  )
}

export default function PublicationsSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      id="publications"
      className="publications-section-mobile"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '6.944vw',
        paddingBottom: '6.944vw',
        paddingLeft: '0.694vw',
        paddingRight: '0.694vw',
        gap: '5.556vw',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* CSS для анимации подчеркивания многострочного текста, как в navbar (но с поддержкой wrap) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .pub-hover-link span {
          background-image: linear-gradient(to right, #0b0e15 0%, #0b0e15 100%);
          background-position: 0% 100%;
          background-repeat: no-repeat;
          background-size: 0% 2px;
          transition: background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding-bottom: 2px;
        }
        .pub-hover-link:hover span {
          background-size: 100% 2px;
        }
      `}} />

      {/* Заголовок */}
      <div
        className="publications-header-mobile"
        style={{ width: '48.889vw' }}
      >
        <h2
          style={{
            textAlign: 'left',
            fontFamily: '"Pretendard Variable", sans-serif',
            fontWeight: 600,
            fontSize: '1.667vw',
            lineHeight: 1.2,
            color: '#0b0e15',
            margin: 0,
          }}
        >
          Публичный след
        </h2>
      </div>

      {/* Desktop сетка Публикаций (1420px = 98.611vw) */}
      <div
        className="publications-grid-desktop"
        style={{
          width: '98.611vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.778vw',
        }}
      >
        {/* ROW 1 */}
        <div style={{ display: 'flex', gap: '0.694vw', width: '100%', alignItems: 'flex-start' }}>
          
          {/* public-01: Круг наград (348px) */}
          <div
            style={{
              width: '24.167vw', // 348px
              height: '24.167vw', // 348px
              borderRadius: '99vw', // 1000px
              backgroundColor: '#f9f9fa',
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0
            }}
          >
            {/* Awwards ribbon (Нижний слой, выровнен по центру) */}
            <img 
              src="/assets/images/publications/public-awwards-ribbon.avif" 
              alt="" 
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '109.04%',
                height: '109.04%',
                objectFit: 'contain'
              }}
            />
            {/* Dots bg (Верхний слой) */}
            <img 
              src="/assets/images/publications/public-dots.svg" 
              alt="" 
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Text & Logos */}
            <div
              style={{
                position: 'absolute',
                top: '18.074vw', // 260.26px / 14.4
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.556vw', // 8px
              }}
            >
              <span
                style={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.833vw', // 12px
                  color: '#0b0e15',
                  lineHeight: 1.2
                }}
              >
                Дизайн наград
              </span>
              <div style={{ display: 'flex', gap: '0.278vw' /* 4px */ }}>
                <img src="/assets/images/publications/logo-sreda.svg" alt="" aria-hidden="true" style={{ width: '1.944vw', height: '1.944vw' }} />
                <img src="/assets/images/publications/logo-adcr.svg" alt="" aria-hidden="true" style={{ width: '1.944vw', height: '1.944vw' }} />
              </div>
            </div>
          </div>

          {/* public-02: Статья IncRussia (705px) */}
          <div
            style={{
              width: '48.958vw', // 705px
              display: 'flex',
              flexDirection: 'column',
              gap: '0.833vw', // 12px
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '100%',
                height: '31.806vw', // 458px
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0px'
              }}
            >
              <img 
                src="/assets/images/publications/public-02.avif" 
                alt="" 
                aria-hidden="true"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.278vw', // 4px
                width: '32.431vw', // 467px
                fontFamily: '"Pretendard Variable", sans-serif',
                fontWeight: 600,
                fontSize: '0.833vw', // 12px
                lineHeight: 1.2,
                color: '#0b0e15'
              }}
            >
              <LinkHoverUnderline href="https://incrussia.ru/share/2-goda-bez-uvolnenij/?ysclid=mbnhg7djao374440339">
                ↗ Как получить нулевую текучку за 2 года на примере отдела дизайна?
              </LinkHoverUnderline>
              <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>
                Публикации в медиа, 2024
              </span>
            </div>
          </div>

          {/* Правая колонка Подкастов (348px) */}
          <div
            style={{
              width: '24.167vw', // 348px
              display: 'flex',
              flexDirection: 'column',
              gap: '1.389vw', // 20px
              flexShrink: 0
            }}
          >
            {/* public-03: Подкаст Flowwow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.833vw' /* 12px */, width: '100%' }}>
              <div
                style={{
                  width: '100%',
                  height: '13.681vw', // 197px
                  borderRadius: '2.778vw', // 40px
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img 
                  src="/assets/images/publications/public-03.avif" 
                  alt="" 
                  aria-hidden="true"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  display: 'flex', flexDirection: 'column', gap: '0.278vw',
                  fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', lineHeight: 1.2, color: '#0b0e15'
                }}
              >
                <LinkHoverUnderline href="https://youtu.be/u-G2USaATHo">
                  ↗ Маркировка. Даша Бучакова — Design Director Flowwow
                </LinkHoverUnderline>
                <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Подкасты и видео, 2025</span>
              </div>
            </div>

            {/* public-04: Подкаст BBE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.833vw' /* 12px */, width: '13.681vw' /* 197px */ }}>
              <div
                style={{
                  width: '100%',
                  height: '13.681vw', // 197px
                  borderRadius: '99vw', // 1000px
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img 
                  src="/assets/images/publications/public-04.avif" 
                  alt="" 
                  aria-hidden="true"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  display: 'flex', flexDirection: 'column', gap: '0.278vw', width: '15.278vw', /* 220px */
                  fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', lineHeight: 1.2, color: '#0b0e15'
                }}
              >
                <LinkHoverUnderline href="https://www.youtube.com/watch?v=zmjZCwi9bbw">
                  ↗ BBE х Эйч: профессия граф. дизайнер
                </LinkHoverUnderline>
                <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Подкасты и видео, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div style={{ display: 'flex', gap: '0.694vw', width: '100%', alignItems: 'flex-start' }}>
          
          {/* public-05: Sostav (1062px) */}
          <div
            style={{
              width: '73.75vw', // 1062px
              display: 'flex',
              flexDirection: 'column',
              gap: '0.833vw', // 12px
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '100%',
                height: '37.222vw', // 536px
                borderRadius: '4.167vw', // 60px
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img 
                src="/assets/images/publications/public-05.avif" 
                alt="" 
                aria-hidden="true"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                display: 'flex', flexDirection: 'column', gap: '0.278vw', width: '100%',
                fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', lineHeight: 1.2, color: '#0b0e15'
              }}
            >
              <LinkHoverUnderline href="https://www.sostav.ru/blogs/266601/60113?fbclid=PAZXh0bgNhZW0CMTEAAaePV9nHbWJ5vb-UBHom5rtjpbjkauuedOMk7uP5AHevQgNZAJwasOYgiFDzMQ_aem_IsZSiU3iMtvN-4_-vPHNaQ">
                ↗ Всепроникающий дизайн: как Flowwow интегрирует дизайн в бизнес-модели и образ жизни потребителей
              </LinkHoverUnderline>
              <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Публикации в медиа, 2025</span>
            </div>
          </div>

          {/* public-06: Кейс Ребрендинга iPhone (347px) */}
          <div
            style={{
              width: '24.097vw', // 347px
              display: 'flex',
              flexDirection: 'column',
              gap: '0.833vw', // 12px
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '100%',
                height: '22.917vw', // 330px
                backgroundColor: '#f2f2f2',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '0px' // Как в фигме (нет скруглений на родительском контейнере)
              }}
            >
              <img 
                src="/assets/images/publications/public-06.avif?v=2" 
                alt="" 
                aria-hidden="true"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                display: 'flex', flexDirection: 'column', gap: '0.278vw', width: '100%',
                fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', lineHeight: 1.2, color: '#0b0e15'
              }}
            >
              <LinkHoverUnderline href="https://www.sostav.ru/publication/rebrending-v-e-com-kejs-marketplejsa-flowwow-71836.html">
                ↗ Ребрендинг в e-com: кейс маркетплейса Flowwow
              </LinkHoverUnderline>
              <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Публикации в медиа, 2024</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div
        className="publications-grid-mobile"
        style={{
          display: 'none', // Показывается через @media в globals.css
          flexDirection: 'column',
          gap: 40,
          width: '100%',
        }}
      >
        {/* Публикация 1: Круг наград (public-01) */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '50%', backgroundColor: '#f9f9fa', overflow: 'hidden', position: 'relative' }}>
            <img src="/assets/images/publications/public-awwards-ribbon.avif" alt="" aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '109%', height: '109%', objectFit: 'contain' }} />
            <img src="/assets/images/publications/public-dots.svg" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '15%', left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: 12, color: '#0b0e15', lineHeight: 1.2 }}>Дизайн наград</span>
              <div style={{ display: 'flex', gap: 4 }}>
                <img src="/assets/images/publications/logo-sreda.svg" alt="" aria-hidden="true" style={{ width: 28, height: 28 }} />
                <img src="/assets/images/publications/logo-adcr.svg" alt="" aria-hidden="true" style={{ width: 28, height: 28 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Публикация 2: Статья IncRussia (public-02) */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
            <img src="/assets/images/publications/public-02.avif" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: 12, lineHeight: 1.2, color: '#0b0e15' }}>
            <LinkHoverUnderline href="https://incrussia.ru/share/2-goda-bez-uvolnenij/?ysclid=mbnhg7djao374440339">
              ↗ Как получить нулевую текучку за 2 года на примере отдела дизайна?
            </LinkHoverUnderline>
            <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Публикации в медиа, 2024</span>
          </div>
        </div>

        {/* Публикация 3: Подкаст BBE (public-04) */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ width: '50%', aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
            <img src="/assets/images/publications/public-04.avif" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: 12, lineHeight: 1.2, color: '#0b0e15' }}>
            <LinkHoverUnderline href="https://www.youtube.com/watch?v=zmjZCwi9bbw">
              ↗ BBE х Эйч: профессия граф. дизайнер
            </LinkHoverUnderline>
            <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Подкасты и видео, 2025</span>
          </div>
        </div>

        {/* Публикация 4: Подкаст Flowwow (public-03) */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 40, overflow: 'hidden', position: 'relative' }}>
            <img src="/assets/images/publications/public-03.avif" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: 12, lineHeight: 1.2, color: '#0b0e15' }}>
            <LinkHoverUnderline href="https://youtu.be/u-G2USaATHo">
              ↗ Маркировка. Даша Бучакова — Design Director Flowwow
            </LinkHoverUnderline>
            <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Подкасты и видео, 2025</span>
          </div>
        </div>

        {/* Кнопка раскрытия — остается 2 публикации */}
        {!expanded && (
          <button
            className="publications-btn-expand"
            onClick={() => setExpanded(true)}
            aria-label="Раскрыть ещё 2 публикации"
          >
            <span>Раскрыть ещё 2 публикации</span>
            <img
              src="/assets/images/publications/publications-icon.avif"
              alt=""
              aria-hidden="true"
              style={{ width: 23, height: 14, objectFit: 'contain' }}
            />
          </button>
        )}

        {/* Оставшиеся 2 публикации */}
        {expanded && (
          <>
            {/* Публикация 5: Sostav (public-05) */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 60, overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/images/publications/public-05.avif" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: 12, lineHeight: 1.2, color: '#0b0e15' }}>
                <LinkHoverUnderline href="https://www.sostav.ru/blogs/266601/60113?fbclid=PAZXh0bgNhZW0CMTEAAaePV9nHbWJ5vb-UBHom5rtjpbjkauuedOMk7uP5AHevQgNZAJwasOYgiFDzMQ_aem_IsZSiU3iMtvN-4_-vPHNaQ">
                  ↗ Всепроникающий дизайн: как Flowwow интегрирует дизайн в бизнес-модели и образ жизни потребителей
                </LinkHoverUnderline>
                <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Публикации в медиа, 2025</span>
              </div>
            </div>

            {/* Публикация 6: Кейс Ребрендинга (public-06) */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/images/publications/public-06.avif?v=2" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: 12, lineHeight: 1.2, color: '#0b0e15' }}>
                <LinkHoverUnderline href="https://www.sostav.ru/publication/rebrending-v-e-com-kejs-marketplejsa-flowwow-71836.html">
                  ↗ Ребрендинг в e-com: кейс маркетплейса Flowwow
                </LinkHoverUnderline>
                <span style={{ color: 'rgba(11, 14, 21, 0.4)' }}>Публикации в медиа, 2024</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )

}
