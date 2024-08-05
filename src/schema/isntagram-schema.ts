import {z} from 'zod'
import { urlPatterns } from '@/constants/url-pattherns'

export const instagramFormSchema = z.object({
    instagram: z.string().url().regex(urlPatterns.instagram, { message: 'Invalid Instagram URL or Id provided' }),
})

export type instagramFormSchemaType = z.infer<typeof instagramFormSchema>