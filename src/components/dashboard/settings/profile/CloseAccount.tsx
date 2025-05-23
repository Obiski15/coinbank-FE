import { TriangleAlert } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import FormTitleGroup from "../FormTitleGroup"

export default function CloseAccount() {
  return (
    <div className="flex items-start justify-between gap-8">
      <div className="space-y-0.5 pt-8">
        <div className="flex items-center justify-start gap-2">
          <TriangleAlert className="size-4 text-error" />
          <p className="text-md font-medium tracking-wider text-neutral-900">
            Danger Zone
          </p>
        </div>
        <p className="text-sm font-normal text-neutral-500">
          Close your account
        </p>
      </div>

      <div className="flex w-[70%] items-end justify-between gap-2 rounded-lg border border-neutral-200 p-8">
        <FormTitleGroup
          className="space-y-2 p-0"
          title="Close account"
          description="Closing your account can't be undone. Please make sure your account balance is $0.00 before you begin."
        />
        <AlertDialog>
          <AlertDialogTrigger className="whitespace-nowrap rounded-lg border bg-white px-6 py-2.5 font-medium text-error shadow-sm hover:bg-error/30">
            Close account
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>Are you absolutely sure?</AlertDialogHeader>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-error hover:bg-error/80">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
