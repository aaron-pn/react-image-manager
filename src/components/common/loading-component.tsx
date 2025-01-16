const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-l-2 border-r-2 border-solid border-primary-foreground" />
      </div>
    </div>
  );
};

export default LoadingComponent;
