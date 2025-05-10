"use client"

import * as React from "react"
import { Menu,  X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



export function DrawerMenu() {

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline"><Menu /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
            <div className="flex justify-end items-center">  
          <DrawerClose asChild>
          <X />
            </DrawerClose>
            </div>
            <DrawerHeader>
            <DrawerTitle>Tatiana's flovers</DrawerTitle>
            <DrawerDescription>Tatiana's flovers</DrawerDescription>
          </DrawerHeader>
         
      
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
