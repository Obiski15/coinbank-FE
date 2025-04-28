import Image from "next/image"

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-white pb-[84px] pt-16">
      <p className="text-[5rem] font-medium tracking-tighter text-primary">“</p>
      <h2 className="w-full max-w-[736px] text-center text-display-md font-medium tracking-[0.025rem] text-black">
        Its low fees, high rates for staking, and futures markets are all a
        draw.
      </h2>
      <div className="flex items-center justify-between gap-4">
        <Image
          src="/images/landing-pages/about/testimonial.png"
          alt="John Clayton"
          className="rounded-[50%]"
          width={40}
          height={40}
        />
        <div className="space-y-[2px]">
          <p className="tetx-sm font-medium text-[#000000]">John Clayton</p>
          <p className="text-xs font-normal tracking-[0.00375rem] text-neutral-500">
            Investor
          </p>
        </div>
      </div>
      <p className="text-[5rem] font-medium tracking-tighter text-primary">”</p>
    </div>
  )
}
