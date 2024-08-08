"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { urlFormSchema, urlFormSchemaType } from "@/schema/url-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQrOptions } from "@/hook/useQrOptions"
import { useAuthCallback } from "@/hook/auth/useAuthCallback"
import { PLATFORM_URL } from "@/config/platform-config"
import { useHtmlDownloader } from "@/hook/useHtmlDownloader"

interface UrlFormProps {}

const UrlForm = ({}: UrlFormProps) => {
  const { setQrOptions } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
  }))

  const {handleClick}  = useHtmlDownloader()

  const form = useForm<urlFormSchemaType>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: {
      url: "",
    },
  })

  const onSubmit = useAuthCallback<urlFormSchemaType>((value) => {
    setQrOptions({ data: value?.url })
    handleClick()
    form?.reset()
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
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={PLATFORM_URL} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default UrlForm
