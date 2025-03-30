import Content from "./Content"
import FeaturedArticle from "./featured-article"

export default function Hero() {
  return (
    <div className="space-y-24 px-40 py-16">
      <Content />
      <FeaturedArticle />
    </div>
  )
}
