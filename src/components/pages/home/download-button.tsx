import { ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DownloadButtonProps {}

const DownloadButton = ({}: DownloadButtonProps) => {
  return (
    <Button type="submit" form="main-form">
      <ArrowDownToLine className="mr-2 size-4" />
      Download
    </Button>
  )
}

export default DownloadButton
