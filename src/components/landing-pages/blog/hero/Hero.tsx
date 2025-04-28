import Content from "./Content"
import FeaturedArticle from "./featured-article"

export default function Hero() {
  return (
    <div className="space-y-24 px-10 py-8 lg:px-40 lg:py-16">
      <Content />
      <FeaturedArticle />
    </div>
  )
}
