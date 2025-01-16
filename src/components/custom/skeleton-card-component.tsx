import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => {
  return (
    <div className="w-full ">
      <div>
        <div className="w-full">
          <Skeleton className="h-10 w-[250px] mb-2" />
        </div>
      </div>
      <div>
        <Skeleton className="h-[125px] w-[250px] rounded" />
      </div>
    </div>
  );
};

export default SkeletonCard;
