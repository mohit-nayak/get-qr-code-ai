"use client"

interface CredentialLoginProps {}

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
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
import { useForm } from "react-hook-form"

const CredentialLogin = ({}: CredentialLoginProps) => {
  const onSubmit = () => {}

  const form = useForm<credLoginFormSchemaType>({
    resolver: zodResolver(credLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          disabled={form?.formState?.isSubmitting}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="johndoe@example.com" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled={form?.formState?.isSubmitting}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="johndoe@example.com" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  )
}

export default CredentialLogin
