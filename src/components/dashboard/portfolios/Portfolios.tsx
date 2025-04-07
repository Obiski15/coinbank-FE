import Main from "../shared/Main"
import Assets from "./Assets"
import Chart from "./Chart"

export default function Portfolios() {
  return (
    <Main className="space-y-8 p-8">
      <Chart />
      <Assets />
    </Main>
  )
}
