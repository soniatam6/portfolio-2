import type { Metadata } from 'next'
import { Raleway, Josefin_Sans } from 'next/font/google'
import './globals.css'

import Navbar from './divs/navbar'
import Footer from './divs/footer'
import ThemeProvider from '@/components/ui/theme-provider'

const raleway = Raleway({ 
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'], 
  variable: '--font-raleway',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
})

export const metadata: Metadata = {
  title: 'Sonia Tam Portfolio',
  description: 'Sonia Tam portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${raleway.variable} ${josefin.variable}`}>
        <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
          >
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
