"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EmailFormSchema, EmailFormSchemaType } from "@/schema/email-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { getEmailFormatURL } from "@/lib/url-formatter"
import { useQrOptions } from "@/hook/useQrOptions"
import { useAuthCallback } from "@/hook/auth/useAuthCallback"

interface EmailFormProps {}

const EmailForm = ({}: EmailFormProps) => {
  const { setQrOptions } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
  }))

  const form = useForm<EmailFormSchemaType>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
      message: "",
      subject: "",
    },
  })

  const onSubmit = useAuthCallback<EmailFormSchemaType>((values) => {
    const { email, message, subject } = values
    const url = getEmailFormatURL(email, subject, message)
    setQrOptions({data:url})
    form.reset()
  })

  return (
    <Form {...form}>
      <form
        id="main-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 px-1"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter subject (optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here (optional)"
                  {...field}
                  maxLength={256}
                  className="h-32"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default EmailForm
