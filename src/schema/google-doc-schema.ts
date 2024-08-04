import {z} from 'zod'
import { urlPatterns } from '@/constants/url-pattherns'

export const googleDocFormSchema = z.object({
    googleDocURL: z.string().regex(urlPatterns.googleDocs, { message: 'Invalid google docs URL provided' }),
})

export type googleDocFormSchemaType = z.infer<typeof googleDocFormSchema>