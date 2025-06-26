import BetaPage from '@/pages/beta'
import PrivacyPage from '@/pages/privacy'
import TermsPage from '@/pages/terms'

export type SiteConfig = typeof siteConfig

type NavItem = {
  label: string
  href: string
  element?: React.ComponentType
  style?: 'link' | 'button' | 'text'
}

export const siteConfig: {
  name: string
  description: string
  navItems: NavItem[]
  footerLinks: NavItem[]
  links: {
    github: string
    twitter: string
    docs: string
    discord: string
    sponsor: string
  }
} = {
  name: 'Vite + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      href: '/beta',
      label: 'Join the Beta',
      element: BetaPage,
      style: 'button',
    },
  ],
  footerLinks: [
    { href: '/privacy', label: 'Privacy Policy', element: PrivacyPage },
    { href: '/terms', label: 'Terms of Service', element: TermsPage },
    // { href: '/terms', label: 'Terms of Service' },
    // { href: '/legal', label: 'Legal' },
    // { href: '/cookies', label: 'Cookie Policy' },
    // { href: '/contact', label: 'Contact Us' },
    // { href: '/about', label: 'About' },
  ],
  links: {
    github: 'https://github.com/frontio-ai/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
}
