"use client"

import { useEffect, useState, useRef } from "react"
import QRCodeStyling from "qr-code-styling"

import type {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Options,
} from "qr-code-styling"

export const QrRenderer = () => {
  const [options, setOptions] = useState<Options>({
    width: 200,
    height: 200,
    type: "svg" as DrawType,
    data: "http://qr-code-styling.com",
    image: "/favicon.ico",
    margin: 1,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: "Byte" as Mode,
      errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: "#222222",
      type: "rounded" as DotType,
    },
    backgroundOptions: {
      //   color: "#5FD4F3",
    },
    cornersSquareOptions: {
      color: "#222222",
      type: "extra-rounded" as CornerSquareType,
    },
    cornersDotOptions: {
      color: "#222222",
      type: "dot" as CornerDotType,
    },
  })

  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current)
    }
  }, [qrCode, ref])

  useEffect(() => {
    if (!qrCode) return
    qrCode.update(options)
  }, [qrCode, options])

  const onDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions((options) => ({
      ...options,
      data: event.target.value,
    }))
  }

  const onDownloadClick = () => {
    if (!qrCode) return
    qrCode.download({
      extension: "png",
    })
  }

  return (
    <section className="flex items-center justify-center">
      <div className="flex items-center justify-center border-4 border-black rounded-lg overflow-hidden">
        <div ref={ref} className="" />
      </div>
    </section>
  )
}
