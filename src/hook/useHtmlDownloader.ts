"use client"

import { useCallback } from "react"
import { toPng } from "html-to-image"

import { useGlobalRef } from "@/provider/provider"
import { QR_DOWNLOAD_DELAY } from "@/config/platform-config"
import { useQrOptions } from "./useQrOptions"

export const useHtmlDownloader = () => {
  const divRef = useGlobalRef()
  const { setIsDownloading } = useQrOptions((state) => ({
    setIsDownloading: state?.setIsDownloading,
  }))

  const handleClick = useCallback(async () => {
    if (divRef?.current) {
      setIsDownloading(true)
      setTimeout(() => {
        toPng(divRef?.current!, { cacheBust: true })
          .then((dataUrl) => {
            const link = document.createElement("a")
            link.download = "my-image-name.png"
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            setIsDownloading(false)
          })
      }, QR_DOWNLOAD_DELAY)
    }
  }, [divRef])

  return {
    handleClick,
  }
}
