import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface OptionWrapperProps {
  title: string
  children: React.ReactNode
  parentClassName?: HTMLAttributes<HTMLDivElement>["className"]
  childClassName?: HTMLAttributes<HTMLDivElement>["className"]
}

const OptionWrapper = ({
  title,
  children,
  childClassName,
  parentClassName,
}: OptionWrapperProps) => {
  return (
    <div
      className={cn(
        "rounded-md border border-zinc-100 bg-zinc-100 p-3",
        parentClassName,
      )}
    >
      <p className="text-zinc-500">{title}</p>
      <div className={cn("rounded-md bg-white p-4 mt-3", childClassName)}>
        {children}
      </div>
    </div>
  )
}

export default OptionWrapper
