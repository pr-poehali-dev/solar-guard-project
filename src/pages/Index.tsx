import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [bonusPoints, setBonusPoints] = useState(350);

  const products = [
    {
      id: 1,
      name: "SolarGuard Pro SPF 50+",
      category: "Защита от солнца",
      price: 1299,
      image: "☀️",
      rating: 4.8,
      reviews: 247,
      description: "Максимальная защита от UVA/UVB лучей с органическим алоэ вера",
      benefits: ["Водостойкий 80 мин", "Гипоаллергенный", "Без жирного блеска"]
    },
    {
      id: 2,
      name: "HydraGlow Serum",
      category: "Уход за лицом",
      price: 2499,
      image: "💧",
      rating: 4.9,
      reviews: 512,
      description: "Интенсивное увлажнение с гиалуроновой кислотой и витамином C",
      benefits: ["24ч увлажнение", "Сияние кожи", "Антивозрастной эффект"]
    },
    {
      id: 3,
      name: "PureGlow Face Mask",
      category: "Маски",
      price: 899,
      image: "🌿",
      rating: 4.7,
      reviews: 189,
      description: "Очищающая маска с зеленой глиной и экстрактом чайного дерева",
      benefits: ["Глубокое очищение", "Сужает поры", "Матирует кожу"]
    },
    {
      id: 4,
      name: "Night Repair Cream",
      category: "Ночной уход",
      price: 1899,
      image: "🌙",
      rating: 4.6,
      reviews: 328,
      description: "Восстанавливающий ночной крем с ретинолом и пептидами",
      benefits: ["Регенерация кожи", "Разглаживание морщин", "Упругость"]
    },
    {
      id: 5,
      name: "Vitamin C Booster",
      category: "Сыворотки",
      price: 1599,
      image: "🍊",
      rating: 4.9,
      reviews: 421,
      description: "Концентрированная сыворотка с витамином C 20%",
      benefits: ["Осветление пигментации", "Ровный тон", "Антиоксиданты"]
    },
    {
      id: 6,
      name: "Eye Contour Gel",
      category: "Уход за глазами",
      price: 1199,
      image: "👁️",
      rating: 4.5,
      reviews: 156,
      description: "Охлаждающий гель для кожи вокруг глаз с кофеином",
      benefits: ["Уменьшает темные круги", "Снимает отечность", "Лифтинг эффект"]
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateBonus = () => {
    return Math.floor(calculateTotal() * 0.05);
  };

  const calculateDiscount = () => {
    if (bonusPoints >= 100) {
      return Math.min(Math.floor(bonusPoints / 10) * 10, calculateTotal() * 0.2);
    }
    return 0;
  };

  const loyaltyLevel = bonusPoints >= 1000 ? 'Platinum' : bonusPoints >= 500 ? 'Gold' : bonusPoints >= 200 ? 'Silver' : 'Bronze';
  const nextLevelPoints = bonusPoints >= 1000 ? 1000 : bonusPoints >= 500 ? 1000 : bonusPoints >= 200 ? 500 : 200;
  const loyaltyProgress = (bonusPoints / nextLevelPoints) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-accent/30">
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
              
              <Sheet open={cartOpen} onOpenChange={setCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Icon name="ShoppingBag" size={20} />
                    {cart.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                        {cart.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
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
                                onClick={() => removeFromCart(index)}
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
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Новая коллекция 2025
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Красота с заботой о природе
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Откройте для себя косметику премиум-класса с натуральными ингредиентами. 
              Получайте бонусы за каждую покупку и экономьте до 20%
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group">
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline">
                Узнать о бонусах
                <Icon name="Gift" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальное средство для вашей кожи из нашей коллекции
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="face">Для лица</TabsTrigger>
              <TabsTrigger value="sun">Защита от солнца</TabsTrigger>
              <TabsTrigger value="masks">Маски</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProduct(product)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {product.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">{product.price}₽</p>
                      <p className="text-xs text-muted-foreground">+{Math.floor(product.price * 0.05)} баллов</p>
                    </div>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="group/btn"
                    >
                      <Icon name="ShoppingBag" size={18} className="group-hover/btn:scale-110 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы покупателей</h2>
            <p className="text-muted-foreground">Что говорят наши клиенты о продукции</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
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
            ].map((review, index) => (
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

      <section id="faq" className="py-16 bg-gradient-to-br from-secondary/50 to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-muted-foreground">Ответы на популярные вопросы о продукции и бонусной программе</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Как работает программа лояльности?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  За каждую покупку вы получаете 5% от суммы заказа в виде бонусных баллов. Накопленные баллы можно использовать для оплаты до 20% следующего заказа. Чем больше баллов, тем выше ваш статус и процент кэшбэка.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Как быстро доставляются заказы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Доставка по Москве осуществляется в течение 1-2 дней. По России - 3-7 дней в зависимости от региона. Бесплатная доставка при заказе от 3000₽.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Можно ли вернуть товар?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не был использован и сохранена упаковка. Бонусные баллы при возврате аннулируются.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Сгорают ли бонусные баллы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Бонусные баллы действительны в течение 12 месяцев с момента начисления. Если в течение этого периода вы совершаете покупку, срок действия всех баллов продлевается еще на 12 месяцев.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Подходит ли продукция для чувствительной кожи?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Большинство наших продуктов разработаны с учетом потребностей чувствительной кожи. Все средства гипоаллергенны и протестированы дерматологами. Рекомендуем перед первым применением провести тест на небольшом участке кожи.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground">Есть вопросы? Мы всегда рады помочь!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@beautylux.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={4} />
                    </div>
                    <Button className="w-full">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
