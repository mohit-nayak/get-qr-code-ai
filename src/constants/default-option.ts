import type {
    DrawType,
    TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  ShapeType
} from "qr-code-styling"

import { PLATFORM_URL } from "@/config/platform-config"


export const defaultQrOptions = {
  width: 200,
  height: 200,
  type: "svg" as DrawType,
  data: PLATFORM_URL,
  margin: 0,
  qrOptions: {
    typeNumber: 0 as TypeNumber,
    mode: "Byte" as Mode,
    errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.3,
    margin: 0,
    crossOrigin: "anonymous",
  },
  dotsOptions: {
    color: "#222222",
    type: "dots" as DotType,
  },
  cornersSquareOptions: {
    color: "#222222",
    type: "square" as CornerSquareType,
  },
  cornersDotOptions: {
    color: "#222222",
    type: "square" as CornerDotType,
  },
  shape: "circle" as ShapeType,
}
