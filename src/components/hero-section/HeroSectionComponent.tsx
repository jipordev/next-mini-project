import React from 'react'
import BannerComponent from '../images/Banner'

export default function HeroSectionComponent() {
  return (
        <section className="container-sm mx-5 md:mx-[100px] grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col justify-evenly m-auto">
            <h3 className='mb-3 text-xl sm:text-xl md:text-2xl font-semibold'>Life is short, please buy my products</h3>
            <h2 className="text-[27px] sm:text-4xl md:text-5xl font-bold pb-2 leading-normal">Welcome to Chh1p Shop</h2>
            <p>From blossoming flowers to refreshing scents, Chh1p Shop brings you the finest selection of seasonal delights. Whether you are looking to brighten up your home or refresh your wardrobe, our handpicked items capture the essence of springtime beauty. Experience the joy of the season with Spring Shop today.</p>
            <button className='rounded-xl mr-auto font-semibold  my-5 px-6 py-2 border-[1px] w-max border-[#ff8b00] hover:bg-[#ff8b00] hover:text-white'>Get More</button>
          </div>
          <div className="m-auto">
            <BannerComponent/>
          </div>
        </section>
  )
}
