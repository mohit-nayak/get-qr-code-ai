"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  googleDocFormSchema,
  googleDocFormSchemaType,
} from "@/schema/google-doc-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQrOptions } from "@/hook/useQrOptions"
import { useAuthCallback } from "@/hook/auth/useAuthCallback"
import { useHtmlDownloader } from "@/hook/useHtmlDownloader"

interface GoogleDocFormProps {}

const GoogleDocForm = ({}: GoogleDocFormProps) => {
  const { setQrOptions } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
  }))
  const {handleClick}  = useHtmlDownloader()

  const form = useForm<googleDocFormSchemaType>({
    resolver: zodResolver(googleDocFormSchema),
    defaultValues: {
      googleDocURL: "",
    },
  })

  const onSubmit = useAuthCallback<googleDocFormSchemaType>((values) => {
    setQrOptions({ data: values?.googleDocURL })
    handleClick()
    form.reset()
  })

  return (
    <Form {...form}>
      <form
        id="main-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-1"
      >
        <FormField
          control={form.control}
          name="googleDocURL"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="docs.google.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default GoogleDocForm
