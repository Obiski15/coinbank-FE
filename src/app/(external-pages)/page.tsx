import AssetsAdded from "@/components/landing-pages/home/feature/assets-added"
import Feature1 from "@/components/landing-pages/home/feature/Feature1"
import Feature2 from "@/components/landing-pages/home/feature/Feature2"
import Feature3 from "@/components/landing-pages/home/feature/feature3"
import Feature4 from "@/components/landing-pages/home/feature/Feature4"
import Testimonial from "@/components/landing-pages/home/feature/Testimonial"
import Hero from "@/components/landing-pages/home/hero/Hero"
import BackedBy from "@/components/shared/BackedBy"

export default function Home() {
  return (
    <>
      <Hero />
      <BackedBy />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Testimonial />
      <AssetsAdded />
    </>
  )
}
