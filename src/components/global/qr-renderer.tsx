"use client"

import { useEffect, useState, useRef, ElementRef } from "react"
import QRCodeStyling from "qr-code-styling"

import { useQrOptions } from "@/hook/useQrOptions"

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
      <div className="flex items-center justify-center overflow-hidden rounded-full border-4 border-black p-1">
        <div ref={ref} className="" />
      </div>
    </section>
  )
}
