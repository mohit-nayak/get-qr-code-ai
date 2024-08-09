"use client"

interface CredentialLoginProps {}

import { useForm } from "react-hook-form"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  credLoginFormSchema,
  credLoginFormSchemaType,
} from "@/schema/login-cred-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { auth } from "@/config/firebase-config"
import { toast } from "sonner"
import { useAuthState } from "@/hook/useAuthState"
import {  Loader2 } from "lucide-react"

const CredentialLogin = ({}: CredentialLoginProps) => {
  const { formType } = useAuthState((state) => ({
    formType: state?.formType,
  }))

  const form = useForm<credLoginFormSchemaType>({
    resolver: zodResolver(credLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const isLoading = !!form?.formState?.isSubmitting

  const onSubmit = async (values: credLoginFormSchemaType) => {
    try {
      const { email, password } = values

      if (formType === "REGISTER") {
        await createUserWithEmailAndPassword(auth, email, password)
      } else if (formType === "LOGIN") {
        await signInWithEmailAndPassword(auth, email, password)
      }
      form?.reset()
      return toast.success(
        formType === "REGISTER" ? "Succefully Registered" : "Login Successful",
      )
    } catch (error: any) {
      console.log("Something went wrong?", error?.code)
      return toast.error((error?.code as string)?.replace("auth/", ""))
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 rounded-md border bg-white p-4"
      >
        <FormField
          control={form.control}
          name="email"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="johndoe@example.com"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="****" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-400 font-bold"
          type="submit"
        >
          {isLoading ? (
            <Loader2 className="size-4 animate-spin text-white mr-2" />
          ) : null}
          {formType === "REGISTER" ? "Register" : "Login"}
        </Button>
      </form>
    </Form>
  )
}

export default CredentialLogin
