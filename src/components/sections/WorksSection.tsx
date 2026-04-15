'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ProjectSlider, { AssetType } from '@/components/ui/ProjectSlider'

// Данные для проектов
const worksData = {
  work01: [
    { src: './assets/images/works/work-01/work-01-01.avif', type: 'image' },
    { src: './assets/images/works/work-01/work-01-02.mp4?v=2', type: 'video' },
    { src: './assets/images/works/work-01/work-01-03.avif', type: 'image' },
    { src: './assets/images/works/work-01/work-01-04.avif', type: 'image' },
    { src: './assets/images/works/work-01/work-01-05.mp4', type: 'video' },
    { src: './assets/images/works/work-01/work-01-06.avif', type: 'image' },
    { src: './assets/images/works/work-01/work-01-07.avif', type: 'image' },
  ] as AssetType[],
  work02: Array.from({ length: 6 }, (_, i) => ({
    src: `./assets/images/works/work-02/work-02-0${i + 1}.avif`,
    type: 'image',
  })) as AssetType[],
  work03: Array.from({ length: 5 }, (_, i) => ({
    src: `./assets/images/works/work-03/work-03-0${i + 1}.avif`,
    type: 'image',
  })) as AssetType[],
  work04: Array.from({ length: 7 }, (_, i) => ({
    src: `./assets/images/works/work-04/work-04-0${i + 1}.avif`,
    type: 'image',
  })) as AssetType[],
  work05: Array.from({ length: 5 }, (_, i) => ({
    src: `./assets/images/works/work-05/work-05-0${i + 1}.avif`,
    type: 'image',
  })) as AssetType[],
  work06: Array.from({ length: 7 }, (_, i) => ({
    src: `./assets/images/works/work-06/work-06-0${i + 1}.avif`,
    type: 'image',
  })) as AssetType[],
  work07: Array.from({ length: 6 }, (_, i) => ({
    src: `./assets/images/works/work-07/work-07-0${i + 1}.avif`,
    type: 'image',
  })) as AssetType[],
}

