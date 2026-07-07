import React from 'react'
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "./components/ui/field"
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { ArrowRightIcon } from 'lucide-react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from './components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet"
import { Menu } from 'lucide-react';
import NavBar from './components/NavBar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { Card, CardContent } from "./components/ui/card"




const App = () => {
  return (
    <>
      <div className=" justify-center items-center hidden sm:flex">
        <NavBar />
      </div>
      <div className="flex justify-end  sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader>
            <NavBar />
          </SheetContent>
        </Sheet>
      </div>


      <div className="flex flex-col items-center justify-center ">
        <Field className="flex flex-col items-center justify-center">
          <FieldLabel className="flex flex-col item-center justify-center" htmlFor="input-field-username">Enter Product Name</FieldLabel>
          <Input className="max-w-sm"
            id="input-field-username"
            type="text"
            placeholder="Enter Product Name"
          />
          <FieldDescription className="flex flex-col items-center justify-center">
            Choose a unique product name for your account.
          </FieldDescription>
        </Field>
        <Button size="default" variant="destructive">Click me
          <ArrowRightIcon />
        </Button>
      </div>

      <div className="flex justify-center items-center">
            <Carousel className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

      </div>
    </>
  )
}


export default App

