import {LocalHono} from "@/types/LocalHono.ts";
import m_textHandler from "@/routes/whatsapp/message/m_text.handler.ts";

const r_message = new LocalHono()

r_message.route("/text", m_textHandler)

export default r_message