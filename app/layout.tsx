import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

import Navbar2 from './divs/navbar2'
import Footer from './divs/footer'
import ThemeProvider from '@/components/ui/theme-provider'

const inter = Inter({ 
  //weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'], 
  variable: '--font-inter',
})

const garamond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-garamond',
})

const ibm = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm',
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
      <body className={`${inter.variable} ${garamond.variable} ${ibm.variable}`}>
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
        <script async type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script async noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </body>
    </html>
  )
}
