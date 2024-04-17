import { get, post } from "../utils/api_http_client";

export async function getUser() {
    try {
        const res = await get("user/me");
        console.log(res);

        return {
            user: res,
            error: null,
        };
    } catch (err) {
        return {
            user: null,
            error: err,
        };
    }
}
