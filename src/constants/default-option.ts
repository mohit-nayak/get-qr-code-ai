import type {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  ShapeType,
  Options,
} from "qr-code-styling"

import { PLATFORM_URL } from "@/config/platform-config"
import { colorsList } from "./colors"

export const defaultQrOptions: Options = {
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
  backgroundOptions:{
    color:"transparent"
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.6,
    margin: 2,
    crossOrigin: "anonymous",
  },
  dotsOptions: {
    color: colorsList?.[0],
    type: "dots" as DotType,
  },

  cornersSquareOptions: {
    type: "square" as CornerSquareType,
  },
  cornersDotOptions: {
    type: "square" as CornerDotType,
  },
  shape: "circle" as ShapeType,
}
