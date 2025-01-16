import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { RootState } from '@/store';
import { addFavorite, removeFavorite } from '@/store/services/favoriteSlices';
import { Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AlertDialogComponent from './alertDialog'; // Ajusta la ruta según tu proyecto

interface CardComponentProps {
  title: string;
  image: string;
  id: string;
}

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
      description: `${title} ha sido agregado a tus favoritos.`,
      variant: 'success',
    });
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(id));
    toast({
      title: 'Favorito eliminado',
      description: `${title} ha sido eliminado de tus favoritos.`,
      variant: 'destructive',
    });
  };

  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <div className="relative">
          <CardTitle>{title}</CardTitle>
          <div className="absolute top-0 right-0">
            {isFavorite ? (
              <AlertDialogComponent
                title="¿Eliminar esta imagen?"
                description={`¿Estás seguro de que deseas eliminar "${title}" de tus favoritos?`}
                onConfirm={handleRemoveFavorite} // Llamada directa a eliminar
                trigger={
                  <Button variant="ghost" className="p-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                  </Button>
                }
                confirmLabel="Sí, eliminar"
                cancelLabel="Cancelar"
              />
            ) : (
              <Button
                variant="ghost"
                className="p-2"
                onClick={handleAddFavorite} // Agregar a favoritos directamente
              >
                <Star className="w-5 h-5 text-gray-500" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <a
          className="cursor-pointer"
          onClick={() => {
            navigate(`/images/${id}`);
          }}
        >
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </a>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
