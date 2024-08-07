"use client"

import { ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDefaultOption } from "@/hook/useDefaultOption"
import { useQrOptions } from "@/hook/useQrOptions"

interface DownloadButtonProps {}

const DownloadButton = ({}: DownloadButtonProps) => {
  const { options } = useQrOptions((state) => ({
    options: state?.options,
  }))

  const { currentTab, setCurrentTab } = useDefaultOption((state) => ({
    setCurrentTab: state?.setCurrentTab,
    currentTab: state?.currentTab,
  }))

  const hasNoURL = !!options?.data

  const handleToogle = () => {
    if (!hasNoURL) return
    
    if(!currentTab?.includes('item-1')){
      setCurrentTab([...currentTab , "item-1"])
    }
  }

  return (
    <Button
      className="bg-gradient-to-r from-violet-500 to-fuchsia-400 font-bold"
      type={hasNoURL ? "submit" : "button"}
      form={hasNoURL ? "main-form" : ""}
      onClick={handleToogle}
    >
      <ArrowDownToLine className="mr-2 size-5" />
      Download
    </Button>
  )
}

export default DownloadButton
