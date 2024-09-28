import { Collection, getModel } from '@rv/constant-definitions';
import { Game, GameSchemaMongo } from '@rv/entities';

export const getGameBySlug = async (slug: string): Promise<Game | null> => {
  const model = getModel<Game>(Collection.GAMES, GameSchemaMongo);
  const game = (await model.findOne({ slug: slug })) as Game;
  return game;
};
