import React from 'react'
import { BASE_API_URL } from '../../../lib/constants'
export type ParamProps = {
    params: {
      id: number
    }
}

async function getDetail(id:number) {
    const data = await fetch(`${BASE_API_URL}products/${id}/`)
    return data.json()
  }

// export async function generateMetadata({params} : ParamProps){
//   const id = params.id
//   const product = await getDetail(id)
//   return {
//     title: product?.title,
//     describe: product.description,
//     openGraph: {
//       images: product.thumbnail,
//     },
//   }
// }

async function page({ params }: ParamProps) {
  const id = params.id;
  const productDetail = await getDetail(id)
  
  return (
    <main className='bg-[whitesmoke]'>
      <section className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 container-sm mx-[20px] sm:mx-[50px] md:mx-[80px] lg:mx-[150px] my-12'>
       <div className='w-[350px] mx-auto sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto'>
        <img className='rounded-md shadow-md' src={productDetail.image} alt="" />
       </div>
       <div className='p-2'>
        <h1 className='text-[24px] font-medium mb-3'
        >{productDetail.name}</h1>
        <p className=' '>{productDetail.desc}</p>
        <div className='flex items-center'>
          <p className='my-4 text-xl md:text-xl lg:text-2xl font-semibold text-[#ff0000] dark:text-white'>${productDetail.price}</p>
          <span
            className="ml-7 md:my-1 md:text-[12px] p-2 sm:p-3 md:p-3 rounded-lg bg-[#ff8b00] lg:px-4 lg:py-3 text-center lg:text-sm font-semibold text-white hover:bg-[#ff8c00da] focus:outline-none focus:ring-4 dark:bg-[#ff8c00] dark:hover:bg-[#ff8c00da]"
          >
            Add to cart
          </span>
        </div>
        
       </div>
    </section>
    </main>
  )
}

export default page