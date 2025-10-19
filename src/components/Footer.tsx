import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">✨</span>
              <h3 className="text-xl font-bold">BeautyLux</h3>
            </div>
            <p className="text-sm opacity-80">
              Премиальная косметика с натуральными ингредиентами и выгодной программой лояльности
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Для лица</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Для тела</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Защита от солнца</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Новинки</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">О бренде</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Доставка и оплата</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Возврат товара</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Программа лояльности</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-3">
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 BeautyLux. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
