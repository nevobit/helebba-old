
import { Collection, getModel } from "@rv/constant-definitions";
import { Game, GameSchemaMongo } from "@rv/entities";

export const getGameById = async (uuid: string): Promise<Game> => {
    const model = getModel<Game>(Collection.GAMES, GameSchemaMongo);
    const game = await model.findById(uuid) as Game;
    return game;
}
