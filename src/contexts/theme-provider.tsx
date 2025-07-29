'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// 主题提供者组件 - 管理应用的亮色/暗色主题
// 这个组件包装了 next-themes 的 ThemeProvider，提供主题切换功能
export function ThemeProvider({
  children, // 子组件
  ...props // 其他传递给 next-themes 的属性
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    // 使用 next-themes 的 ThemeProvider
    // 它会自动处理主题的存储、切换和系统主题检测
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  )
}
