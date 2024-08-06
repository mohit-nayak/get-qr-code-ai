"use client"

import { useEffect, useRef, ElementRef } from "react"

import { cn } from "@/lib/utils"
import { useQrOptions } from "@/hook/useQrOptions"
import { useQRCodeStyling } from "@/hook/useQrCodeStyling"
import { defaultQrOptions } from "@/constants/default-option"

export const QrRenderer = () => {
  const { options, setQrOptions, hasFrame, bottomInput, topInput } =
    useQrOptions((state) => ({
      options: state?.options,
      setQrOptions: state?.setQrOptions,
      hasFrame: state?.hasFrame,
      topInput: state?.topInput,
      bottomInput: state?.bottomInput,
    }))

  const ref = useRef<ElementRef<"div">>(null)
  const qrCode = useQRCodeStyling(defaultQrOptions)

  useEffect(() => {
    if (qrCode) {
      qrCode?.append(ref?.current!)
    }
  }, [qrCode])

  useEffect(() => {
    if (qrCode) {
      qrCode?.update(options)
    }
  }, [options, qrCode])



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
              {topInput}
            </span>
            <span className="absolute bottom-1.5 text-xs font-semibold text-white">
              {bottomInput}
            </span>
          </>
        )}
        <div ref={ref} className={cn("bg-white", shapeChange)} />
      </div>
    </section>
  )
}
