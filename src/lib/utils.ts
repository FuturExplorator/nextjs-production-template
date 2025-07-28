import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// 工具函数：合并 CSS 类名
// 这个函数结合了 clsx 和 tailwind-merge 的功能
// clsx: 条件性地组合类名
// tailwind-merge: 智能合并 Tailwind CSS 类名，避免冲突
export function cn(...inputs: ClassValue[]) {
  // 使用 clsx 处理条件类名和数组
  // 然后使用 tailwind-merge 智能合并 Tailwind 类名
  return twMerge(clsx(inputs))
}

// 格式化日期函数
// 将日期对象格式化为可读的字符串
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// 格式化时间函数
// 将日期对象格式化为时间字符串
export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

// 格式化日期时间函数
// 将日期对象格式化为完整的日期时间字符串
export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

// 相对时间函数
// 将日期转换为相对时间描述（如"2小时前"）
export function relativeTime(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return '刚刚'
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes}分钟前`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours}小时前`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 30) {
    return `${diffInDays}天前`
  }

  const diffInMonths = Math.floor(diffInDays / 30)
  if (diffInMonths < 12) {
    return `${diffInMonths}个月前`
  }

  const diffInYears = Math.floor(diffInMonths / 12)
  return `${diffInYears}年前`
}

// 截断文本函数
// 将长文本截断到指定长度，并添加省略号
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength) + '...'
}

// 生成随机 ID 函数
// 生成一个简单的随机字符串作为 ID
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// 防抖函数
// 延迟执行函数，如果在延迟期间再次调用，则重新计时
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)
  }
}

// 节流函数
// 限制函数在指定时间内只能执行一次
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// 深拷贝函数
// 创建对象的深拷贝
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as unknown as T
  }
  
  if (typeof obj === 'object') {
    const clonedObj = {} as T
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
  
  return obj
}

// 检查是否为移动设备
// 基于用户代理字符串判断是否为移动设备
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  
  const userAgent = navigator.userAgent.toLowerCase()
  return /mobile|android|iphone|ipad|phone/i.test(userAgent)
}

// 检查是否为触摸设备
// 检查设备是否支持触摸事件
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}