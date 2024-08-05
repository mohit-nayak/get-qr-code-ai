"use client"
import * as React from "react"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { smsFormSchema, smsFormSchemaType } from "@/schema/sms-schema"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUrlStore } from "@/hook/useUrlStore"
import { Textarea } from "@/components/ui/textarea"
import { CountrySelect } from "@/components/global/country-select"
import { getSmsFormatURL } from "@/lib/url-formatter"

interface SmsFormProps {}

const SmsForm = ({}: SmsFormProps) => {
  const [value, setValue] = React.useState("+91")
  const { setUrl } = useUrlStore((state) => ({
    setUrl: state.setUrl,
  }))

  const form = useForm<smsFormSchemaType>({
    resolver: zodResolver(smsFormSchema),
    defaultValues: {
      phoneNumber: "",
      message: "",
    },
  })

  const onSubmit = (values: smsFormSchemaType) => {
    const finalUrl = getSmsFormatURL(
      value,
      values?.phoneNumber,
      values?.message,
    )
    setUrl(finalUrl)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        id="main-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 px-1"
      >
        <div className="flex items-center gap-2">
          <CountrySelect setValue={setValue} value={value} />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="tel" placeholder="(5555) 5555-5555" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

export default SmsForm
