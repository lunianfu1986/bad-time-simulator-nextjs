// app/layout.js
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Bad Time Simulator - Are You Ready for a Bad Time?',
  description:
    'Bad Time Simulator - Fight Sans from Undertale. Test your skills in the hardest boss battle!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6Q503TXNXR"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Q503TXNXR');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
