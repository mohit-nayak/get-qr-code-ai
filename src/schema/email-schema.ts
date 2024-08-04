import {z} from 'zod'


export const EmailFormSchema = z.object({
    email:z.string().email(),
    subject:z.string().max(150).optional(),
    message:z.string().max(256).optional(),
})

export type EmailFormSchemaType = z.infer<typeof EmailFormSchema>