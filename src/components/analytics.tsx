'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface AnalyticsProps {
  googleAnalyticsId?: string
  enableAnalytics?: boolean
}

export function Analytics({
  googleAnalyticsId,
  enableAnalytics = process.env.NODE_ENV === 'production',
}: AnalyticsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!enableAnalytics || !googleAnalyticsId) {
      return
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', googleAnalyticsId, {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams, googleAnalyticsId, enableAnalytics])

  // 如果没有配置Google Analytics，返回null
  if (!enableAnalytics || !googleAnalyticsId) {
    return null
  }

  return (
    <>
      {/* Google Analytics Script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// 自定义事件跟踪Hook
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: url,
      })
    }
  }

  return { trackEvent, trackPageView }
}

// 声明全局gtag类型
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
