import { AnimatePresence } from "framer-motion"

import Content from "./Content"
import Numbers from "./Numbers"

export default function Hero() {
  return (
    <AnimatePresence>
      <div className="bg-hero-gradient">
        <Content />

        <Numbers />
      </div>
    </AnimatePresence>
  )
}
