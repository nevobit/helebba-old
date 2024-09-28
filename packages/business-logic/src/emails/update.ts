
import { Collection, getModel } from "@rv/constant-definitions";
import { Game, GameSchemaMongo, UpdateGameDto } from "@rv/entities";

export const updateGame = async (data: UpdateGameDto) => {
    const model = getModel<Game>(Collection.GAMES, GameSchemaMongo);
    const game = await model.findById(data.uuid);
    
    if (!game) throw new Error(`Game doesn't exist`);

    const updatedGame = await model.findByIdAndUpdate(data.uuid, data, {
        new: true,
    });
    if (!updatedGame) throw new Error(`Game not found`);
    return updatedGame;
};
