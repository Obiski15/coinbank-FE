import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

import FormTitleGroup from "../FormTitleGroup"

export default function PrivacySettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-8">
        <FormTitleGroup
          title="Privacy Options"
          description="Control what you share"
        />
        <div className="flex w-[70%] items-center justify-between rounded-lg border border-neutral-200 p-8">
          <div className="flex items-center justify-between gap-4">
            <Image
              width={40}
              height={40}
              src="/icons/dashboard/super-coins.svg"
              alt="coins"
            />
            <FormTitleGroup
              className="p-0"
              title="Instant Sends"
              description="Allow other users to send you crypto instantly."
            />
          </div>
          <Switch />
        </div>
      </div>

      <div className="flex items-start justify-between gap-8">
        <FormTitleGroup
          title="Privacy Options"
          description="Control what you share"
        />

        <div className="w-[70%] space-y-6 rounded-lg border border-neutral-200">
          <div className="flex items-center justify-between gap-4 p-8">
            <FormTitleGroup
              className="p-0"
              title="Request Data"
              description="Request a copy of my personal data."
            />
            <Button variant="outline-primary">Request data</Button>
          </div>
          <div className="flex items-center justify-between gap-4 p-8">
            <FormTitleGroup
              className="p-0"
              title="Request Deletion"
              description="Request deletion of some or all of my data."
            />
            <Button variant="outline-primary">Request deletion</Button>
          </div>
          <div className="flex items-center justify-between gap-4 p-8">
            <FormTitleGroup
              className="p-0"
              title="Request Data Export"
              description="Request export of my data in a machine-readable form."
            />
            <Button variant="outline-primary">Request export</Button>
          </div>
          <div className="flex items-center justify-between gap-4 p-8">
            <FormTitleGroup
              className="p-0"
              title="Manage Cookies."
              description="Manage your cookie preferences."
            />
            <Button variant="outline-primary">Manage cookies</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
