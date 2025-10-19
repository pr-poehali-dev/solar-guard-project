import React from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LoyaltySection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-secondary/50 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Программа лояльности</h2>
            <p className="text-muted-foreground">
              Получайте бонусы за каждую покупку и обменивайте их на скидки
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { level: 'Bronze', points: '0-199', discount: '3%', color: 'from-orange-400 to-orange-600' },
              { level: 'Silver', points: '200-499', discount: '5%', color: 'from-gray-400 to-gray-600' },
              { level: 'Gold', points: '500-999', discount: '7%', color: 'from-yellow-400 to-yellow-600' },
              { level: 'Platinum', points: '1000+', discount: '10%', color: 'from-purple-400 to-purple-600' }
            ].map((tier) => (
              <Card key={tier.level} className="text-center">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                    <Icon name="Award" className="text-white" size={32} />
                  </div>
                  <CardTitle>{tier.level}</CardTitle>
                  <CardDescription>{tier.points} баллов</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{tier.discount}</p>
                  <p className="text-sm text-muted-foreground">кэшбэк</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Gift" className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="font-bold mb-2">Накапливайте баллы</h3>
                <p className="text-sm text-muted-foreground">5% от суммы каждой покупки возвращается бонусами</p>
              </div>
              <div>
                <Icon name="Percent" className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="font-bold mb-2">Получайте скидки</h3>
                <p className="text-sm text-muted-foreground">Используйте баллы для оплаты до 20% заказа</p>
              </div>
              <div>
                <Icon name="Crown" className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="font-bold mb-2">VIP привилегии</h3>
                <p className="text-sm text-muted-foreground">Эксклюзивные предложения для Platinum участников</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;
