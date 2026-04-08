'use client'

// Flowwow Section — Figma node 4008:277
// Размер в макете: 1440px ширина -> конвертируем в vw (px / 14.4)
//
// Структура:
// - py: 100px (6.944vw), px: 10px (0.694vw)
// - gap: 80px (5.556vw)
// Header: "Контекст масштаба", width 704px (48.889vw)
// Main Content: flex row, gap 10px (0.694vw)
//   Left Section: flex 1 (705px), контент прижат вправо (w=347px)
//   Right Section: w 705px (48.958vw), Видео автоплей

import Image from 'next/image'

export default function FlowwowSection() {
  return (
    <section
      id="flowwow"
      aria-label="Опыт во Flowwow"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Внутренний контейнер: maxWidth замораживается на 2560px */}
      <div
        className="flowwow-section-mobile"
        style={{
          width: '100%',
          maxWidth: 'calc(100 * var(--1vw))',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 'calc(6.944 * var(--1vw))',
          paddingBottom: 'calc(6.944 * var(--1vw))',
          paddingLeft: 'calc(0.694 * var(--1vw))',
          paddingRight: 'calc(0.694 * var(--1vw))',
          gap: 'calc(5.556 * var(--1vw))',
          boxSizing: 'border-box',
        }}
      >
        {/* Header Container */}
        <div
          className="flowwow-header-mobile"
          style={{
            width: 'calc(48.889 * var(--1vw))',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <h2
            className="flowwow-title-mobile"
            style={{
              margin: 0,
              fontFamily: '"Pretendard Variable", sans-serif',
              fontWeight: 600,
              fontSize: 'calc(1.667 * var(--1vw))',
              lineHeight: 1.2,
              color: '#0b0e15',
              whiteSpace: 'nowrap',
            }}
          >
            Контекст масштаба
          </h2>
        </div>

        {/* Main Content Container: flex row, 2 колонки */}
        <div
          className="flowwow-content-mobile"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: 'calc(0.694 * var(--1vw))',
          }}
        >
          {/* Left Section */}
          <div
            className="flowwow-left-mobile"
            style={{
              flex: '1 1 0',
              display: 'flex',
              justifyContent: 'flex-end',
              minHeight: '1px',
            }}
          >
            {/* Image and Text Container */}
            <div
              className="flowwow-image-text-mobile"
              style={{
                width: 'calc(24.097 * var(--1vw))',
                display: 'flex',
                flexDirection: 'column',
                gap: 'calc(0.833 * var(--1vw))',
              }}
            >
              {/* Circle Container */}
              <div
                className="flowwow-circle-mobile"
                style={{
                  width: 'calc(24.097 * var(--1vw))',
                  height: 'calc(22.778 * var(--1vw))',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'calc(69.444 * var(--1vw))',
                  backgroundColor: '#f9f9fa',
                  flexShrink: 0,
                }}
              >
                {/* Разделенные ассеты: медаль и круги (патерн) */}
                <div
                  className="flowwow-circle-content-mobile"
                  style={{ position: 'absolute', inset: 0 }}
                >
                  {/* Medal (нижний слой) */}
                  <Image
                    src="./assets/images/flowwow/medalcontentwrapper.avif"
                    alt=""
                    aria-hidden="true"
                    fill
                    className="flowwow-medal-image-mobile"
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    sizes="(max-width: 1440px) 25vw, 347px"
                  />
                  {/* Circles Pattern (верхний слой над медалью) */}
                  <Image
                    src="./assets/images/flowwow/circlescontentwrapper.avif"
                    alt=""
                    aria-hidden="true"
                    fill
                    className="flowwow-circles-image-mobile"
                    style={{ objectFit: 'cover', zIndex: 1 }}
                    sizes="(max-width: 1440px) 25vw, 347px"
                  />
                </div>

                {/* Текст поверх круга */}
                <div
                  className="flowwow-circle-text-mobile"
                  style={{
                    position: 'absolute',
                    top: 'calc(19.306 * var(--1vw))',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    fontFamily: '"Pretendard Variable", sans-serif',
                    fontWeight: 600,
                    fontSize: 'calc(0.833 * var(--1vw))',
                    lineHeight: 1.2,
                    color: '#0b0e15',
                    zIndex: 2,
                  }}
                >
                  лет работы
                  <br />
                  во Flowwow
                </div>
              </div>

              {/* Текстовое описание под кругом */}
              <div
                className="flowwow-description-mobile"
                style={{
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: 'calc(0.833 * var(--1vw))',
                  lineHeight: 1.2,
                  color: '#0b0e15',
                  width: '100%',
                }}
              >
                5 лет я работала внутри одного большого бренда — Flowwow. От айдентики и{"\u00A0"}визуальных решений до{"\u00A0"}дизайн-систем, процессов и{"\u00A0"}команд.<span className="flowwow-desc-break-mobile"><br /></span> Это был опыт, где{"\u00A0"}дизайн перестаёт быть функцией и{"\u00A0"}становится инфраструктурой.
              </div>
            </div>
          </div>

          {/* Right Section (Видео) */}
          <div
            className="flowwow-right-mobile"
            style={{
              width: 'calc(48.958 * var(--1vw))',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            {/* Slide Container */}
            <div
              className="flowwow-video-mobile"
              style={{
                width: '100%',
                height: 'calc(27.431 * var(--1vw))',
                position: 'relative',
                borderRadius: '0',
                overflow: 'hidden',
                backgroundColor: '#f9f9fa',
              }}
            >
              {/* 
                Видео автоматическое, без кнопок, зацикленное.
                playsInline важно для корректной работы автовоспроизведения на iOS.
                pointerEvents: none предотвращает паузу по клику.
              */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="flowwow-video-element-mobile"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 'calc(49.306 * var(--1vw))',    // 710px / 14.4
                  height: 'calc(27.778 * var(--1vw))',   // 400px / 14.4
                  transform: 'translate(-50%, -50%)',
                  objectFit: 'cover',
                  pointerEvents: 'none',
                }}
                src="./assets/video/flowwow-section/_reel_demo2026____FIN_LQ_TG_LN_EDIT_TITLES_no_audio.mp4"
              />
              {/* Оверлей 3% поверх видео */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(11, 14, 21, 0.03)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
