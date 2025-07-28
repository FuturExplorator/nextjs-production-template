import type { Config } from 'tailwindcss'

// Tailwind CSS 配置对象 - 定义样式系统的行为
const config: Config = {
  // 暗色模式配置 - 基于 class 切换，而不是系统偏好
  darkMode: ['class'],
  
  // 内容扫描路径 - 指定哪些文件需要被 Tailwind 扫描
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // 页面文件
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // 组件文件
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // App Router 文件
    './src/**/*.{js,ts,jsx,tsx,mdx}', // 所有源文件
  ],
  
  // 主题配置
  theme: {
    // 容器配置 - 用于居中和限制内容宽度
    container: {
      center: true, // 居中对齐
      padding: '2rem', // 内边距
      screens: {
        '2xl': '1400px', // 超大屏幕断点
      },
    },
    
    // 扩展主题配置
    extend: {
      // 颜色配置 - 使用 CSS 变量，支持主题切换
      colors: {
        // 边框颜色
        border: 'hsl(var(--border))',
        // 输入框颜色
        input: 'hsl(var(--input))',
        // 焦点环颜色
        ring: 'hsl(var(--ring))',
        // 背景颜色
        background: 'hsl(var(--background))',
        // 前景颜色（文字）
        foreground: 'hsl(var(--foreground))',
        
        // 主色调
        primary: {
          DEFAULT: 'hsl(var(--primary))', // 默认主色
          foreground: 'hsl(var(--primary-foreground))', // 主色上的文字颜色
        },
        
        // 次要色调
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // 默认次要色
          foreground: 'hsl(var(--secondary-foreground))', // 次要色上的文字颜色
        },
        
        // 危险色（错误、删除等）
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // 默认危险色
          foreground: 'hsl(var(--destructive-foreground))', // 危险色上的文字颜色
        },
        
        // 静音色（禁用、次要信息等）
        muted: {
          DEFAULT: 'hsl(var(--muted))', // 默认静音色
          foreground: 'hsl(var(--muted-foreground))', // 静音色上的文字颜色
        },
        
        // 强调色
        accent: {
          DEFAULT: 'hsl(var(--accent))', // 默认强调色
          foreground: 'hsl(var(--accent-foreground))', // 强调色上的文字颜色
        },
        
        // 弹出层颜色
        popover: {
          DEFAULT: 'hsl(var(--popover))', // 默认弹出层背景
          foreground: 'hsl(var(--popover-foreground))', // 弹出层文字颜色
        },
        
        // 卡片颜色
        card: {
          DEFAULT: 'hsl(var(--card))', // 默认卡片背景
          foreground: 'hsl(var(--card-foreground))', // 卡片文字颜色
        },
      },
      
      // 边框圆角配置
      borderRadius: {
        lg: 'var(--radius)', // 大圆角
        md: 'calc(var(--radius) - 2px)', // 中圆角
        sm: 'calc(var(--radius) - 4px)', // 小圆角
      },
      
      // 关键帧动画定义
      keyframes: {
        // 手风琴向下展开动画
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        // 手风琴向上收起动画
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // 淡入动画
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // 从顶部滑入动画
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // 从底部滑入动画
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      
      // 动画类配置
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out', // 手风琴向下展开
        'accordion-up': 'accordion-up 0.2s ease-out', // 手风琴向上收起
        'fade-in': 'fade-in 0.5s ease-out', // 淡入效果
        'slide-in-from-top': 'slide-in-from-top 0.3s ease-out', // 从顶部滑入
        'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out', // 从底部滑入
      },
    },
  },
  
  // 插件配置
  plugins: [
    // Tailwind CSS 动画插件 - 提供预设的动画类
    require('tailwindcss-animate')
  ],
}

export default config 