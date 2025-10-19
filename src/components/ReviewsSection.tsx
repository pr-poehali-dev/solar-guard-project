import React from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Лучший солнцезащитный крем! Не оставляет белых следов и отлично защищает кожу. Программа лояльности - приятный бонус!",
      product: "SolarGuard Pro"
    },
    {
      name: "Мария Смирнова",
      rating: 5,
      text: "Сыворотка с витамином C творит чудеса! Кожа стала более ровной и сияющей. Накопила уже 500 баллов, жду Gold статус!",
      product: "Vitamin C Booster"
    },
    {
      name: "Екатерина Иванова",
      rating: 4,
      text: "Отличное качество продукции. Особенно радует система бонусов - реально можно сэкономить на следующих покупках.",
      product: "Night Repair Cream"
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы покупателей</h2>
          <p className="text-muted-foreground">Что говорят наши клиенты о продукции</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <Badge variant="outline" className="w-fit">{review.product}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
