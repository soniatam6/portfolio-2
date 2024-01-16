"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
  const { setTheme } = useTheme()
  return (
    <NavigationMenu className='max-w-screen flex items-center px-10 py-5 justify-between'>
      <div>
        <Link href="/" passHref className="text-2xl font-">
          <h1>sonia tam</h1>
        </Link>
      </div>
      <NavigationMenuList className="space-x-3">
      <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h2>about</h2>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal"><h2>projects</h2></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                  key="airwallex website revamp"
                  title="airwallex website revamp"
                  href="/projects/website-revamp"
                  className="hover:bg-slate-50"
                >
                  <p className="font-light">redesigning and revamping Airwallex&apos;s website</p>
              </ListItem>
              <ListItem
                  key="foodboo"
                  title="foodboo"
                  href="/projects/foodboo"
                  className="hover:bg-slate-50"
                >
                  <p className="font-light">designing a food truck directory app and website </p>
              </ListItem>
              <ListItem
                  key="PennInTouch"
                  title="PennInTouch"
                  href="/projects/pennintouch"
                  className="hover:bg-slate-50"
                >
                  <p className="font-light">redesigning Penn&apos;s academic planning worksheet</p>
              </ListItem>
              <ListItem
                  key="localization automation"
                  title="localization automation"
                  href="/projects/localization"
                  className="hover:bg-slate-50"
                >
                  <p className="font-light">building an image localization automation tool</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://soniatam.substack.com/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h2>writings</h2>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h2>resume</h2>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <h2 className="text-[18px] font-semibold leading-none">{title}</h2>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
