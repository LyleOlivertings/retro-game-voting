import { Press_Start_2P } from 'next/font/google'
import './styles.css'

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${pressStart.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}