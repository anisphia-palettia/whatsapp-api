import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-session-id.ts";

const m_textHandler = new LocalHono()

m_textHandler.post("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
    }
)

export default m_textHandler