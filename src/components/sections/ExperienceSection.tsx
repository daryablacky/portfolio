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
        Построила дизайн-функцию (30+ специалистов)
        <br />как стратегический актив: 5 направлений, интеграция
        <br />в продукт, маркетинг и PR, переход от сервисной роли
        <br />к партнёрской модели принятия решений. Снизила зависимость от агентств, усилила in-house экспертизу
        <br />и управляемость качества и сроков.
      </>
    ),
    descRight: (
      <>
        Построила управляемую операционную модель дизайна, синхронизированную с темпом роста компании. Руководила комплексным ребрендингом Flowwow:
        <br />
        3× ADCR Gold, 7 наград «Среда»
        , рост консистентности
        <br />и узнаваемости на рынках РФ, СНГ и Global. Сформировала сильную командную культуру: eNPS 75+, текучка ~5%
        <br />
        при росте команды с 1 до 30 человек.
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
        Развиваю бренды малого и среднего бизнеса как независимый арт-директор и стратег
        : создаю айдентики
        <br />и визуальные системы с нуля, собираю команды
        <br />и управляю продакшеном. Проектирую масштабируемые бренд-экосистемы — от логотипа и упаковки до digital-коммуникаций и кросс-канального арт-дирекшена.
      </>
    ),
    descRight: (
      <>
        Работаю напрямую с собственниками и агентствами, совмещая креативное лидерство и управленческую функцию. Консультирую руководителей digital-индустрии (от тимлидов до C-level): выстраивание процессов, переход в лидерскую роль, стратегическая устойчивость.
        <br />
        Провожу вебинары и публичные выступления; автор главы и эксперт книги ЭЙЧ о современном управлении
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
        Отвечала за весь визуальный контур бренда —
        <br />от наружной рекламы и офлайн-среды до digital-каналов
        <br />и внутренних коммуникаций. Выступала точкой сборки
        <br />для маркетинга, HR и основателя, обеспечивая целостность и консистентность визуальных решений.
      </>
    ),
    descRight: (
      <>
        Развивала и масштабировала фирменный стиль: поддержка брендбука, создание новых графических систем в рамках ДНК бренда. Проектировала digital-коммуникации: сайт, лендинги, баннеры, email-кампании
        <br />и презентационные материалы. Формировала визуальную среду бренда офлайн и внутри команды — от POS и витрин до корпоративных гайдбуков и обучающих материалов.
      </>
    )
  }
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section-mobile"
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
      {/* Заголовок */}
      <h2
        className="experience-header-mobile"
        style={{
          width: '48.889vw',
          textAlign: 'left',
          fontFamily: '"Pretendard Variable", sans-serif',
          fontWeight: 600,
          fontSize: '1.667vw',
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
          width: '98.611vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '4.167vw',
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
              gap: '0.694vw',
              width: '73.819vw',
              fontFamily: '"Pretendard Variable", sans-serif',
              fontWeight: 600,
              fontSize: '0.833vw',
              lineHeight: 1.2,
            }}
          >
            {/* Number */}
            <div
              style={{
                width: '24.167vw', // 348px / 14.4
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
                width: '48.958vw', // 705px / 14.4
                display: 'flex',
                flexDirection: 'column',
                gap: '1.389vw', // 20px / 14.4
                flexShrink: 0,
              }}
            >
              {/* Title Container */}
              <div
                className="experience-title-mobile"
                style={{
                  width: '24.097vw', // 347px / 14.4
                  display: 'flex',
                  gap: '0.694vw', // 10px / 14.4
                  alignItems: 'flex-start',
                  whiteSpace: 'nowrap',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.278vw' /* 4px */ }}>
                  <span style={{ color: '#0b0e15' }}>{exp.position}</span>
                  <span style={{ color: 'rgba(11,14,21,0.4)' }}>{exp.company}</span>
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
                  gap: '0.694vw', // 10px / 14.4
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
          left: '0vw',
          top: '3.611vw',
          width: '12.292vw',
          height: '7.986vw',
          overflow: 'hidden',
          zIndex: 5,
        }}>
          <Image src="/assets/images/experience/exp-image-01.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
        </div>

        {/* exp-image-02 - 115x115, x=1305, y=0, rounded-30 */}
        <div style={{
          position: 'absolute',
          left: '90.625vw', // 1305 / 14.4
          top: '0vw',
          width: '7.986vw',
          height: '7.986vw',
          borderRadius: '2.083vw', // 30px
          overflow: 'hidden',
          zIndex: 5,
        }}>
          <Image src="/assets/images/experience/exp-image-02.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
        </div>

        {/* exp-image-03 - 150x98, x=1073, y=262, rounded-1000 */}
        <div style={{
          position: 'absolute',
          left: '74.514vw', // 1073 / 14.4
          top: '18.194vw',  // 262 / 14.4
          width: '10.417vw',
          height: '6.806vw',
          borderRadius: '99vw', // 1000px -> круглая капсула
          overflow: 'hidden',
          zIndex: 5,
        }}>
          <Image src="/assets/images/experience/exp-image-03.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
        </div>

        {/* exp-image-04 - 150x98, x=148, y=471.72, rounded-30 */}
        <div style={{
          position: 'absolute',
          left: '10.278vw', // 148 / 14.4
          top: '32.758vw',  // 471.72 / 14.4
          width: '10.417vw',
          height: '6.806vw',
          borderRadius: '2.083vw', // 30px
          overflow: 'hidden',
          zIndex: 5,
        }}>
          <Image src="/assets/images/experience/exp-image-04.avif" alt="" aria-hidden="true" fill style={{ objectFit: 'cover' }} />
        </div>
        </div> {/* /experience-photos-mobile */}
      </div>
    </section>

  )
}
