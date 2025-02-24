// Remove 'use client' if present at the top
import { Press_Start_2P } from 'next/font/google'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start'
})

// Metadata should only be exported from server components
export const metadata = {
  title: 'Retro Game Vote',
  description: 'Vote for your favorite retro games!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pressStart.variable}>
      <body className="retro-container">
        {children}
        <div className="crt-effect"></div>
      </body>
    </html>
  )
}