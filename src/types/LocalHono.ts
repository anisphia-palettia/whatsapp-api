import {Hono} from "hono";

type Variables = {
    sessionId: string,
    isToGroup: boolean;

}

export class LocalHono extends Hono<{
    Variables: Variables
}> {
}

