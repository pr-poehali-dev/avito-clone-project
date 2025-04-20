import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPinIcon, PlusCircleIcon, UserCircleIcon, BellIcon, SearchIcon } from 'lucide-react';

const Header = () => {
  const [location, setLocation] = useState('Москва');

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center">
            <a href="/" className="mr-8">
              <h1 className="text-2xl font-bold text-avito-blue">Авито</h1>
            </a>
            <div className="flex cursor-pointer items-center text-sm font-medium text-avito-darkGray hover:text-avito-blue">
              <MapPinIcon className="mr-1 h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>

          <div className="flex-1 md:mx-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-avito-gray" />
              <Input 
                placeholder="Поиск по объявлениям"
                className="pl-10 h-11 w-full text-sm border-avito-gray/30 rounded-md bg-avito-lightGray"
              />
              <Button 
                className="absolute right-0 top-0 bottom-0 rounded-l-none bg-avito-blue hover:bg-avito-blue/90"
              >
                Найти
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-avito-darkGray hover:text-avito-blue">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-avito-darkGray hover:text-avito-blue">
              <UserCircleIcon className="h-5 w-5" />
              <span className="hidden md:inline">Мой профиль</span>
            </Button>
            <Button className="bg-avito-blue hover:bg-avito-blue/90">
              <PlusCircleIcon className="h-5 w-5" />
              <span className="hidden md:inline">Разместить объявление</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
