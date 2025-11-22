import Link from 'next/link'

export const metadata = {
  title: 'Term Of Use - Bad Time Simulator',
  description: 'Terms and conditions for using Bad Time Simulator.',
}

export default function Terms() {
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
          
          <h1>Term Of Use</h1>
          
          <p><strong>Last Updated:</strong> January 2024</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Bad Time Simulator, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.</p>
          
          <h2>2. Description of Service</h2>
          <p>Bad Time Simulator is a fan-made recreation of the Sans boss fight from Undertale. This website provides free access to the game for entertainment and educational purposes.</p>
          
          <h2>3. Intellectual Property</h2>
          <p>The original Undertale game and its characters are owned by Toby Fox. This fan-made simulator is created for non-commercial, entertainment purposes only. All trademarks and copyrights belong to their respective owners.</p>
          
          <h2>4. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for any illegal purpose</li>
            <li>Attempt to hack or disrupt the website</li>
            <li>Copy or redistribute the game content for commercial purposes</li>
            <li>Use automated systems to access the website</li>
          </ul>
          
          <h2>5. Disclaimer</h2>
          <p>The website is provided "as is" without any warranties. We are not responsible for any damages arising from the use of this website.</p>
          
          <h2>6. Limitation of Liability</h2>
          <p>In no event shall Bad Time Simulator be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the website.</p>
          
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of any changes.</p>
          
          <h2>8. Contact</h2>
          <p>If you have any questions about these Terms, please contact us at: contact@badtimesimulator.com</p>
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
