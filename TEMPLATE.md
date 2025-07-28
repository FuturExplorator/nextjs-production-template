# Next.js Production Template

这是一个生产级的Next.js模板，包含现代化的开发工具和最佳实践。

## 🚀 快速开始

```bash
# 克隆模板
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 或者使用这个模板
git clone https://github.com/FuturExplorator/nextjs-production-template.git my-app
cd my-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📁 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 主页
├── components/         # React组件
│   ├── ui/            # 基础UI组件
│   ├── navigation.tsx # 导航组件
│   └── footer.tsx     # 页脚组件
├── contexts/          # React Context
├── hooks/             # 自定义Hooks
├── lib/               # 工具库
├── services/          # API服务
├── store/             # 状态管理
├── styles/            # 样式文件
├── types/             # TypeScript类型
└── utils/             # 工具函数
```

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **组件**: Radix UI + Shadcn/ui
- **测试**: Jest + Playwright
- **代码质量**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **文档**: Storybook
- **部署**: Docker

## 📦 可用脚本

```bash
# 开发
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器

# 代码质量
npm run lint         # ESLint检查
npm run lint:fix     # ESLint自动修复
npm run format       # Prettier格式化
npm run type-check   # TypeScript类型检查

# 测试
npm run test         # Jest单元测试
npm run test:watch   # Jest监听模式
npm run test:e2e     # Playwright E2E测试
npm run test:coverage # 测试覆盖率

# 文档
npm run storybook    # 启动Storybook
npm run build-storybook # 构建Storybook

# Docker
npm run docker:build # 构建Docker镜像
npm run docker:run   # 运行Docker容器
npm run docker:compose # 启动Docker Compose
```

## 🔧 配置说明

### 环境变量

创建 `.env.local` 文件：

```env
# 应用配置
NEXT_PUBLIC_APP_NAME=My App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# 分析工具
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# API配置
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 自定义配置

- `next.config.ts` - Next.js配置
- `tailwind.config.ts` - Tailwind CSS配置
- `tsconfig.json` - TypeScript配置
- `jest.config.js` - Jest测试配置
- `playwright.config.ts` - Playwright配置

## 🎨 主题和样式

### 颜色系统

使用CSS变量定义主题颜色：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... */
}
```

### 组件变体

使用 `class-variance-authority` 定义组件变体：

```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'border border-input bg-background',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
```

## 🧪 测试策略

### 单元测试 (Jest)

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### E2E测试 (Playwright)

```tsx
import { test, expect } from '@playwright/test'

test('homepage has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Next.js Template/)
})
```

## 🚀 部署

### Vercel (推荐)

1. 连接GitHub仓库
2. 自动部署

### Docker

```bash
# 构建镜像
docker build -t my-app .

# 运行容器
docker run -p 3000:3000 my-app
```

### Docker Compose

```bash
# 启动所有服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

## 📚 最佳实践

### 1. 组件设计

- 使用TypeScript接口定义props
- 实现可访问性 (ARIA标签)
- 支持键盘导航
- 响应式设计

### 2. 性能优化

- 使用Next.js Image组件
- 实现代码分割
- 优化字体加载
- 使用React.memo优化渲染

### 3. SEO优化

- 配置元数据
- 使用语义化HTML
- 实现结构化数据
- 优化页面速度

### 4. 安全性

- 验证用户输入
- 使用HTTPS
- 实现CSP
- 防止XSS攻击

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🆘 支持

- 📧 Email: support@example.com
- 💬 Discord: [加入我们的社区](https://discord.gg/example)
- 📖 文档: [查看完整文档](https://docs.example.com)
- 🐛 问题: [GitHub Issues](https://github.com/FuturExplorator/nextjs-production-template/issues)

---

**Happy Coding! 🎉**