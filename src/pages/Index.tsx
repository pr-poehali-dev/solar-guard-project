import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCatalog from '@/components/ProductCatalog';
import CartSheet from '@/components/CartSheet';
import LoyaltySection from '@/components/LoyaltySection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
      <Header
        bonusPoints={bonusPoints}
        loyaltyLevel={loyaltyLevel}
        cartLength={cart.length}
        onCartOpen={() => setCartOpen(true)}
      />

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        cart={cart}
        bonusPoints={bonusPoints}
        loyaltyLevel={loyaltyLevel}
        loyaltyProgress={loyaltyProgress}
        nextLevelPoints={nextLevelPoints}
        onRemoveItem={removeFromCart}
        calculateTotal={calculateTotal}
        calculateBonus={calculateBonus}
        calculateDiscount={calculateDiscount}
      />

      <HeroSection />

      <ProductCatalog
        products={products}
        onAddToCart={addToCart}
        onProductClick={setSelectedProduct}
      />

      <LoyaltySection />

      <ReviewsSection />

      <FAQSection />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;
