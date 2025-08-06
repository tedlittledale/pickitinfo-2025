import { ReactNode } from 'react'

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  isLoading?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps extends BaseComponentProps {
  title?: string
  description?: string
  footer?: ReactNode
}

export interface FormFieldProps extends BaseComponentProps {
  label: string
  error?: string
  required?: boolean
  helpText?: string
}

export interface InputProps extends FormFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export interface TextareaProps extends FormFieldProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  rows?: number
  disabled?: boolean
}

export interface SelectProps extends FormFieldProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface ToastProps {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  description?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export interface NavigationItem {
  name: string
  href: string
  icon?: ReactNode
  badge?: string | number
  external?: boolean
}

export interface FooterLink {
  name: string
  href: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface HeroSectionProps extends BaseComponentProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  backgroundImage?: string
}

export interface FeatureCardProps extends BaseComponentProps {
  icon: ReactNode
  title: string
  description: string
  link?: {
    text: string
    href: string
  }
}

export interface TestimonialProps {
  name: string
  role: string
  company?: string
  avatar?: string
  content: string
  rating?: number
}

export interface StatsProps {
  label: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
    period: string
  }
  icon?: ReactNode
}