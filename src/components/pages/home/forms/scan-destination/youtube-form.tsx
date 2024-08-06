"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { youtubeFormSchema, youtubeFormSchemaType } from "@/schema/youtube-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQrOptions } from "@/hook/useQrOptions"

interface UrlFormProps {}

const YoutubeForm = ({}: UrlFormProps) => {

  const { setQrOptions } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
  }))

  const form = useForm<youtubeFormSchemaType>({
    resolver: zodResolver(youtubeFormSchema),
    defaultValues: {
      youtubeURL: "",
    },
  })

  const onSubmit = (values: youtubeFormSchemaType) => {
    setQrOptions({data:values?.youtubeURL})
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
          name="youtubeURL"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="http://www.youtube.com/johndoe-videos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default YoutubeForm
