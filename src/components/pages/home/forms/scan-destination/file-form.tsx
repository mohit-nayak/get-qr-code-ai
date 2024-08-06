import { MAX_FILE_UPLOAD_SIZE } from "@/config/platform-config"
import { CirclePlus } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface FileFormProps {}

const FileForm = ({}: FileFormProps) => {
  const [file, setFile] = useState<File | null>(null)
  const SizeInMB = (MAX_FILE_UPLOAD_SIZE/1024/1024)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(file)
    if (!file) {
      return toast.error("Please upload a file")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e?.target?.files?.[0] || null
    if(selectedFile?.size! > MAX_FILE_UPLOAD_SIZE){
      return toast.warning(`Max file size is ${SizeInMB}`)
    }
    setFile(selectedFile)
  }

  return (
    <form id="main-form" onSubmit={onSubmit}>
      <label
        htmlFor="image-upload"
        className="flex h-36 w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-black transition-colors duration-200 hover:bg-gray-100"
      >
        <input
          name="file"
          id="image-upload"
          type="file"
          hidden
          accept="audio/*,video/*,image/*,pdf/*"
          onChange={handleFileChange}

        />
        <span className="flex flex-col items-center justify-center gap-2 text-xs">
          <CirclePlus className="size-6" />
          Drag & drop or click to upload a file
        </span>
      </label>
      <p className="ml-2 mt-2 text-xs text-zinc-500">
        Upload a PDF, image, video, or audio file from your device. Max size: {SizeInMB}
        MB.
      </p>
    </form>
  )
}

export default FileForm
