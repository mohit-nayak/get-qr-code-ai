import Container from "@/components/global/container"
import DownloadButton from "@/components/pages/home/download-button"
import PreviewQR from "@/components/pages/home/preview-qr"
import QrOptions from "@/components/pages/home/qr-options"
import { PLATFORM_NAME } from "@/config/platform-config"

interface pageProps {}

const page = ({}: pageProps) => {

  return (
    <Container className="h-full min-h-screen">
      <section className="my-16">
        <h2 className="text-xl font-bold sm:text-2xl">
          {PLATFORM_NAME}: Free QR Code Generator
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 min-[1000px]:grid-cols-2 min-[1000px]:gap-6">
          <QrOptions />

          <div className="mb-16 flex flex-col gap-4 min-[1000px]:mb-0">
            <PreviewQR />
            <DownloadButton />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default page
