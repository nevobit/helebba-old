import { helebbaApi } from "@/api";
import { CreateUserDto } from "@helebba/entities";

export const loginApi = async (email: string) => {
    const { data } = await helebbaApi.post(`/auth/login`, { email });
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token));
    return data;
};


export const codeApi = async (code: number) => {
    const { data } = await helebbaApi.post(`/auth/code-verification`, { code });
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token));
    return data;
};

export const signupApi = async (info: Partial<CreateUserDto>) => {
    const { data } = await helebbaApi.post(`/auth/register`, info);
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token));
    return data;
};

export const loginGoogle = async (token_id: string) => {
    const { data } = await helebbaApi.post("/login-google", token_id);
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token));
    return { data }
}
