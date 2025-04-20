
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPinIcon, ImagePlusIcon } from "lucide-react";

const CreateAd = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages([...images, ...newFiles]);
      
      // Create preview URLs
      const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the code to submit your ad
    alert("Ваше объявление успешно создано!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Разместить объявление услуги коррекции бровей</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Category */}
                <div>
                  <Label htmlFor="category">Категория</Label>
                  <Select defaultValue="beauty">
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beauty">Красота и здоровье</SelectItem>
                      <SelectItem value="services">Услуги</SelectItem>
                      <SelectItem value="personal">Личные услуги</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Title */}
                <div>
                  <Label htmlFor="title">Название услуги</Label>
                  <Input 
                    id="title" 
                    placeholder="Например: Профессиональная коррекция бровей"
                    defaultValue="Профессиональная коррекция и окрашивание бровей"
                    className="mt-1" 
                    required 
                  />
                </div>
                
                {/* Description */}
                <div>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Опишите вашу услугу подробно" 
                    className="mt-1 min-h-32" 
                    defaultValue="Предлагаю профессиональную услугу по коррекции и окрашиванию бровей. 

✅ Опыт работы более 5 лет
✅ Использую только качественные материалы и инструменты
✅ Индивидуальный подход к каждому клиенту
✅ Работаю в стерильных условиях
✅ Подбор формы бровей с учетом особенностей лица
✅ Долговременная укладка бровей

Стоимость услуг:
- Коррекция бровей - 800 р.
- Окрашивание бровей - 900 р.
- Коррекция + окрашивание - 1500 р.

Предварительная запись по телефону или WhatsApp."
                    required 
                  />
                </div>
                
                {/* Price */}
                <div>
                  <Label htmlFor="price">Цена (₽)</Label>
                  <Input 
                    id="price" 
                    type="number" 
                    placeholder="Укажите стоимость услуги" 
                    defaultValue="1500"
                    className="mt-1" 
                    required 
                  />
                </div>
                
                {/* Contact */}
                <div>
                  <Label htmlFor="phone">Телефон для связи</Label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (___) ___-__-__" 
                    className="mt-1" 
                    required 
                  />
                </div>
                
                {/* Location */}
                <div>
                  <Label htmlFor="location">Местоположение</Label>
                  <div className="relative mt-1">
                    <MapPinIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-avito-gray" />
                    <Input 
                      id="location" 
                      placeholder="Укажите адрес" 
                      className="pl-10" 
                      defaultValue="Москва, м. Арбатская"
                      required 
                    />
                  </div>
                </div>
                
                {/* Photos */}
                <div>
                  <Label>Фотографии</Label>
                  <div className="mt-2 grid grid-cols-4 gap-4">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative aspect-square rounded border">
                        <img 
                          src={url} 
                          alt={`preview ${index}`} 
                          className="h-full w-full object-cover rounded" 
                        />
                      </div>
                    ))}
                    <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                      <ImagePlusIcon className="h-8 w-8 text-gray-400" />
                      <span className="mt-2 text-xs text-gray-500">Добавить фото</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        multiple 
                        onChange={handleImageChange} 
                        className="hidden" 
                      />
                    </label>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Можно загрузить до 8 фотографий. Первое фото будет на обложке объявления.</p>
                </div>
                
                <Button type="submit" className="w-full bg-avito-blue hover:bg-avito-blue/90">
                  Опубликовать объявление
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAd;
