import type { Metadata } from 'next'
import { Lexend, Manrope, Caveat } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-lexend',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio · Celes',
  description: 'Product Designer & Nomad — UX/UI, Product Strategy.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${lexend.variable} ${manrope.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
