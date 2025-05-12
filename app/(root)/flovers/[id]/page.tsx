import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
// import ProductImages from '@/components/shared/product/product-images';
// import AddToCart from '@/components/shared/product/add-to-cart';
// import { getMyCart } from '@/lib/actions/cart.actions';
import ProductPrice from '@/components/product/productPrice';
// import { auth } from '@/auth';
import Image from 'next/image';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  // const product = await getProductBySlug(slug);
  // if (!product) notFound();
(console.log(slug))
   const product = await getProductBySlug(slug);
  if (!product) notFound();
  // const session = await auth();
  // const userId = session?.user?.id;

  // const cart = await getMyCart();

  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          <div className='col-span-2'>
          <Image
        src={"https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"}
        alt='product image'
        width={500}
        height={500}
        className='min-h-[300px] object-cover object-center'
      />          
      </div>
          <div className='col-span-2 p-5'>
            <div className='flex flex-col gap-6'>
              
              <h1 className='h3-bold'>Chrisontem</h1>
              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <ProductPrice
                  value={Number(35)}
                  className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'
                />
              </div>
            </div>
            <div className='mt-10'>
              <p className='font-semibold'>Description</p>
              <p>Best flover for your garden</p>
            </div>
          </div>
          {/* Action Column */}
          <div>
            <Card>
              <CardContent className='p-4'>
                <div className='mb-2 flex justify-between'>
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(35)} />
                  </div>
                </div>
                <div className='mb-2 flex justify-between'>
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant='outline'>In Stock</Badge>
                  ) : (
                    <Badge variant='destructive'>Out Of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className='flex-center'>
                    {/* <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    /> */}

                  </div>
                )}
                
                   {/* <Button variant="default" className="w-full mt-4">Order</Button> */}
        <Link href={`/cart`}> <Button variant="default" className="w-full mt-4">Order</Button></Link>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;