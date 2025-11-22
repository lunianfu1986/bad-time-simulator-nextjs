import Link from 'next/link'

export const metadata = {
  title: 'About Us - Bad Time Simulator',
  description: 'Learn more about Bad Time Simulator and our mission.',
}

export default function AboutUs() {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-container">
          <Link href="/" className="logo">💀 Bad Time <span>Simulator</span></Link>
        </div>
      </nav>

      <div className="sub-page">
        <div className="sub-page-content">
          <Link href="/" className="back-btn">← Back to Home</Link>
          
          <h1>About Us</h1>
          
          <h2>Our Story</h2>
          <p>Bad Time Simulator was created by passionate fans of Undertale who wanted to share the iconic Sans boss fight experience with players around the world. Our mission is to provide a free, accessible way for everyone to enjoy this legendary gaming moment.</p>
          
          <h2>What We Offer</h2>
          <p>Our website provides:</p>
          <ul>
            <li>Free access to the Bad Time Simulator game</li>
            <li>Multiple game modes for different skill levels</li>
            <li>Comprehensive guides and tips</li>
            <li>A community of fellow Undertale fans</li>
          </ul>
          
          <h2>Credits</h2>
          <p>We want to acknowledge the following:</p>
          <ul>
            <li><strong>Toby Fox:</strong> Creator of Undertale and all its amazing characters</li>
            <li><strong>jcw87:</strong> Original Bad Time Simulator developer</li>
            <li><strong>Community Contributors:</strong> Everyone who has helped improve the game</li>
          </ul>
          
          <h2>Disclaimer</h2>
          <p>Bad Time Simulator is a fan-made project and is not affiliated with or endorsed by Toby Fox or the official Undertale team. This is a non-commercial project created purely for entertainment purposes.</p>
          
          <h2>Support Undertale</h2>
          <p>If you enjoy Bad Time Simulator, we highly encourage you to purchase and play the original Undertale game. It is an incredible experience that goes far beyond this single boss fight!</p>
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
