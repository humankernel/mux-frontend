import { z } from "zod";

const envSchema = z.object({
  AUTH_SECRET: z.string().min(1),
  DB_URL: z.string().min(1),
  API_HOST: z.string().ip().min(1),
  API_PORT: z.coerce.number().min(1),
});

export const env = envSchema.parse(process.env);
