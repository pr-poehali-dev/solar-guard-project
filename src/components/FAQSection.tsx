import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
