"use client"

import { create } from "zustand"
import type { Options } from "qr-code-styling"

import { defaultQrOptions } from "@/constants/default-option"

interface useQrOptionsInterface {
  options: Options
  hasFrame: boolean
  bottomInput:string;
  topInput:string;
  sethasFrame: (value: boolean) => void
  setQrOptions: (newQrOptions: Options) => void
  setQrdotsOptions: (newdotsOptions: Options["dotsOptions"]) => void
  setBottomText:(newText:string) => void;
  setTopText:(newText:string) => void;
}

export const useQrOptions = create<useQrOptionsInterface>((set) => ({
  options: defaultQrOptions,
  hasFrame: false,
  bottomInput:"",
  topInput:"",
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
  setBottomText:(newText) => set({bottomInput:newText}) ,
  setTopText:(newText) => set({topInput:newText}) 
}))
