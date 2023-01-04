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
        <h1>Shady.gg</h1>
      </body>
      
    </html>
  )
}