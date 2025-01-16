import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { RootState } from '@/store';
import { Bookmark } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AlertDialogComponent from './alert-dialog-component';
import { removeImage, saveImage } from '@/store/slices/savedSlices';

type CardComponentProps = {
  title: string;
  image: string;
  id: string;
};

const CardComponent: React.FC<CardComponentProps> = ({ title, image, id }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const savedImages = useSelector(
    (state: RootState) => state.savedImages.saved
  );

  const isSaved = savedImages.some((img) => img.id === id);

  const handleSave = () => {
    dispatch(saveImage({ id, title, image }));
    toast({
      title: 'Imagen guardada',
      description: 'La imagen ha sido guardada exitosamente.',
      variant: 'success',
    });
  };

  const handleRemove = () => {
    dispatch(removeImage(id));
    toast({
      title: 'Imagen eliminada',
      description: 'La imagen ha sido eliminada de tus guardados.',
      variant: 'destructive',
    });
  };

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="truncate text-xs md:text-sm lg:text-lg">
          {title}
        </CardTitle>
        <div className="">
          {isSaved ? (
            <AlertDialogComponent
              title="¿Eliminar esta imagen?"
              description={`¿Estás seguro de que deseas eliminar la imagen de "${title}" de tus guardados?`}
              onConfirm={handleRemove}
              trigger={
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:animate-pulse"
                >
                  <Bookmark className="w-7 h-7 text-green-400 " />
                </Button>
              }
            />
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              className="hover:animate-pulse"
            >
              <Bookmark className="w-7 h-7 text-gray-400" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <a
          className="cursor-pointer"
          onClick={() => {
            navigate(`/images/${id}`);
          }}
        >
          <img
            src={image || ''}
            alt={title}
            className="w-full h-auto aspect-video object-cover rounded"
            loading="lazy"
          />
        </a>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
