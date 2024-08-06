"use client"

import { Switch } from "@/components/ui/switch"
import { useQrOptions } from "@/hook/useQrOptions"

interface FrameModifierProps {}

const FrameModifier = ({}: FrameModifierProps) => {
  const { hasFrame, sethasFrame } = useQrOptions((state) => ({
    hasFrame: state?.hasFrame,
    sethasFrame: state?.sethasFrame,
  }))

  return (
    <Switch
      checked={hasFrame}
      onCheckedChange={sethasFrame}
      className="mt-3"
    />
  )
}

export default FrameModifier
