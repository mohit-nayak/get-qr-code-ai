"use client"
import type { ShapeType } from "qr-code-styling"

import { shapesData } from "@/constants/shapes"
import { useQrOptions } from "@/hook/useQrOptions"
import { cn } from "@/lib/utils"

interface ShapeSelectorProps {}

const ShapeSelector = ({}: ShapeSelectorProps) => {
  const { options, setQrOptions } = useQrOptions((state) => ({
    options: state?.options,
    setQrOptions: state?.setQrOptions,
  }))

  const currnentShape = options?.shape

  return (
    <div className="mt-2 flex items-center gap-2">
      {shapesData?.map(({ id, shape }) => (
        <span
          key={id}
          className={cn(
            "flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-400 transition-all duration-200",

            currnentShape === shape
              ? "border-4 border-green-800"
              : "hover:border-4 hover:border-zinc-400",
          )}
          onClick={() => setQrOptions({ shape: shape as ShapeType })}
        >
          <span
            className={cn(
              "size-5 border border-zinc-400",
              shape === "circle" ? "rounded-full" : null,
            )}
          />
        </span>
      ))}

      {/* <span className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-400">
        <span className="border border-zinc-400 size-5" />
      </span> */}
    </div>
  )
}

export default ShapeSelector
