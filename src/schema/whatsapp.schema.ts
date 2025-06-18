import {z} from "zod";

export const whatsappSchema = {
    message: {
        text: z.object({
            recipient: z.string().min(1),
            text: z.string().min(1)
        })
    }
}

export  type WhatsappMessageTextInput = z.infer<typeof whatsappSchema.message.text>