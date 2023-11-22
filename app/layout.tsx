import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='bg-indigo-500 text-white'>
          <nav className='container mx-auto py-5 flex justify-between'>
            <ul className='flex gap-x-5'>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
            </ul>
          </nav>
          
        </header>
        <main className='container mx-auto my-5'>
        {children}
        </main>
        <footer className='bg-slate-900 text-white'>
          <div className='container mx-auto'>
            footer
          </div>
        </footer>
        </body>
    </html>
  )
}