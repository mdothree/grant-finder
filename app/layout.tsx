import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grant Finder',
  description: 'Grant search with premium tier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
