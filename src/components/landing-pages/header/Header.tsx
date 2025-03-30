import Logo from "../../Logo"
import Buttons from "./Buttons"
import Navbar from "./Navbar"

function Header() {
  return (
    <div className="px-12 py-6 bg-white backdrop-blur-[80px]">
      <div className="flex justify-between items-center gap-2">
        <Logo />
        <Navbar />
        <Buttons />
      </div>
    </div>
  )
}

export default Header
