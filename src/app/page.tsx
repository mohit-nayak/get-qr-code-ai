import Container from "@/components/global/container";
import DownloadButton from "@/components/pages/home/download-button";
import QrOptions from "@/components/pages/home/qr-options";
import { PLATFORM_NAME } from "@/config/platform-config";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <Container className="h-screen">
      <section className="my-16">
        <h2 className="text-lg font-medium">
          {PLATFORM_NAME}: Free QR Code Generator
        </h2>

        <div className="grid grid-cols-2 gap-2">
          {/* settings section    */}
          <QrOptions />
          
          {/* qr preveiw section  */}
          <DownloadButton />
        </div>

      </section>
    </Container>
  );
};

export default page;
