import { ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DownloadButtonProps {}

const DownloadButton = ({}: DownloadButtonProps) => {
  return (
    <Button className="bg-gradient-to-r from-violet-500 to-fuchsia-400 font-bold" type="submit" form="main-form">
      <ArrowDownToLine className="mr-2 size-5" />
      Download
    </Button>
  )
}

export default DownloadButton
