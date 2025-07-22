import Logo from "../../Logo"
import Buttons from "./Buttons"
import Hamburger from "./Hamburger"
import Navbar from "./Navbar"

function Header() {
  return (
    <div className="bg-white px-5 py-6 backdrop-blur-[80px] lg:px-12">
      <div className="flex items-center justify-between gap-2">
        <Logo />
        <div className="max-lg:hidden">
          <Navbar />
        </div>
        <div className="max-lg:hidden">
          <Buttons />
        </div>

        <Hamburger />
      </div>
    </div>
  )
}

export default Header
