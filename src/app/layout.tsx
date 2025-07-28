import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/theme-provider'
import { QueryProvider } from '@/contexts/query-provider'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@/components/analytics'
import { ErrorBoundary } from '@/components/error-boundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Next.js Production Template',
    template: '%s | Next.js Production Template',
  },
  description: 'A production-ready Next.js template with TypeScript, Tailwind CSS, and modern tooling',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Production'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Next.js Production Template',
    description: 'A production-ready Next.js template with TypeScript, Tailwind CSS, and modern tooling',
    siteName: 'Next.js Production Template',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Production Template',
    description: 'A production-ready Next.js template with TypeScript, Tailwind CSS, and modern tooling',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryProvider>
              <div className="min-h-screen bg-background font-sans antialiased">
                {children}
                <Toaster />
                <Analytics />
              </div>
            </QueryProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
} 