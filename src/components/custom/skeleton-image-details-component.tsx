import { Skeleton } from '../ui/skeleton';

const SkeletonImageDetailsComponent = () => {
  return (
    <div className="flex items-start justify-start h-screen px-6 py-6">
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        <Skeleton className="h-10 w-48 rounded" />
        <Skeleton className="w-full h-[500px] rounded-lg" />
        <Skeleton className="h-4 w-32 rounded" />
        <Skeleton className="h-10 w-32 rounded" />
      </div>
    </div>
  );
};
export default SkeletonImageDetailsComponent;
