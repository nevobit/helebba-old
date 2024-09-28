import { Collection, getModel } from '@helebba/constant-definitions';
import {
  UpdateUserDto, User, UserSchemaMongo,
} from '@helebba/entities';

export const updateUser = async (id: string, data: UpdateUserDto) => {
  const model = getModel<User>(Collection.USERS, UserSchemaMongo);
  const user = await model.findById(id);
  
  if (!user) throw new Error(`User don't exist`);
  
  const userUpdated = await model.findByIdAndUpdate(id, data, {
    new: true,
  });
 
  if (!userUpdated) throw new Error(`User not found`);
  
  return userUpdated;
};
