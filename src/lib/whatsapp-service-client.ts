import axios from "axios";
import {appConfig} from "@/config/app-config.ts";
import {logger} from "@/lib/logger.ts";

const whatsappServiceClient = axios.create({
    baseURL: appConfig.whatsappServiceUrl,
    timeout: 10000, // opsional: tambahkan timeout agar lebih aman
    validateStatus: () => true, // seperti throwHttpErrors: false
});

whatsappServiceClient.interceptors.request.use((config) => {
    logger.info(`[whatsapp-service] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
});

export default whatsappServiceClient;
