import {z} from "zod";
import {imageValidator} from "@/schema/image-validator.ts";

export const whatsappSchema = {
    message: {
        text: z.object({
            recipient: z.string().min(1),
            text: z.string().min(1)
        }),
        withImage: z.object({
            recipient: z.string().min(1),
            caption: z.string().optional(),
            image: imageValidator,
        }),
        broadcast: z.object({
            recipients: z.array(z.string()),
            text: z.string().min(1),
        }),
        broadcastWithImage: z.object({
            recipients: z.array(z.string()),
            caption: z.string().optional(),
            image: imageValidator,
        })
    }
}

export type WhatsappMessageTextInput = z.infer<typeof whatsappSchema.message.text>
export type WhatsAppMessageWithImageInput = z.infer<typeof whatsappSchema.message.withImage>
export type WhatsAppMessageBroadcastInput = z.infer<typeof whatsappSchema.message.broadcast>
export type WhatsAppMessageBroadcastWithImageInput = z.infer<typeof whatsappSchema.message.broadcastWithImage>
