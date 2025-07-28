# 部署指南

本指南将帮助你将这个Next.js生产模板部署到GitHub并设置为模板仓库。

## 🚀 步骤1: 创建GitHub仓库

### 方法1: 使用GitHub CLI (推荐)

如果你已经安装了GitHub CLI并已认证：

```bash
# 创建仓库并推送代码
gh repo create nextjs-production-template \
  --public \
  --description "A production-ready Next.js template with TypeScript, Tailwind CSS, and modern tooling" \
  --push
```

### 方法2: 手动创建

1. 访问 [https://github.com/new](https://github.com/new)
2. 仓库名称: `nextjs-production-template`
3. 描述: `A production-ready Next.js template with TypeScript, Tailwind CSS, and modern tooling`
4. 选择 **Public**
5. **不要** 初始化README、.gitignore或license（我们已经有了）
6. 点击 "Create repository"

## 🔗 步骤2: 推送代码

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/nextjs-production-template.git

# 推送代码
git push -u origin main
```

## 📋 步骤3: 设置为模板仓库

1. 访问你的仓库: `https://github.com/YOUR_USERNAME/nextjs-production-template`
2. 点击 **Settings** 标签
3. 滚动到 **Template repository** 部分
4. 勾选 **Template repository**
5. 点击 **Save**

## 🏷️ 步骤4: 添加仓库信息

### 更新描述和主题

1. 在仓库主页点击 **About** 部分
2. 添加以下主题标签:
   - `nextjs`
   - `typescript`
   - `tailwindcss`
   - `template`
   - `production-ready`
   - `react`
   - `modern`
   - `boilerplate`

### 更新README

确保README文件包含:
- 项目描述
- 特性列表
- 安装说明
- 使用示例
- 贡献指南

## 🎯 步骤5: 测试模板

### 测试create-next-app集成

```bash
# 测试模板是否工作
npx create-next-app@latest test-app --template YOUR_USERNAME/nextjs-production-template

# 进入测试项目
cd test-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 验证功能

确保以下功能正常工作:
- ✅ 开发服务器启动
- ✅ 页面渲染
- ✅ 样式加载
- ✅ 组件工作
- ✅ 测试运行
- ✅ 构建成功

## 📊 步骤6: 添加徽章

在README.md中添加徽章来展示项目状态：

```markdown
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Template](https://img.shields.io/badge/Template-Repository-blue?style=for-the-badge)](https://github.com/YOUR_USERNAME/nextjs-production-template)
```

## 🔄 步骤7: 设置CI/CD

### GitHub Actions

模板已经包含了CI/CD配置，包括:

- 代码质量检查
- 测试运行
- 构建验证
- 自动发布

### 启用Actions

1. 进入仓库的 **Actions** 标签
2. 确保Actions已启用
3. 推送代码触发第一次运行

## 📈 步骤8: 监控和维护

### 定期更新

- 监控依赖更新
- 更新Next.js版本
- 更新TypeScript版本
- 更新Tailwind CSS版本

### 版本管理

使用语义化版本控制:

```bash
# 创建新版本
git tag v1.0.0
git push origin v1.0.0

# 创建GitHub Release
gh release create v1.0.0 --title "v1.0.0" --notes "Initial release"
```

## 🎉 完成！

现在你的模板已经准备就绪！用户可以通过以下方式使用：

```bash
# 使用create-next-app
npx create-next-app@latest my-app --template YOUR_USERNAME/nextjs-production-template

# 或直接克隆
git clone https://github.com/YOUR_USERNAME/nextjs-production-template.git my-app
```

## 📞 支持

如果你需要帮助：

1. 检查 [GitHub Issues](https://github.com/YOUR_USERNAME/nextjs-production-template/issues)
2. 创建新的Issue
3. 查看 [GitHub Discussions](https://github.com/YOUR_USERNAME/nextjs-production-template/discussions)

## 🔗 有用的链接

- [Next.js 文档](https://nextjs.org/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [GitHub 模板仓库文档](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) 