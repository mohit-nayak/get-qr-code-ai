import { QrRenderer } from "@/components/global/qr-renderer"

interface PreviewQRProps {}

const PreviewQR = ({}: PreviewQRProps) => {
  return (
    <section className="w-full rounded-md bg-gray-100 p-3">
      <p className="w-full text-center text-xs font-medium text-zinc-500 mb-2">
        This is a preview of your code.
      </p>
      <QrRenderer />
    </section>
  )
}

export default PreviewQR
