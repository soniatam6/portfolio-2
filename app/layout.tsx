import type { Metadata } from 'next'
import { Raleway, Josefin_Sans } from 'next/font/google'
import './globals.css'

import Navbar from './divs/navbar'
import Navbar2 from './divs/navbar2'
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
  title: 'Sonia Tam',
  description: 'Sonia Tam',
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
        <Navbar2 />
          <main>
            {children}
          </main>
        <Footer />
        </ThemeProvider>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </body>
    </html>
  )
}
