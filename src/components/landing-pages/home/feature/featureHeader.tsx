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
        "mx-auto w-full max-w-[544px] space-y-4 text-center",
        className
      )}
    >
      <h5 className="font-medium tracking-[0.035rem] text-primary">
        {title || "FEATURES"}
      </h5>
      <h3 className="text-display-md font-medium tracking-tight text-black">
        {subTitle}
      </h3>
      <p className="text-base font-normal tracking-[0.005] text-neutral-500">
        {description}
      </p>
    </div>
  )
}
