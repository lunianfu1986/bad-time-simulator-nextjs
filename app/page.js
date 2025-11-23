'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react';
const sidebarGamesLeft = [
  { id: 'fnf-undertale', title: 'FNF vs Undertale', short: 'FNF' },
  { id: 'geometry-dash', title: 'Geometry Dash Lite', short: 'GD' },
  { id: 'fnaf-sister', title: "Five Nights at Freddy's: Sister Location", short: 'FNAF' },
  { id: 'fnf', title: 'Friday Night Funkin\'', short: 'FNF' },
  { id: 'among-us', title: 'Among Us', short: 'Among Us' },
  { id: 'smash-karts', title: 'Smash Karts', short: 'Karts' }
];

const sidebarGamesRight = [
  { id: 'undertale', title: 'Undertale', short: 'UT' },
  { id: 'bad-monday', title: 'Undergarf: Bad Monday', short: 'Garf' },
  { id: 'sans-fight', title: 'Sans Fight Simulator', short: 'Sans' },
  { id: 'deltarune', title: 'Deltarune Neo Battle', short: 'Neo' },
  { id: 'tomb-mask', title: 'Tomb of the Mask', short: 'Tomb' },
  { id: 'sir-kain', title: 'Sir Kain Battle', short: 'Kain' }
];


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isFullscreen, setIsFullscreen] = useState(false)

  const reloadGame = () => {
    setIsLoading(true)
    const iframe = document.getElementById('gameFrame')
    if (iframe) iframe.src = iframe.src
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSearch = () => {
    if (searchTerm) {
      const el = document.getElementById(searchTerm.toLowerCase())
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const p1 = ['Bone Slam','Bone Wall','Gaster Blasters','Platform Attack','Bone Zone','Spinning Bones','Vertical Blasters','Random Bones','Blue Attack','Double Blasters','Circle Attack','Wave Pattern','Mixed Assault']
  const p2 = ['Strongest Move','Ultimate Blaster','Chaos Bones','Gravity Shift','Final Pattern','Rapid Fire','Impossible Dodge','Death Circle','Last Stand','Megalovania','True Power']

  return (
    <>
      <nav className="top-nav">
        <div className="nav-container">
          <Link href="/" className="logo">💀 Bad Time <span>Simulator</span></Link>
          <div className="nav-links">
            <a onClick={() => scrollTo('game')}>Game</a>
            <a onClick={() => scrollTo('about')}>About</a>
            <a onClick={() => scrollTo('controls')}>Controls</a>
            <a onClick={() => scrollTo('modes')}>Game Modes</a>
            <a onClick={() => scrollTo('attacks')}>Attacks</a>
            <a onClick={() => scrollTo('tips')}>Tips</a>
          </div>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>
        </div>
      </nav>

      <div className="container">
        <div id="game" className="game-wrapper">
          <div className="game-header">
            <h1>💀 Bad Time Simulator</h1>
            <div className="game-controls">
              <button className="control-btn" onClick={() => setIsFullscreen(!isFullscreen)}>
                ⛶ {isFullscreen ? 'Exit' : 'Fullscreen'}
              </button>
              <button className="control-btn" onClick={reloadGame}>
                🔄 Reload
              </button>
            </div>
          </div>
          <div className={isFullscreen ? 'game-container fullscreen' : 'game-container'}>
           {isLoading && (
  <div className="loading">
    <div className="spinner" />
    <p>
      <span>LOADING SANS FIGHT</span>
    </p>
  </div>
)}

            <iframe 
              id="gameFrame" 
              className="game-frame" 
              src="https://bad-time-simulator-compiled-eight.vercel.app/" 
              title="Bad Time Simulator" 
              allow="fullscreen" 
              onLoad={() => setIsLoading(false)} 
            />
            {isFullscreen && (
              <button className="exit-fullscreen-btn" onClick={() => setIsFullscreen(false)}>
                ✕ Exit Fullscreen
              </button>
            )}
          </div>
        </div>

        <div id="about" className="content-section">
          <h2>About Bad Time Simulator</h2>
          <p>Bad Time Simulator requires your agility and control skills to beat Sans - the final boss. You need to keep your heart from being hurt by enemy attacks. You have to use your skills to defeat the legendary Sans with epic power. It is time to prove your ability with unbelievable goals.</p>
          <p>The unique soundtrack of this game is called Bad Time which is derived from Megalovania and Monty on the Run. This music can impress any player with its intense rhythm and energy.</p>
          <div className="info-box warning">
            <h4>⚠️ Difficulty Warning</h4>
            <p>This is probably an extremely difficult game. Control skills and agility are important keys to mastering this game. You should be wary of Sans words and not trust them because Sans can instantly kill you when you are defenseless.</p>
          </div>
          <h3>Who is Sans?</h3>
          <p>The villain in this game is Sans. He is a skeleton character wearing a blue jacket from Undertale. He seems easy-going, laid-back, and friendly. However, he is actually a final boss who possesses terrifying epic powers. This Sans character can create and manipulate bones, use deadly lasers, and possess many other amazing abilities. In this game, Sans tries to destroy you and you have to stay alive.</p>
        </div>

        <div id="controls" className="content-section">
          <h2>How to Play - Game Controls</h2>
          <div className="feature-grid">
            <div className="feature-card"><h4>⬆️⬇️⬅️➡️ Arrow Keys</h4><p>Move your soul (red heart) to dodge Sans deadly attacks</p></div>
            <div className="feature-card"><h4>Z Key</h4><p>Confirm selection / Attack</p></div>
            <div className="feature-card"><h4>X Key</h4><p>Cancel operation</p></div>
            <div className="feature-card"><h4>C Key</h4><p>Open menu</p></div>
          </div>
          <h3>Soul Modes</h3>
          <p>To conquer this game, you have to master the soul mode and your enemy attack. Your soul or heart will appear in two different modes:</p>
          <div className="feature-grid">
            <div className="feature-card"><h4>🔵 Blue Soul Mode</h4><p>Your heart can control gravity. The ability of the heart to move will depend on how long you press the joystick. This allows for precise vertical movements.</p></div>
            <div className="feature-card"><h4>❤️ Red Soul Mode</h4><p>Your red heart has the ability to hover and it is very easy to move in any direction. This is the default mode with free 360-degree movement.</p></div>
          </div>
          <div className="info-box">
            <h4>⚔️ Top 3 Sans Attacks</h4>
            <p><strong>Dragon Skulls:</strong> Summon dragon-shaped skulls that fire deadly lasers</p>
            <p><strong>Psychokinesis:</strong> Controls your soul movement direction</p>
            <p><strong>Bone Attack:</strong> Fires bone projectiles from all directions</p>
          </div>
        </div>

        <div id="modes" className="content-section">
          <h2>Game Modes</h2>
          <p>Participating in this game, you can choose to play in different modes. Let us explore the highlights of each game mode:</p>
          <div className="feature-grid">
            <div className="feature-card"><h4>Normal Mode</h4><p>Complete Sans fight experience with all 24 attacks divided into two parts. This is the full battle as it appears in Undertale.</p></div>
            <div className="feature-card"><h4>Practice Mode</h4><p>Practice specific attack patterns and master each attack rhythm without starting from the beginning every time.</p></div>
            <div className="feature-card"><h4>Endless Mode</h4><p>Challenge your limits and see how long you can survive against endless waves of attacks!</p></div>
            <div className="feature-card"><h4>Single Attack Mode</h4><p>Experience any single attack from the game, even if you cannot overcome the initial attacks in normal mode.</p></div>
            <div className="feature-card"><h4>Custom Attack Mode</h4><p>Create your own attack combinations and patterns! Design your own challenge.</p></div>
          </div>
        </div>

        <div id="attacks" className="content-section">
          <h2>Sans 24 Attacks</h2>
          <p>The attacks in this game all represent Sans attacks. Sans has 24 attacks which means this game has 24 attacks. They are divided into two parts and the attacks in the second part will be more difficult.</p>
          <h3>Part One (13 Attacks)</h3>
          <div className="attack-list">
            {p1.map((a, i) => <div key={i} className="attack-item">{a}</div>)}
          </div>
          <h3>Part Two (11 Harder Attacks)</h3>
          <div className="attack-list">
            {p2.map((a, i) => <div key={i} className="attack-item">{a}</div>)}
          </div>
        </div>

        <div id="tips" className="content-section">
          <h2>Survival Tips and Strategies</h2>
          <h3>Understanding the Battle System</h3>
          <p>Get ready for a dangerous yet exciting battle with Sans. In this skill game, your soul is symbolized by a heart which is being attacked by Sans. Your task is to control your heart to avoid the deadly attacks of this boss. Each time you dodge an attack, he will immediately create other attacks to knock you down. Therefore, it is better to focus on observing and reacting quickly.</p>
          <h3>Health Management</h3>
          <p>In this game, you should notice your character health bar. There are four buttons including Fight, Act, Item, and Mercy on the screen. After you get past Sans attacks, your heart strength can drop significantly. You will eat useful items to restore your strength.</p>
          <div className="feature-grid">
            <div className="feature-card"><h4>🥩 Steak</h4><p>Restores a moderate amount of health</p></div>
            <div className="feature-card"><h4>📖 L.Hero</h4><p>Legendary Hero item, major restoration</p></div>
            <div className="feature-card"><h4>📄 L.Hero Page 1</h4><p>Additional recovery item</p></div>
          </div>
          <h3>How to Win</h3>
          <p>Sans seems to be invincible in this game when possessing incredible power and attack ability. However, in addition to protecting yourself from his attacks, you can still attack Sans. The best time to do your hits is when Sans sleeps. Work hard to survive the special attack and wait until Sans falls asleep. However, you should not move or make any sound because Sans will be awakened and you will have to go through the survival battles again.</p>
          <div className="info-box success">
            <h4>🎬 Game Ending</h4>
            <p>When you defeat Sans, it means you are in the bad time simulator ending. You will leave the room when Sans dies and the heart also disappears. If you want to avoid losing your soul, you have to reset.</p>
          </div>
        </div>
      </div>

     <footer className="footer">
        <div className="footer-links">
          <Link href="/about-us">About Us</Link>
          <Link href="/copyright">Copyright</Link>
          <Link href="/terms">Term Of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </footer>
    </>
  )
}
