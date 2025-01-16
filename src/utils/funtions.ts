export const imageDownload = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'image';
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error al descargar la imagen:', error);
  }
};
