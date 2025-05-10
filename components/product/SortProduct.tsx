import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SortProduct() {
  return (
    <Select>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorting</SelectLabel>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="priceup">Price Up</SelectItem>
          <SelectItem value="pticedown">Price Down</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
