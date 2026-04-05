import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static Export для GitHub Pages
  output: 'export',

  // Trailing slash нужен для корректных путей при статическом экспорте
  trailingSlash: true,

  // Отключаем оптимизацию изображений (не работает при static export)
  images: {
    unoptimized: true,
  },

  // basePath — раскомментировать ТОЛЬКО если деплоим в /repo-name (не root-домен)
  // basePath: '/dbw-portfolio',
}

export default nextConfig
