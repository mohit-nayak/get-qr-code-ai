"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { googleDocFormSchema, googleDocFormSchemaType } from "@/schema/google-doc-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUrlStore } from "@/hook/useUrlStore"

interface GoogleDocFormProps {}

const GoogleDocForm = ({}: GoogleDocFormProps) => {
  const { setUrl } = useUrlStore((state) => ({
    setUrl: state.setUrl,
  }))

  const form = useForm<googleDocFormSchemaType>({
    resolver: zodResolver(googleDocFormSchema),
    defaultValues: {
      googleDocURL: "",
    },
  })

  const onSubmit = (values: googleDocFormSchemaType) => {
    setUrl(values?.googleDocURL)
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
