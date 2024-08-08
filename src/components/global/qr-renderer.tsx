"use client"

import { useEffect, useRef, ElementRef } from "react"
import ReactCurvedText from "react-curved-text"

import { cn } from "@/lib/utils"
import { useQrOptions } from "@/hook/useQrOptions"
import { useQRCodeStyling } from "@/hook/useQrCodeStyling"
import { defaultQrOptions } from "@/constants/default-option"
import { useGlobalRef } from "@/provider/provider"

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
  const divRef = useGlobalRef()


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

  const textProps = {
    style: { fontSize: 12, fill: "white", fontWeight: "600" },
  }

  return (
    <div ref={divRef} className="flex h-full items-center justify-center">
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
        {hasFrame && options?.shape === "circle" && (
          <>
            <ReactCurvedText
              width={300}
              height={300}
              cx={150}
              cy={150}
              rx={110}
              ry={110}
              startOffset={164}
              svgProps={{
                style: {
                  position: "absolute",
                  rotate: `-${topInput?.length * 1.2}deg`,
                },
              }}
              text={topInput}
              reversed
              textProps={textProps}
            />

            <ReactCurvedText
              width={300}
              height={300}
              cx={150}
              cy={150}
              rx={117}
              ry={117}
              startOffset={180}
              svgProps={{
                style: {
                  position: "absolute",
                  rotate: `${bottomInput?.length * 1.2}deg`,
                },
              }}
              text={bottomInput}
              textProps={textProps}
            />
          </>
        )}

        {hasFrame && options?.shape === "square" && (
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
    </div>
  )
}
