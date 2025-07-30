import { Image } from '@heroui/image'
// Image URLs for the carousel - update these with your actual image URLs
const carouselImages = [
  '/browse-screen.png',
  '/smell-screen.png',
  '/corner-screen.png',
  '/store-screen.png',
]

export default function Carousel({ backgroundColor = 'bg-background' }) {
  return (
    <div
      className={` ${backgroundColor} overflow-x-auto overflow-y-hidden`}
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
  )
}
