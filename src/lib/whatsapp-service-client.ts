import {appConfig} from "@/config/app-config.ts";
import got from "got";
import {logger} from "@/lib/logger.ts";

const whatsappServiceClient = got.extend({
    prefixUrl: appConfig.whatsappServiceUrl,
    responseType: "json",
    retry: {limit: 2},
    throwHttpErrors: false,
    hooks: {
        beforeRequest: [
            (options) => {
                logger.info(`[whatsapp-service] ${options.method} ${options.url}`);
            },
        ],
    },
})

export default whatsappServiceClient;