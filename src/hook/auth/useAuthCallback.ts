"use client"

import { toast } from "sonner"
import { useUser } from "./useUser"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/config/firebase-config"

type callbackFunction<T> = (value: T) => void | Promise<void>

export const useAuthCallback = <T>(callback: callbackFunction<T>) => {
  const { user } = useUser()

  return async (value: T) => {
    try {
      if (!navigator.onLine) {
        toast.error("You are offline. Please check your internet connection.")
        return
      }

      if (!user?.uid && !user?.email && !user?.emailVerified) {
        const provider = new GoogleAuthProvider()

        try {
          await signInWithPopup(auth, provider)
        } catch (signInError) {
          console.error("Sign-in error:", signInError)
          return
        }

        if (user) {
          return callback(value)
        } else {
          throw new Error("User authentication failed.")
        }
      } else {
        return callback(value)
      }
    } catch (error) {
      console.error("Error during authentication or callback execution:", error)
      toast.error(
        "An error occurred during authentication or callback execution.",
      )
    }
  }
}
