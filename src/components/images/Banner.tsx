import Image from "next/image"

export default function BannerComponent() {
  return (
    <div>
        <Image className="w-auto h-[300px]" src="./banner.png" alt="" />
    </div>
  )
}
