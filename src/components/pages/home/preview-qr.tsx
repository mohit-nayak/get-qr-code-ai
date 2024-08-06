import { QrRenderer } from "@/components/global/qr-renderer"

interface PreviewQRProps {}

const PreviewQR = ({}: PreviewQRProps) => {
  return (
    <section className="w-full h-[19rem] rounded-md bg-gray-100 p-4">
      <p className="w-full text-center text-xs font-medium text-zinc-500">
        This is a preview of your code.
      </p>
      <QrRenderer />
    </section>
  )
}

export default PreviewQR
