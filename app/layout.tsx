import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

import Navbar from './divs/navbar'
import Footer from './divs/footer'
import ThemeProvider from '@/components/ui/theme-provider'

const inter = Josefin_Sans({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
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
