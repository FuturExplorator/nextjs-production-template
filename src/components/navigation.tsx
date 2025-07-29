'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: '首页', href: '/' },
  { name: '文档', href: '/docs' },
  { name: '组件', href: '/components' },
  { name: '关于', href: '/about' },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container flex h-16 items-center'>
        <div className='mr-8'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='h-8 w-8 rounded-lg bg-primary flex items-center justify-center'>
              <span className='text-primary-foreground font-bold text-sm'>
                N
              </span>
            </div>
            <span className='font-bold text-xl'>Next.js Template</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
          <div className='flex items-center space-x-6'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <ThemeToggle />
            <Button asChild>
              <Link href='/get-started'>开始使用</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className='flex md:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 px-4 pb-3 pt-2'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className='flex items-center justify-between px-3 py-2'>
              <ThemeToggle />
              <Button asChild size='sm'>
                <Link href='/get-started'>开始使用</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
