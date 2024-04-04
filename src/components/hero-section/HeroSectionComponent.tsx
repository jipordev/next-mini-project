import React from 'react'
import BannerComponent from '../images/Banner'

export default function HeroSectionComponent() {
  return (
        <section className="container-sm mx-[100px] grid grid-cols-2 gap-10 mt-12">
          <div className="flex flex-col justify-evenly m-auto">
            <h2 className="text-4xl font-bold py-3 leading-normal">Welcome to Chh1p Shop</h2>
            <p>From blossoming flowers to refreshing scents, Spring Shop brings you the finest selection of seasonal delights. Whether you're looking to brighten up your home or refresh your wardrobe, our handpicked items capture the essence of springtime beauty. Experience the joy of the season with Spring Shop today.</p>
            <button className='rounded-xl ml-56 font-semibold  my-5 px-6 py-2 border-[1px] w-max border-[#ff8b00] hover:bg-[#ff8b00] hover:text-white'>Get More</button>
          </div>
          <div className="m-auto">
            <BannerComponent/>
          </div>
        </section>
  )
}
