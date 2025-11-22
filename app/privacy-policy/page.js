import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Bad Time Simulator',
  description: 'Privacy policy for Bad Time Simulator website.',
}

export default function PrivacyPolicy() {
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
          
          <h1>Privacy Policy</h1>
          
          <p><strong>Last Updated:</strong> January 2024</p>
          
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience</li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Improve our website and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Display relevant advertisements (if applicable)</li>
            <li>Ensure the security and functionality of our services</li>
          </ul>
          
          <h2>3. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
          
          <h2>4. Third-Party Services</h2>
          <p>We may use third-party services such as:</p>
          <ul>
            <li><strong>Google Analytics:</strong> To analyze website traffic</li>
            <li><strong>Google AdSense:</strong> To display advertisements</li>
          </ul>
          <p>These services have their own privacy policies governing the use of your information.</p>
          
          <h2>5. Data Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          
          <h2>6. Children's Privacy</h2>
          <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
          
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of cookies through your browser settings</li>
            <li>Request information about how your data is used</li>
          </ul>
          
          <h2>8. Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
          
          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at: privacy@badtimesimulator.com</p>
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
