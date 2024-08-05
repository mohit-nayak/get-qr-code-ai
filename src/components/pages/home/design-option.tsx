"use client"
import { useCallback } from "react"

import { colorsList } from "@/constants/colors"
import LogoImageUploader from "./logo-image-uploader"
import ColorsCard from "./colors-card"
import { useQrOptions } from "@/hook/useQrOptions"
import ShapeSelector from "./shape-selector"

interface DesignOptionsProps {}

const DesignOptions = ({}: DesignOptionsProps) => {
  const { options, setQrdotsOptions } = useQrOptions((state) => ({
    options: state?.options,
    setQrdotsOptions: state?.setQrdotsOptions,
  }))
  const color = options?.backgroundOptions?.color!

  const handleSetColor = useCallback(
    (newColor: string) => {
      if (options?.backgroundOptions?.color === newColor) return
      setQrdotsOptions({
        color: newColor,
      })
    },
    [color],
  )

  return (
    <section className="mt-2 px-2">
      <div>
        <p className="text-zinc-700">Pick a color</p>
        <div className="my-3 flex flex-wrap gap-2">
          {colorsList?.map((data: string) => (
            <ColorsCard
              color={data}
              key={data}
              selectedColor={color}
              handleSetColor={handleSetColor}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-zinc-700">
          Add your logo to the center of your code
        </p>
        <LogoImageUploader />
      </div>

      <div className="mt-10">
        <p className="text-zinc-700">Choose a shape</p>
        <ShapeSelector />
      </div>

    </section>
  )
}

export default DesignOptions
