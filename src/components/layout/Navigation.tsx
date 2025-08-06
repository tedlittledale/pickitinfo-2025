import Link from 'next/link'
import { NAVIGATION_ITEMS } from '@/lib/constants'

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={className}>
      <ul className="flex space-x-8">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}