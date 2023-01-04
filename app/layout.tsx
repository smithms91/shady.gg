
import Link from 'next/link';
import './globals.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          {children}
          
        </div>
        <Link href="/">
          <h1>Shady.gg</h1>
        </Link>
      </body>
      
    </html>
  )
}