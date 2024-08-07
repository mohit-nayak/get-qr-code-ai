import { auth } from "@/config/firebase-config"
import { type User, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUser(data)
    })
  }, [])

  return {
    user
  }
}
