import Link from "next/link"
import { CircleHelp } from "lucide-react"

function FaqLinkIcon() {
  return (
    <div className="flex items-center justify-end">
      <Link
        href="/faq"
        className="flex size-10 w-fit cursor-pointer items-center justify-center rounded-full p-2 shadow-[0px_0px_8px_0px_#5235E81A]"
      >
        <CircleHelp className="size-6 text-primary" />
      </Link>
    </div>
  )
}

export default FaqLinkIcon
