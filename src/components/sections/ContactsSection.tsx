'use client'

import React from 'react'
import Image from 'next/image'
import Indicator from '@/components/ui/Indicator'

// Заменяет компонент для анимации подчеркивания
const LinkHoverUnderline = ({ href, target, children }: { href: string, target?: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline', // Строго inline
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
      }}
      className="contacts-hover-link"
    >
      <span style={{ display: 'inline', WebkitBoxDecorationBreak: 'clone' }}>
        {children}
      </span>
    </a>
  )
}

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="contacts-section"
      style={{
        width: '100%',
        backgroundColor: '#d2ebff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* CSS Анимация подчеркивания для черного текста (ссылок) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .contacts-hover-link span {
          background-image: linear-gradient(to right, #0b0e15 0%, #0b0e15 100%);
          background-position: 0% 100%;
          background-repeat: no-repeat;
          background-size: 0% 2px;
          transition: background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding-bottom: 2px;
        }
        .contacts-hover-link:hover span {
          background-size: 100% 2px;
        }
        
        /* Управление видимостью секций */
        .contacts-desktop { display: flex; }
        .contacts-mobile { display: none; }
        
        @media (max-width: 768px) {
          .contacts-desktop { display: none !important; }
          .contacts-mobile { display: flex !important; }
          .contacts-section { height: 705px !important; justify-content: flex-start !important; padding-top: 93px; padding-bottom: 10px !important; }
        }
      `}} />

      {/* ──────────────────────────────────────────────────────────────────
          DESKTOP VERSION (1440px logic)
          ────────────────────────────────────────────────────────────────── */}
      <div className="contacts-desktop" style={{ width: '100%', height: '100dvh', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }}>
        {/* ОРНАМЕНТЫ */}
        <div style={{ position: 'absolute', bottom: '-27.778vw', left: 0, width: '100vw', pointerEvents: 'none', zIndex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <img src="/portfolio/assets/images/contacts/circles-contact.svg" alt="" aria-hidden="true" style={{ width: '100vw', height: 'auto' }} />
        </div>

        {/* Центральный контент */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '30.903vw', height: '30.903vw', marginBottom: '3.472vw', zIndex: 2 }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
            <img src="/portfolio/assets/images/contacts/dots-ellipse-contact.svg?v=445" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.778vw', zIndex: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.667vw', width: '100%' }}>
              <div style={{ width: '3.472vw', height: '4.028vw', borderRadius: '1.111vw', overflow: 'hidden', position: 'relative' }}>
                <img src="/portfolio/assets/images/contacts/avatar-photo.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '1.389vw', lineHeight: 1.2, color: '#0b0e15', width: '22.778vw' }}>
                <p style={{ margin: 0 }}>Дарья Бучакова.<br />Design & Creative Director</p>
                <p style={{ margin: 0 }}>(ex дизайн-директор Flowwow), независимый арт-директор, практикующий ментор.</p>
              </div>
            </div>
            <a href="https://t.me/daryablacky" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.556vw', backgroundColor: '#0b0e15', color: '#ffffff', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', padding: '0.556vw 0.833vw', borderRadius: '2.778vw', textDecoration: 'none' }}>
              <Indicator /><span>Обсудить задачу</span>
            </a>
          </div>
        </div>

        {/* Футер-сетка (6 колонок) */}
        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.389vw', padding: '0 0.694vw', marginBottom: '0.694vw', zIndex: 2 }}>
          {[
            { title: 'Суперсилы', href: '#superpowers', items: ['Системное видение', 'Структурирование хаос', 'Масштаб без потери смысла', 'Стратегическая устойчивость'] },
            { title: 'Работы', href: '#works', items: ['Ребрендинг Flowwow', 'Брендинг MEZHO', '3D Айдентика Flowwow', 'Визуальная айдентика Skuratov', 'Визуальная айдентика Flowwow Market', 'Коллекция POS материалов Flowwow'] },
            { title: 'Опыт', href: '#experience', items: ['Flowwow', 'Independent', 'Skuratov Coffee'] },
            { title: 'Как со мной работают', href: '#services', items: ['Консалтинг', 'Арт-дирекшн / проекты', 'Лекторство'] },
            { title: 'Публичный след', href: '#publications', items: ['↗ Как получить нулевую текучку...', '↗ Маркировка. Даша Бучакова', '↗ BBE х Эйч: профессия...', '↗ Всепроникающий дизайн: как...', '↗ Ребрендинг в e-com: кейс...'] },
          ].map((col, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', color: '#0b0e15' }}>
                <LinkHoverUnderline href={col.href}>{col.title}</LinkHoverUnderline>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', color: 'rgba(11, 14, 21, 0.4)' }}>
                {col.items.map((item, i) => <span key={i} style={{ whiteSpace: 'nowrap' }}>{item}</span>)}
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', color: '#0b0e15' }}>
              <div><LinkHoverUnderline href="/cv.pdf">CV</LinkHoverUnderline></div>
              <div><LinkHoverUnderline href="http://linkedin.com/in/darya-buchakova-1aaa01212" target="_blank">LinkedIn</LinkHoverUnderline></div>
              <div><LinkHoverUnderline href="https://t.me/baguette_psd" target="_blank">ТГК</LinkHoverUnderline></div>
              <div><LinkHoverUnderline href="mailto:daryachrnv@gmail.com">daryachrnv@gmail.com</LinkHoverUnderline></div>
            </div>
            <div style={{ marginTop: 'auto', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '0.833vw', color: 'rgba(11, 14, 21, 0.4)' }}>©2026 Daria Buchakova</div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────
          MOBILE VERSION (360px logic)
          ────────────────────────────────────────────────────────────────── */}
      <div className="contacts-mobile" style={{ width: '100%', height: '705px', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        {/* Фоновые круги для мобилки */}
        <div style={{ position: 'absolute', top: '-200.9px', left: '50%', transform: 'translateX(-50%)', width: '812px', height: '840px', pointerEvents: 'none', zIndex: 1 }}>
          <img src="/portfolio/assets/images/contacts/circles-contact.svg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        {/* Центральный блок профиля */}
        <div style={{ position: 'relative', width: 'calc(100vw - 20px)', aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <img src="/portfolio/assets/images/contacts/dots-ellipse-contact.svg?v=445" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', zIndex: 3 }}>
            <div style={{ width: '50px', height: '58px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src="/portfolio/assets/images/contacts/avatar-photo.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '308px', textAlign: 'center', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '18px', lineHeight: 1.2, color: '#0b0e15' }}>
              <p style={{ margin: 0 }}>Дарья Бучакова.<br />Design & Creative Director</p>
              <p style={{ margin: 0, fontSize: '18px' }}>(ex дизайн-директор Flowwow), независимый арт-директор, практикующий ментор.</p>
            </div>
            {/* Кнопка — Копия из HeroSection (mobile logic) */}
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
                backgroundColor: '#0b0e15',
                color: '#ffffff',
                fontFamily: '"Pretendard Variable", sans-serif',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background-color 0.2s ease',
                position: 'relative',
                zIndex: 4,
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a2f3e')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0b0e15')}
            >
              <Indicator className="indicator-mobile" />
              <span>Обсудить задачу</span>
            </a>
          </div>
        </div>

        {/* Две колонки ссылок (по макету) */}
        <div style={{ width: '100%', display: 'flex', padding: '0 10px', marginTop: '40px', gap: '20px', zIndex: 3 }}>
          {/* Левая колонка */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '12px', color: '#0b0e15' }}>
            <div><LinkHoverUnderline href="#superpowers">Суперсилы</LinkHoverUnderline></div>
            <div><LinkHoverUnderline href="#works">Работы</LinkHoverUnderline></div>
            <div><LinkHoverUnderline href="#experience">Опыт</LinkHoverUnderline></div>
            <div><LinkHoverUnderline href="#services">Как со мной работают</LinkHoverUnderline></div>
            <div><LinkHoverUnderline href="#publications">Публичный след</LinkHoverUnderline></div>
          </div>
          {/* Правая колонка */}
          <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: '"Pretendard Variable", sans-serif', fontWeight: 600, fontSize: '12px', color: '#0b0e15' }}>
            <div><LinkHoverUnderline href="/cv.pdf">CV</LinkHoverUnderline></div>
            <div><LinkHoverUnderline href="http://linkedin.com/in/darya-buchakova-1aaa01212" target="_blank">LinkedIn</LinkHoverUnderline></div>
            <div><LinkHoverUnderline href="https://t.me/baguette_psd" target="_blank">ТГК</LinkHoverUnderline></div>
            <div style={{ wordBreak: 'break-all' }}><LinkHoverUnderline href="mailto:daryachrnv@gmail.com">daryachrnv@gmail.com</LinkHoverUnderline></div>
            <div style={{ marginTop: 'auto', opacity: 1, color: 'rgba(11, 14, 21, 0.4)' }}>©2026 Daria Buchakova</div>
          </div>
        </div>
      </div>
    </section>
  )
}
