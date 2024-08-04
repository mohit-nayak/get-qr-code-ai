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
import { useUrlStore } from "@/hook/useUrlStore"
import { getInstagramFormatURL } from "@/lib/url-formatter"

interface InstagramFormProps {}

const InstagramForm = ({}: InstagramFormProps) => {
  const { setUrl } = useUrlStore((state) => ({
    setUrl: state.setUrl,
  }))

  const form = useForm<instagramFormSchemaType>({
    resolver: zodResolver(instagramFormSchema),
    defaultValues: {
      instagram: "",
    },
  })

  const onSubmit = (values: instagramFormSchemaType) => {
    const url = getInstagramFormatURL(values?.instagram)
    setUrl(url)

    form.reset()
  }

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
                <Input placeholder="https://www.instagram.com/johndoe" {...field} />
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
