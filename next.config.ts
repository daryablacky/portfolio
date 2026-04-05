import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static Export для GitHub Pages
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',

  // Trailing slash нужен для корректных путей при статическом экспорте
  trailingSlash: true,

  // Отключаем оптимизацию изображений (не работает при static export)
  images: {
    unoptimized: true,
  },
}

export default nextConfig
