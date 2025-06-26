import { Kbd } from '@heroui/kbd'
import { Link } from '@heroui/link'
import { Input } from '@heroui/input'
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar'
import { link as linkStyles } from '@heroui/theme'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { FullLogo, SearchIcon } from '@/components/icons'

export const Navbar = () => {
  // @ts-ignore
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd
          className="hidden lg:inline-block"
          keys={['command']}
        >
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  )

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent
        className="basis-1/5 sm:basis-full"
        justify="start"
      >
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <FullLogo width={200} />
            {/* <p className="font-bold text-inherit">Shop Local</p> */}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <div className="flex gap-4 justify-end">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {item.style === 'button' ? (
                <Link
                  className={clsx(
                    'bg-purple text-primary-background hover:bg-purple/90',
                    'flex items-center h-10 px-4 rounded-lg font-medium transition-colors',
                    'data-[active=true]:bg-primary/80'
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : item.style === 'text' ? (
                <span className="flex items-center h-16 px-3 text-foreground font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium',
                    'flex items-center h-16 px-3'
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="sm:hidden basis-1 pl-4"
        justify="end"
      >
        {siteConfig.navItems.length ? <NavbarMenuToggle /> : null}
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item.style === 'button' ? (
                <Link
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors block text-center"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              ) : item.style === 'text' ? (
                <span className="text-foreground font-medium py-2 px-4 block">
                  {item.label}
                </span>
              ) : (
                <Link
                  color="foreground"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
