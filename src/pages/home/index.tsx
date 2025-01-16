import CardComponent from '@/components/custom/cardComponent';
import { useGetPhotosQuery } from '@/store/services/api';
import { Images } from '@/types';

const Home = () => {
  const { data: images, isLoading, isError } = useGetPhotosQuery('');

  if (isLoading) return <p>Cargando imágenes...</p>;
  if (isError) return <p>Error al cargar las imágenes.</p>;

  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="text-2xl font-bold">Imagenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 items-center">
        {images?.map(({ id, author, download_url }: Images) => (
          <CardComponent key={id} id={id} title={author} image={download_url} />
        ))}
      </div>
    </div>
  );
};
export default Home;
