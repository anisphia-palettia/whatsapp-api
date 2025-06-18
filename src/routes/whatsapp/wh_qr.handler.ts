import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-session-id.ts";
import WhatsappService from "@/services/whatsapp-service.ts";
import {handleServiceResponse} from "@/utils/handle-service-response.ts";

const wh_qrHandler = new LocalHono()

wh_qrHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const response = await WhatsappService(sessionId).qr()
        return handleServiceResponse(c, response)
    }
)

export default wh_qrHandler