import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const UploadImage = async (file: Buffer) => {
  const result = await cloudinary.uploader.upload_stream({
    resource_type: 'image'
  }, (error, result) => {
    if (error) {
      throw new Error(error.message);
    }
    if (result) {
      return { url: result.secure_url, public_id: result.public_id };
    }
  }).end(file);  // Enviamos el Buffer al stream de subida

  if (!result) {
    throw new Error('Error uploading image');
  }
}