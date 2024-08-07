"use client"

import { useSignInWithGoogle } from "./useSignInWithGoogle"
import { useUser } from "./useUser"

type callbackFunction<T> = (value: T) => void | Promise<void>

export const useAuthCallback = <T>(callback: callbackFunction<T>) => {
  const { user } = useUser()
  const { signInWithGoogle} = useSignInWithGoogle()

  return async (value: T) => {
    try {
      if (!user?.uid) {
       await signInWithGoogle()
        if(user?.uid){
            return(await callback(value as T))
        }
      }
      return(await callback(value as T))
    } catch (error) {
      console.log("Something went wrong", error)
      return
    }
  }
}
