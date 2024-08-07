"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useQrOptions } from "@/hook/useQrOptions"

interface QrInputTextProps {}

const QrInputText = ({}: QrInputTextProps) => {
  const { setBottomText, setTopText } = useQrOptions((state) => ({
    setBottomText: state?.setBottomText,
    setTopText: state?.setTopText,
  }))

  return (
    <div className="mt-3 flex w-full gap-3">
      <div className="w-full space-y-1">
        <Label>Top text</Label>
        <Input
          onChange={(e) => setTopText(e?.target?.value)}
          placeholder="enter some text here..."
          maxLength={30}
        />
      </div>
      <div className="w-full space-y-1">
        <Label>Bottom text</Label>
        <Input
          onChange={(e) => setBottomText(e?.target?.value)}
          placeholder="enter some text here..."
          maxLength={30}
        />
      </div>
    </div>
  )
}

export default QrInputText
