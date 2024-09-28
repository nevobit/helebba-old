
import { Collection, getModel } from "@rv/constant-definitions";
import { Game, GameSchemaMongo, StatusType } from "@rv/entities";

export const deleteGame = async (uuid: string): Promise<boolean | Error> => {
  const model = getModel<Game>(Collection.GAMES, GameSchemaMongo);
  const result = await model.updateOne({ _id: uuid }, { status: StatusType.DELETED });
  if (!result) throw new Error('Could not delete game');
  return true;
};
