import { title, subtitle } from '@/components/primitives'
import ScreenshotCarousel from '@/components/screen-shot-carousel'
import DefaultLayout from '@/layouts/default'
import { Image } from '@heroui/image'

import {
  IconAdCircle,
  IconClock,
  IconDeviceAnalytics,
  IconMap2,
} from '@tabler/icons-react'
import { ReactElement } from 'react'

interface RetailerFeatureProps {
  iconSrc?: string
  iconAlt?: string
  icon?: ReactElement
  iconBgColor: string
  title: string
  description: string
  comingSoon?: boolean
}

function RetailerFeature({
  icon,
  iconSrc,
  iconAlt,
  comingSoon,
  title: featureTitle,
  description,
}: RetailerFeatureProps) {
  return (
    <div className="rounded-lg shadow-card duration-200 flex flex-col overflow-hidden relative">
      {/* Header: Icon + Title */}
      <div className="flex items-center gap-4 bg-background p-2 relative overflow-hidden">
        <div
          className={`w-12 h-12 aspect-square  rounded-full flex items-center justify-center overflow-hidden p-2`}
        >
          {icon ? (
            icon
          ) : (
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={32}
              height={32}
              className="object-contain w-full h-full"
            />
          )}
        </div>
        <h3 className={subtitle({ class: 'text-white' })}>{featureTitle}</h3>
      </div>
      {/* Body: Description */}
      <div className="p-4 text-center md:text-left ">
        <p className={subtitle({ class: `mt-0 ${comingSoon ? 'pb-2' : ''}` })}>
          {description}
        </p>
        {/* Coming Soon Banner */}
        {comingSoon && (
          <div className="absolute bottom-4 -right-8 bg-yellow-100 text-black text-xs font-medium px-10 py-1 transform -rotate-[30deg] origin-center z-10">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  )
}

const retailerFeatures: RetailerFeatureProps[] = [
  {
    icon: <IconMap2 />,
    iconAlt: 'Local Discovery Icon',
    iconBgColor: 'bg-yellow-100',
    title: 'Local Discovery',
    description:
      'Get discovered by nearby shoppers actively looking for products you carry, increasing foot traffic to your physical location.',
  },
  {
    iconSrc: '/product.png',
    iconAlt: 'Inventory Management Icon',
    icon: <IconClock />,
    iconBgColor: 'bg-green-100',
    title: 'Real-Time Inventory',
    comingSoon: true,
    description:
      'Keep your online listings automatically synced with your in-store inventory to prevent overselling and disappointed customers.',
  },
  {
    iconSrc: '/brand.png',
    iconAlt: 'Customer Analytics Icon',
    icon: <IconDeviceAnalytics />,
    iconBgColor: 'bg-purple-100',
    title: 'Shopper Insights',
    comingSoon: true,
    description:
      'Understand your customers better with detailed analytics on browsing patterns, popular products, and shopping preferences.',
  },
  {
    iconSrc: '/product.png',
    iconAlt: 'Promoted Content',
    icon: <IconAdCircle />,
    iconBgColor: 'bg-red-100',
    title: 'Marketing Tools',
    description:
      'Highlight special offers, new arrivals, and seasonal sales directly to customers in your area through targeted notifications and in-app ads.',
  },
]

export default function RetailersPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto text-center px-4">
          <div>
            <span className={title()}>Your store </span>
            <span className={title({ color: 'yellow' })}>on Shop Local</span>
            <div className={subtitle({ class: 'mt-6 max-w-3xl' })}>
              Connect with customers in your neighborhood who are actively
              looking online for the products you sell.
            </div>
            <blockquote className="mt-8 px-6 py-4 bg-muted rounded-lg text-muted-foreground text-base font-medium italic border-l-4 border-purple">
              <a
                href="https://www.retaildive.com/news/87-of-shoppers-now-begin-product-searches-online/530139/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                “87% of shoppers now begin product searches online”
              </a>
            </blockquote>
          </div>
        </div>
      </section>
      <ScreenshotCarousel
        items={[
          {
            src: '/carousels/retailer/map.png',
            alt: 'Store previewo on map',
            label: 'Show up on the map',
          },
          {
            src: '/carousels/retailer/search-results.png',
            alt: 'Search Results',
            label: 'and in the search results',
          },
          {
            src: '/carousels/retailer/inventory.png',
            alt: 'Inventory',
            label: 'and your dedicated store page',
          },
        ]}
      />

      {/* Features Section */}
      <section className="py-8">
        <div className="w-full md:max-w-5xl md:mx-auto md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {retailerFeatures.map((feature, index) => (
              <RetailerFeature
                key={index}
                {...feature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className={title({ size: 'md', class: 'mb-6' })}>
            Ready to Get Started?
          </h2>
          <p className={subtitle({ class: 'mb-8 max-w-2xl mx-auto' })}>
            Join {/*hundreds of*/} local retailers who are already using Shop
            Local to grow their business and connect with their community in new
            ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-background rounded-lg shadow-card p-6">
              <p className={subtitle({ class: 'text-sm' })}>
                Contact us at{' '}
                <a
                  href="mailto:retailers@shlo.co"
                  className="text-primary hover:underline"
                >
                  retailers@shlo.co
                </a>{' '}
                to schedule a demo and see how Shop Local can help your business
                grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
