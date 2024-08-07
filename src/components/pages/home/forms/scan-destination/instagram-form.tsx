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
  instagramFormSchema,
  instagramFormSchemaType,
} from "@/schema/isntagram-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { getInstagramFormatURL } from "@/lib/url-formatter"
import { useQrOptions } from "@/hook/useQrOptions"
import { useAuthCallback } from "@/hook/auth/useAuthCallback"

interface InstagramFormProps {}

const InstagramForm = ({}: InstagramFormProps) => {
  const { setQrOptions } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
  }))

  const form = useForm<instagramFormSchemaType>({
    resolver: zodResolver(instagramFormSchema),
    defaultValues: {
      instagram: "",
    },
  })

  const onSubmit = useAuthCallback<instagramFormSchemaType>((values) => {
    const url = getInstagramFormatURL(values?.instagram)
    setQrOptions({ data: url })
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
          name="instagram"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="https://www.instagram.com/johndoe"
                  {...field}
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

export default InstagramForm
