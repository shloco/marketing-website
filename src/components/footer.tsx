import { Link } from '@heroui/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-background">
      <div className="w-full md:max-w-4xl md:mx-auto md:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {siteConfig.footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} shlo co. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
