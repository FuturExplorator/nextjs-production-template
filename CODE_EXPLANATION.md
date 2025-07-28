# Next.js 生产级项目模板 - 代码详解

## 项目概述

这是一个现代化的 Next.js 14 生产级项目模板，采用了最新的技术栈和最佳实践。

### 核心技术栈

- **Next.js 14** - React 全栈框架，支持 SSR、SSG、ISR
- **TypeScript** - 类型安全的 JavaScript 超集
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Shadcn UI** - 基于 Radix UI 的组件库
- **React Query** - 数据获取和缓存库
- **Jest + Playwright** - 单元测试和端到端测试
- **Storybook** - 组件文档和开发工具
- **ESLint + Prettier** - 代码质量和格式化
- **Husky** - Git hooks 工具
- **Docker** - 容器化部署

## 项目结构详解

### 根目录配置文件

#### package.json
- **作用**: 项目配置和依赖管理
- **关键配置**:
  - `scripts`: 定义各种 npm 命令
  - `dependencies`: 生产环境依赖
  - `devDependencies`: 开发环境依赖
  - `lint-staged`: Git 提交前的代码检查
  - `engines`: 指定 Node.js 和 npm 版本要求

#### tsconfig.json
- **作用**: TypeScript 编译器配置
- **关键配置**:
  - `baseUrl` 和 `paths`: 路径别名配置
  - `strict`: 启用严格类型检查
  - `jsx`: 支持 React JSX

#### next.config.ts
- **作用**: Next.js 框架配置
- **关键配置**:
  - `experimental.optimizePackageImports`: 优化包导入
  - `images`: 图片优化配置
  - `headers`: 安全头配置
  - `compiler.removeConsole`: 生产环境移除 console

#### tailwind.config.ts
- **作用**: Tailwind CSS 配置
- **关键配置**:
  - `darkMode`: 暗色模式支持
  - `content`: 扫描的文件路径
  - `theme.extend`: 扩展主题配置
  - `plugins`: 插件配置

#### .eslintrc.json
- **作用**: ESLint 代码检查配置
- **关键配置**:
  - `extends`: 继承的配置规则
  - `plugins`: 使用的插件
  - `rules`: 自定义规则

#### .prettierrc
- **作用**: Prettier 代码格式化配置
- **关键配置**:
  - `semi`: 分号配置
  - `singleQuote`: 单引号配置
  - `printWidth`: 行宽限制

### 源代码目录 (src/)

#### app/ 目录 (Next.js App Router)
- **layout.tsx**: 根布局组件，包含全局样式和上下文
- **page.tsx**: 首页组件

#### components/ 目录
- **ui/**: Shadcn UI 组件
  - `button.tsx`: 按钮组件
  - `card.tsx`: 卡片组件
  - `badge.tsx`: 徽章组件
  - `dropdown-menu.tsx`: 下拉菜单组件
  - `toast.tsx`: 通知组件
  - `separator.tsx`: 分隔线组件
- **navigation.tsx**: 导航组件
- **footer.tsx**: 页脚组件
- **theme-toggle.tsx**: 主题切换组件
- **loading-spinner.tsx**: 加载动画组件
- **error-boundary.tsx**: 错误边界组件
- **analytics.tsx**: 分析组件

#### contexts/ 目录
- **theme-provider.tsx**: 主题上下文提供者
- **query-provider.tsx**: React Query 上下文提供者

#### hooks/ 目录
- **use-toast.ts**: 通知钩子

#### lib/ 目录
- **utils.ts**: 工具函数

#### types/ 目录
- **index.ts**: 全局类型定义

#### constants/ 目录
- **index.ts**: 常量定义

#### styles/ 目录
- **globals.css**: 全局样式

### 测试目录 (tests/)

#### e2e/ 目录
- **home.spec.ts**: 首页端到端测试
- **global-setup.ts**: 全局测试设置
- **global-teardown.ts**: 全局测试清理

#### unit/ 目录
- **components/Button.test.tsx**: 按钮组件单元测试

### 配置文件

#### jest.config.js
- **作用**: Jest 测试框架配置
- **关键配置**:
  - `testEnvironment`: 测试环境
  - `setupFilesAfterEnv`: 测试设置文件
  - `moduleNameMapping`: 模块路径映射

#### playwright.config.ts
- **作用**: Playwright 端到端测试配置
- **关键配置**:
  - `use`: 全局浏览器配置
  - `projects`: 测试项目配置

#### Dockerfile
- **作用**: Docker 容器化配置
- **关键配置**:
  - 多阶段构建
  - 生产环境优化

#### docker-compose.yml
- **作用**: Docker Compose 配置
- **关键配置**:
  - 服务定义
  - 端口映射
  - 环境变量

## 开发工作流

### 1. 开发环境
```bash
npm run dev          # 启动开发服务器
npm run type-check   # 类型检查
npm run lint         # 代码检查
```

### 2. 测试
```bash
npm run test         # 单元测试
npm run test:e2e     # 端到端测试
npm run test:coverage # 测试覆盖率
```

### 3. 构建和部署
```bash
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run docker:build # 构建 Docker 镜像
```

### 4. 代码质量
```bash
npm run format       # 格式化代码
npm run lint:fix     # 自动修复代码问题
```

## 最佳实践

### 1. 组件设计
- 使用 TypeScript 接口定义 props
- 采用函数式组件
- 使用 React Server Components 优先
- 合理使用 'use client' 指令

### 2. 样式管理
- 使用 Tailwind CSS 工具类
- 采用 CSS 变量管理主题
- 响应式设计优先

### 3. 状态管理
- 使用 React Query 管理服务器状态
- 使用 React Context 管理全局状态
- 避免过度使用全局状态

### 4. 性能优化
- 使用 Next.js 内置优化
- 图片优化和懒加载
- 代码分割和动态导入
- 缓存策略

### 5. 测试策略
- 单元测试覆盖核心逻辑
- 端到端测试覆盖关键用户流程
- 组件测试使用 Storybook

### 6. 代码质量
- ESLint 和 Prettier 配置
- Git hooks 自动检查
- TypeScript 严格模式
- 代码审查流程

## 部署策略

### 1. 静态部署
- Vercel、Netlify 等平台
- 自动 CI/CD 流程
- 环境变量管理

### 2. 容器化部署
- Docker 镜像构建
- Kubernetes 编排
- 负载均衡配置

### 3. 监控和分析
- 性能监控
- 错误追踪
- 用户行为分析

这个项目模板提供了一个完整的、生产就绪的 Next.js 应用基础，包含了现代 Web 开发所需的所有工具和最佳实践。 