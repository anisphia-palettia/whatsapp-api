import {LocalHono} from "@/types/LocalHono.ts";
import r_message from "@/routes/whatsapp/message/_r_message.ts";
import wh_startHandler from "@/routes/whatsapp/wh_start.handler.ts";
import wh_qrHandler from "@/routes/whatsapp/wh_qr.handler.ts";

const r_whatsapp = new LocalHono()

r_whatsapp.route("/start", wh_startHandler) //POST
r_whatsapp.route("/qr", wh_qrHandler) //GET

r_whatsapp.route("/message", r_message)//ROUTES

export default r_whatsapp