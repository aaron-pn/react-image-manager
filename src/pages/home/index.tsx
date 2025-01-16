import { useEffect, useRef, useState } from 'react';
import { useGetPhotosQuery } from '@/store/services/api';
import CardComponent from '@/components/custom/card-component';
import SkeletonCard from '@/components/custom//skeleton-card-component';
import { Images } from '@/types';
import InfoComponent from '@/components/custom/info-component';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const { data, isFetching, isError, isLoading } = useGetPhotosQuery(
    { page, limit: 10 },
    { skip: !hasMore }
  );
  useEffect(() => {
    if (data?.length === 0) {
      setHasMore(false);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isFetching) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.disconnect();
      }
    };
  }, [loaderRef, hasMore, isFetching]);

  if (isError) {
    return (
      <InfoComponent
        labelButton="Volver"
        title="Parece que hubo un error al cargar la imagen"
        colorTitle="text-red-600"
      />
    );
  }
  return (
    <div className="flex flex-col h-screen w-full px-4 sm:px-8 md:px-16 py-2">
      <h1 className="text-3xl font-bold text-center my-8">
        Galería de Imágenes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {data?.map(({ id, author, download_url }: Images) => (
          <CardComponent key={id} id={id} title={author} image={download_url} />
        ))}
      </div>
      <div ref={loaderRef} className="flex justify-center items-center pt-4">
        {isFetching && hasMore && (
          <p className="text-center text-gray-500 animate-pulse pt-4">
            Cargando más imágenes...
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
