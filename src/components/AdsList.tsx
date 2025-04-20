import AdCard from './AdCard';
import { Button } from '@/components/ui/button';

// Временные данные для демонстрации
const demoAds = [
  {
    id: 1,
    title: "iPhone 13 Pro Max 256GB",
    price: 75000,
    location: "Москва",
    date: "Сегодня, 12:30",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "2-к квартира, 52 м², 3/9 эт.",
    price: 5800000,
    location: "Санкт-Петербург",
    date: "Вчера, 18:10",
    imageUrl: "/placeholder.svg",
    isFavorite: true,
  },
  {
    id: 3,
    title: "Volkswagen Polo 2019",
    price: 750000,
    location: "Казань",
    date: "2 дня назад",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Детская коляска 2в1",
    price: 15000,
    location: "Москва",
    date: "Сегодня, 09:45",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Шкаф-купе трехдверный",
    price: 23500,
    location: "Екатеринбург",
    date: "Вчера, 15:20",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    title: "PlayStation 5 новая запечатанная",
    price: 45000,
    location: "Краснодар",
    date: "3 дня назад",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Велосипед горный Merida",
    price: 32000,
    location: "Сочи",
    date: "Сегодня, 14:15",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Щенки лабрадора с документами",
    price: 25000,
    location: "Новосибирск",
    date: "4 дня назад",
    imageUrl: "/placeholder.svg",
  }
];

const AdsList = () => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Рекомендации для вас</h2>
        <Button variant="ghost" className="text-avito-blue hover:bg-avito-blue/10">
          Смотреть все
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {demoAds.map(ad => (
          <AdCard
            key={ad.id}
            id={ad.id}
            title={ad.title}
            price={ad.price}
            location={ad.location}
            date={ad.date}
            imageUrl={ad.imageUrl}
            isFavorite={ad.isFavorite}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button className="bg-avito-blue hover:bg-avito-blue/90 px-8">
          Показать еще
        </Button>
      </div>
    </div>
  );
};

export default AdsList;
