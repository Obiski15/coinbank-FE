import Image from "next/image"

export default function Gallery() {
  return (
    <div>
      <div className="flex items-center justify-between gap-8 px-40 py-20">
        <Image
          src="/images/landing-pages/about/gallery-1.png"
          alt="gallery 1"
          width={544}
          height={500}
        />
        <Image
          src="/images/landing-pages/about/gallery-2.png"
          alt="gallery 2"
          width={544}
          height={500}
        />
      </div>

      <div className="flex items-start justify-between gap-8 px-40 py-16">
        <h3 className="w-[47%] text-display-md font-medium tracking-[-0.025rem] text-black">
          The power to chart your own financial course
        </h3>
        <p className="w-[53%] text-md tracking-[0.005rem] text-neutral-500">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor.
        </p>
      </div>
    </div>
  )
}
