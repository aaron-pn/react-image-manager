import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface InfoComponentProps {
  labelButton: string;
  title: string;
  colorTitle?: string;
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  labelButton,
  title,
  colorTitle = 'text-gray-500',
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className={`text-3xl font-bold text-center my-8 ${colorTitle}`}>
        {title}
      </h1>
      <Button
        variant="outline"
        className="m-4  flex items-center gap-2 justify-center"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="w-5 h-5" />
        {labelButton}
      </Button>
    </div>
  );
};

export default InfoComponent;
