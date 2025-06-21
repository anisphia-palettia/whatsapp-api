import type {
    WhatsAppMessageBroadcastInput, WhatsAppMessageBroadcastWithImageInput,
    WhatsappMessageTextInput,
    WhatsAppMessageWithImageInput,
} from "@/schema/whatsapp.schema.ts";
import whatsappServiceClient from "@/lib/whatsapp-service-client.ts";
import type {ApiResponse} from "@/types/ApiResponse.ts";

export default function WhatsappService(sessionId: string) {
    return {
        async start(): Promise<ApiResponse> {
            const baseRoute = "start";
            const response = await whatsappServiceClient.post(baseRoute, null, {
                params: {sessionId},
            });
            return response.data;
        },

        async qr(): Promise<ApiResponse<{ qrCode: string }>> {
            const baseRoute = "qr";
            const response = await whatsappServiceClient.get(baseRoute, {
                params: {sessionId},
            });
            return response.data;
        },

        message(isToGroup: boolean) {
            const baseRoute = "message";

            return {
                async text(data: WhatsappMessageTextInput): Promise<ApiResponse> {
                    const response = await whatsappServiceClient.post(`${baseRoute}/text`, data, {
                        params: {sessionId, isToGroup},
                    });
                    return response.data;
                },
                async broadcast(data: WhatsAppMessageBroadcastInput): Promise<ApiResponse> {
                    const response = await whatsappServiceClient.post(`${baseRoute}/broadcast`, data, {
                        params: {sessionId},
                    });
                    return response.data;
                },

                async broadcastWithImage(data: WhatsAppMessageBroadcastWithImageInput): Promise<ApiResponse> {
                    const form = new FormData();
                    form.append("recipients", data.recipients);
                    form.append("image", data.image);

                    if (data.caption) {
                        form.append("caption", data.caption);
                    }

                    const response = await whatsappServiceClient.post(`${baseRoute}/broadcast-with-image`, form, {
                        params: {sessionId},
                    });
                    return response.data;
                },

                async withImage(data: WhatsAppMessageWithImageInput): Promise<ApiResponse> {
                    const form = new FormData();

                    form.append("recipient", data.recipient);
                    form.append("image", data.image);

                    if (data.caption) {
                        form.append("caption", data.caption);
                    }

                    const response = await whatsappServiceClient.post(`${baseRoute}/with-image`, form, {
                        params: {
                            sessionId: sessionId,
                            isToGroup: isToGroup,
                        },
                    });
                    return response.data;
                },
            };
        },
    };
}
