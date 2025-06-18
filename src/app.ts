import {LocalHono} from "@/types/LocalHono.ts";
import r_api from "@/routes/_r_api.ts";
import errorHandler from "@/middleware/error-handler.ts";

const app = new LocalHono()

app.route("/api", r_api)

app.onError(errorHandler)

export default app