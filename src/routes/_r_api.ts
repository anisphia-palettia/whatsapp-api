import {LocalHono} from "@/types/LocalHono.ts";
import r_whatsapp from "@/routes/whatsapp/_r_whastapp.ts";

const r_api = new LocalHono()

r_api.route("/whatsapp", r_whatsapp)

export default r_api