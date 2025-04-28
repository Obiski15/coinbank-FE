import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="px-40 pb-16 pt-[100px]">
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-black bg-[url('/icons/landing-pages/about/cta-pattern.svg')] bg-contain bg-left bg-no-repeat pb-[88px] pt-16 text-center">
        <h2 className="text-display-md font-medium tracking-[-0.025rem] text-white">
          Join our mission
        </h2>
        <p className="text-md font-normal tracking-[0.005rem] text-neutral-300">
          Join our mission to bring greater choice, independence, and
          opportunity to individuals around the world.
        </p>
        <Button>Visit Carrers Page</Button>
      </div>
    </div>
  )
}
