import { useState } from 'react'
import { PixelButton } from '../../components/Retro'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const games = [
  { id: 1, name: 'LEAGUE', year: 1993 },
  { id: 2, name: 'CALL OF DUTY 3D', year: 1992 },
  { id: 3, name: 'Dead Island 2D', year: 1996 }
]

export default function VotePage() {
  const [selectedGame, setSelectedGame] = useState(null)
  const router = useRouter()

  const handleVote = async () => {
    if (!selectedGame) return
    
    const { error } = await supabase
      .from('votes')
      .insert({ game_id: selectedGame })

    if (error) {
      console.error('Vote failed:', error)
      alert('Radical voting error! Try again!')
    } else {
      window.location.href = '/results'
    }
  }

  return (
    <div className="retro-container">

        

      <h1 className="retro-title">~* Game Vote 3000 *~</h1>
      
      <div className="game-list">
        {games.map(game => (
          <div 
            key={game.id}
            className={`game-card ${selectedGame === game.id ? 'selected' : ''}`}
            onClick={() => setSelectedGame(game.id)}
          >
            <span className="pixel-text">{game.name}</span>
            <span className="year">{game.year}</span>
          </div>
        ))}
      </div>

      <PixelButton onClick={handleVote}>
        CAST VOTE ({Math.floor(Math.random() * 100)}% COOL)
      </PixelButton>
        <PixelButton onClick={() => router.push('/results')}>
            VIEW RESULTS
        </PixelButton>

      <div className="construction-banner">
        <marquee>UNDER CONSTRUCTION... What you think I am? Mark ZuckerBerg?? Auj I can't make jas websites whole time</marquee>
      </div>
    </div>
  )
}