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
import { Logo } from '@/components/icons'

export const Navbar = () => {
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
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
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
              <Link
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
