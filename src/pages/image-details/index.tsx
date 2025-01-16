import AlertDialogComponent from '@/components/custom/alertDialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { RootState } from '@/store';
import { useGetPhotoIdQuery } from '@/store/services/api';
import { removeImage, saveImage } from '@/store/services/savedSlices';
import { Bookmark } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const downloadImage = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = 'image.png';
  link.click();
};

const ImageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: image, isLoading } = useGetPhotoIdQuery(id);

  const savedImages = useSelector(
    (state: RootState) => state.savedImages.saved
  );

  if (isLoading) return <p>Cargando...</p>;
  if (!image) return <p>Imagen no encontrada</p>;

  const isSaved = savedImages.some((img) => img.id === image.id);

  const handleSave = () => {
    dispatch(
      saveImage({
        id: image.id,
        title: image.author,
        image: image.download_url,
      })
    );
    toast({
      title: 'Imagen guardada',
      description: 'La imagen ha sido guardada exitosamente.',
      variant: 'success',
    });
  };

  const handleRemove = () => {
    dispatch(removeImage(image.id));
    toast({
      title: 'Imagen eliminada',
      description: 'La imagen ha sido eliminada de tus guardados.',
      variant: 'destructive',
    });
  };

  const { author, download_url, height, width } = image;

  return (
    <div className="p-6">
      <div className="flex flex-row justify-between items-center pb-3">
        <Button onClick={() => navigate(-1)}>Volver</Button>
        {isSaved ? (
          <AlertDialogComponent
            title="¿Eliminar esta imagen?"
            description={`¿Estás seguro de que deseas eliminar "${author}" de tus guardados?`}
            onConfirm={handleRemove}
            trigger={
              <Button variant="ghost" className="p-2">
                <Bookmark className="w-7 h-7 text-green-400" />
              </Button>
            }
          />
        ) : (
          <Button onClick={handleSave} variant="ghost" className="p-2">
            <Bookmark className="w-7 h-7 text-gray-400" />
          </Button>
        )}
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img
          src={download_url}
          alt={author}
          className="rounded-lg shadow-lg max-w-1/2 h-auto"
        />
        <h1 className="text-2xl font-bold">Autor: {author}</h1>
        <p className="text-sm text-gray-500">
          Dimensiones: {width} x {height}
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            downloadImage(download_url);
          }}
          variant="link"
          className="p-2"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default ImageDetails;
