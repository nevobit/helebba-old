import { helebbaApi } from "@/api"
import { User } from "@helebba/entities";

export const getUsers = async (account: string) => {
    const { data } = await helebbaApi.get("/users/account", {
        headers: {
          account,
        },
      });
    return data;
}

export const getCurrentUser = async (): Promise<User> => {
    const { data } = await helebbaApi.get("/user");
    return data;
}

export const updateUser = async (user: Partial<User>) => {
  const { data } = await helebbaApi.patch(`/users/${user.id}`, user);
  return data;
};