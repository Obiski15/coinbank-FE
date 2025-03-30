import Image from "next/image"

import Feature from "./Feature"
import FeatureHeader from "./featureHeader"
import Ratings from "./Ratings"

const ratings: {
  name: string
  numRating: number
  review: string
  image: string
  occupation: string
}[] = [
  {
    name: "Abel Sheldon",
    numRating: 5,
    review:
      '“Cool crypto currency, fast withdrawals and deposits, way better, than any wallet."',
    image: "/images/landing-pages/home/rating",
    occupation: "Entrepreneur",
  },
  {
    name: "AJohn Clayton",
    numRating: 5,
    review:
      "“It’s worth it, very intuitive and easy to learn about cryptocurrencies.”",
    image: "/images/landing-pages/home/rating",
    occupation: "Investor",
  },
  {
    name: "Savanna Bridgerss",
    numRating: 5,
    review:
      "“Best customer service so far. Amazing in all areas best centralized exchange.”",
    image: "/images/landing-pages/home/rating",
    occupation: "Founder",
  },
]

export default function Testimonial() {
  return (
    <Feature className="shadow-[0px_4px_200px_0px_hsla(173, 59%, 94%, 0.2)] bg-primary-50 pb-[100px]">
      <FeatureHeader
        title="TESTIMONIALS"
        subTitle="Trusted by more than 100K+ peoples"
        description="Hear what they say about us and why you should choose Coinbank"
      />

      <div className="grid grid-cols-3 items-center justify-between gap-8">
        {ratings.map(({ review, numRating, occupation, image, name }, i) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-12 rounded-2xl bg-white p-12 pb-[52px]"
          >
            <Ratings numRating={numRating} />

            <div className="flex flex-col items-center justify-center gap-[42px]">
              <h4 className="text-center text-lg font-medium text-black">
                {review}
              </h4>

              <div className="flex items-center justify-between gap-4">
                <Image
                  src={`${image}-${i + 1}.png`}
                  alt={`rating-${i + 1}`}
                  width={40}
                  className="rounded-full"
                  height={40}
                />

                <div className="space-y-[2px]">
                  <h5 className="text-sm font-medium text-black">{name}</h5>
                  <p className="text-xs font-normal tracking-[0.0375rem] text-neutral-500">
                    {occupation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Feature>
  )
}
