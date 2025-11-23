// app/page.js
'use client'

import Link from 'next/link'
import { useState } from 'react'

// 所有游戏配置：只要改这里就能加新游戏
const games = {
  sans: {
    id: 'sans',
    title: 'Bad Time Simulator',
    short: 'Sans',
    src: 'https://bad-time-simulator-compiled-eight.vercel.app/',
    about: [
      'Bad Time Simulator is a browser game inspired by the iconic Sans boss fight from Undertale.',
      'You control a tiny SOUL and dodge waves of bones and Gaster Blasters in a fast-paced bullet-hell battle.'
    ],
    controls: [
      'Move your SOUL with the arrow keys or WASD.',
      'Confirm / advance text with Z or Enter.',
      'Cancel / back with X or Shift.',
      'Stay calm and focus on reading the attack patterns.'
    ],
    modes: [
      'Classic Sans fight with original attack patterns.',
      'Practice-style experience: no overworld, pure boss battle.',
      'Perfect for players who want to train their dodging skills.'
    ],
    attacks: [
      'Bone Slam – horizontal bone lines slam from above and below.',
      'Bone Wall – tall walls of bones rush from left and right.',
      'Gaster Blasters – lasers that lock onto your position and fire.',
      'Platform Bones – jump between platforms while bones chase you.',
      'Circular Patterns – spinning attacks that test tight movement.',
      'Mixed Assault – everything at once near the end of the fight.'
    ],
    tips: [
      'Focus more on patterns than reaction speed – most attacks are repeatable.',
      'Memorize the opening sequence so you can reach the late phase more consistently.',
      'During Gaster Blaster attacks, move early, not late – anticipate where the beams will cross.',
      'If you get stuck on one pattern, practice that section by replaying from the beginning a few times.'
    ]
  },
  trio: {
    id: 'trio',
    title: 'Bad Time Trio Simulator',
    short: 'Trio',
    src: 'https://lunianfu1986.github.io/bad-time-trio-simulator/',
    about: [
      'Bad Time Trio Simulator is a fan-made boss fight where multiple characters team up against you.',
      'Compared with the classic Sans fight, patterns are denser and the battlefield is often more chaotic.'
    ],
    controls: [
      'Move your SOUL with the arrow keys or WASD.',
      'Confirm dialogs or options with Z or Enter.',
      'Use X or Shift to cancel / go back in menus.',
      'Stay flexible – attacks may come from multiple directions at once.'
    ],
    modes: [
      'Multi-phase boss fight with several characters.',
      'Attacks often mix different shapes and speeds.',
      'Recommended for players who already passed classic Sans.'
    ],
    attacks: [
      'Dense Bone Patterns – multiple layers of bones moving at different speeds.',
      'Multi-direction Blasters – lasers firing from several corners.',
      'Combined Phases – quick transitions between different attack styles.',
      'Tight Space Dodging – smaller safe zones that require precise control.'
    ],
    tips: [
      'Try to read the overall flow of each attack instead of watching only your SOUL.',
      'Don’t panic when projectiles overlap – the safe spot is usually consistent each time.',
      'Learn which attacks are “rush patterns” and which ones let you rest for a moment.',
      'If a phase feels impossible, watch it a few times and look for repeating safe paths.'
    ]
  },
  fnf: {
    id: 'fnf',
    title: 'FNF Undertale Web',
    short: 'FNF',
    src: 'https://lunianfu1986.github.io/FNF-Undertale-Web/',
    about: [
      'FNF Undertale Web is a rhythm game crossover combining Friday Night Funkin\' with Undertale characters and music.',
      'Instead of dodging bullets, you hit notes in time with the music to win rap battles against Undertale-inspired opponents.'
    ],
    controls: [
      'Use the arrow keys to hit notes (↑ ↓ ← →).',
      'On some keyboards you can also use WASD.',
      'Press notes when the arrows overlap the target area.',
      'Keeping a high accuracy will increase your score and keep you alive.'
    ],
    modes: [
      'Story-style battles against Undertale-themed opponents.',
      'Free play for replaying your favorite songs.',
      'Multiple difficulty levels depending on the chart.'
    ],
    attacks: [
      'Fast Note Streams – long chains of arrows in quick succession.',
      'Cross Patterns – alternating left/right or up/down notes.',
      'Trills & Jacks – repeated hits on the same direction.',
      'Hold Notes – arrows you must keep pressed for a short time.'
    ],
    tips: [
      'Start with easier songs or lower difficulty to learn the patterns.',
      'Look slightly ahead of the beat so you can prepare for upcoming notes.',
      'If you miss a section, don’t panic – focus on getting the next few notes perfect.',
      'Play with sound on and stable frame rate; rhythm is much easier when the audio is clear.'
    ]
  }
}

