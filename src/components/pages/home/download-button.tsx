"use client"

import { ArrowDownToLine } from "lucide-react"

import { Button, ButtonProps } from "@/components/ui/button"
import { useDefaultOption } from "@/hook/useDefaultOption"
import { useQrOptions } from "@/hook/useQrOptions"
import { cn } from "@/lib/utils"

interface DownloadButtonProps extends ButtonProps {}

const DownloadButton = ({ className, ...props }: DownloadButtonProps) => {
  const { options } = useQrOptions((state) => ({
    options: state?.options,
  }))

  const { currentTab, setCurrentTab } = useDefaultOption((state) => ({
    setCurrentTab: state?.setCurrentTab,
    currentTab: state?.currentTab,
  }))

  const { IsDownloading } = useQrOptions((state) => ({
    IsDownloading: state?.IsDownloading,
  }))

  const hasNoURL = !!options?.data

  const handleToogle = () => {
    if (!hasNoURL) return

    if (!currentTab?.includes("item-1")) {
      setCurrentTab([...currentTab, "item-1"])
    }
  }

  return (
    <Button
      className={cn(
        "w-full bg-gradient-to-r from-violet-500 to-fuchsia-400 font-bold",
        className,
      )}
      type={hasNoURL ? "submit" : "button"}
      form={hasNoURL ? "main-form" : ""}
      onClick={handleToogle}
      disabled={IsDownloading}
      {...props}
    >
      <ArrowDownToLine className="mr-2 size-5" />
      Download
    </Button>
  )
}

export default DownloadButton
