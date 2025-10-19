import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  bonusPoints: number;
  loyaltyLevel: string;
  cartLength: number;
  onCartOpen: () => void;
}

const Header = ({ bonusPoints, loyaltyLevel, cartLength, onCartOpen }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in">
            <span className="text-3xl">✨</span>
            <h1 className="text-2xl font-bold text-primary">BeautyLux</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="font-medium text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="font-medium text-foreground hover:text-primary transition-colors">О бренде</a>
            <a href="#reviews" className="font-medium text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Card className="p-3 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-center space-x-2">
                <Icon name="Gift" className="text-primary" size={20} />
                <div className="text-sm">
                  <div className="font-semibold text-primary">{bonusPoints} баллов</div>
                  <div className="text-xs text-muted-foreground">{loyaltyLevel}</div>
                </div>
              </div>
            </Card>
            
            <Button variant="outline" size="icon" className="relative" onClick={onCartOpen}>
              <Icon name="ShoppingBag" size={20} />
              {cartLength > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {cartLength}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
