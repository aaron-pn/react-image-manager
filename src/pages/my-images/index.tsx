import CardComponent from '@/components/custom/card-component';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const MyImages = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  if (favorites.length === 0) return <p>Images no found.</p>;

  return (
    <div className="flex flex-col h-screen w-screen">
      <h1 className="text-2xl font-bold">My images</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {favorites?.map(({ id, image, title }) => (
          <CardComponent key={id} id={id} title={title} image={image} />
        ))}
      </div>
    </div>
  );
};
export default MyImages;
