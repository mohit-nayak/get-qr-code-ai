"use client"
import dynamic from "next/dynamic"

import { QrRenderer } from "@/components/global/qr-renderer"
import DownloadButton from "./download-button"
import { useUser } from "@/hook/auth/useUser"

interface PreviewQRProps {}

const CredAuthForm = dynamic(
  () => import("@/components/pages/home/forms/credential-login"),
  {
    ssr: false,
  },
)

const PreviewQR = ({}: PreviewQRProps) => {
  const { user } = useUser()

  return (
    <section className="sticky top-[75px] mb-16 h-fit space-y-4 rounded-md border border-zinc-200 bg-zinc-100 p-4 min-[1000px]:mb-0">
      <div className="h-[19rem] w-full rounded-md bg-white p-3">
        <p className="w-full text-center text-xs font-medium text-zinc-500">
          This is a preview of your code.
        </p>
        <QrRenderer />
      </div>
      {user?.uid && user?.email ? (
        <DownloadButton />
      ) :  <CredAuthForm />}
     
    </section>
  )
}

export default PreviewQR
