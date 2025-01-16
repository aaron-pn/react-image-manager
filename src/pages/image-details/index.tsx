import AlertDialogComponent from '@/components/custom/alert-dialog-component';
import InfoComponent from '@/components/custom/info-component';
import SkeletonImageDetailsComponent from '@/components/custom/skeleton-image-details-component';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { RootState } from '@/store';
import { useGetPhotoIdQuery } from '@/store/services/api';
import { removeImage, saveImage } from '@/store/slices/savedSlices';
import { imageDownload } from '@/utils/funtions';
import { ArrowLeftIcon, Bookmark } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const ImageDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: image, isLoading, isError } = useGetPhotoIdQuery(id);

  const savedImages = useSelector(
    (state: RootState) => state.savedImages.saved
  );

  if (isLoading) {
    return <SkeletonImageDetailsComponent />;
  }

  if (!image) {
    return (
      <InfoComponent
        labelButton="Volver"
        title="Imagen no encontrada"
        colorTitle="text-red-600"
      />
    );
  }
  if (isError) {
    return (
      <InfoComponent
        labelButton="Volver"
        title="Parece que hubo un error al cargar la imagen"
        colorTitle="text-red-600"
      />
    );
  }

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
    <div className="flex items-start justify-start h-screen  px-6 py-6">
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        <div className="flex justify-between items-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Volver
          </Button>
          {isSaved ? (
            <AlertDialogComponent
              title="¿Eliminar esta imagen?"
              description={`¿Estás seguro de que deseas eliminar "${author}" de tus guardados?`}
              onConfirm={handleRemove}
              trigger={
                <Button variant="ghost" size="sm">
                  <Bookmark className="w-7 h-7 text-green-400" />
                </Button>
              }
            />
          ) : (
            <Button onClick={handleSave} variant="ghost">
              <Bookmark size="sm" className="w-7 h-7  text-gray-400" />
            </Button>
          )}
        </div>
        <img
          src={download_url}
          alt={author}
          className="w-full max-h-[500px] object-contain"
        />
        <div>
          <h1 className="text-xl lg:text-3xl font-bold text-gray-800">
            {author}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Dimensiones: {width} x {height}
          </p>
        </div>

        <Button
          onClick={() => imageDownload(download_url)}
          variant="secondary"
          className="px-4 py-2"
        >
          Descargar
        </Button>
      </div>
    </div>
  );
};

export default ImageDetailsPage;
