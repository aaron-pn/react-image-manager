import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { RootState } from '@/store';
import { addFavorite, removeFavorite } from '@/store/slices/favoriteSlices';
import { Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AlertDialogComponent from './alert-dialog-component';

type CardComponentProps = {
  title: string;
  image: string;
  id: string;
};

const CardComponent = ({ title, image, id }: CardComponentProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const isFavorite = favorites.some((fav) => fav.id === id);

  const handleAddFavorite = () => {
    dispatch(addFavorite({ id, title, image }));
    toast({
      title: 'Favorito agregado',
      description: `Una imagen de ${title} ha sido agregada a tus favoritos.`,
      variant: 'success',
    });
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(id));
    toast({
      title: 'Favorito eliminado',
      description: `Una imagen de ${title} ha sido eliminada de tus favoritos.`,
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
          {isFavorite ? (
            <AlertDialogComponent
              title="¿Eliminar esta imagen?"
              description={`¿Estás seguro de que deseas eliminar la imagen de "${title}" de tus favoritos?`}
              onConfirm={handleRemoveFavorite}
              trigger={
                <Button variant="ghost" size="sm">
                  <Star className="w-5 h-5 text-yellow-400" />
                </Button>
              }
            />
          ) : (
            <Button variant="ghost" size="sm" onClick={handleAddFavorite}>
              <Star className="w-5 h-5 text-gray-500" />
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