// Mobile card component — полная ширина
function MobileWorkCard({
  assets,
  title,
  desc,
  height = '56vw',
  borderRadius = '0px',
  hasAward = false,
}: {
  assets: AssetType[]
  title: string
  desc: string
  height?: string
  borderRadius?: string
  hasAward?: boolean
}) {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <ProjectSlider assets={assets} width="100%" height={height} borderRadius={borderRadius} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{
          fontFamily: '"Pretendard Variable", sans-serif',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.2,
          color: '#0b0e15',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}>
          {hasAward && (
            <Image
              src="./assets/icons/ribbon-s.svg"
              alt=""
              aria-hidden="true"
              width={7}
              height={14}
            />
          )}
          <span>{title}</span>
        </div>
        <div style={{
          fontFamily: '"Pretendard Variable", sans-serif',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.2,
          color: 'rgba(11,14,21,0.4)',
        }}>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default function WorksSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      id="works"
      aria-label="Портфолио и работы"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Внутренний контейнер: maxWidth замораживается на 2560px */}
      <div
        className="works-section-mobile"
        style={{
          width: '100%',
          maxWidth: 'calc(100 * var(--1vw))',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 'calc(6.944 * var(--1vw))',    // 100px / 14.4
          paddingLeft: 'calc(0.694 * var(--1vw))',   // 10px / 14.4
          paddingRight: 'calc(0.694 * var(--1vw))',  // 10px / 14.4
          gap: 'calc(5.556 * var(--1vw))',           // 80px / 14.4
          boxSizing: 'border-box',
        }}
      >
        {/* Заголовок секции */}
        <div
          className="works-header-mobile"
          style={{
            width: 'calc(48.889 * var(--1vw))',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: '"Pretendard Variable", sans-serif',
              fontWeight: 600,
              fontSize: 'calc(1.667 * var(--1vw))',  // 24px / 14.4
              lineHeight: 1.2,
              color: '#0b0e15',
              whiteSpace: 'nowrap',
            }}
          >
            Selected Works.
            <br />
            20 — 26
          </h2>
        </div>

        {/* Desktop grid layout (скрыт на mobile через .works-grid-mobile) */}
        <div
          className="works-grid-desktop"
          style={{
            width: 'calc(98.611 * var(--1vw))',
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(1.389 * var(--1vw))', // 20px / 14.4
            justifyContent: 'flex-start',
          }}
        >
          {/* ROW 1: 1420px */}
          <div style={{ display: 'flex', gap: 'calc(0.694 * var(--1vw))', width: '100%' }}>
            {/* Левая колонка */}
            <div
              style={{
                flex: '1 1 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '0',
              }}
            >
              {/* WORK 01 */}
              <div style={{ width: 'calc(48.958 * var(--1vw))', display: 'flex', flexDirection: 'column', gap: 'calc(0.833 * var(--1vw))' }}>
                <ProjectSlider assets={worksData.work01} width="calc(48.958 * var(--1vw))" height="calc(36.25 * var(--1vw))" />
                <div style={textContainerStyles}>
                  <div style={titleStyles}>
                    <img src="./assets/icons/ribbon-s.svg" alt="" aria-hidden="true" style={{ width: 'calc(0.486 * var(--1vw))', height: 'calc(0.972 * var(--1vw))' }} />
                    <span>Ребрендинг Flowwow</span>
                  </div>
                  <div style={descStyles}>Арт-дирекшен w/ Shuka Brand Bureau, 2024</div>
                </div>
              </div>

              {/* WORK 02 */}
              <div style={{ width: 'calc(15.833 * var(--1vw))', display: 'flex', flexDirection: 'column', gap: 'calc(0.833 * var(--1vw))' }}>
                <ProjectSlider assets={worksData.work02} width="calc(15.833 * var(--1vw))" height="calc(17.361 * var(--1vw))" borderRadius="calc(4.167 * var(--1vw))" />
                <div style={textContainerStyles}>
                  <div style={titleStyles}>Брендинг MEZHO</div>
                  <div style={descStyles}>Арт-дирекшен, дизайн. 2020</div>
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 'calc(0.833 * var(--1vw))' }}>
              <ProjectSlider assets={worksData.work03} width="calc(48.958 * var(--1vw))" height="calc(56.667 * var(--1vw))" borderRadius="calc(27.778 * var(--1vw))" />
              <div style={{ display: 'flex', gap: 'calc(0.694 * var(--1vw))', width: '100%' }}>
                <div style={{ width: 'calc(24.132 * var(--1vw))', flexShrink: 0 }} />
                <div style={textContainerStyles}>
                  <div style={titleStyles}>
                    <img src="./assets/icons/ribbon-s.svg" alt="" aria-hidden="true" style={{ width: 'calc(0.486 * var(--1vw))', height: 'calc(0.972 * var(--1vw))' }} />
                    <span>3D Айдентика Flowwow</span>
                  </div>
                  <div style={descStyles}>Арт-дирекшен. 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: 1420px */}
          <div style={{ display: 'flex', gap: 'calc(0.694 * var(--1vw))', width: '100%' }}>
            <div style={{ width: 'calc(82.083 * var(--1vw))', display: 'flex', flexDirection: 'column', gap: 'calc(0.833 * var(--1vw))' }}>
              <ProjectSlider assets={worksData.work04} width="calc(82.083 * var(--1vw))" height="calc(35.417 * var(--1vw))" />
              <div style={textContainerStyles}>
                <div style={titleStyles}>Визуальная айдентика Flowwow Market</div>
                <div style={descStyles}>Арт-дирекшен. 2024</div>
              </div>
            </div>

            <div style={{ width: 'calc(15.833 * var(--1vw))', display: 'flex', flexDirection: 'column', gap: 'calc(0.833 * var(--1vw))' }}>
              <ProjectSlider assets={worksData.work05} width="calc(15.833 * var(--1vw))" height="calc(23.542 * var(--1vw))" borderRadius="calc(4.167 * var(--1vw))" />
              <div style={textContainerStyles}>
                <div style={titleStyles}>Визуальная айдентика Skuratov</div>
                <div style={descStyles}>Арт-дирекшен. 2020</div>
              </div>
            </div>
          </div>

          {/* ROW 3: 1420px */}
          <div style={{ display: 'flex', gap: 'calc(0.694 * var(--1vw))', width: '100%' }}>
            <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 'calc(0.833 * var(--1vw))' }}>
              <ProjectSlider assets={worksData.work06} width="calc(48.958 * var(--1vw))" height="calc(24.931 * var(--1vw))" borderRadius="calc(27.778 * var(--1vw))" />
              <div style={{ display: 'flex', gap: 'calc(0.694 * var(--1vw))', width: '100%' }}>
                <div style={{ width: 'calc(15.833 * var(--1vw))', flexShrink: 0 }} />
                <div style={{ width: 'calc(23.958 * var(--1vw))', ...textContainerStyles }}>
                  <div style={titleStyles}>Коллекция POS материалов Flowwow</div>
                  <div style={descStyles}>Арт-дирекшен. 2024 — 2025</div>
                </div>
              </div>
            </div>

            <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 'calc(0.833 * var(--1vw))' }}>
              <ProjectSlider assets={worksData.work07} width="calc(48.958 * var(--1vw))" height="calc(24.931 * var(--1vw))" />
              <div style={textContainerStyles}>
                <div style={titleStyles}>3D моделинг Flowwow</div>
                <div style={descStyles}>Арт-дирекшен. 2023</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div
          className="works-grid-mobile"
          style={{
            display: 'none', // Показывается через @media в globals.css
            flexDirection: 'column',
            gap: 40,
            width: '100%',
          }}
        >
          <MobileWorkCard
            assets={worksData.work01}
            title="Ребрендинг Flowwow"
            desc="Арт-дирекшен. 2024"
            height="74vw"
            hasAward
          />
          <MobileWorkCard
            assets={worksData.work02}
            title="Брендинг MEZHO"
            desc="Арт-дирекшен, дизайн. 2020"
            height="110vw"
            borderRadius="60px"
          />
          <MobileWorkCard
            assets={worksData.work03}
            title="3D Айдентика Flowwow"
            desc="Арт-дирекшен. 2025"
            height="116vw"
            borderRadius="400px"
            hasAward
          />

          {/* Оставшиеся 4 проекта — раскрываются по кнопке */}
          {expanded && (
            <>
              <MobileWorkCard
                assets={worksData.work04}
                title="Визуальная айдентика Flowwow Market"
                desc="Арт-дирекшен. 2024"
                height="43vw"
              />
              <MobileWorkCard
                assets={worksData.work05}
                title="Визуальная айдентика Skuratov"
                desc="Арт-дирекшен. 2020"
                height="149vw"
                borderRadius="60px"
              />
              <MobileWorkCard
                assets={worksData.work06}
                title="Коллекция POS материалов Flowwow"
                desc="Арт-дирекшен. 2024 — 2025"
                height="51vw"
                borderRadius="400px"
              />
              <MobileWorkCard
                assets={worksData.work07}
                title="3D моделинг Flowwow"
                desc="Арт-дирекшен. 2023"
                height="51vw"
              />
            </>
          )}

          {/* Кнопка раскрытия — исчезает после нажатия */}
          {!expanded && (
            <button
              className="works-btn-expand"
              onClick={() => setExpanded(true)}
              aria-label="Раскрыть ещё 4 проекта"
            >
              <span>Раскрыть ещё 4 проекта</span>
              <Image
                src="./assets/images/works/works-icon.avif"
                alt=""
                className="works-icon"
                aria-hidden="true"
                width={23}
                height={14}
                style={{ objectFit: 'contain' }}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

// Стандартные стили текста
const textContainerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 'calc(0.278 * var(--1vw))', // 4px / 14.4
}

const titleStyles = {
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 600,
  fontSize: 'calc(0.833 * var(--1vw))', // 12px / 14.4
  lineHeight: 1.2,
  color: '#0b0e15',
  display: 'flex',
  alignItems: 'center',
  gap: 'calc(0.278 * var(--1vw))',
}

const descStyles = {
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 600,
  fontSize: 'calc(0.833 * var(--1vw))', // 12px / 14.4
  lineHeight: 1.2,
  color: 'rgba(11,14,21,0.4)',
}
