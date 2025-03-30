import { Badge } from "@/components/ui/badge"

export default function Numbers() {
  return (
    <div className="py-12 px-40">
      <div className="flex justify-between items-center gap-8 text-center">
        <div className="space-y-4">
          <h3 className="font-medium text-display-md text-black tracking-[-0.04rem]">
            1 million+
          </h3>
          <p className="text-neutral-500 font-normal text-sm">Volume traded</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-display-md text-black tracking-[-0.04rem] flex justify-between items-start">
            <span>50+</span>
            <Badge
              variant="secondary"
              className="py-1 px-3 text-black text-xs tracking-wider rounded-3xl"
            >
              counting...
            </Badge>
          </h3>
          <p className="text-neutral-500 font-normal text-sm">
            Countries supported
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-display-md text-black tracking-[-0.04rem]">
            1 platform
          </h3>
          <p className="text-neutral-500 font-normal text-sm">
            For crypto wallet and trading
          </p>
        </div>
      </div>
    </div>
  )
}
