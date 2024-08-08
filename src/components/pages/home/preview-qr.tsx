import { QrRenderer } from "@/components/global/qr-renderer"
import DownloadButton from "./download-button"

interface PreviewQRProps {}

const PreviewQR = ({}: PreviewQRProps) => {
  return (
    <section className="mb-16 h-fit sticky top-[75px] space-y-4 rounded-md border border-zinc-200 bg-zinc-100 p-4 min-[1000px]:mb-0">
      <div className="h-[19rem] w-full rounded-md bg-white p-3">
        <p className="w-full text-center text-xs font-medium text-zinc-500">
          This is a preview of your code.
        </p>
        <QrRenderer />
      </div>
      <DownloadButton />
    </section>
  )
}

export default PreviewQR
