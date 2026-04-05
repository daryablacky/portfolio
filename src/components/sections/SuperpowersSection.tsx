// SuperpowersSection — Figma node 4018:343
// Размер: 100vw × auto (py=100px, gap=80px между header и grid)
// Фон: #ffffff (белый, отличается от grey-bg hero)
// Формула: px / 14.4 = vw
//
// Структура:
//   ┌─ superpowers-section (flex col, py=6.944vw, px=0.694vw, gap=5.556vw)
//   ├── Header Container (w=48.889vw, centered): «Суперсилы» 24px → 1.667vw
//   └── Superpowers Container (flex row, gap=0.694vw)
//       └── 4× Powers Container (w=24.132vw, flex row, gap=0.833vw):
//           ├── Icon (5.556vw × 5.556vw, circle, bg=#f9f9fa)
//           └── Text Container (flex-1, gap=0.278vw)
//               ├── Title (12px → 0.833vw, black-main)
//               └── Description (12px → 0.833vw, black-40)

import Image from 'next/image'

interface Superpower {
  id: string
  number: number
  title: string
  description: string
  imageSrc: string
}

const superpowersData: Superpower[] = [
  {
    id: '1',
    number: 1,
    title: 'Системное видение',
    description: 'Проектирую не отдельные артефакты, а\u00A0целостные дизайн-экосистемы, где бренд, продукт, коммуникации и\u00A0процессы работают как единая архитектура.',
    imageSrc: '/assets/images/superpowers/icons_superpower_1_undefined.webp',
  },
  {
    id: '2',
    number: 2,
    title: 'Структурирование хаоса',
    description: 'Перевожу сложность в\u00A0понятные модели: создаю фреймворки, правила и\u00A0устойчивые процессы, которые масштабируются без\u00A0потери качества.',
    imageSrc: '/assets/images/superpowers/icons_superpower_2_undefined.webp',
  },
  {
    id: '3',
    number: 3,
    title: 'Масштаб без потери смысла',
    description: 'Работаю с\u00A0крупными командами и\u00A0многослойными брендами, удерживая стратегическое ядро и\u00A0усиливая идентичность при\u00A0росте.',
    imageSrc: '/assets/images/superpowers/icons_superpower_3_undefined.webp',
  },
  {
    id: '4',
    number: 4,
    title: 'Стратегическая устойчивость',
    description: 'Принимаю решения в\u00A0нагруженных контекстах, балансируя бизнес-цели, ресурсы и\u00A0визуальную культуру.',
    imageSrc: '/assets/images/superpowers/icons_superpower_4_undefined.webp',
  },
]

const textStyle: React.CSSProperties = {
  fontFamily: '"Pretendard Variable", sans-serif',
  fontWeight: 600,
  lineHeight: 1.2,
}

export default function SuperpowersSection() {
  return (
    <section
      id="superpowers"
      aria-label="Суперсилы"
      className="superpowers-section-mobile"
      style={{
        width: '100vw',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5.556vw',
        paddingTop: '6.944vw',
        paddingBottom: '6.944vw',
        paddingLeft: '0.694vw',
        paddingRight: '0.694vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="superpowers-header-mobile"
        style={{
          width: '48.889vw',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <h2
          className="superpowers-title-mobile"
          style={{
            ...textStyle,
            fontSize: '1.667vw',
            color: '#0b0e15',
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Суперсилы
        </h2>
      </div>

      {/* Superpowers Container */}
      <div
        className="superpowers-grid-mobile"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: '1.389vw',
          columnGap: '0.694vw',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '48.889vw',
          flexShrink: 0,
        }}
      >
        {superpowersData.map(({ id, number, title, description, imageSrc }) => (
          <div
            key={id}
            className="superpowers-card-mobile"
            style={{
              display: 'flex',
              gap: '0.833vw',
              alignItems: 'center',
              width: '24.097vw',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            {/* Icon: 80×80px → 5.556vw, circle bg=#f9f9fa */}
            <div
              className="superpowers-icon-mobile"
              style={{
                width: '5.556vw',      // 80px / 14.4
                height: '5.556vw',
                borderRadius: '69.444vw', // 1000px / 14.4 → effectively full circle
                backgroundColor: '#f9f9fa',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
              aria-hidden="true"
            >
              <Image
                src={imageSrc}
                alt=""
                aria-hidden="true"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Text Container: flex-1, gap=4px → 0.278vw */}
            <div
              className="superpowers-text-mobile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.278vw',        // 4px / 14.4
                flex: '1 0 0',
                minWidth: 0,
              }}
            >
              {/* Title: «N. Название», 12px → 0.833vw, black-main */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                }}
              >
                <span
                  className="superpowers-card-title-mobile"
                  style={{
                    ...textStyle,
                    fontSize: '0.833vw',   // 12px / 14.4
                    color: '#0b0e15',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {number}. {title}
                </span>
              </div>

              {/* Description: 12px → 0.833vw, black-40 */}
              <p
                className="superpowers-card-desc-mobile"
                style={{
                  ...textStyle,
                  fontSize: '0.833vw',   // 12px / 14.4
                  color: 'rgba(11,14,21,0.4)',
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
