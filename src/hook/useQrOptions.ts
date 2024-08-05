import { create } from "zustand"
import type { Options } from "qr-code-styling"

import { defaultQrOptions } from "@/constants/default-option"

interface useQrOptionsInterface {
  options: Options
  setQrOptions: (newQrOptions: Options) => void
}

export const useQrOptions = create<useQrOptionsInterface>((set) => ({
  options: defaultQrOptions,
  setQrOptions: (newQrOptions) =>
    set((state) => ({ options: { ...state?.options, newQrOptions } })),
}))
