import { Image } from '@heroui/image'
export default function ScreenshotCarousel({
  backgroundColor = 'bg-background',
  items,
}: {
  backgroundColor?: string
  items: {
    src: string
    alt: string
    label: string
  }[]
}) {
  return (
    <div
      className={` ${backgroundColor} overflow-x-auto overflow-y-hidden`}
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
      }}
    >
      <div className="flex gap-4 md:justify-center justify-start pt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center gap-2 w-60 pl-4 pr-4"
          >
            {/* Label */}
            <div className="text-xs font-medium text-foreground text-center px-2 pb-4 pt-4 w-full break-words whitespace-normal">
              {item.label}
            </div>

            {/* Image Container */}
            <div
              className="overflow-hidden transition-transform transform w-full"
              style={{ height: '380px' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="w-auto object-cover mx-auto h-80"
                classNames={{
                  wrapper: 'w-full flex justify-center',
                  img: 'h-full w-auto object-cover object-top border-4 border-black',
                }}
                style={{
                  borderRadius: '30px',
                }}
                radius="none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
