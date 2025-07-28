import type { NextConfig } from 'next'

// Next.js 配置对象 - 定义框架的行为和优化选项
const nextConfig: NextConfig = {
  // 实验性功能配置
  experimental: {
    // 优化包导入 - 减少打包体积，提高加载性能
    // 这里优化了 lucide-react 和 @radix-ui/react-icons 的导入
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // 图片优化配置
  images: {
    // 支持的图片格式 - 优先使用现代格式以提高性能
    formats: ['image/webp', 'image/avif'],
    
    // 设备尺寸断点 - 用于响应式图片
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // 图片尺寸 - 用于不同场景的图片优化
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 编译器配置
  compiler: {
    // 生产环境移除 console 语句 - 减少打包体积，提高性能
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 移除 X-Powered-By 头 - 安全考虑，不暴露技术栈信息
  poweredByHeader: false,
  
  // 启用 gzip 压缩 - 减少传输体积
  compress: true,
  
  // 启用 React 严格模式 - 帮助发现潜在问题
  reactStrictMode: true,
  
  // 使用 SWC 进行代码压缩 - 比 Terser 更快
  swcMinify: true,
  
  // 不在 URL 末尾添加斜杠
  trailingSlash: false,
  
  // 自定义 HTTP 头配置 - 安全性和性能优化
  async headers() {
    return [
      {
        // 应用到所有路由
        source: '/(.*)',
        headers: [
          {
            // 防止 MIME 类型嗅探攻击
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // 防止点击劫持攻击
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // 启用 XSS 保护
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            // 控制 Referrer 信息泄露
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig 