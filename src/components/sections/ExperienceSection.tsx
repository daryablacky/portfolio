import React from 'react'
import Image from 'next/image'

const experiences = [
  {
    num: "01.",
    position: "Design Director",
    company: "Flowwow",
    dates: "(2021 — 2026)",
    descLeft: (
      <>
        Построила дизайн-функцию (30+ специалистов){' '}
        <br className="mobile-hidden-br" />как стратегический актив: 5 направлений, интеграция{' '}
        <br className="mobile-hidden-br" />в&nbsp;продукт, маркетинг и&nbsp;PR, переход от&nbsp;сервисной роли{' '}
        <br className="mobile-hidden-br" />к&nbsp;партнёрской модели принятия решений. Снизила зависимость от&nbsp;агентств, усилила in-house экспертизу{' '}
        <br className="mobile-hidden-br" />и&nbsp;управляемость качества и&nbsp;сроков.
      </>
    ),
    descRight: (
      <>
        Построила управляемую операционную модель дизайна, синхронизированную с&nbsp;темпом роста компании. Руководила комплексным ребрендингом Flowwow:{' '}
        <br className="mobile-hidden-br" />
        3× ADCR Gold, 7 наград «Среда», рост консистентности{' '}
        <br className="mobile-hidden-br" />и&nbsp;узнаваемости на рынках РФ, СНГ и&nbsp;Global. Сформировала сильную командную культуру: eNPS 75+, текучка ~5%{' '}
        <br className="mobile-hidden-br" />
        при росте команды с&nbsp;1 до 30 человек.
      </>
    )
  },
  {
    num: "02.",
    position: "Art Direction / Consulting",
    company: "Independent",
    dates: "(2016 — now)",
    descLeft: (
      <>
        Развиваю бренды малого и&nbsp;среднего бизнеса как независимый арт-директор и&nbsp;стратег: создаю айдентики{' '}
        <br className="mobile-hidden-br" />и&nbsp;визуальные системы с&nbsp;нуля, собираю команды{' '}
        <br className="mobile-hidden-br" />и&nbsp;управляю продакшеном. Проектирую масштабируемые бренд-экосистемы — от&nbsp;логотипа и&nbsp;упаковки до digital-коммуникаций и&nbsp;кросс-канального арт-дирекшена.
      </>
    ),
    descRight: (
      <>
        Работаю напрямую с&nbsp;собственниками и&nbsp;агентствами, совмещая креативное лидерство и&nbsp;управленческую функцию. Консультирую руководителей digital-индустрии (от&nbsp;тимлидов до C-level): выстраивание процессов, переход в&nbsp;лидерскую роль, стратегическая устойчивость.{' '}
        <br className="mobile-hidden-br" />
        Провожу вебинары и&nbsp;публичные выступления; автор главы и&nbsp;эксперт книги ЭЙЧ о&nbsp;современном управлении
      </>
    )
  },
  {
    num: "03.",
    position: "Brand Designer",
    company: "Skuratov Coffee",
    dates: "(2019 — 2021)",
    descLeft: (
      <>
        Отвечала за весь визуальный контур бренда —{' '}
        <br className="mobile-hidden-br" />от&nbsp;наружной рекламы и&nbsp;офлайн-среды до digital-каналов{' '}
        <br className="mobile-hidden-br" />и&nbsp;внутренних коммуникаций. Выступала точкой сборки{' '}
        <br className="mobile-hidden-br" />для маркетинга, HR и&nbsp;основателя, обеспечивая целостность и&nbsp;консистентность визуальных решений.
      </>
    ),
    descRight: (
      <>
        Развивала и&nbsp;масштабировала фирменный стиль: поддержка брендбука, создание новых графических систем в&nbsp;рамках ДНК бренда. Проектировала digital-коммуникации: сайт, лендинги, баннеры, email-кампании{' '}
        <br className="mobile-hidden-br" />и&nbsp;презентационные материалы. Формировала визуальную среду бренда офлайн и&nbsp;внутри команды — от&nbsp;POS и&nbsp;витрин до корпоративных гайдбуков и&nbsp;обучающих материалов.
      </>
    )
  }
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Опыт работы"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Внутренний контейнер: maxWidth замораживается на 2560px */}
      <div
        className="experience-section-mobile"
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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Заголовок */}
        <h2
          className="experience-header-mobile"
          style={{
            width: 'calc(48.889 * var(--1vw))',
            textAlign: 'left',
            fontFamily: '"Pretendard Variable", sans-serif',
            fontWeight: 600,
            fontSize: 'calc(1.667 * var(--1vw))',
            lineHeight: 1.2,
            color: '#0b0e15',
            margin: 0,
          }}
        >
          Опыт работы
        </h2>

        {/* Контейнер карточек опыта */}
        <div
          className="experience-cards-mobile"
          style={{
            position: 'relative',
            width: 'calc(98.611 * var(--1vw))',
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(4.167 * var(--1vw))',
            alignItems: 'flex-start',
          }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="experience-card-mobile"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'calc(0.694 * var(--1vw))',
                width: 'calc(73.819 * var(--1vw))',
                fontFamily: '"Pretendard Variable", sans-serif',
                fontWeight: 600,
                fontSize: 'calc(0.833 * var(--1vw))',
                lineHeight: 1.2,
              }}
            >
              {/* Number DESKTOP */}
              <div
                className="experience-num-desktop"
                style={{
                  width: 'calc(24.167 * var(--1vw))', // 348px / 14.4
                  color: '#0b0e15',
                  flexShrink: 0,
                  // Включаем Stylistic Alternates
                  fontFeatureSettings: '"salt" 1',
                }}
              >
                {exp.num}
              </div>

              {/* Info Container */}
              <div
                className="experience-info-mobile"
                style={{
                  width: 'calc(48.958 * var(--1vw))', // 705px / 14.4
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'calc(1.389 * var(--1vw))', // 20px / 14.4
                  flexShrink: 0,
                }}
              >
                {/* Title Container */}
                <div
                  className="experience-title-mobile"
                  style={{
                    width: 'calc(24.097 * var(--1vw))', // 347px / 14.4
                    display: 'flex',
                    gap: 'calc(0.694 * var(--1vw))', // 10px / 14.4
                    alignItems: 'flex-start',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div className="experience-title-left-mobile" style={{ display: 'flex', gap: 'inherit', alignItems: 'flex-start' }}>
                    <div
                      className="experience-num-mobile"
                      style={{
                        display: 'none', // Hidden on desktop
                        color: '#0b0e15',
                        fontFeatureSettings: '"salt" 1',
                      }}
                    >
                      {exp.num}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(0.278 * var(--1vw))' /* 4px */ }}>
                      <span style={{ color: '#0b0e15' }}>{exp.position}</span>
                      <span style={{ color: 'rgba(11,14,21,0.4)' }}>{exp.company}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      color: '#ee160b',
                      // Включаем Stylistic Alternates
                      fontFeatureSettings: '"salt" 1',
                    }}
                  >
                    {exp.dates}
                  </div>
                </div>

                {/* Description Container */}
                <div
                  className="experience-desc-mobile"
                  style={{
                    width: '100%',
                    display: 'flex',
                    gap: 'calc(0.694 * var(--1vw))', // 10px / 14.4
                    color: '#0b0e15',
                  }}
                >
                  <div style={{ flex: '1 1 0' }}>{exp.descLeft}</div>
                  <div style={{ flex: '1 1 0' }}>{exp.descRight}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Фото (абсолютно позиционированые поверх сетки) */}
          <div className="experience-photos-mobile" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          {/* exp-image-01 (Chat bubble/Flower) - 177x115, x=0, y=52 */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: 'calc(3.611 * var(--1vw))',
            width: 'calc(12.292 * var(--1vw))',
            height: 'calc(7.986 * var(--1vw))',
            overflow: 'hidden',
            zIndex: 5,
          }}>
            <Image src="./assets/images/experience/exp-image-01.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
          </div>

          {/* exp-image-02 - 115x115, x=1305, y=0, rounded-30 */}
          <div style={{
            position: 'absolute',
            left: 'calc(90.625 * var(--1vw))', // 1305 / 14.4
            top: '0',
            width: 'calc(7.986 * var(--1vw))',
            height: 'calc(7.986 * var(--1vw))',
            borderRadius: 'calc(2.083 * var(--1vw))', // 30px
            overflow: 'hidden',
            zIndex: 5,
          }}>
            <Image src="./assets/images/experience/exp-image-02.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
          </div>

          {/* exp-image-03 - 150x98, x=1073, y=262, rounded-1000 */}
          <div style={{
            position: 'absolute',
            left: 'calc(74.514 * var(--1vw))', // 1073 / 14.4
            top: 'calc(18.194 * var(--1vw))',  // 262 / 14.4
            width: 'calc(10.417 * var(--1vw))',
            height: 'calc(6.806 * var(--1vw))',
            borderRadius: '99vw', // 1000px -> круглая капсула
            overflow: 'hidden',
            zIndex: 5,
          }}>
            <Image src="./assets/images/experience/exp-image-03.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
          </div>

          {/* exp-image-04 - 150x98, x=148, y=471.72, rounded-30 */}
          <div style={{
            position: 'absolute',
            left: 'calc(10.278 * var(--1vw))', // 148 / 14.4
            top: 'calc(32.758 * var(--1vw))',  // 471.72 / 14.4
            width: 'calc(10.417 * var(--1vw))',
            height: 'calc(6.806 * var(--1vw))',
            borderRadius: 'calc(2.083 * var(--1vw))', // 30px
            overflow: 'hidden',
            zIndex: 5,
          }}>
            <Image src="./assets/images/experience/exp-image-04.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
          </div>
          </div> {/* /experience-photos-mobile */}
        </div>
      </div>
    </section>

  )
}
