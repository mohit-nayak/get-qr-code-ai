"use client"

import { ChangeEvent,  useState } from "react"
import { FilePlus } from "lucide-react"
import { toast } from "sonner"

import { MAX_LOGO_UPLOAD_SIZE } from "@/config/platform-config"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useQrOptions } from "@/hook/useQrOptions"

interface LogoImageUploaderProps {}

const LogoImageUploader = ({}: LogoImageUploaderProps) => {
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const { setQrOptions } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
  }))

  const SizeInMB = MAX_LOGO_UPLOAD_SIZE / 1024 / 1024

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!logoFile) {
      return toast.error("Please upload a file")
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0]!
    
    if (file?.size! > MAX_LOGO_UPLOAD_SIZE) {
      return toast.warning("Uploaded image exists the limit")
    }
    setLogoFile(file)
    setQrOptions({ image: URL?.createObjectURL(file) })
  }

  return (
    <form
      id="logo-form"
      onSubmit={onSubmit}
      className="mt-2 h-14 w-full rounded-md border border-zinc-200 px-4"
    >
      <label
        htmlFor="logoImage"
        className="flex h-full cursor-pointer items-center justify-between gap-2"
      >
        <input
          type="file"
          id="logoImage"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          hidden
        />
        <span className="truncate flex items-center gap-2">
          <FilePlus className="size-5" />
          {logoFile ? logoFile?.name : "click to upload a file"}
        </span>

        <div className="flex items-center gap-2">
          <span className={cn(buttonVariants())}>
            {logoFile ? "Change" : "Upload"}
          </span>
        </div>
      </label>
      <p className="mt-2 text-xs text-zinc-500">
        A high-quality PNG is recommended. Supports PNG, JPG, and SVG up to{" "}
        {SizeInMB}
        MB.
      </p>
    </form>
  )
}

export default LogoImageUploader
