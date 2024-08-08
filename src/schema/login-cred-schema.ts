import {z} from 'zod'


 export const credLoginFormSchema = z.object({
    email:z.string().email(),
    password:z.string().min(1).max(4)
 })

 export type credLoginFormSchemaType = z.infer<typeof credLoginFormSchema>