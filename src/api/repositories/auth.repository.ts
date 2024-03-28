import { get, post } from "../utils/auth_api_http_client";

export async function signIn(nationalId: String, password: String) {
    try {
        const res = await post("signIn", {
            nationalId: nationalId,
            password: password,
        });

        return res;
    } catch (err) {
        console.log(err);
        return err;
    }
}
