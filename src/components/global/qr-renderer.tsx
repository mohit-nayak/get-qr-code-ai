"use client"

import { useEffect, useState, useRef, ElementRef } from "react"
import QRCodeStyling from "qr-code-styling"

import { useQrOptions } from "@/hook/useQrOptions"
import { cn } from "@/lib/utils"

export const QrRenderer = () => {

  const { options, setQrOptions, hasFrame } = useQrOptions((state) => ({
    options: state?.options,
    setQrOptions: state?.setQrOptions,
    hasFrame: state?.hasFrame,
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

  const shapeChange =
    options?.shape === "circle" ? "rounded-full" : "rounded-lg"

  return (
    <section className="flex h-full items-center justify-center">
      <div
        style={{
          borderColor: options?.dotsOptions?.color,
          backgroundColor: options?.dotsOptions?.color,
        }}
        className={cn(
          "relative flex size-[212px] items-center justify-center overflow-hidden",
          shapeChange,
          hasFrame ? "size-[255px]" : "size-[212px]",
        )}
      >
        {hasFrame && options?.shape !== "circle" && (
          <>
            <span className="absolute top-1.5 text-xs font-semibold text-white">
              sdlkfj;alsdkfjasl;dfkj
            </span>
            <span className="absolute bottom-1.5 text-xs font-semibold text-white">
              sdlkfj;alsdkfjasl;dfkj
            </span>
          </>
        )}
        <div ref={ref} className={cn("bg-white", shapeChange)} />
      </div>
    </section>
  )
}
