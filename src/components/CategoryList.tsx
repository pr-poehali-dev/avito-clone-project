import { CarIcon, HomeIcon, SmartphoneIcon, SofaIcon, ShirtIcon, BabyIcon, DumbbellIcon, GraduationCapIcon } from 'lucide-react';

interface CategoryItemProps {
  icon: React.ReactNode;
  name: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-avito-lightGray mb-2">
        {icon}
      </div>
      <span className="text-sm text-center">{name}</span>
    </div>
  );
};

const CategoryList = () => {
  const categories = [
    { icon: <CarIcon className="h-8 w-8 text-avito-blue" />, name: "Авто" },
    { icon: <HomeIcon className="h-8 w-8 text-avito-green" />, name: "Недвижимость" },
    { icon: <SmartphoneIcon className="h-8 w-8 text-avito-orange" />, name: "Электроника" },
    { icon: <SofaIcon className="h-8 w-8 text-avito-teal" />, name: "Для дома" },
    { icon: <ShirtIcon className="h-8 w-8 text-avito-red" />, name: "Одежда" },
    { icon: <BabyIcon className="h-8 w-8 text-avito-blue" />, name: "Детские товары" },
    { icon: <DumbbellIcon className="h-8 w-8 text-avito-green" />, name: "Хобби и спорт" },
    { icon: <GraduationCapIcon className="h-8 w-8 text-avito-orange" />, name: "Услуги" }
  ];

  return (
    <div className="py-8">
      <h2 className="mb-6 text-xl font-bold">Категории</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <CategoryItem key={index} icon={category.icon} name={category.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
