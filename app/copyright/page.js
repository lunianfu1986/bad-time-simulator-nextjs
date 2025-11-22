import Link from 'next/link'

export const metadata = {
  title: 'Copyright - Bad Time Simulator',
  description: 'Copyright information and DMCA notice procedure.',
}

export default function Copyright() {
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
          
          <h1>Copyright</h1>
          
          <h2>Copyright Notice</h2>
          <p>© 2024 Bad Time Simulator. All rights reserved.</p>
          
          <h2>Original Game Credits</h2>
          <p>Undertale and all related characters, music, and content are the property of Toby Fox. This fan-made simulator is created for non-commercial, entertainment purposes only.</p>
          
          <h2>DMCA Notice</h2>
          <p>Bad Time Simulator respects the intellectual property rights of others. If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:</p>
          <ul>
            <li>A physical or electronic signature of the copyright owner or authorized representative</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing and its location on our website</li>
            <li>Your address, telephone number, and email address</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li>
            <li>A statement that the information in the notification is accurate</li>
          </ul>
          
          <h2>Contact</h2>
          <p>For copyright concerns, please contact: lunianfu1986@gmail.com</p>
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
