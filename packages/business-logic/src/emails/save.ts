
import { Collection, getModel } from "@helebba/constant-definitions";
import { CreateEmailDto, Email, EmailSchemaMongo } from "@helebba/entities";

export const saveEmail = async (
  data: CreateEmailDto
): Promise<Email | string |  Error> => {
  const model = getModel<Email>(Collection.EMAILS, EmailSchemaMongo);

  const email = await model.findOne({
    title: data.title
  });

  if(email){
    await model.findByIdAndUpdate(email._id, {
      content: data.content
    });

    return  "Email updated successfully" ;
  }

  await model.create({
    title: data.title,
    content: data.content,
    account: data.account
  });

  return "Email saved successfully";
};
