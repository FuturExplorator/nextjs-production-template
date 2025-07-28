import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  product: [
    { name: '功能特性', href: '/features' },
    { name: '定价', href: '/pricing' },
    { name: '更新日志', href: '/changelog' },
    { name: '路线图', href: '/roadmap' },
  ],
  resources: [
    { name: '文档', href: '/docs' },
    { name: '教程', href: '/tutorials' },
    { name: '博客', href: '/blog' },
    { name: '社区', href: '/community' },
  ],
  company: [
    { name: '关于我们', href: '/about' },
    { name: '团队', href: '/team' },
    { name: '招聘', href: '/careers' },
    { name: '联系我们', href: '/contact' },
  ],
  legal: [
    { name: '隐私政策', href: '/privacy' },
    { name: '服务条款', href: '/terms' },
    { name: 'Cookie政策', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Email', href: 'mailto:contact@example.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl">Next.js Template</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              一个生产级的Next.js模板，包含TypeScript、Tailwind CSS和现代开发工具。
              快速启动你的下一个项目。
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold">产品</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold">资源</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold">公司</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex space-x-6 text-sm text-muted-foreground">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Next.js Template. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}