// 左右两侧要显示哪些游戏（可以自己改顺序）
const sidebarGamesLeft = [games.sans, games.trio]
const sidebarGamesRight = [games.fnf]

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isFullscreen, setIsFullscreen] = useState(false)

  // 当前选中的游戏
  const [currentGameId, setCurrentGameId] = useState('sans')
  const currentGame = games[currentGameId]

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

  // 点击左右游戏图标
  const handleSelectGame = (gameId) => {
    setCurrentGameId(gameId)
    setIsLoading(true)
  }

  return (
    <>
      <nav className="top-nav">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span>💀</span> <span>Bad Time Simulator</span>
          </Link>
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
              placeholder="Search section (about / tips...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* 游戏区域 */}
        <div id="game" className="game-wrapper">
          <div className="game-header">
            <h1>💀 {currentGame.title}</h1>
            <div className="game-controls">
              <button
                className="control-btn"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                ⛶ {isFullscreen ? 'Exit' : 'Fullscreen'}
              </button>
              <button className="control-btn" onClick={reloadGame}>
                🔄 Reload
              </button>
            </div>
          </div>

          {/* 新增 game-center，用来定位两侧悬浮图标 */}
          <div className="game-center">
            {/* 中间游戏框：保持宽屏 */}
            <div
              className={
                isFullscreen ? 'game-container fullscreen' : 'game-container'
              }
            >
              {isLoading && (
                <div className="loading">
                  <div className="spinner"></div>
                  <p>Loading Game...</p>
                </div>
              )}

              <iframe
                id="gameFrame"
                className="game-frame"
                src={currentGame.src}
                title={currentGame.title}
                allow="fullscreen"
                onLoad={() => setIsLoading(false)}
              />

              {isFullscreen && (
                <button
                  className="exit-fullscreen-btn"
                  onClick={() => setIsFullscreen(false)}
                >
                  ✕ Exit Fullscreen
                </button>
              )}
            </div>

            {/* 左右两侧游戏图标：悬浮在游戏框外面 */}
            {!isFullscreen && (
              <>
                <aside className="game-sidebar game-sidebar-left">
                  {sidebarGamesLeft.map((game) => (
                    <button
                      key={game.id}
                      type="button"
                      className={
                        'side-game-card' +
                        (game.id === currentGameId
                          ? ' side-game-card-active'
                          : '')
                      }
                      onClick={() => handleSelectGame(game.id)}
                    >
                      <div className="side-game-thumb">{game.short}</div>
                      <div className="side-game-title">{game.title}</div>
                    </button>
                  ))}
                </aside>

                <aside className="game-sidebar game-sidebar-right">
                  {sidebarGamesRight.map((game) => (
                    <button
                      key={game.id}
                      type="button"
                      className={
                        'side-game-card' +
                        (game.id === currentGameId
                          ? ' side-game-card-active'
                          : '')
                      }
                      onClick={() => handleSelectGame(game.id)}
                    >
                      <div className="side-game-thumb">{game.short}</div>
                      <div className="side-game-title">{game.title}</div>
                    </button>
                  ))}
                </aside>
              </>
            )}
          </div>
        </div>

        {/* About 区域，随当前游戏变化 */}
        <section id="about" className="content-section">
          <h2>About {currentGame.title}</h2>
          {currentGame.about.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </section>

        {/* Controls 区域 */}
        <section id="controls" className="content-section">
          <h2>{currentGame.title} Controls</h2>
          <ul>
            {currentGame.controls.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </section>

        {/* Game Modes 区域 */}
        <section id="modes" className="content-section">
          <h2>{currentGame.title} Game Modes & Style</h2>
          <ul>
            {currentGame.modes.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </section>

        {/* Attacks / Patterns 区域 */}
        <section id="attacks" className="content-section">
          <h2>Key Patterns in {currentGame.title}</h2>
          <div className="attack-list">
            {currentGame.attacks.map((a, idx) => (
              <div key={idx} className="attack-item">
                {a}</div>
            ))}
          </div>
        </section>

        {/* Tips 区域 */}
        <section id="tips" className="content-section">
          <h2>Tips & Strategy for {currentGame.title}</h2>
          <ul>
            {currentGame.tips.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <Link href="/about-us">About Us</Link>
            <Link href="/copyright">Copyright</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            Fan-made site inspired by Undertale — not affiliated with Toby Fox.
          </div>
        </footer>
      </div>
    </>
  )
}
``` :contentReference[oaicite:0]{index=0}

---

## 2️⃣ 调好的 `app/globals.css`（只改了三处）

你这个文件比较长，我只改了 **很少几行**，直接给你说明“替换点”：

### ① 修改 `.game-wrapper`

找到这段：

```css
.game-wrapper {
  margin-bottom: 30px;
}
