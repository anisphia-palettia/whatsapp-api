import app from "@/app.ts";
import {appConfig} from "@/config/app-config.ts";
import {logger} from "@/lib/logger.ts";

function main() {
    Bun.serve({
        fetch: app.fetch,
        port: appConfig.appPort,
        idleTimeout: 0
    })
    logger.info(`Server started on port ${appConfig.appPort}`)
}

main()