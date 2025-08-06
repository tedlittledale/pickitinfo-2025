import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { NAVIGATION_ITEMS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600">
                PickIt
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav> */}

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* <Button variant="outline" size="sm">
              Download App
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* TODO: Add mobile menu toggle */}
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
