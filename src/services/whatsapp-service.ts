    import type {WhatsappMessageTextInput} from "@/schema/whatsapp.schema.ts";
    import whatsappServiceClient from "@/lib/whatsapp-service-client.ts";
    import type {ApiResponse} from "@/types/ApiResponse.ts";

    export default function WhatsappService(sessionId: string) {
        return {
            async start(): Promise<ApiResponse> {
                const baseRoute = "start"
                return whatsappServiceClient.post(baseRoute, {
                    searchParams: {sessionId}
                }).json();
            },
            async qr(): Promise<ApiResponse<{ qrCode: string }>> {
                const baseRoute = "qr"
                return whatsappServiceClient.get(baseRoute, {
                    searchParams: {sessionId}
                }).json()
            },

            message() {
                const baseRoute = "message"
                return {
                    async text(data: WhatsappMessageTextInput): Promise<ApiResponse> {
                        return whatsappServiceClient.post(`${baseRoute}/text`, {
                            json: data,
                            searchParams: {sessionId}
                        }).json()
                    }
                }
            }
        }
    }