"use client"

import {
    Calculator,
    Calendar,
    Check,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import { ScrollArea } from "@/components/ui/scroll-area"
import { data } from "@/types"
import React from "react"
import { cn } from "@/lib/utils"
  
  export function SearchDesktop() {
      const [value, setValue] = React.useState("")
      console.log(value)
    
    return (
      <Command className="rounded-lg w-[150px] border shadow-md">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <ScrollArea className="h-50 rounded-md border">

          <CommandGroup heading="Suggestions">
          {data.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                  }}
                >
                  {framework.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            
          </CommandGroup>
     
          </ScrollArea>

        </CommandList>

      </Command>
    )
  }
  