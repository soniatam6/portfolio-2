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
import { IonIcon } from "@ionic/react"
import dynamic from 'next/dynamic';


export default function Navbar() {
  const [state, setState] = React.useState(false)
  const IonIcon = dynamic(
    () => import('@ionic/react').then((mod) => mod.IonIcon),
    { ssr: false }
  );
  return (
    <NavigationMenu className="bg-cream_v3 w-full border-b md:border-0">
      <div className="items-center w-screen mx-auto md:flex md:px-8">
        <div className="w-screen px-4 md:px-0 flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-2xl font-semibold">sonia tam</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 flex items-center justify-center outline-none p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              <IonIcon name='menu-outline' size="large" />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <NavigationMenuList className="flex flex-col md:space-x-3 md:flex-row md:items-center items-end">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h2 className="text-xl" >about</h2>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal"><h2 className="text-xl">projects</h2></NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="bg-cream_v3 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <ListItem
                    key="AI search redesign"
                    title="AI search redesign"
                    href="/projects/glean"
                    className="hover:bg-beige_v3"
                  >
                    <p className="font-light">redesigning Glean&apos;s enterprise search results page</p>
                  </ListItem>
                  <ListItem
                    key="designing product narratives"
                    title="designing product narratives"
                    href="/projects/website-revamp"
                    className="hover:bg-beige_v3"
                  >
                    <p className="font-light">revamping and designing Airwallex&apos;s fintech product narratives</p>
                  </ListItem>
                  <ListItem
                    key="food truck app"
                    title="food truck app"
                    href="/projects/foodboo"
                    className="hover:bg-beige_v3"
                  >
                    <p className="font-light">designing a food truck directory app to help students discover food trucks </p>
                  </ListItem>
                  <ListItem
                    key="course planning redesign"
                    title="course planning redesign"
                    href="/projects/pennintouch"
                    className="hover:bg-beige_v3"
                  >
                    <p className="font-light">redesigning Penn&apos;s course planning software</p>
                  </ListItem>
                  <ListItem
                    key="localization automation tool"
                    title="localization automation tool"
                    href="/projects/localization"
                    className="hover:bg-beige_v3"
                  >
                    <p className="font-light">building an image localization automation tool</p>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://soniatam.substack.com/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h2 className="text-xl">writings</h2>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://drive.google.com/file/d/1saY8aD8bRycttRxXK0x5emqokiC-xmz4/view?usp=sharing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h2 className="text-xl">resume</h2>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </div>
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