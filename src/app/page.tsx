import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'

// 首页组件 - 网站的入口页面
export default function HomePage() {
  return (
    // 页面容器
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <Navigation />
      
      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 py-8">
        {/* 英雄区域 - 页面主要展示区域 */}
        <section className="text-center py-20">
          {/* 标题区域 */}
          <div className="space-y-6">
            {/* 徽章 - 显示项目状态 */}
            <Badge variant="secondary" className="text-sm">
              🚀 生产就绪
            </Badge>
            
            {/* 主标题 */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next.js{' '}
              <span className="text-primary">生产级模板</span>
            </h1>
            
            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              一个现代化的 Next.js 14 项目模板，集成了完整的技术栈和最佳实践，
              帮助你快速构建生产级应用。
            </p>
            
            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 开始使用按钮 */}
              <Button asChild size="lg">
                <Link href="/docs">
                  开始使用
                </Link>
              </Button>
              
              {/* 查看源码按钮 */}
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/your-username/nextjs-production-template">
                  查看源码
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 分隔线 */}
        <Separator className="my-16" />

        {/* 特性展示区域 */}
        <section className="py-16">
          {/* 区域标题 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              为什么选择这个模板？
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们精心设计了这个模板，包含了现代 Web 开发所需的所有工具和最佳实践。
            </p>
          </div>

          {/* 特性卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 特性卡片 1: 现代化技术栈 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ⚡ 现代化技术栈
                </CardTitle>
                <CardDescription>
                  基于 Next.js 14、TypeScript、Tailwind CSS 等最新技术
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Next.js 14 App Router</li>
                  <li>• TypeScript 严格模式</li>
                  <li>• Tailwind CSS 样式系统</li>
                  <li>• Shadcn UI 组件库</li>
                </ul>
              </CardContent>
            </Card>

            {/* 特性卡片 2: 开发体验 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🛠️ 优秀开发体验
                </CardTitle>
                <CardDescription>
                  完整的开发工具链，提升开发效率和代码质量
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ESLint + Prettier 代码规范</li>
                  <li>• Husky Git hooks</li>
                  <li>• Jest + Playwright 测试</li>
                  <li>• Storybook 组件文档</li>
                </ul>
              </CardContent>
            </Card>

            {/* 特性卡片 3: 性能优化 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🚀 性能优化
                </CardTitle>
                <CardDescription>
                  内置多种性能优化策略，确保应用快速响应
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 图片自动优化</li>
                  <li>• 代码分割和懒加载</li>
                  <li>• 缓存策略优化</li>
                  <li>• SEO 友好配置</li>
                </ul>
              </CardContent>
            </Card>

            {/* 特性卡片 4: 生产就绪 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏭 生产就绪
                </CardTitle>
                <CardDescription>
                  包含生产环境所需的所有配置和最佳实践
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Docker 容器化</li>
                  <li>• 安全头配置</li>
                  <li>• 错误监控</li>
                  <li>• 性能监控</li>
                </ul>
              </CardContent>
            </Card>

            {/* 特性卡片 5: 可访问性 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ♿ 可访问性
                </CardTitle>
                <CardDescription>
                  基于 Radix UI 构建，确保应用对所有用户友好
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• WCAG 2.1 合规</li>
                  <li>• 键盘导航支持</li>
                  <li>• 屏幕阅读器友好</li>
                  <li>• 高对比度支持</li>
                </ul>
              </CardContent>
            </Card>

            {/* 特性卡片 6: 主题支持 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🌓 主题支持
                </CardTitle>
                <CardDescription>
                  支持亮色和暗色主题，自动跟随系统设置
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 亮色/暗色主题</li>
                  <li>• 系统主题检测</li>
                  <li>• 主题持久化</li>
                  <li>• 平滑切换动画</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 分隔线 */}
        <Separator className="my-16" />

        {/* 快速开始区域 */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* 区域标题 */}
            <h2 className="text-3xl md:text-4xl font-bold">
              快速开始
            </h2>
            <p className="text-lg text-muted-foreground">
              只需几个命令，你就可以开始使用这个模板构建你的下一个项目。
            </p>
            
            {/* 代码示例 */}
            <div className="bg-muted p-6 rounded-lg text-left">
              <pre className="text-sm overflow-x-auto">
                <code>
{`# 克隆项目
git clone https://github.com/your-username/nextjs-production-template.git

# 进入项目目录
cd nextjs-production-template

# 安装依赖
npm install

# 启动开发服务器
npm run dev`}
                </code>
              </pre>
            </div>
            
            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/docs/getting-started">
                  查看完整文档
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/your-username/nextjs-production-template">
                  在 GitHub 上查看
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  )
} 