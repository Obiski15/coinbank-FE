import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Subscribe() {
  return (
    <div className="bg-white px-40 pt-[88px]">
      <div className="flex items-center justify-center rounded-2xl bg-black bg-[url('/images/landing-pages/blog/envelope.svg')] bg-left bg-no-repeat px-[200px] py-8">
        <div className="flex items-center justify-between gap-10">
          <p className="text-lg font-medium text-white">Stay up to date</p>
          <form className="flex items-center justify-between gap-4">
            <Input placeholder="Enter Your Email" />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
