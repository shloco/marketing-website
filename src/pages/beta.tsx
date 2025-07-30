import { Button } from '@heroui/button'
import { Link } from '@heroui/link'

import { title, subtitle } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import { Image } from '@heroui/image'

// Image URLs for the carousel - update these with your actual image URLs
const carouselImages = [
  '/browse-screen.png',
  '/smell-screen.png',
  '/corner-screen.png',
  '/store-screen.png',
]

export default function BetaPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto text-center px-4">
          {/* Header */}
          <div>
            <span className={title()}>Get the </span>
            <span className={title({ color: 'yellow' })}>Beta</span>
            <div className={subtitle({ class: 'mt-6 max-w-2xl' })}>
              Be among the first to experience Shop Local. Download our beta app
              through TestFlight and help us shape the future of local shopping.
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel - Full Width Outside Section */}
      <div
        className="bg-background overflow-x-auto overflow-y-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
        }}
      >
        <div className="flex gap-4 md:justify-center justify-start">
          {carouselImages.map((imageUrl, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-80 overflow-hidden transition-transform transform"
            >
              <Image
                src={imageUrl}
                alt={`Beta app screenshot ${index + 1}`}
                className="h-full w-auto object-contain"
                classNames={{
                  wrapper: 'h-full w-auto',
                  img: 'h-full w-auto object-contain',
                }}
                radius="lg"
              />
            </div>
          ))}
        </div>
      </div>

      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto text-center px-4">
          {/* Instructions */}
          <div className="bg-background rounded-lg shadow-card p-6 md:p-8 max-w-2xl w-full">
            <h3 className={title({ size: 'sm', class: 'mb-4' })}>
              How to Join
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-bold">
                  1
                </span>
                <p className={subtitle({ class: 'text-black' })}>
                  Tap the TestFlight button below on your iPhone or iPad
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-bold">
                  2
                </span>
                <p className={subtitle({ class: 'text-black' })}>
                  Install the TestFlight app if you don't already have it
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-bold">
                  3
                </span>
                <p className={subtitle({ class: 'text-black' })}>
                  Accept the beta invitation and start exploring! You can
                  download the Shop Local app by tapping the TestFlight link
                  again.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-center gap-4">
            <Button
              as={Link}
              href="https://testflight.apple.com/join/RdfhRb3H"
              size="lg"
              color="primary"
              className="px-8 py-6 text-lg font-semibold bg-background"
              radius="lg"
              startContent={
                <Image
                  src="/test-flight.png"
                  alt="TestFlight Icon"
                  width={32}
                  height={32}
                  radius="none"
                />
              }
            >
              Join Beta on TestFlight
            </Button>
            <p className={subtitle({ class: 'text-sm text-gray-600' })}>
              Available for iOS devices only
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 max-w-xl">
            <p className={subtitle({ class: 'text-black text-sm' })}>
              Have questions? Want to provide feedback? We'd love to hear from
              you! Reach out to us in the app or at{' '}
              <Link
                href="mailto:hello@shlo.co"
                className="text-primary"
              >
                hello@shlo.co
              </Link>
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
