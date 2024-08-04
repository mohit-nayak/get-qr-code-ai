"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { facebookFormSchema, facebookFormSchemaType } from "@/schema/facebook-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUrlStore } from "@/hook/useUrlStore"

interface FacebookFormProps {}

const FacebookForm = ({}: FacebookFormProps) => {
  const { setUrl } = useUrlStore((state) => ({
    setUrl: state.setUrl,
  }))

  const form = useForm<facebookFormSchemaType>({
    resolver: zodResolver(facebookFormSchema),
    defaultValues: {
      facebookURL: "",
    },
  })

  const onSubmit = (values: facebookFormSchemaType) => {
    setUrl(values?.facebookURL)
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
          name="facebookURL"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="http://www.facebook.com/johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default FacebookForm
