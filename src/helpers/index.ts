// Base64 converter
export const convertImageToBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      resolve(base64);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};
