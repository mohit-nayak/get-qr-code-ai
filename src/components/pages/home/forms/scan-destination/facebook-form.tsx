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
import { useQrOptions } from "@/hook/useQrOptions"

interface FacebookFormProps {}

const FacebookForm = ({}: FacebookFormProps) => {
  const { setQrOptions } = useQrOptions((state) => ({
    setQrOptions: state?.setQrOptions,
  }))

  const form = useForm<facebookFormSchemaType>({
    resolver: zodResolver(facebookFormSchema),
    defaultValues: {
      facebookURL: "",
    },
  })

  const onSubmit = (values: facebookFormSchemaType) => {
    setQrOptions({data:values?.facebookURL})
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
