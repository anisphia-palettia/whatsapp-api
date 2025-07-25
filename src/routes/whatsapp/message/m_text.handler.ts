import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-session-id.ts";
import WhatsappService from "@/services/whatsapp-service.ts";
import validate from "@/middleware/validate.ts";
import {type WhatsappMessageTextInput, whatsappSchema} from "@/schema/whatsapp.schema.ts";
import {sendSuccess} from "@/utils/response.ts";
import {handleServiceResponse} from "@/utils/handle-service-response.ts";
import {isToGroup} from "@/middleware/is-to-group.ts";

const m_textHandler = new LocalHono()

m_textHandler.post("",
    withSessionId(),
    isToGroup(),
    validate("json", whatsappSchema.message.text),
    async (c) => {
        const sessionId = c.get("sessionId")
        const isToGroup = c.get("isToGroup")
        const data = c.req.valid("json") as WhatsappMessageTextInput
        const response = await WhatsappService(sessionId).message(isToGroup).text(data)
        return handleServiceResponse(c, response)
    }
)

export default m_textHandler