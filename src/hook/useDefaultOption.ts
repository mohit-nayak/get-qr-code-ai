"use client"

import { create } from "zustand"

interface useDefaultOptionInterface {
  currentTab: string[]
  setCurrentTab: (value: string[]) => void
}

export const useDefaultOption = create<useDefaultOptionInterface>((set) => ({
  currentTab: ["item-1"],
  setCurrentTab: (value) => set({ currentTab: value }),
}))
