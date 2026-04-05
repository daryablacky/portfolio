// Data: Services / How I Work
// Design: services-section — 3 services-item

export interface Service {
  id: string
  number: string
  description: string
  images: string[]
}

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    description: 'TODO: описание услуги 1',
    images: ['/images/works/service-1.jpg'],
  },
  {
    id: '2',
    number: '02',
    description: 'TODO: описание услуги 2',
    images: ['/images/works/service-2.jpg'],
  },
  {
    id: '3',
    number: '03',
    description: 'TODO: описание услуги 3',
    images: ['/images/works/service-3.jpg'],
  },
]
