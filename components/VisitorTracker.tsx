'use client'

import { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

interface VisitorData {
  ip: string
  location: string
  city?: string
  region?: string
  country?: string
  timezone?: string
  visitingTime: string
  userAgent: string
  referrer: string
}

export default function VisitorTracker() {
  const hasTracked = useRef(false)

  useEffect(() => {
    // Only track once per session
    if (hasTracked.current) {
      return
    }
    hasTracked.current = true

    const trackVisitor = async () => {
      try {
        // Get visiting time
        const visitingTime = new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })

        // Get user agent and referrer
        const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown'
        const referrer = typeof window !== 'undefined' ? document.referrer || 'Direct' : 'Direct'

        // Get IP and location using ipapi.co (free tier)
        let visitorData: VisitorData = {
          ip: 'Unknown',
          location: 'Unknown',
          visitingTime,
          userAgent,
          referrer,
        }

        try {
          const ipResponse = await fetch('https://ipapi.co/json/')
          const ipData = await ipResponse.json()

          if (ipData.ip) {
            visitorData = {
              ip: ipData.ip,
              location: `${ipData.city || 'Unknown'}, ${ipData.region || 'Unknown'}, ${ipData.country_name || 'Unknown'}`,
              city: ipData.city || 'Unknown',
              region: ipData.region || 'Unknown',
              country: ipData.country_name || 'Unknown',
              timezone: ipData.timezone || 'Unknown',
              visitingTime,
              userAgent,
              referrer,
            }
          }
        } catch (ipError) {
          // Fallback to alternative IP service
          try {
            const fallbackResponse = await fetch('https://api.ipify.org?format=json')
            const fallbackData = await fallbackResponse.json()
            visitorData.ip = fallbackData.ip || 'Unknown'
          } catch (fallbackError) {
            // Could not fetch IP address
          }
        }

        // Send email via EmailJS - using environment variables
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        // Use visitor-specific template ID if available, otherwise use default template ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_VISITOR_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        // Validate required environment variables
        if (!serviceId || !templateId || !publicKey) {
          return
        }

        // Create a visitor tracking template message
        const message = `
New Visitor to Portfolio!

📍 Location: ${visitorData.location}
🌐 IP Address: ${visitorData.ip}
🕐 Visiting Time: ${visitorData.visitingTime}
🌍 Country: ${visitorData.country || 'Unknown'}
🏙️ City: ${visitorData.city || 'Unknown'}
⏰ Timezone: ${visitorData.timezone || 'Unknown'}
💻 User Agent: ${visitorData.userAgent}
🔗 Referrer: ${visitorData.referrer}

---
This is an automated visitor tracking notification.
        `.trim()

        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: 'Portfolio Visitor Tracker',
            from_email: 'visitor@portfolio.com',
            message: message,
            to_email: 'jegansekar112@gmail.com',
            subject: 'New Portfolio Visitor',
            visitor_ip: visitorData.ip,
            visitor_location: visitorData.location,
            visiting_time: visitorData.visitingTime,
          },
          publicKey
        )
      } catch (error) {
        // Silently fail - don't interrupt user experience
      }
    }

    // Track visitor after a short delay to ensure page is loaded
    const timer = setTimeout(() => {
      trackVisitor()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // This component doesn't render anything
  return null
}

