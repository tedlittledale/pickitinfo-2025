'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setMessage('Message sent successfully! We\'ll get back to you within 24 hours.')
        e.currentTarget.reset()
      } else {
        const errorData = await response.json()
        setMessage(errorData.error || 'Failed to send message. Please try again.')
      }
    } catch {
      setMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
          Name *
        </label>
        <Input id="name" name="name" type="text" required />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email *
        </label>
        <Input id="email" name="email" type="email" required />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
          Subject *
        </label>
        <Input id="subject" name="subject" type="text" required />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        />
      </div>
      
      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      {message && (
        <p className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  )
}