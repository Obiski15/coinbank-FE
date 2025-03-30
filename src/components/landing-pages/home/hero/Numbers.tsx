import { Badge } from "@/components/ui/badge"

export default function Numbers() {
  return (
    <div className="px-40 py-12">
      <div className="flex items-center justify-between gap-8 text-center">
        <div className="space-y-4">
          <h3 className="text-display-md font-medium tracking-[-0.04rem] text-black">
            1 million+
          </h3>
          <p className="text-sm font-normal text-neutral-500">Volume traded</p>
        </div>
        <div className="space-y-4">
          <h3 className="flex items-start justify-between text-display-md font-medium tracking-[-0.04rem] text-black">
            <span>50+</span>
            <Badge
              variant="secondary"
              className="rounded-3xl px-3 py-1 text-xs tracking-wider text-black"
            >
              counting...
            </Badge>
          </h3>
          <p className="text-sm font-normal text-neutral-500">
            Countries supported
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-display-md font-medium tracking-[-0.04rem] text-black">
            1 platform
          </h3>
          <p className="text-sm font-normal text-neutral-500">
            For crypto wallet and trading
          </p>
        </div>
      </div>
    </div>
  )
}
