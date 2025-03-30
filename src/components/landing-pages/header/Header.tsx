import Logo from "../../Logo"
import Buttons from "./Buttons"
import Navbar from "./Navbar"

function Header() {
  return (
    <div className="bg-white px-12 py-6 backdrop-blur-[80px]">
      <div className="flex items-center justify-between gap-2">
        <Logo />
        <Navbar />
        <Buttons />
      </div>
    </div>
  )
}

export default Header
