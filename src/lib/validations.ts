import { z } from 'zod'

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter form validation
export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>

// Feedback form validation
export const feedbackFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
})

export type FeedbackFormData = z.infer<typeof feedbackFormSchema>

// Validation helper functions
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

export function validateRequired(value: unknown, fieldName: string): string | null {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} is required`
  }
  return null
}

export function validateMinLength(value: string, minLength: number, fieldName: string): string | null {
  if (value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`
  }
  return null
}

export function validateMaxLength(value: string, maxLength: number, fieldName: string): string | null {
  if (value.length > maxLength) {
    return `${fieldName} must be no more than ${maxLength} characters`
  }
  return null
}