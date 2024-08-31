import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Meu portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="kam8Jv2DTIOkoYIxIh90eMj5-ZskEGxqaY9dsNHyCgY"
        />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
