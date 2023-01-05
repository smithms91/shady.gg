import Link from 'next/link';
import Image from 'next/image';
import Footer from '../app/components/Footer';
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
        <Footer color="light" />
      </body>
      
    </html>
  )
}