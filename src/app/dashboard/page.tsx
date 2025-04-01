import MainLeft from "@/components/dashboard/main/left/main-left"
import MainRight from "@/components/dashboard/main/right/main-right"

function Dashboard() {
  return (
    <div className="grid max-h-full grid-cols-10 items-start justify-start bg-white">
      <MainLeft />
      <MainRight />
    </div>
  )
}

export default Dashboard
