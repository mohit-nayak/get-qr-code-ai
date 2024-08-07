import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "@/config/firebase-config"
import { UserType } from "@/types/user-type"

export const useSignInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  const [user, setUser] = useState<UserType>(null)
  const [isLoading, setIsLoading] = useState(false)

  const signInWithGoogle = async () => {
    setIsLoading(true)
    try {
      const { user} = await signInWithPopup(auth, provider)
      setUser(user)
    } catch (error) {
      console.error("Error signing in with Google", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    user,
    signInWithGoogle,
  }
}
