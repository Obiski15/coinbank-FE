import Main from "../../shared/Main"
import CloseAccount from "./CloseAccount"
import ProfileForm from "./ProfileForm"

export default function Profile() {
  return (
    <Main className="space-y-6 p-8">
      <ProfileForm />
      <CloseAccount />
    </Main>
  )
}
