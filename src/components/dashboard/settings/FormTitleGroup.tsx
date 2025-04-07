import { cn } from "@/lib/utils"

interface Properties {
  title: string
  description: string
  className?: string
}

export default function FormTitleGroup({
  title,
  description,
  className,
}: Properties) {
  return (
    <div className={cn("space-y-0.5 pt-8", className)}>
      <p className="text-md font-medium tracking-wider text-neutral-900">
        {title}
      </p>
      <p className="text-sm font-normal text-neutral-500">{description}</p>
    </div>
  )
}
