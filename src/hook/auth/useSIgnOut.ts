import { useState } from "react"

import { auth } from "@/config/firebase-config"

export const useSignOut = () => {
  const [isLoading, setIsLoading] = useState(false)

  const signOut = async () => {
    setIsLoading(true)
    try {
      auth.signOut()
    } catch (error) {
      console.error("Error signing in with Google", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    signOut,
  }
}
