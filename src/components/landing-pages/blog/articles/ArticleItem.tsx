import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

interface Properties {
  title: string
  href: string
  image: string
}
export default function ArticleItem({ title, href, image }: Properties) {
  return (
    <Link
      href={href}
      className="col-span-1 rounded-2xl shadow-[0px_0px_12px_0px_#5235E833]"
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={image}
          alt="article"
          fill
          className="rounded rounded-t-2xl"
        />
      </div>
      <div className="space-y-3 p-8 pt-6">
        <p className="text-lg font-medium text-[#000000]">{title}</p>
        <div className="flex w-fit items-center justify-between gap-2 text-neutral-500">
          <p>#crypto</p>
          <p className="size-1 rounded-full bg-neutral-300"></p>
          <p>{format(new Date(), "PP")}</p>
        </div>
      </div>
    </Link>
  )
}
