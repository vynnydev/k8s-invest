import React from 'react'
import '@/presentation/styles/globals.css'

import FlowbiteContext from '@/presentation/components/FlowbiteContext'

export const metadata = {
  title: 'Trader',
  description: 'E-commerce Trader Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 h-screen flex flex-col">
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  )
}
