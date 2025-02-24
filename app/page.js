// pages/index.js
"use client" ;

import { PixelButton } from '../components/Retro/PixelButton'
import { FaStar, FaSkull, FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  
  // Fake visitor counter (replace with real one later)
  const [visitorCount] = useState(Math.floor(Math.random() * 10000) + 1337)

  return (
    <div className="crt-screen">
      <div className="retro-container index-page">
        <div className="blinking-border"></div>
        
        <header className="header-banner">
          <img 
            src="/under-construction.gif" 
            alt="Under Construction" 
            className="construction-gif"
          />
          <h1 className="neon-title">
            <span className="star"><FaStar /></span>
            WELCOME TO GAME BONE ZONE 3000
            <span className="star"><FaStar /></span>
          </h1>
          <div className="visitor-counter">
            <FaSkull className="skull-icon" />
            <span>You are visitor #{visitorCount}</span>
            <FaSkull className="skull-icon" />
          </div>
        </header>

        <main className="main-content">
          <div className="left-column">
            <div className="webring-section">
              <h2>**** ADVERTISEMENT SORRY NEED TO PAY BILLS ****</h2>
              <img 
                src="/webring.gif" 
                alt="Webring" 
                className="webring-gif"
              />
              <p>[ <a href="#">Previous 5 Sites</a> | <a href="#">Next 5 Sites</a> ]</p>
            </div>
            
            <div className="geo-city">
              <h3>Cool Links:</h3>
              <ul>
                <li>🆒 <a href="#">My Blog</a></li>
                <li>🔥 <a href="#">Hot Pics</a></li>
                <li>🎮 <a href="#">GameZ</a></li>
              </ul>
            </div>
          </div>

          <div className="center-content">
            <div className="welcome-message">
              <marquee behavior="scroll" direction="left">
                *** NEW: VOTE FOR YOUR THIS WEEKENDS GAME ***
              </marquee>
              
              <div className="ascii-art">
                {` 
                   _____
                  /     \\
                 | () () |
                  \\  ^  /
                   |||||
                   |||||
                `}
              </div>

             <PixelButton onClick={() => router.push('/results')}>
                <FaArrowRight /> ENTER SITE
              </PixelButton>
            </div>
          </div>

          <div className="right-column">
            <div className="news-feed">
              <h2>LATEST NEWS</h2>
              <div className="news-item">
                <p>[08/25/94]</p>
                <p>🌟 Site launched! 🌟</p>
              </div>
              <div className="news-item">
                <p>[08/26/94]</p>
                <p>Added 3 new games!</p>
              </div>
            </div>

            <div className="ad-banner">
              <img 
                src="/geocities-banner.gif" 
                alt="Free Web Hosting" 
              />
            </div>
          </div>
        </main>

        <footer className="retro-footer">
          <marquee>
            BEST VIEWED IN NETSCAPE NAVIGATOR 3.0 • 800X600 RESOLUTION • 
            IE 5.5+ • GET FREE EMAIL @HOTMAIL.COM • 
            THIS SITE USES FRAMES AND JAVA APPLETS •
          </marquee>
        </footer>
      </div>
    </div>
  )
}