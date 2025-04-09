import Main from "../../shared/Main"
import FormTitleGroup from "../FormTitleGroup"
import NotificationsForm from "./NotificationsForm"

function Notifications() {
  return (
    <Main className="flex items-start justify-between p-8">
      <FormTitleGroup
        title="Manage"
        description="Manage how you receive notifications"
      />

      <NotificationsForm />
    </Main>
  )
}

export default Notifications
