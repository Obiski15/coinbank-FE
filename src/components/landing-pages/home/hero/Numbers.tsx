import * as motion from "framer-motion/client"

import { Badge } from "@/components/ui/badge"

export default function Numbers() {
  const animationOptions = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
  }

  return (
    <div className="px-5 py-12 md:px-10 lg:px-40">
      <div className="gap-8 text-center max-lg:space-y-8 md:flex md:items-center md:justify-between">
        <motion.div {...animationOptions} className="space-y-4">
          <h3 className="text-display-md font-medium tracking-[-0.04rem] text-black">
            1 million+
          </h3>
          <p className="text-sm font-normal text-neutral-500">Volume traded</p>
        </motion.div>
        <motion.div {...animationOptions} className="space-y-4">
          <h3 className="flex items-start justify-center text-display-md font-medium tracking-[-0.04rem] text-black">
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
        </motion.div>
        <motion.div {...animationOptions} className="space-y-4">
          <h3 className="text-display-md font-medium tracking-[-0.04rem] text-black">
            1 platform
          </h3>
          <p className="text-sm font-normal text-neutral-500">
            For crypto wallet and trading
          </p>
        </motion.div>
      </div>
    </div>
  )
}
