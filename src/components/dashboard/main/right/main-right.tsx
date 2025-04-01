import Main from "../Main"
import RecentTransactions from "./recent-transactions"
import Transact from "./Transact"

export default function MainRight() {
  return (
    <Main className="col-span-3 border-l border-neutral-200">
      <Transact />
      <RecentTransactions />
    </Main>
  )
}
