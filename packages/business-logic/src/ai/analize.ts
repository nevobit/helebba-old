import { Collection, getModel } from "@helebba/constant-definitions";
import { Product, ProductSchemaMongo, StatusType } from "@helebba/entities";
import OpenAI from 'openai';

export const analizeInfo = async (account: string) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);

  const products = await model
    .find({ account, status: StatusType.ACTIVE })
    .sort({ createdAt: -1 });

  console.log(products)
  const prompt = 'Estos son mis productos,' + JSON.stringify(products);

  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    temperature: .5,
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: prompt },
      { role: 'user', content: 'Dime cuantos productos tengo, su nombre y cual de mis productos crees que tiene mas potencial?' }
    ],
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
  return chatCompletion.choices[0]!.message;
};
