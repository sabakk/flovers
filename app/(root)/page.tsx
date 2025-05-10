import  {SearchDesktop}  from "@/components/product/searchDesktop";
import {ProductList} from "@/components/product/ProductList";
import { SearchMobile } from "@/components/product/searchMobile";
import { SortProduct } from "@/components/product/SortProduct";

export default function Home() {
  return (
   <div className="max-w-7xl lg:mx-auto grid sm:grid-cols-4 sm:gap-5  min-h-full my-5">
    <div className="sm:hidden flex justify-between">
      <SearchMobile/>
    <SortProduct/>
    </div>
    <div className="hidden sm:flex sm:flex-col sm:gap-5 ">
    <SortProduct/>
      <SearchDesktop/>
    </div>
    <div className='sm:col-span-3 h-full '>
      <ProductList/>
    </div>

    </div>
  );
}
