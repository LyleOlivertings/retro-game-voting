"use client" ;

import { PixelButton } from '/components/Retro/PixelButton'
import { useEffect, useState } from 'react'
import { supabase } from '/lib/supabase'
import Link from 'next/link'

export default function ResultsPage() {

    const [results, setResults] = useState([])

    useEffect(() => {
      const loadResults = async () => {
        const { data } = await supabase
          .from('games')
          .select(`
            id,
            name,
            votes:votes_count (count)
          `)
          .order('id', { ascending: true })
  
        setResults(data || [])
      }
  
      loadResults()
    }, [])
    return (
        <div className="retro-container">
          <h1 className="retro-title">~* LIVE RESULTS *~</h1>
          
          <div className="results-grid">
            {results.map(game => (
              <div key={game.id} className="result-bar">
                <div className="game-name">{game.name}</div>
                <div className="vote-count">
                  {game.votes[0]?.count || 0}
                  <div className="vote-bar" style={{ 
                    width: `${((game.votes[0]?.count || 0) * 10)}%` 
                  }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="navigation-buttons">
        <Link href="/">
          <PixelButton>Back to Home</PixelButton>
        </Link>
      </div>
    
          <div className="guest-counter">
            <marquee>Total votes: {results.reduce((sum, g) => sum + (g.votes[0]?.count || 0), 0)} ***NGL IDK HOW TO MAKE THIS WORK I'LL WYS THE VOTES LATER</marquee>
          </div>
        </div>
      )
    }