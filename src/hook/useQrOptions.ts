import { create } from "zustand"
import type { Options } from "qr-code-styling"

import { defaultQrOptions } from "@/constants/default-option"

interface useQrOptionsInterface {
  options: Options
  hasFrame: boolean
  sethasFrame: (value: boolean) => void
  setQrOptions: (newQrOptions: Options) => void
  setQrdotsOptions: (newdotsOptions: Options["dotsOptions"]) => void
}

export const useQrOptions = create<useQrOptionsInterface>((set) => ({
  options: defaultQrOptions,
  hasFrame: false,
  setQrOptions: (newQrOptions) => {
    set((state) => ({ options: { ...state?.options, ...newQrOptions } }))
  },

  setQrdotsOptions: (newdotsOptions) => {
    set((state) => ({
      options: {
        ...state?.options,
        dotsOptions: { ...state?.options?.dotsOptions, ...newdotsOptions },
      },
    }))
  },
  sethasFrame: (value) => set({ hasFrame: value }),
}))
