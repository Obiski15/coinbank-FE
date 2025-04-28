import Image from "next/image"
import { format } from "date-fns"

export default function FeaturedArticle() {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-2xl shadow-[0px_0px_12px_0px_#5235E833] md:flex-row">
      <div className="relative h-[348px] w-[544px] border-2">
        <Image src="/images/landing-pages/blog/chart.png" alt="chart" fill />
      </div>

      <div className="p-4 xl:w-[calc(100%-544px)]">
        <div className="space-y-4">
          <h2 className="text-display-sm font-medium tracking-[-0.02rem] text-[#000000]">
            Cryptocurrency News: Building in Resiliency and International
            Co-Operation
          </h2>
          <p className="text-sm font-normal text-neutral-500">
            Introducing the all new Coinbank identity, own your crypto adventure
            and driving mass adoption.
          </p>
          <div className="flex w-fit items-center justify-between gap-2 text-neutral-500">
            <p>#crypto</p>
            <p className="size-1 rounded-full bg-neutral-300"></p>
            <p>{format(new Date(), "PP")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
