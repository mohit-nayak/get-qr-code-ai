"use client"

import { useEffect, useState, useRef, ElementRef } from "react"
import QRCodeStyling from "qr-code-styling"

import { useQrOptions } from "@/hook/useQrOptions"
import { cn } from "@/lib/utils"

export const QrRenderer = () => {
  const { options, setQrOptions } = useQrOptions((state) => ({
    options: state?.options,
    setQrOptions: state?.setQrOptions,
  }))

  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options))
  const ref = useRef<ElementRef<"div">>(null)

  useEffect(() => {
    if (ref?.current) {
      qrCode?.append(ref?.current)
    }
  }, [qrCode, ref])

  useEffect(() => {
    if (!qrCode) return
    qrCode?.update(options)
  }, [qrCode, options])

  const onDownloadClick = () => {
    if (!qrCode) return
    qrCode?.download({
      extension: "png",
    })
  }

  return (
    <section className="flex items-center justify-center">
      <div
        style={{ borderColor: options?.dotsOptions?.color }}
        className={cn(
          "flex items-center justify-center overflow-hidden border-4 ",
          options?.shape === "circle" ? "rounded-full p-1" : "rounded-lg",
        )}
      >
        <div ref={ref} className="" />
      </div>
    </section>
  )
}
