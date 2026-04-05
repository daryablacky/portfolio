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
      className="services-section-mobile"
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
      {/* Заголовок (704px по центру, текст внутри прижат к левому краю, x=368px) */}
      <h2
        className="services-header-mobile"
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
        Как со мной работают
      </h2>

      {/* Контейнер карточек услуг (1063px, прижат к линии 367px) */}
      <div
        style={{
          width: '100%',     // Занимает всю ширину родителя (с учетом паддингов 10px)
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <div
          className="services-list-mobile"
          style={{
            marginLeft: '24.792vw',
            width: '73.819vw',
            display: 'flex',
            gap: '0.694vw',
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
                gap: '0.694vw', // 10px / 14.4 (отступ от текста до картинки)
              }}
            >
              {/* Шапка услуги */}
              <div
                className="service-header-mobile"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.278vw', // 4px / 14.4
                  height: '5.139vw', // 74px / 14.4
                  fontFamily: '"Pretendard Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.833vw', // 12px / 14.4
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
                height="17.361vw"
                className="service-slider-mobile-height"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
