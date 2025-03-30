import { cn } from "@/lib/utils"

export default function FeatureHeader({
  title,
  subTitle,
  description,
  className,
}: {
  title?: string
  subTitle: string
  description?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "mx-auto space-y-4 text-center max-w-[544px] w-full",
        className
      )}
    >
      <h5 className="text-primary font-medium tracking-[0.035rem]">
        {title || "FEATURES"}
      </h5>
      <h3 className="text-black font-medium text-display-md tracking-tight">
        {subTitle}
      </h3>
      <p className="text-neutral-500 font-normal text-base tracking-[0.005]">
        {description}
      </p>
    </div>
  )
}
