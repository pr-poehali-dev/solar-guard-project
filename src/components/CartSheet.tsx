import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Progress } from '@/components/ui/progress';

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cart: CartItem[];
  bonusPoints: number;
  loyaltyLevel: string;
  loyaltyProgress: number;
  nextLevelPoints: number;
  onRemoveItem: (index: number) => void;
  calculateTotal: () => number;
  calculateBonus: () => number;
  calculateDiscount: () => number;
}

const CartSheet = ({
  open,
  onOpenChange,
  cart,
  bonusPoints,
  loyaltyLevel,
  loyaltyProgress,
  nextLevelPoints,
  onRemoveItem,
  calculateTotal,
  calculateBonus,
  calculateDiscount
}: CartSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>
            {cart.length === 0 ? 'Ваша корзина пуста' : `${cart.length} товар(ов) в корзине`}
          </SheetDescription>
        </SheetHeader>
        
        {cart.length > 0 && (
          <div className="mt-6 space-y-6">
            <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span className="font-semibold">Программа лояльности</span>
                </div>
                <Badge variant="secondary">{loyaltyLevel}</Badge>
              </div>
              <Progress value={loyaltyProgress} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">
                До {loyaltyLevel === 'Platinum' ? 'максимального' : 'следующего'} уровня: {nextLevelPoints - bonusPoints} баллов
              </p>
            </Card>

            {cart.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{item.image}</div>
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <p className="font-bold text-primary mt-1">{item.price}₽</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => onRemoveItem(index)}
                    >
                      <Icon name="X" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="p-4 bg-muted/50">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Сумма товаров:</span>
                  <span className="font-semibold">{calculateTotal()}₽</span>
                </div>
                {calculateDiscount() > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Скидка за баллы:</span>
                    <span className="font-semibold">-{calculateDiscount()}₽</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-primary">
                  <span>Начислим баллов:</span>
                  <span className="font-semibold">+{calculateBonus()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Итого:</span>
                  <span className="text-primary">{calculateTotal() - calculateDiscount()}₽</span>
                </div>
              </div>
            </Card>

            <Button className="w-full" size="lg">
              Оформить заказ
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
