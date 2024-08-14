import {Tokens} from "@/model/Auth";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

export const fetchLogin = async (email: string, password: string): Promise<Tokens> => {
    try {
        const response = await fetch(`${baseUrl}/auth/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json() as Tokens
    } catch (e) {
        console.error('Fetch error:', e)
        throw new Error('An unexpected error occurred.')
    }
};
