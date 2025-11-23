import './globals.css'

export const metadata = {
  title: 'Bad Time Simulator - Are You Ready for a Bad Time?',
  description: 'Bad Time Simulator - Fight Sans from Undertale. Test your skills in the hardest boss battle!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6Q503TXNXR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6Q503TXNXR');
</script>
