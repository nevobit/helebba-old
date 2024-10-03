import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const UploadImage = async (file: Buffer) => {
  const result: UploadApiResponse = await new Promise((resolve) => {
    cloudinary.uploader.upload_stream((error, uploadResult) => {
      if (uploadResult) {
        return resolve(uploadResult);
      }
    }).end(file);
  });

  return { url: result.secure_url, public_id: result.public_id };

}