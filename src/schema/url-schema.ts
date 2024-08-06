import {z} from 'zod'


export const urlFormSchema = z.object({
    url:z.string().url().min(10)
})

export type urlFormSchemaType = z.infer<typeof urlFormSchema>