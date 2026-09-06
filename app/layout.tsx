import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Dakshita Kisan Producer Company Limited | Farmer Producer Company in Pratapgarh, Uttar Pradesh',
  description:
    'Dakshita Kisan Producer Company Limited is an agriculture-focused Farmer Producer Company in Pratapgarh, Uttar Pradesh, working to strengthen farmers through collective farming, collaboration, agricultural opportunities and farmer-led growth.',
  generator: 'v0.app',
  keywords: [
    'Farmer Producer Company',
    'Dakshita Kisan',
    'Pratapgarh',
    'Uttar Pradesh',
    'collective farming',
    'agriculture',
    'FPC',
    'rural agribusiness',
  ],
  openGraph: {
    title: 'Dakshita Kisan Producer Company Limited',
    description:
      'A Farmer Producer Company in Pratapgarh, Uttar Pradesh strengthening farmers through collective farming and farmer-led growth.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f4ec',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
