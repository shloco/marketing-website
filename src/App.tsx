import { Route, Routes } from 'react-router-dom'

import IndexPage from '@/pages/index'
import DocsPage from '@/pages/docs'
import PricingPage from '@/pages/pricing'
import BlogPage from '@/pages/blog'
import AboutPage from '@/pages/about'

import { siteConfig } from './config/site'
import { useMemo } from 'react'

function App() {
  const routesWithElements = useMemo(() => {
    return siteConfig.footerLinks
      .filter((link) => link.element)
      .concat(siteConfig.navItems.filter((navItem) => navItem.element))
  }, [])
  return (
    <Routes>
      <Route
        element={<IndexPage />}
        path="/"
      />
      <Route
        element={<DocsPage />}
        path="/docs"
      />
      <Route
        element={<PricingPage />}
        path="/pricing"
      />
      <Route
        element={<BlogPage />}
        path="/blog"
      />
      <Route
        element={<AboutPage />}
        path="/about"
      />
      {routesWithElements.map((route, index) => (
        <Route
          key={index}
          path={route.href}
          element={route.element ? <route.element /> : null}
        />
      ))}
    </Routes>
  )
}

export default App
