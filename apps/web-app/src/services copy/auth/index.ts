import { helebbaApi } from "@/api";
import { CreateUserDto } from "@helebba/entities";

interface Props {
    email: string;
    password: string;
}

export const loginApi = async ({ email, password }: Props) => {
    const { data } = await helebbaApi.post(`/login`, { email, password });
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token));
    return data;
};

export const signupApi = async (info: Partial<CreateUserDto>) => {
    const { data } = await helebbaApi.post(`/register`, info);
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
