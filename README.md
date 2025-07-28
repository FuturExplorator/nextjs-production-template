# Next.js Production Template

一个生产级别的Next.js项目模板，包含TypeScript、Tailwind CSS和现代开发工具。

## 🚀 特性

### 核心技术栈
- **Next.js 14** - 最新的React框架，支持App Router
- **TypeScript** - 完整的类型安全
- **Tailwind CSS** - 实用优先的CSS框架
- **Radix UI** - 无障碍的组件原语
- **Shadcn/ui** - 美观、可访问的组件库

### 开发工具
- **ESLint + Prettier** - 代码质量和格式化
- **Husky + lint-staged** - Git钩子
- **Jest + Testing Library** - 单元测试
- **Playwright** - 端到端测试
- **Storybook** - 组件开发

### 生产特性
- **PWA支持** - 渐进式Web应用
- **SEO优化** - 内置SEO功能
- **性能优化** - 包分析、图片优化
- **暗色模式** - 主题切换
- **国际化** - i18n支持
- **错误边界** - 错误处理
- **分析就绪** - 多种分析提供商

## 🛠️ 快速开始

### 1. 使用模板创建项目

```bash
# 使用create-next-app
npx create-next-app@latest my-app --template nextjs-production-template

# 或者克隆仓库
git clone https://github.com/your-username/nextjs-production-template.git my-app
cd my-app
```

### 2. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 3. 设置环境变量

```bash
cp .env.example .env.local
# 编辑 .env.local 文件，添加你的配置
```

### 4. 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📁 项目结构

```
src/
├── app/                    # App Router页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React组件
│   ├── ui/               # 可重用UI组件
│   ├── navigation.tsx    # 导航组件
│   ├── footer.tsx        # 页脚组件
│   └── ...
├── contexts/             # React上下文
│   ├── theme-provider.tsx
│   └── query-provider.tsx
├── hooks/               # 自定义React钩子
├── lib/                 # 工具库
├── types/               # TypeScript类型定义
├── utils/               # 工具函数
├── styles/              # CSS和样式
├── constants/           # 应用常量
├── services/            # API服务
└── store/               # 状态管理
```

## 🛠️ 可用命令

```bash
# 开发
npm run dev              # 启动开发服务器
npm run build            # 构建生产版本
npm run start            # 启动生产服务器

# 测试
npm run test             # 运行单元测试
npm run test:watch       # 监听模式运行测试
npm run test:coverage    # 生成测试覆盖率报告
npm run test:e2e         # 运行端到端测试

# 代码质量
npm run lint             # 运行ESLint
npm run lint:fix         # 自动修复ESLint错误
npm run format           # 使用Prettier格式化代码
npm run format:check     # 检查代码格式
npm run type-check       # 运行TypeScript类型检查

# 组件开发
npm run storybook        # 启动Storybook
npm run build-storybook  # 构建Storybook

# 分析
npm run analyze          # 分析包大小
```

## 🔧 配置

### 环境变量

创建 `.env.local` 文件并添加以下变量：

```env
# 应用配置
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="My App"

# 数据库
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# 认证
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# 分析
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 🚀 部署

### Vercel (推荐)

1. 将代码推送到GitHub
2. 将仓库连接到Vercel
3. 自动部署

### 其他平台

模板配置支持部署到：

- **Vercel** - 零配置
- **Netlify** - 静态导出支持
- **Railway** - 全栈部署
- **Docker** - 容器部署

## 📊 性能

### Core Web Vitals

模板针对以下指标进行了优化：

- **LCP (Largest Contentful Paint)** - 图片优化、字体加载
- **FID (First Input Delay)** - 代码分割、包优化
- **CLS (Cumulative Layout Shift)** - 正确的图片尺寸、稳定布局

## 🔒 安全

### 内置安全特性

- 内容安全策略 (CSP)
- XSS保护
- CSRF保护
- 安全头
- Zod输入验证
- Prisma SQL注入防护
- NextAuth.js认证

## 🌐 国际化

### i18n设置

模板包含：

- Next.js i18n配置
- React i18next集成
- 语言检测
- RTL支持
- 日期和数字格式化

## 🎨 主题

### 暗色模式

内置暗色模式支持，包括：

- 系统偏好检测
- 手动切换
- 持久化偏好
- 平滑过渡

## 📱 PWA特性

### 渐进式Web应用

- Service Worker
- 离线支持
- 应用清单
- 安装提示
- 后台同步

## 🔍 SEO

### 内置SEO特性

- Meta标签管理
- Open Graph支持
- Twitter Cards
- 结构化数据
- 站点地图生成
- Robots.txt
- 规范URL

## 🤝 贡献

1. Fork仓库
2. 创建功能分支
3. 进行更改
4. 添加测试
5. 提交Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) 团队提供的优秀框架
- [Vercel](https://vercel.com/) 提供的托管和部署服务
- [Tailwind CSS](https://tailwindcss.com/) 提供的实用优先CSS
- [Radix UI](https://www.radix-ui.com/) 提供的无障碍组件
- [Shadcn](https://ui.shadcn.com/) 提供的组件库

## 📞 支持

- [文档](https://your-docs-url.com)
- [Issues](https://github.com/your-username/nextjs-production-template/issues)
- [Discussions](https://github.com/your-username/nextjs-production-template/discussions)

---

由 [Your Name](https://github.com/your-username) 用 ❤️ 制作 