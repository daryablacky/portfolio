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
          fontSize: 12,
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
          fontSize: 12,
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
      className="works-section-mobile"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '6.944vw',    // 100px / 14.4
        paddingLeft: '0.694vw',   // 10px / 14.4
        paddingRight: '0.694vw',  // 10px / 14.4
        gap: '5.556vw',           // 80px / 14.4
        boxSizing: 'border-box',
      }}
    >
      {/* Заголовок секции */}
      <div
        className="works-header-mobile"
        style={{
          width: '48.889vw',
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
            fontSize: '1.667vw',  // 24px / 14.4
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
          width: '98.611vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.389vw', // 20px / 14.4
          justifyContent: 'flex-start',
        }}
      >
        {/* ROW 1: 1420px */}
        <div style={{ display: 'flex', gap: '0.694vw', width: '100%' }}>
          {/* Левая колонка */}
          <div
            style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0vw',
            }}
          >
            {/* WORK 01 */}
            <div style={{ width: '48.958vw', display: 'flex', flexDirection: 'column', gap: '0.833vw' }}>
              <ProjectSlider assets={worksData.work01} width="48.958vw" height="36.25vw" />
              <div style={textContainerStyles}>
                <div style={titleStyles}>
                  <img src="./assets/icons/ribbon-s.svg" alt="" aria-hidden="true" style={{ width: '0.486vw', height: '0.972vw' }} />
                  <span>Ребрендинг Flowwow</span>
                </div>
                <div style={descStyles}>Арт-дирекшен. 2024</div>
              </div>
            </div>

            {/* WORK 02 */}
            <div style={{ width: '15.833vw', display: 'flex', flexDirection: 'column', gap: '0.833vw' }}>
              <ProjectSlider assets={worksData.work02} width="15.833vw" height="17.361vw" borderRadius="4.167vw" />
              <div style={textContainerStyles}>
                <div style={titleStyles}>Брендинг MEZHO</div>
                <div style={descStyles}>Арт-дирекшен, дизайн. 2020</div>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '0.833vw' }}>
            <ProjectSlider assets={worksData.work03} width="48.958vw" height="56.667vw" borderRadius="27.778vw" />
            <div style={{ display: 'flex', gap: '0.694vw', width: '100%' }}>
              <div style={{ width: '24.132vw', flexShrink: 0 }} />
              <div style={textContainerStyles}>
                <div style={titleStyles}>
                  <img src="./assets/icons/ribbon-s.svg" alt="" aria-hidden="true" style={{ width: '0.486vw', height: '0.972vw' }} />
                  <span>3D Айдентика Flowwow</span>
                </div>
                <div style={descStyles}>Арт-дирекшен. 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 1420px */}
        <div style={{ display: 'flex', gap: '0.694vw', width: '100%' }}>
          <div style={{ width: '82.083vw', display: 'flex', flexDirection: 'column', gap: '0.833vw' }}>
            <ProjectSlider assets={worksData.work04} width="82.083vw" height="35.417vw" />
            <div style={textContainerStyles}>
              <div style={titleStyles}>Визуальная айдентика Flowwow Market</div>
              <div style={descStyles}>Арт-дирекшен. 2024</div>
            </div>
          </div>

          <div style={{ width: '15.833vw', display: 'flex', flexDirection: 'column', gap: '0.833vw' }}>
            <ProjectSlider assets={worksData.work05} width="15.833vw" height="23.542vw" borderRadius="4.167vw" />
            <div style={textContainerStyles}>
              <div style={titleStyles}>Визуальная айдентика Skuratov</div>
              <div style={descStyles}>Арт-дирекшен. 2020</div>
            </div>
          </div>
        </div>

        {/* ROW 3: 1420px */}
        <div style={{ display: 'flex', gap: '0.694vw', width: '100%' }}>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '0.833vw' }}>
            <ProjectSlider assets={worksData.work06} width="48.958vw" height="24.931vw" borderRadius="27.778vw" />
            <div style={{ display: 'flex', gap: '0.694vw', width: '100%' }}>
              <div style={{ width: '15.833vw', flexShrink: 0 }} />
              <div style={{ width: '23.958vw', ...textContainerStyles }}>
                <div style={titleStyles}>Коллекция POS материалов Flowwow</div>
                <div style={descStyles}>Арт-дирекшен. 2024 — 2025</div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '0.833vw' }}>
            <ProjectSlider assets={worksData.work07} width="48.958vw" height="24.931vw" />
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
    </section>
  )
}

// Стандартные стили текста
const textContainerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.278vw', // 4px / 14.4
}

const titleStyles = {
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 600,
  fontSize: '0.833vw', // 12px / 14.4
  lineHeight: 1.2,
  color: '#0b0e15',
  display: 'flex',
  alignItems: 'center',
  gap: '0.278vw',
}

const descStyles = {
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 600,
  fontSize: '0.833vw', // 12px / 14.4
  lineHeight: 1.2,
  color: 'rgba(11,14,21,0.4)',
}
