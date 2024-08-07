"use client"

import { useUser } from "@/hook/auth/useUser"
import { Button } from "@/components/ui/button"
import { useSignOut } from "@/hook/auth/useSIgnOut"
import { useSignInWithGoogle } from "@/hook/auth/useSignInWithGoogle"

interface AuthControlsProps {}

const AuthControls = ({}: AuthControlsProps) => {
  const { user } = useUser()
  const isLoggedIn = !!user?.uid

  const { isLoading, signOut } = useSignOut()
  const { isLoading: isSignInLoading, signInWithGoogle } = useSignInWithGoogle()

  const handleClick = async () => {
    if (isLoggedIn) {
      await signOut()
    } else {
      await signInWithGoogle()
    }
  }

  return (
    <Button variant={isLoggedIn ? "ghost" : "outline"} disabled={isSignInLoading || isLoading} onClick={handleClick}>
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  )
}

export default AuthControls
