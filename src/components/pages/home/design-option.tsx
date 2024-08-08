"use client"
import { useCallback } from "react"

import { colorsList } from "@/constants/colors"
import LogoImageUploader from "./logo-image-uploader"
import ColorsCard from "./colors-card"
import { useQrOptions } from "@/hook/useQrOptions"
import ShapeSelector from "./shape-selector"
import FrameModifier from "./frame-modifier"
import QrInputText from "./qr-input-text"
import OptionWrapper from "@/components/global/option-wrapper"
import { MAX_LOGO_UPLOAD_SIZE } from "@/config/platform-config"

interface DesignOptionsProps {}

const DesignOptions = ({}: DesignOptionsProps) => {
  const { options, setQrdotsOptions, hasFrame } = useQrOptions((state) => ({
    options: state?.options,
    setQrdotsOptions: state?.setQrdotsOptions,
    hasFrame: state?.hasFrame,
  }))
  const color = options?.dotsOptions?.color!
  const SizeInMB = MAX_LOGO_UPLOAD_SIZE / 1024 / 1024

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
      <OptionWrapper title="Pick a color" childClassName="flex flex-wrap gap-2">
        {colorsList?.map((data: string) => (
          <ColorsCard
            color={data}
            key={data}
            selectedColor={color}
            handleSetColor={handleSetColor}
          />
        ))}
      </OptionWrapper>

      <OptionWrapper
        title="Add your logo to the center of your code"
        parentClassName="mt-6"
      >
        <LogoImageUploader />
        <p className="mt-3 text-xs italic text-zinc-500">
          A high-quality PNG is recommended. Supports PNG, JPG, and SVG up to{" "}
          {SizeInMB}
          MB.
        </p>
      </OptionWrapper>

      <OptionWrapper parentClassName="mt-6" title="Choose a Shape.">
        <ShapeSelector />
      </OptionWrapper>

      <OptionWrapper parentClassName="mt-6" title="Add a frame.">
        <FrameModifier />
      </OptionWrapper>

      {hasFrame && (
        <OptionWrapper
          parentClassName="mt-6"
          title="Add text to the top and bottom of your frame."
        >
          <QrInputText />
        </OptionWrapper>
      )}
    </section>
  )
}

export default DesignOptions
