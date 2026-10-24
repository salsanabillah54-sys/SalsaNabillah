import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Salsa Nabillah | Industrial Engineering Graduate',
  description:
    'Portfolio Salsa Nabillah — Lulusan Teknik Industri dengan minat pada Quality Control, Supply Chain, dan Process Improvement.',
  icons: { icon: '/media/profile/pas-photo.webp' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
