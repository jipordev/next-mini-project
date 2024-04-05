import Image from "next/image"

export default function BannerComponent() {
  return (
    <div>
        <Image height={300} width={300} className="w-auto" src="https://store.istad.co/media/brand_images/banner.png" alt="" />
    </div>
  )
}
