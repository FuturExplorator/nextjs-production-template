import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

// 导入上下文提供者组件
import { ThemeProvider } from '@/contexts/theme-provider'
import { QueryProvider } from '@/contexts/query-provider'

// 导入全局组件
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@/components/analytics'
import { ErrorBoundary } from '@/components/error-boundary'

// 配置 Inter 字体 - Google Fonts 的现代无衬线字体
const inter = Inter({
  subsets: ['latin'], // 只加载拉丁字符集，减少字体文件大小
  variable: '--font-inter', // CSS 变量名，用于在 CSS 中引用
})

// 网站元数据配置 - 用于 SEO 和社交媒体分享
export const metadata: Metadata = {
  title: {
    default: 'Next.js 生产级模板', // 默认标题
    template: '%s | Next.js 生产级模板', // 标题模板，%s 会被具体页面标题替换
  },
  description:
    '一个现代化的 Next.js 14 生产级项目模板，包含完整的技术栈和最佳实践。', // 网站描述
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', '生产级模板'], // 关键词
  authors: [{ name: '开发团队' }], // 作者信息
  creator: '开发团队', // 创建者
  publisher: '开发团队', // 发布者
  formatDetection: {
    email: false, // 禁用邮箱自动检测
    address: false, // 禁用地址自动检测
    telephone: false, // 禁用电话自动检测
  },
  metadataBase: new URL('https://your-domain.com'), // 元数据基础 URL
  alternates: {
    canonical: '/', // 规范链接
  },
  openGraph: {
    // Open Graph 协议配置 - 用于社交媒体分享
    type: 'website',
    locale: 'zh_CN', // 中文简体
    url: 'https://your-domain.com',
    title: 'Next.js 生产级模板',
    description: '一个现代化的 Next.js 14 生产级项目模板',
    siteName: 'Next.js 生产级模板',
    images: [
      {
        url: '/og-image.jpg', // 社交媒体分享图片
        width: 1200,
        height: 630,
        alt: 'Next.js 生产级模板',
      },
    ],
  },
  twitter: {
    // Twitter 卡片配置
    card: 'summary_large_image',
    title: 'Next.js 生产级模板',
    description: '一个现代化的 Next.js 14 生产级项目模板',
    images: ['/og-image.jpg'],
  },
  robots: {
    // 搜索引擎爬虫配置
    index: true, // 允许索引
    follow: true, // 允许跟踪链接
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 网站验证配置
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

// 根布局组件 - 所有页面的基础布局
export default function RootLayout({
  children, // 子组件，即具体页面内容
}: {
  children: React.ReactNode
}) {
  return (
    // html 标签配置
    <html
      lang='zh-CN' // 设置语言为中文简体
      suppressHydrationWarning // 抑制水合警告（用于主题切换）
      className={inter.variable} // 应用字体 CSS 变量
    >
      {/* head 标签内容由 Next.js 自动管理 */}
      <head />

      {/* body 标签 */}
      <body
        className={`
          ${inter.className} // 应用 Inter 字体
          min-h-screen // 最小高度为屏幕高度
          bg-background // 背景色
          font-sans // 无衬线字体
          antialiased // 字体抗锯齿
        `}
      >
        {/* 错误边界 - 捕获和处理组件错误 */}
        <ErrorBoundary>
          {/* 主题提供者 - 管理暗色/亮色主题 */}
          <ThemeProvider
            attribute='class' // 使用 class 属性切换主题
            defaultTheme='system' // 默认使用系统主题
            enableSystem // 启用系统主题检测
            disableTransitionOnChange // 主题切换时禁用过渡动画
          >
            {/* React Query 提供者 - 管理数据获取和缓存 */}
            <QueryProvider>
              {/* 主要内容区域 */}
              {children}

              {/* 通知组件 - 显示 toast 消息 */}
              <Toaster />

              {/* 分析组件 - 网站访问统计 */}
              <Analytics />
            </QueryProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
