import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

function ContactUs() {
  return (
    <div className="px-40 py-24">
      <div className="b-20 space-y-10 rounded-3xl bg-black bg-[url('/icons/landing-pages/faq/contact-us-pattern.svg')] bg-cover bg-left-bottom py-16">
        <h2 className="text-center text-display-md font-medium tracking-[-0.0025rem] text-white">
          Can&apos;t find what you&apos;re looking for?
        </h2>

        <div className="flex w-full items-center justify-center">
          <Button className="mx-auto" Icon={<Mail />}>
            contact us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
