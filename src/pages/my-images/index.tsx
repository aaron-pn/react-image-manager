import CardComponent from '@/components/custom/card-component';
import InfoComponent from '@/components/custom/info-component';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const MyImagesPage = () => {
  const savedImages = useSelector(
    (state: RootState) => state.savedImages.saved
  );

  if (savedImages.length === 0)
    return (
      <InfoComponent
        labelButton="Ir a la galeria de imagenes"
        title="No tienes imagenes guardadas"
      />
    );

  return (
    <div className="flex flex-col h-screen w-full px-4 sm:px-8 md:px-16 py-2">
      <h1 className="text-3xl font-bold text-center my-8">Mis Imágenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {savedImages?.map(({ id, image, title }) => (
          <CardComponent key={id} id={id} title={title} image={image} />
        ))}
      </div>
    </div>
  );
};
export default MyImagesPage;
