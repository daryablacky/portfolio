import React from 'react'
import ServiceSlider from '@/components/ui/ServiceSlider'

const services = [
  {
    title: "1. Консалтинг",
    description: (
      <>
        Стратегический дизайн-консалтинг для бизнеса
        <br />и руководителей: рост, процессы, структура функции
        <br />и управленческая устойчивость.
      </>
    ),
    images: [
      "./assets/images/services/consulting/consulting-01.avif",
      "./assets/images/services/consulting/consulting-02.avif",
      "./assets/images/services/consulting/consulting-03.avif",
      "./assets/images/services/consulting/consulting-04.avif",
      "./assets/images/services/consulting/consulting-05.avif",
      "./assets/images/services/consulting/consulting-06.avif",
    ]
  },
  {
    title: "2. Арт-дирекшн / проекты",
    description: (
      <>Независимый арт-директор: концепции, визуальные системы и участие в проектах на этапе идеи и реализации.</>
    ),
    images: [
      "./assets/images/services/art-direction/art-direction-01.avif",
      "./assets/images/services/art-direction/art-direction-02.avif",
      "./assets/images/services/art-direction/art-direction-03.avif",
    ]
  },
  {
    title: "3. Лекторство",
    description: (
      <>Приглашённый спикер и эксперт образовательных программ и конференций: дизайн, лидерство, развитие креативных команд. Среди проектов, Bang Bang Education, МИФ курсы, Логомашина.</>
    ),
    images: [
      "./assets/images/services/lecturing/lecturing-01.avif",
      "./assets/images/services/lecturing/lecturing-02.avif",
      "./assets/images/services/lecturing/lecturing-03.avif",
    ]
  }
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Услуги"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Внутренний контейнер: maxWidth замораживается на 2560px */}
      <div
        className="services-section-mobile"
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
        {/* Заголовок (704px по центру, текст внутри прижат к левому краю, x=368px) */}
        <h2
          className="services-header-mobile"
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
          Как со мной работают
        </h2>

        {/* Контейнер карточек услуг (1063px, прижат к линии 367px) */}
        <div
          style={{
            width: 'calc(98.611 * var(--1vw))',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <div
            className="services-list-mobile"
            style={{
              marginLeft: 'calc(24.792 * var(--1vw))',
              width: 'calc(73.819 * var(--1vw))',
              display: 'flex',
              gap: 'calc(0.694 * var(--1vw))',
              alignItems: 'flex-start',
            }}
          >
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="service-card-mobile"
                style={{
                  flex: '1 1 0', // Каждая колонка делит пространство поровну (~24.14vw)
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'calc(0.694 * var(--1vw))', // 10px / 14.4 (отступ от текста до картинки)
                }}
              >
                {/* Шапка услуги */}
                <div
                  className="service-header-mobile"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'calc(0.278 * var(--1vw))', // 4px / 14.4
                    height: 'calc(5.139 * var(--1vw))', // 74px / 14.4
                    fontFamily: '"Pretendard Variable", sans-serif',
                    fontWeight: 600,
                    fontSize: 'calc(0.833 * var(--1vw))', // 12px / 14.4
                    lineHeight: 1.2,
                  }}
                >
                  <div 
                    className="service-title-mobile"
                    style={{ color: '#0b0e15' }}
                  >
                    {srv.title}
                  </div>
                  <div 
                    className="service-desc-mobile"
                    style={{ color: 'rgba(11, 14, 21, 0.4)' }}
                  >
                    {srv.description}
                  </div>
                </div>

                {/* Картинка (Слайдер) */}
                <ServiceSlider
                  images={srv.images}
                  width="100%"
                  height="calc(17.361 * var(--1vw))"
                  className="service-slider-mobile-height"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
