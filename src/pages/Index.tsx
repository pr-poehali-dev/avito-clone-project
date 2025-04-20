import Header from '@/components/Header';
import CategoryList from '@/components/CategoryList';
import AdsList from '@/components/AdsList';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 flex-1">
        <CategoryList />
        <div className="my-4 h-px bg-gray-200" />
        <AdsList />
      </main>

      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">О компании</h3>
              <ul className="space-y-2 text-sm text-avito-darkGray">
                <li><a href="#" className="hover:text-avito-blue">О нас</a></li>
                <li><a href="#" className="hover:text-avito-blue">Вакансии</a></li>
                <li><a href="#" className="hover:text-avito-blue">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Помощь</h3>
              <ul className="space-y-2 text-sm text-avito-darkGray">
                <li><a href="#" className="hover:text-avito-blue">Помощь покупателям</a></li>
                <li><a href="#" className="hover:text-avito-blue">Правила сервиса</a></li>
                <li><a href="#" className="hover:text-avito-blue">Безопасность</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Для бизнеса</h3>
              <ul className="space-y-2 text-sm text-avito-darkGray">
                <li><a href="#" className="hover:text-avito-blue">Реклама на сайте</a></li>
                <li><a href="#" className="hover:text-avito-blue">Партнерская программа</a></li>
                <li><a href="#" className="hover:text-avito-blue">Для магазинов</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Скачайте приложение</h3>
              <div className="flex space-x-2">
                <a href="#" className="block">
                  <img src="/placeholder.svg" alt="App Store" className="h-10 w-auto" />
                </a>
                <a href="#" className="block">
                  <img src="/placeholder.svg" alt="Google Play" className="h-10 w-auto" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-avito-gray">
            &copy; {new Date().getFullYear()} Авито — сайт объявлений. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
