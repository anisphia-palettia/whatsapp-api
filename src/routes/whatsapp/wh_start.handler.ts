import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-session-id.ts";
import WhatsappService from "@/services/whatsapp-service.ts";
import {sendSuccess} from "@/utils/response.ts";
import {handleServiceResponse} from "@/utils/handle-service-response.ts";

const wh_startHandler = new LocalHono()

wh_startHandler.post("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const response = await WhatsappService(sessionId).start()
        return handleServiceResponse(c, response)
    }
)

export default wh_startHandler