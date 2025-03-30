import { Star } from "lucide-react"

interface Properties {
  numRating: number
}

function Ratings({ numRating }: Properties) {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          fill={numRating >= i ? "hsl(var(--primary)" : "transparent"}
          className="inline-block text-primary"
        />
      ))}
    </div>
  )
}

export default Ratings
