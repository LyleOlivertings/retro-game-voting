import { Press_Start_2P } from 'next/font/google'
import './global.css'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start'
})

export const metadata = {
  title: 'Retro Game Vote',
  description: 'Vote for your favorite classic games!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pressStart.variable} crt-screen`}>
      <body className="retro-container">
        {children}
        <div className="construction-banner">
          <marquee>UNDER CONSTRUCTION... Best viewed in Netscape Navigator 3.0+</marquee>
        </div>
      </body>
    </html>
  )
}