'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

// React Query 提供者组件的属性接口
interface QueryProviderProps {
  children: React.ReactNode // 子组件
}

// React Query 提供者组件 - 管理数据获取和缓存
// 这个组件包装了 React Query 的 QueryClientProvider，提供全局的数据管理功能
export function QueryProvider({ children }: QueryProviderProps) {
  // 使用 useState 创建 QueryClient 实例
  // 这样可以确保 QueryClient 在组件生命周期内保持稳定
  const [queryClient] = useState(
    () =>
      new QueryClient({
        // 默认查询配置
        defaultOptions: {
          // 查询配置
          queries: {
            // 数据新鲜时间 - 1分钟内认为数据是新鲜的，不会重新获取
            staleTime: 60 * 1000, // 1 minute

            // 垃圾回收时间 - 10分钟内数据会被缓存，超过后会被清理
            gcTime: 10 * 60 * 1000, // 10 minutes

            // 重试策略 - 自定义重试逻辑
            retry: (failureCount: number, error: any) => {
              // 对于 4xx 错误（客户端错误），不进行重试
              // 因为这些错误通常是用户输入问题，重试没有意义
              if (error?.status >= 400 && error?.status < 500) {
                return false
              }
              // 对于其他错误，最多重试 3 次
              return failureCount < 3
            },
          },
          // 变更配置
          mutations: {
            // 变更操作不进行重试
            retry: false,
          },
        },
      })
  )

  return (
    // QueryClientProvider 提供 React Query 的上下文
    <QueryClientProvider client={queryClient}>
      {/* 子组件 */}
      {children}

      {/* React Query 开发工具 - 只在开发环境中显示 */}
      {/* 这个工具可以帮助调试数据获取状态、缓存等 */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
