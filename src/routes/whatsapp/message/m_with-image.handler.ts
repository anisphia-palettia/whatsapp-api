import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-session-id.ts";
import WhatsappService from "@/services/whatsapp-service.ts";
import validate from "@/middleware/validate.ts";
import {
    type WhatsAppMessageWithImageInput,
    whatsappSchema
} from "@/schema/whatsapp.schema.ts";
import {handleServiceResponse} from "@/utils/handle-service-response.ts";
import {isToGroup} from "@/middleware/is-to-group.ts";

const m_withImageHandler = new LocalHono()

m_withImageHandler.post("",
    withSessionId(),
    isToGroup(),
    validate("form", whatsappSchema.message.withImage),
    async (c) => {
        const sessionId = c.get("sessionId")
        const isToGroup = c.get("isToGroup")
        const data = c.req.valid("form") as WhatsAppMessageWithImageInput
        const response = await WhatsappService(sessionId).message(isToGroup).withImage(data)
        return handleServiceResponse(c, response)
    }
)

export default m_withImageHandler