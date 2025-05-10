import { data, Product } from "@/types"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
    // const data:Product[] = [
    //     {slug: "qqq1", name: "Rose", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    //     {slug: "qqq2", name: "Rose", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    //     {slug: "qqq3", name: "Rose", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    //     {slug: "qqq4", name: "Rose", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    //     {slug: "qqq5", name: "Rose", price: "50 grn",images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    // ]
    return(
<div className="">
    {data.length > 0 ? (
        <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4'>
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
</div>
    )
}

