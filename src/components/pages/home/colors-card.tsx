"use client"

import { cn } from "@/lib/utils"

interface ColorsCardProps {
  color: string
  selectedColor: string
  handleSetColor: (color: string) => void
}

const ColorsCard = ({
  color,
  selectedColor,
  handleSetColor,
}: ColorsCardProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={() => handleSetColor(color)}
      className={cn(
        "size-9 cursor-pointer rounded-full transition-all duration-200",
        color === selectedColor
          ? "ring-4 ring-green-700"
          : "hover:border-[3px] hover:border-white hover:ring-2 hover:ring-zinc-400",
      )}
    />
  )
}

export default ColorsCard
