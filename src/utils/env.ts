import z from 'zod'

const envSchema = z.object({
  BASE_URL: z.string().url()
})

export const env = envSchema.parse({
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
})

export default env
