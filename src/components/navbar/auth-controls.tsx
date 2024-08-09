"use client"

import { useUser } from "@/hook/auth/useUser"
import { Button } from "@/components/ui/button"
import { useAuthState } from "@/hook/useAuthState"
import { auth } from "@/config/firebase-config"

interface AuthControlsProps {}

const AuthControls = ({}: AuthControlsProps) => {
  const { user } = useUser()
  const isLoggedIn = !!user?.uid

  const { setFormType, formType } = useAuthState((state) => ({
    setFormType: state?.setFormType,
    formType: state?.formType,
  }))

  const handleClick = async () => {
    if (isLoggedIn) {
      auth?.signOut()
      setFormType("LOGIN")
    } else {
      setFormType(formType === "LOGIN" ? "REGISTER" : "LOGIN")
    }
  }

  return (
    <Button variant={isLoggedIn ? "ghost" : "outline"} onClick={handleClick}>
      {isLoggedIn ? "Logout" : formType === "LOGIN" ? "Login" : "Register"}
    </Button>
  )
}

export default AuthControls
