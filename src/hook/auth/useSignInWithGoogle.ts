"use client"

import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "@/config/firebase-config"
import { UserType } from "@/types/user-type"

export const useSignInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  const [isLoading, setIsLoading] = useState(false)

  const signInWithGoogle = async ():Promise<UserType | Error> => {
    setIsLoading(true)
    try {
      const { user } = await signInWithPopup(auth, provider)
      return user
    } catch (error:any) {
      return error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    signInWithGoogle,
  }
}
