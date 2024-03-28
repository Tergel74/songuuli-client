import { get, post } from "../utils/api_http_client";

export async function getUser() {
    console.log("getUser");
    try {
        const data = await get("user/me");
        console.log(data);

        return {
            user: data,
            error: null,
        };
    } catch (err) {
        return {
            user: null,
            error: err,
        };
    }
}
