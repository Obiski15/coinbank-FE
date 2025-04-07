import { CircleHelp } from "lucide-react"

import Main from "../../shared/Main"
import NotificationsForm from "./NotificationsForm"

function Notifications() {
  return (
    <Main className="relative flex items-start justify-between p-8">
      <div className="space-y-0.5 pt-8">
        <p className="text-md font-medium tracking-wider text-neutral-900">
          Manage
        </p>
        <p className="text-sm font-normal text-neutral-500">
          Manage how you receive notifications
        </p>
      </div>

      <NotificationsForm />

      <div className="absolute bottom-8 right-8 flex size-10 items-center justify-center rounded-full shadow-[0px_0px_8px_0px_#5235E81A]">
        <CircleHelp className="size-6 text-primary" />
      </div>
    </Main>
  )
}

export default Notifications
