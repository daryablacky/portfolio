'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Indicator from '@/components/ui/Indicator'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Блокировать скролл страницы при открытом меню.
  // Не используем overflow:hidden на body — это вызывает layout-сдвиг
  // (белые полосы сверху/снизу). Вместо этого фиксируем страницу через
  // position:fixed + top:-scrollY, что freeze-ит её без визуальных артефактов.
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`)
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
        ? parseInt(document.body.style.top || '0') * -1
        : 0
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, scrollY)
      }
    }
    return () => {
      // Cleanup при размонтировании
      const scrollY = document.body.style.top
        ? parseInt(document.body.style.top || '0') * -1
        : 0
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const navLinks = [
    { label: 'Суперсилы', href: '#superpowers' },
    { label: 'Работы', href: '#works' },
    { label: 'Опыт', href: '#experience' },
    { label: 'Как со мной работают', href: '#services' },
    { label: 'Публичный след', href: '#publications' },
    { label: 'Контакты', href: '#contacts' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <>
      {/* ── Burger Button (видна только на mobile) ── */}
      <button
        className={`burger-btn${isOpen ? ' open' : ''}`}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        onClick={() => setIsOpen(v => !v)}
      >
        <div className="burger-icon" aria-hidden="true">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </button>

      {/* ── Menu Overlay (видна только на mobile через CSS) ── */}
      <div className={`mobile-menu-overlay${isOpen ? ' open' : ''}`}>
        {/* Backdrop (прозрачный или затемненный) */}
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer (правая панель 70% ширины) */}
        <div className="mobile-menu-drawer">
          {/* Контент drawer */}
          <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', padding: '24px 10px' }}>

            {/* Группа 1: Основные ссылки */}
            <nav
              aria-label="Мобильная навигация"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 80,
              }}
            >
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: '"Pretendard Variable", sans-serif',
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: 1.2,
                    color: '#0b0e15',
                    padding: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Группа 2: CV / LinkedIn */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 80,
              }}
            >
              <a
                href="https://drive.google.com/file/d/1hAI5M7KumNeFMXH4ChrfKJVkGG6aQW0g/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 1.2,
                  color: '#0b0e15',
                  textDecoration: 'none',
                }}
              >
                CV
              </a>
              <a
                href="http://linkedin.com/in/darya-buchakova-1aaa01212"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 1.2,
                  color: '#0b0e15',
                  textDecoration: 'none',
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://t.me/baguette_psd"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 1.2,
                  color: '#0b0e15',
                  textDecoration: 'none',
                }}
              >
                ТГК
              </a>
              <a
                href="mailto:daryachrnv@gmail.com"
                style={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 1.2,
                  color: '#0b0e15',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}
              >
                daryachrnv@gmail.com
              </a>
            </div>

            {/* Группа 3: Связаться */}
            <a
              href="https://t.me/daryablacky"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"Pretendard Variable", sans-serif',
                fontWeight: 600,
                fontSize: 18,
                lineHeight: 1.2,
                color: '#0b0e15',
                textDecoration: 'none',
              }}
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
