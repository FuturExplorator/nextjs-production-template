import { Suspense } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'
import { Github, Star, Zap, Shield, Code, Palette } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Production Ready
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Next.js Production Template
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive, production-ready Next.js template with TypeScript, 
              Tailwind CSS, and modern development tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Github className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                <Star className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose This Template?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern best practices and production-ready features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>
                  Full TypeScript support with strict type checking and excellent IDE experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>
                  Utility-first CSS framework with custom design system and dark mode support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>
                  Optimized for performance with SEO, accessibility, and security best practices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Modern Tooling</CardTitle>
                <CardDescription>
                  ESLint, Prettier, Husky, Jest, Playwright, and Storybook for quality development
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>GitHub Ready</CardTitle>
                <CardDescription>
                  Pre-configured with GitHub Actions, issue templates, and contribution guidelines
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Shadcn UI</CardTitle>
                <CardDescription>
                  Beautiful, accessible components built with Radix UI and Tailwind CSS
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Quick Start Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
              <p className="text-muted-foreground">
                Get up and running in minutes
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>
                  Clone the repository and install dependencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
{`# Clone the repository
git clone https://github.com/your-username/nextjs-production-template.git

# Navigate to the project directory
cd nextjs-production-template

# Install dependencies
npm install

# Start the development server
npm run dev`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 