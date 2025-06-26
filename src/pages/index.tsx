import { title, subtitle } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import { Image } from '@heroui/image'

interface FeatureCardProps {
  iconSrc: string
  iconAlt: string
  iconBgColor: string
  title: string
  description: string
}

function FeatureCard({
  iconSrc,
  iconAlt,
  iconBgColor,
  title: cardTitle,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-card hover:shadow-card-hover hover:-translate-x-px hover:-translate-y-px transition-all duration-200 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
      <div className="flex-shrink-0">
        <div
          className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center overflow-hidden p-3`}
        >
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={40}
            height={40}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className={title({ size: 'sm' })}>{cardTitle}</h3>
        <p className={subtitle({ class: 'mt-2' })}>{description}</p>
      </div>
    </div>
  )
}

const featuresData = [
  {
    iconSrc: '/public/product.png',
    iconAlt: 'Product Icon',
    iconBgColor: 'bg-foreground',
    title: 'Shoppers',
    description: "Find what you're looking for in your neighborhood",
  },
  {
    iconSrc: '/public/store.png',
    iconAlt: 'Store Icon',
    iconBgColor: 'bg-layout-background',
    title: 'Retailers',
    description:
      'Get your inventory in front of shoppers who are ready to make a purchase',
  },
  {
    iconSrc: '/public/brand.png',
    iconAlt: 'Brand Icon',
    iconBgColor: 'bg-foreground',
    title: 'Brands',
    description: 'Connect with shoppers and retailers in one platform',
  },
]

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="flex-1 max-w-lg text-center md:text-left">
            <span className={title()}>Browse online</span>
            <br />
            <span className={title({ color: 'yellow' })}>
              Buy in store&nbsp;
            </span>
            <div className={subtitle({ class: 'mt-4' })}>
              We're digitizing inventory in your neighborhood so that you can
              browse locally as easily as you browse online.
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/public/phone-city-scape.png"
              alt="Neighborhood shops on your phone"
              width={800}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16">
        <div className="w-full md:max-w-4xl md:mx-auto md:px-6">
          <div className="flex flex-col gap-8 md:gap-12">
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                iconSrc={feature.iconSrc}
                iconAlt={feature.iconAlt}
                iconBgColor={feature.iconBgColor}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
