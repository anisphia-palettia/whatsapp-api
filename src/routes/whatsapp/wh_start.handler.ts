import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-session-id.ts";
import WhatsappService from "@/services/whatsapp-service.ts";
import {sendSuccess} from "@/utils/response.ts";

const wh_startHandler = new LocalHono()

wh_startHandler.post("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const response = await WhatsappService(sessionId).start()
        return sendSuccess(c, {
            status: 201,
            message: response.message,
        })
    }
)

export default wh_startHandler