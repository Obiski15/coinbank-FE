import Main from "../Main"
import Display from "./Display"
import Portfolio from "./Portfolio"
import Stats from "./Stats"

export default function MainLeft() {
  return (
    <Main className="no_scrollbar col-span-7 h-[calc(100vh-80.67px)] space-y-6 overflow-y-scroll p-8 pr-6">
      <Display />
      <Stats />
      <Portfolio />
    </Main>
  )
}
