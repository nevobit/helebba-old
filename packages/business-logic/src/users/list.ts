import { Collection, getModel } from "@helebba/constant-definitions";
import { StatusType, User, UserSchemaMongo } from "@helebba/entities";

export const getAllUsers = async (): Promise<User[]> => {
  const model = getModel<User>(Collection.USERS, UserSchemaMongo);
  const users = await model.find({
    status: StatusType.ACTIVE,
  });
  return users;
};
