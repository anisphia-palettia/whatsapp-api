import type {MiddlewareHandler} from "hono";

export function isToGroup(): MiddlewareHandler {
    return async (c, next) => {
        const isToGroup = c.req.query("isToGroup");
        if (typeof isToGroup === "undefined") {
            throw new Error("Missing isToGroup in query");
        }
        const isToGroupBool = isToGroup === "true";
        c.set("isToGroup", isToGroupBool);
        await next();
    };
}
