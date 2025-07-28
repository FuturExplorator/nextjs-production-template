#!/bin/bash

# GitHub Repository Setup Script
# This script helps you create a GitHub repository and push your code

set -e

echo "🚀 Setting up GitHub repository..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please run 'git init' first."
    exit 1
fi

# Get repository name from current directory
REPO_NAME=$(basename "$PWD")
echo "📁 Repository name: $REPO_NAME"

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote origin already exists:"
    git remote get-url origin
    echo ""
    echo "To push your code, run:"
    echo "  git push -u origin main"
    exit 0
fi

echo ""
echo "📋 To create a GitHub repository and push your code, follow these steps:"
echo ""
echo "1. Go to https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Description: A production-ready Next.js template with TypeScript, Tailwind CSS, and modern tooling"
echo "4. Make it Public"
echo "5. DO NOT initialize with README, .gitignore, or license (we already have these)"
echo "6. Click 'Create repository'"
echo ""
echo "7. After creating the repository, run these commands:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "8. To make this a template repository:"
echo "   - Go to your repository on GitHub"
echo "   - Click 'Settings'"
echo "   - Scroll down to 'Template repository'"
echo "   - Check 'Template repository'"
echo "   - Click 'Save'"
echo ""
echo "9. Update the repository description and topics:"
echo "   - Go to your repository on GitHub"
echo "   - Click 'About' section"
echo "   - Add topics: nextjs, typescript, tailwindcss, template, production-ready"
echo ""
echo "🎉 Your template will be ready to use!"
echo ""
echo "Users can then create new projects using:"
echo "  npx create-next-app@latest my-app --template YOUR_USERNAME/$REPO_NAME" 