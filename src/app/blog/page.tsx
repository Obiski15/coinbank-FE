import Articles from "@/components/landing-pages/blog/articles/Articles"
import Hero from "@/components/landing-pages/blog/hero/Hero"
import Subscribe from "@/components/landing-pages/blog/Subscribe"
import Bottom from "@/components/landing-pages/bottom/Bottom"
import Header from "@/components/landing-pages/header/Header"

export default function Blog() {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Subscribe />
      <Bottom />
    </>
  )
}
