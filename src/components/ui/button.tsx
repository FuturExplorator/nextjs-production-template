import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// 按钮变体配置 - 使用 class-variance-authority 管理不同的按钮样式
const buttonVariants = cva(
  // 基础样式类 - 所有按钮都有的共同样式
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    // 变体配置 - 不同的按钮样式
    variants: {
      // 按钮变体 - 不同的视觉风格
      variant: {
        // 默认变体 - 主要按钮样式
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // 破坏性变体 - 用于危险操作（如删除）
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // 轮廓变体 - 带边框的按钮
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        // 次要变体 - 次要操作按钮
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // 幽灵变体 - 透明背景的按钮
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        // 链接变体 - 看起来像链接的按钮
        link: 'text-primary underline-offset-4 hover:underline',
      },
      // 尺寸变体 - 不同大小的按钮
      size: {
        // 默认尺寸
        default: 'h-10 px-4 py-2',
        // 小尺寸
        sm: 'h-9 rounded-md px-3',
        // 大尺寸
        lg: 'h-11 rounded-md px-8',
        // 图标尺寸 - 用于只包含图标的按钮
        icon: 'h-10 w-10',
      },
    },
    // 默认变体
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

// 按钮组件的属性接口 - 继承自 HTML button 元素和变体属性
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // 是否作为插槽使用 - 用于将按钮样式应用到其他元素
  asChild?: boolean
}

// 按钮组件 - 可配置的按钮组件，支持多种样式和尺寸
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // 如果 asChild 为 true，使用 Slot 组件
    // Slot 允许将按钮的样式和属性传递给子组件
    const Comp = asChild ? Slot : 'button'
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

// 设置组件显示名称，便于调试
Button.displayName = 'Button'

export { Button, buttonVariants }