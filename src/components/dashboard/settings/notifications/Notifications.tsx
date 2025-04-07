import { CircleHelp } from "lucide-react"

import Main from "../../shared/Main"
import FormTitleGroup from "../FormTitleGroup"
import NotificationsForm from "./NotificationsForm"

function Notifications() {
  return (
    <Main className="relative flex items-start justify-between p-8">
      <FormTitleGroup
        title="Manage"
        description="Manage how you receive notifications"
      />

      <NotificationsForm />

      <div className="absolute bottom-8 right-8 flex size-10 items-center justify-center rounded-full shadow-[0px_0px_8px_0px_#5235E81A]">
        <CircleHelp className="size-6 text-primary" />
      </div>
    </Main>
  )
}

export default Notifications
