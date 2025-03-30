import { Button } from "@/components/ui/button"

function Buttons() {
  return (
    <div className="flex justify-between items-center gap-4">
      <Button variant="outline">Sign in</Button>
      <Button variant="outline" className="text-primary">
        Get Started
      </Button>
    </div>
  )
}

export default Buttons
