import {z} from 'zod'
import { urlPatterns } from '@/constants/url-pattherns'

export const youtubeFormSchema = z.object({
    youtubeURL: z.string().url().regex(urlPatterns.youtube, { message: 'Invalid youtube URL provided' }),
})

export type youtubeFormSchemaType = z.infer<typeof youtubeFormSchema>