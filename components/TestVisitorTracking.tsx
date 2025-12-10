'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

/**
 * Test Component for Visitor Tracking
 * 
 * This component can be temporarily added to your page to manually test visitor tracking.
 * Add it to any page (e.g., Hero section) to test the functionality.
 * 
 * Usage: Import and add <TestVisitorTracking /> to any component
 * Remove after testing!
 */
export default function TestVisitorTracking() {
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const testVisitorTracking = async () => {
    setStatus('testing')
    setMessage('Testing visitor tracking...')

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

      // Get IP and location
      let visitorData = {
        ip: 'Unknown',
        location: 'Unknown',
        visitingTime,
        userAgent,
        referrer,
        city: 'Unknown',
        region: 'Unknown',
        country: 'Unknown',
        timezone: 'Unknown',
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
        try {
          const fallbackResponse = await fetch('https://api.ipify.org?format=json')
          const fallbackData = await fallbackResponse.json()
          visitorData.ip = fallbackData.ip || 'Unknown'
        } catch (fallbackError) {
          console.log('Could not fetch IP address')
        }
      }

      // Send email via EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_VISITOR_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        setStatus('error')
        setMessage('❌ EmailJS credentials are not configured. Check your .env.local file.')
        return
      }

      const emailMessage = `
New Visitor to Portfolio! (TEST)

📍 Location: ${visitorData.location}
🌐 IP Address: ${visitorData.ip}
🕐 Visiting Time: ${visitorData.visitingTime}
🌍 Country: ${visitorData.country}
🏙️ City: ${visitorData.city}
⏰ Timezone: ${visitorData.timezone}
💻 User Agent: ${visitorData.userAgent}
🔗 Referrer: ${visitorData.referrer}

---
This is a TEST notification from the manual test component.
      `.trim()

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: 'Portfolio Visitor Tracker (TEST)',
          from_email: 'visitor@portfolio.com',
          message: emailMessage,
          to_email: 'jegansekar112@gmail.com',
          subject: 'New Portfolio Visitor (TEST)',
          visitor_ip: visitorData.ip,
          visitor_location: visitorData.location,
          visiting_time: visitorData.visitingTime,
        },
        publicKey
      )

      setStatus('success')
      setMessage(`✅ Test email sent successfully! Check your inbox (jegansekar112@gmail.com)\n\nLocation: ${visitorData.location}\nIP: ${visitorData.ip}`)
    } catch (error: any) {
      setStatus('error')
      setMessage(`❌ Error: ${error.text || error.message || 'Unknown error'}\n\nCheck console for details.`)
      console.error('Visitor tracking test failed:', error)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl border-2 border-blue-500 z-50 max-w-sm">
      <h3 className="font-bold text-lg mb-2 text-gray-800">🧪 Test Visitor Tracking</h3>
      <p className="text-sm text-gray-600 mb-3">
        Click the button below to manually test visitor tracking email.
      </p>
      <button
        onClick={testVisitorTracking}
        disabled={status === 'testing'}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'testing' ? '⏳ Sending...' : '📧 Test Email'}
      </button>
      {message && (
        <div className={`mt-3 p-3 rounded text-sm whitespace-pre-line ${
          status === 'success' ? 'bg-green-50 text-green-800' : 
          status === 'error' ? 'bg-red-50 text-red-800' : 
          'bg-gray-50 text-gray-800'
        }`}>
          {message}
        </div>
      )}
      <p className="text-xs text-gray-500 mt-2">
        ⚠️ Remove this component after testing!
      </p>
    </div>
  )
}

