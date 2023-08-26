'use client';

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navList } from '../constants';
import { ThemeToggle } from "./ThemeToggle";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full h-16 z-40 bg-inherit border-b border-neutral-500">
      <div className="flex justify-between w-full h-full items-center px-4">
        <Link 
        className="text-5xl font-semibold"
        href={'/'}
        >
          em.
        </Link>
        <div className="flex items-center gap-2 divide-x divide-neutral-500">
          <ThemeToggle />
          <Hamburger />
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList>
              {navList.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={`#${item.id}`} legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-[#1c1c1c] text-xl`}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar