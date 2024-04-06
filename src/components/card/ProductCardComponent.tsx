import { Card } from "flowbite-react";
import { ProductType } from "../types/ProductType";
import Image from "next/image";
import styles from './ProductCard.module.css';

function ProductCard({name, price, image, desc, quantity}:ProductType) {
  return (
    <div 
      className={`${styles.productCard} max-w-sm bg-[#ffffff] shadow-sm rounded-md flex flex-col justify-between`}
    >
      <div className="lg:h-56 overflow-hidden">
       <Image width={1000} height={1000} src={image} className="w-full h-full object-cover shadow-sm rounded-t-md" alt={""}/>
      </div>
      <div className="p-4 sm:p-4 md:p-4 lg:p-6"> 
      <div>
        <h5 className=" lg:text-xl font-semibold tracking-tight text-[#34416A] dark:text-white">
          {name}
        </h5> 
      </div>
      <div className="md:flex-col lg:flex-row flex items-center justify-between">
        <span className="text-md md:text-lg lg:text-xl font-semibold text-gray-500 dark:text-white">${price}</span>
        <button className="text-[14px] sm:p-2 md:p-3 font-semibold text-gray-50 px-4 py-2 rounded-xl bg-[#ff8b00] hover:text-white hover:bg-[#ff8c00da]">Add to cart</button>
      </div>
      </div>
    </div>
  );
}
export default ProductCard
