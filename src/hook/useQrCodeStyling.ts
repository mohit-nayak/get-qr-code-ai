import { useEffect, useState } from "react"

import type QRCodeStylingType from "qr-code-styling"
import type { Options } from "qr-code-styling"

export const useQRCodeStyling = (
  options: Options,
): QRCodeStylingType | null => {
  const [qrCode, setQrCode] = useState<QRCodeStylingType | null>(null)

  useEffect(() => {
    const initLib = async () => {
      try {
        const { default: QRCodeStylingLib } = await import("qr-code-styling")
        const qrCodeStyling: QRCodeStylingType = new QRCodeStylingLib(options)
        setQrCode(qrCodeStyling)
      } catch (error) {
        console.error("Failed to load qr-code-styling library:", error)
      }
    }
    initLib()
  }, [])

  return qrCode
}
