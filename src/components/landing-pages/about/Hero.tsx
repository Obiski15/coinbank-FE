import Image from "next/image"

export default function Hero() {
  return (
    <div className="space-y-[100px] bg-[linear-gradient(0deg,_#FFFFFF_-10.28%,_#EFEDFD_63.13%,_#FFFFFF_100%)] px-40 pt-16">
      <div className="mx-auto space-y-6 text-center">
        <p className="text-sm font-medium tracking-[0.035rem] text-primary">
          ABOUT
        </p>
        <h3 className="text-display-lg font-medium tracking-[-0.04rem]">
          Building cryptocurrency platform for everyone
        </h3>
      </div>

      <Image
        alt="hero"
        src="/images/landing-pages/about/hero.png"
        className="mx-auto"
        width={1120}
        height={60}
      />
    </div>
  )
}
