import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'
import { ThemeProviderComponent } from '@/components/ThemeProvider'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const websiteAuthor = { name: 'André Teizen' } as Author
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio to show my skills and experience',
  authors: websiteAuthor,
  other: {
    'google-site-verification': 'kam8Jv2DTIOkoYIxIh90eMj5-ZskEGxqaY9dsNHyCgY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProviderComponent>{children}</ThemeProviderComponent>
      </body>
    </html>
  )
}
