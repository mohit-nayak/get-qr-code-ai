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

interface UrlFormProps {}

const UrlForm = ({}: UrlFormProps) => {
  const form = useForm<urlFormSchemaType>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: {
      url: "",
    },
  })

  const onSubmit = (values:urlFormSchemaType) => {
     console.log(values)
  }

  return (
    <Form {...form}>
      <form id="main-form" onSubmit={form.handleSubmit(onSubmit)} className="px-1">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="http://www.flowcode.com" {...field} />
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
