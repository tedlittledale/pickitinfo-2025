'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function FeedbackForm() {
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
      subject: 'User Feedback',
      message: formData.get('feedback'),
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
        setMessage('Thank you for your feedback! We appreciate your input.')
        e.currentTarget.reset()
      } else {
        const errorData = await response.json()
        setMessage(errorData.error || 'Failed to send feedback. Please try again.')
      }
    } catch {
      setMessage('Failed to send feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="feedback-name" className="block text-sm font-medium text-slate-700 mb-2">
          Name (optional)
        </label>
        <Input id="feedback-name" name="name" type="text" />
      </div>
      
      <div>
        <label htmlFor="feedback-email" className="block text-sm font-medium text-slate-700 mb-2">
          Email (optional)
        </label>
        <Input id="feedback-email" name="email" type="email" />
      </div>
      
      <div>
        <label htmlFor="feedback-message" className="block text-sm font-medium text-slate-700 mb-2">
          Your Feedback *
        </label>
        <textarea
          id="feedback-message"
          name="feedback"
          rows={4}
          required
          className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          placeholder="Tell us what you think..."
        />
      </div>
      
      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Feedback'}
      </Button>
      
      {message && (
        <p className={`text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  )
}