import { urlPatterns } from '@/constants/url-pattherns'
import {z} from 'zod'

export const smsFormSchema = z.object({
    phoneNumber:z.string().regex(urlPatterns.phoneRegex , {message:"invalid phone number provided"}),
    message:z.string().max(256).optional()
})

export type smsFormSchemaType = z.infer<typeof smsFormSchema>