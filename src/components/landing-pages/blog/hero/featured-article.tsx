import { format } from "date-fns"

export default function FeaturedArticle() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-[544px] border-2">chart</div>
      <div className="p-16">
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
