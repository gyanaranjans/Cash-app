import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import localFont from 'next/font/local'
import Header from './components/Header'
import Footer from './components/Footer'

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
})

const agrandir = localFont({
  src: './assets/fonts/Agrandir-WideBold.ttf',
  display: 'swap',
  variable: '--font-agrandir',
})

export const metadata: Metadata = {
  title: 'Cash App ',
  description: 'Mercor Frotend Coding Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mulish.variable} ${agrandir.variable}`}>
      <body className={agrandir.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
