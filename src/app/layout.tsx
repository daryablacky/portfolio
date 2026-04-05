import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Дарья Бучакова — Design & Creative Director (ex Flowwow)',
  description: 'Строю масштабируемые дизайн-системы и сильные команды, которые усиливают бренды и бизнес.',
  icons: {
    icon: './favicon/avatar-photo-32.png',
    apple: './favicon/avatar-photo-192.png',
  },
  openGraph: {
    title: 'Дарья Бучакова — Design & Creative Director (ex Flowwow)',
    description: 'Строю масштабируемые дизайн-системы и сильные команды, которые усиливают бренды и бизнес.',
    type: 'website',
    images: [
      {
        url: './opengraph/opengraph-1200x630.avif',
        width: 1200,
        height: 630,
        alt: 'Дарья Бучакова — Design & Creative Director',
      },
    ],
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
