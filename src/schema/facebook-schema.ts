import {z} from 'zod'
import { urlPatterns } from '@/constants/url-pattherns'

export const facebookFormSchema = z.object({
    facebookURL: z.string().url().regex(urlPatterns.facebook, { message: 'Invalid facebook URL provided' }),
})

export type facebookFormSchemaType = z.infer<typeof facebookFormSchema>