"use client"

import { toast } from "sonner"
import { useUser } from "./useUser"

type callbackFunction<T> = (value: T) => void | Promise<void>

export const useAuthCallback = <T>(callback: callbackFunction<T>) => {
  const { user } = useUser()

  return async (value: T) => {
    try {
      if (!navigator.onLine) {
        toast.error("Check your Internet connection")
        return
      }
      if (!user?.uid && !user?.email) {
        toast.warning("Please signIn or Login first!")
        return
      } else {
        return callback(value)
      }
    } catch (error) {
      console.error("Error during callback:Execution", error)
      toast.error("Something went Wrong!")
    }
  }
}
