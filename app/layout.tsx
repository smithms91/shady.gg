import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark">
      <head />
      <body>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer color="light" />
      </body>
      
    </html>
  )
}