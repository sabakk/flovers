import { PrismaClient, Prisma } from '../app/generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const productData: Prisma.ProductCreateInput[] = [
 {
      name: 'Flover1',
      slug: '1',
      category: "Flover1",
      description: 'Best flover for your garden',
      image: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg",
      price: 59.99,
      // numReviews: 10,
      stock: 5,
      isFeatured: true,
    },
    {
      name: 'Rose',
      slug: '2',
      category: "Flover2",
      description: 'Best flover for your garden',
      image: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg",
      price: 85.9,
      // numReviews: 8,
      stock: 10,
      isFeatured: true,
    },
]

export async function main() {
  for (const p of productData) {
    await prisma.product.create({ data: p })
  }
}

main()