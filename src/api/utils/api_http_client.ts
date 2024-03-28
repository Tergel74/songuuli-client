export const BASE_URL = "http://localhost:5000/";

export async function get(endpoint: string) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        const responseData = await res.json();

        return responseData;
    } catch (err) {
        console.error("Error fetching data: ", err);
        throw err;
    }
}

export async function post(endpoint: string, data: {}) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await res.json();
        return responseData;
    } catch (err) {
        console.error("Error posting data:", err);
        throw err;
    }
}
