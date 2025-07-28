// 应用常量
export const APP_CONFIG = {
  name: 'Next.js Production Template',
  version: '1.0.0',
  description: 'A production-ready Next.js template with TypeScript, Tailwind CSS, and modern tooling',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
} as const

// 路由常量
export const ROUTES = {
  home: '/',
  about: '/about',
  docs: '/docs',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const

// API端点
export const API_ENDPOINTS = {
  health: '/api/health',
  users: '/api/users',
  posts: '/api/posts',
} as const

// 主题常量
export const THEME = {
  light: 'light',
  dark: 'dark',
  system: 'system',
} as const

// 本地存储键
export const STORAGE_KEYS = {
  theme: 'theme',
  language: 'language',
  user: 'user',
} as const

// 错误消息
export const ERROR_MESSAGES = {
  network: '网络连接错误，请检查您的网络连接',
  server: '服务器错误，请稍后重试',
  notFound: '页面未找到',
  unauthorized: '未授权访问',
  forbidden: '禁止访问',
  validation: '输入验证失败',
} as const

// 成功消息
export const SUCCESS_MESSAGES = {
  saved: '保存成功',
  deleted: '删除成功',
  updated: '更新成功',
  created: '创建成功',
} as const

// 分页常量
export const PAGINATION = {
  defaultPageSize: 10,
  maxPageSize: 100,
  pageSizeOptions: [10, 20, 50, 100],
} as const

// 文件上传常量
export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  maxFiles: 10,
} as const

// 正则表达式
export const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  url: /^https?:\/\/.+/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
} as const

// 动画持续时间
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const

// 断点
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const