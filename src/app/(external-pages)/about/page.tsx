import CTA from "@/components/landing-pages/about/cta"
import Founders from "@/components/landing-pages/about/Founders"
import Gallery from "@/components/landing-pages/about/Gallery"
import Hero from "@/components/landing-pages/about/Hero"
import Mission from "@/components/landing-pages/about/Mission"
import Testimonial from "@/components/landing-pages/about/Testimonial"
import BackedBy from "@/components/shared/BackedBy"

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Testimonial />
      <Gallery />
      <Founders />
      <BackedBy />
      <CTA />
    </>
  )
}
