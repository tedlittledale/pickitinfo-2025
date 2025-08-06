import Link from "next/link";
import { LEGAL_PAGES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary-600">
                PickIt
              </span>
            </Link>
            <p className="text-sm text-slate-600 mb-4">
              Transforming communities through technology-enabled environmental
              action.
            </p>
            <p className="text-xs text-slate-500">
              © 2025 PickIt. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          {/* <div>
            <h3 className="font-semibold text-slate-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Support */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {/*<li>
                 <Link
                  href="/help"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Help Center
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/faq"
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  FAQ
                </Link>
              </li> */}
              {/* <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_PAGES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
