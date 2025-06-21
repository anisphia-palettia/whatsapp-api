import {LocalHono} from "@/types/LocalHono.ts";
import m_textHandler from "@/routes/whatsapp/message/m_text.handler.ts";
import m_withImageHandler from "@/routes/whatsapp/message/m_with-image.handler.ts";

const r_message = new LocalHono()

r_message.route("/text", m_textHandler)
r_message.route("/with-image", m_withImageHandler)

export default r_message