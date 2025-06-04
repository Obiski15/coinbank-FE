import { Skeleton } from "../skeleton"

function ProfileFormSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-8">
        <Skeleton className="h-20 w-[30%]" />
        <div className="w-[70%] space-y-6">
          <div className="flex items-start justify-start gap-4">
            <Skeleton className="size-20 rounded-full" />

            <div className="space-y-4">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>

          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      <div className="flex items-start justify-between gap-8">
        <Skeleton className="h-20 w-[30%]" />
        <Skeleton className="h-[300px] w-[70%]" />
      </div>
    </div>
  )
}

export default ProfileFormSkeleton
