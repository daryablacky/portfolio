import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Дарья Бучакова — Design & Creative Director (ex Flowwow)',
  description: 'Строю масштабируемые дизайн-системы и сильные команды, которые усиливают бренды и бизнес.',
  icons: {
    icon: 'https://daryabuchakova.com/favicon/avatar-photo-32.png',
    apple: 'https://daryabuchakova.com/favicon/avatar-photo-192.png',
  },
  metadataBase: new URL('https://daryabuchakova.com'),
  openGraph: {
    title: 'Дарья Бучакова — Design & Creative Director (ex Flowwow)',
    description: 'Строю масштабируемые дизайн-системы и сильные команды, которые усиливают бренды и бизнес.',
    url: 'https://daryabuchakova.com',
    siteName: 'Дарья Бучакова',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://daryabuchakova.com/opengraph/opengraph-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Дарья Бучакова — Design & Creative Director',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дарья Бучакова — Design & Creative Director (ex Flowwow)',
    description: 'Строю масштабируемые дизайн-системы и сильные команды, которые усиливают бренды и бизнес.',
    images: ['https://daryabuchakova.com/opengraph/opengraph-1200x630.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-white-main text-black-main antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
