import Container from "@/components/global/container"
import DownloadButton from "@/components/pages/home/download-button"
import PreviewQR from "@/components/pages/home/preview-qr"
import QrOptions from "@/components/pages/home/qr-options"
import { PLATFORM_NAME } from "@/config/platform-config"

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <Container className="h-screen">
      <section className="my-16">
        <h2 className="text-xl font-bold">
          {PLATFORM_NAME}: Free QR Code Generator
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-2">
          <QrOptions />

          <div className="flex flex-col gap-4">
            <PreviewQR />
            <DownloadButton />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default page
