import { create } from "zustand"

type formType = "LOGIN" | "REGISTER"

interface useAuthStateInterface {
  formType: formType
  setFormType: (value: formType) => void
}

export const useAuthState = create<useAuthStateInterface>((set) => ({
  formType: "REGISTER",
  setFormType: (value) => set({ formType: value }),
}))
