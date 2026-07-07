import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Button } from './ui/button'

const NavBar = () => {
  return (
    <>
    <div className="flex flex-col sm:flex-row gap-2 items-center">
        <Button className=" m-4 flex flex-col sm:flex-row" variant="ghost">
          Home
        </Button>
        <div className="flex-col item-center gap-2 justify-center sm:flex-row ">
    <div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col sm:flex-row gap-2 items-center">
            <NavigationMenuItem >
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Clothes</NavigationMenuLink>
                <NavigationMenuLink>Shoes</NavigationMenuLink>
                <NavigationMenuLink>Accories</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem >
              <NavigationMenuTrigger>Grocessry</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Food</NavigationMenuLink>
                <NavigationMenuLink>Vegetables</NavigationMenuLink>
                <NavigationMenuLink>Fruits</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </div>
    </div>
    </div>  
    </> 
  )
}

export default NavBar
    
