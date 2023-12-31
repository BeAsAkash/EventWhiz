import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['400','500','600','700'],
  variable:'--font-poppins',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Platform for event management.',
  icons:{
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
