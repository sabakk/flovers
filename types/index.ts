export type Product = {slug: string, value: string, name:string, price: string, images: string}
export const data:Product[] = [
    {slug: "1", value: "Flover1", name: "Flover1", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "2", value: "Flover2", name: "Flover2", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "3", value: "Flover3", name: "Flover3", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "4", value: "Flover4", name: "Flover4", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "5", value: "Flover5",  name: "Flover5", price: "50 grn",images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "6", value: "Flover6", name: "Flover6", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "7", value: "Flover7", name: "Flover7", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "8", value: "Flover8", name: "Flover8", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
    {slug: "9", value: "Flover9", name: "Flover9", price: "50 grn", images: "https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg"},
]


import { z } from 'zod';
import {
  insertProductSchema,
  insertCartSchema,
  cartItemSchema,

} from '@/lib/validation';

// export type Product = z.infer<typeof insertProductSchema> & {
//   id: string;
//   rating: string;
//   numReviews: number;
//   createdAt: Date;
// };

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
