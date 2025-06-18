export const appConfig = {
    appPort: Bun.env.APP_PORT || 3000,
    nodeEnv: Bun.env.NODE_ENV || "production",
    whatsappServiceUrl: Bun.env.WHATSAPP_SERVICE_URL || "http://localhost:3001"
}