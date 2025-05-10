import Image from 'next/image'
 
export default function SubHeader() {
  return (
    <div className='max-w-7xl  min-w-[500px] py-20  block w-full h-[162px] mx-auto bg-[url(/flowers-header.webp)]'>
{/* <div className='max-w-7xl  min-w-[500px]   w-full h-[162px] mx-auto '> */}
 {/* <img className='block h-[162px] w-full object-cover' src={"/flowers-header.webp"} /> */}
 {/* <Image
      src="/flowers-header.webp"
    //   objectFit="cover"
      height={500}
      width={500}
    // fill={true}
    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

      alt="Picture of the flovers"
    /> */}
    </div>
   
  )
}