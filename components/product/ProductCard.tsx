import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Product } from "@/types"
import Link from "next/link"
import Image from 'next/image';
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="grid justify-items-center">
      <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent>
      <Link href={`/flovers/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col">
      <p className='text-lg font-medium pb-5'>{product.price}</p>
        <Button variant="default" className="w-full">Order</Button>
      </CardFooter>
    </Card>
  )
}
