import { get } from "../utils/api_http_client";

export async function getConstituencies() {
    try {
        const res = await get("region/getConstituencies");

        return res;
    } catch (err) {
        return err;
    }
}
