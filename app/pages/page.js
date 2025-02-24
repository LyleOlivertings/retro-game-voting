import Link from 'next/link'
import { PixelButton } from '@/components/Retro/PixelButton'

export default function Home() {
  return (
    <div className="retro-container">
      <h1 className="neon-title">~* Game Vote 3000 *~</h1>
      <div className="main-menu">
        <Link href="/vote">
          <PixelButton>Start Voting</PixelButton>
        </Link>
        <Link href="/results">
          <PixelButton>View Results</PixelButton>
        </Link>
      </div>
    </div>
  )
}