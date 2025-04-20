import { HeartIcon, MapPinIcon } from 'lucide-react';

interface AdCardProps {
  id: number;
  title: string;
  price: number;
  location: string;
  date: string;
  imageUrl: string;
  isFavorite?: boolean;
}

const AdCard: React.FC<AdCardProps> = ({ 
  id, 
  title, 
  price, 
  location, 
  date, 
  imageUrl,
  isFavorite = false 
}) => {
  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative">
        <a href={`/ad/${id}`} className="block aspect-[4/3] overflow-hidden">
          <img 
            src={imageUrl || "/placeholder.svg"} 
            alt={title}
            className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
          />
        </a>
        <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-avito-gray hover:text-avito-red">
          <HeartIcon className={`h-5 w-5 ${isFavorite ? 'fill-avito-red text-avito-red' : ''}`} />
        </button>
      </div>
      
      <div className="p-3">
        <a href={`/ad/${id}`} className="block">
          <h3 className="mb-1 line-clamp-2 font-medium hover:text-avito-blue">{title}</h3>
        </a>
        <div className="mb-2 text-lg font-bold">{price.toLocaleString('ru-RU')} ₽</div>
        <div className="flex items-center justify-between text-xs text-avito-gray">
          <div className="flex items-center">
            <MapPinIcon className="mr-1 h-3 w-3" />
            <span>{location}</span>
          </div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
