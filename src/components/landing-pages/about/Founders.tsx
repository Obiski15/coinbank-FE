import Image from "next/image"
import Link from "next/link"

const founders: {
  name: string
  position: string
  imageBg: string
  socials: {
    url: string
    icon: string
  }[]
}[] = [
  {
    name: "Ozan Kabak",
    position: "Founder & CEO, Coinbank",
    imageBg: "#5235E8",
    socials: [
      {
        url: "https://www.instagram.com/_obiski",
        icon: "/icons/social/instagram",
      },
      {
        url: "https://www.x.com/_obiski",
        icon: "/icons/social/x",
      },
      {
        url: "https://www.linkedin.com/in/obiski15",
        icon: "/icons/social/linkedin",
      },
    ],
  },
  {
    name: "Ali Petra",
    position: "Founder & CEO, Coinbank",
    imageBg: "#E3E3E8",
    socials: [
      {
        url: "https://www.instagram.com/_obiski",
        icon: "/icons/social/instagram",
      },
      {
        url: "https://www.x.com/_obiski",
        icon: "/icons/social/x",
      },
      {
        url: "https://www.linkedin.com/in/obiski15",
        icon: "/icons/social/linkedin",
      },
    ],
  },
  {
    name: "Marcella Melano",
    position: "Founder & CEO, Coinbank",
    imageBg: "#DAF727",
    socials: [
      {
        url: "https://www.instagram.com/_obiski",
        icon: "/icons/social/instagram",
      },
      {
        url: "https://www.x.com/_obiski",
        icon: "/icons/social/x",
      },
      {
        url: "https://www.linkedin.com/in/obiski15",
        icon: "/icons/social/linkedin",
      },
    ],
  },
]

export default function Founders() {
  return (
    <div className="space-y-12 p-14 px-40 pt-[100px]">
      <h2 className="text-center text-display-md font-medium tracking-[0.025rem] text-black">
        Our Founders
      </h2>

      <div className="grid grid-cols-3 items-start justify-between gap-8 text-center">
        {founders.map(({ name, position, socials, imageBg }, i) => (
          <div
            key={i}
            className="flex h-full flex-col items-center justify-center gap-6 rounded-2xl p-12 shadow-[0px_0px_12px_0px_#5235E833]"
          >
            <Image
              src={`/images/landing-pages/about/founder-${i + 1}.png`}
              className={`rounded-[50%]`}
              alt={name}
              width={148}
              height={148}
              style={{
                backgroundColor: imageBg,
              }}
            />

            <div className="space-y-[7px]">
              <p className="text-lg font-medium text-[#000000]">{name}</p>
              <p className="text-sm font-normal text-neutral-500">{position}</p>
            </div>

            <div className="flex items-center justify-between gap-6">
              {socials.map(({ url, icon }) => (
                <Link href={url} key={url}>
                  <Image
                    alt={url.split(".")[1]}
                    src={`${icon}-outline.svg`}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
