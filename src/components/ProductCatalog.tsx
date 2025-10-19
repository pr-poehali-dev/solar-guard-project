import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  benefits: string[];
}

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCatalog = ({ products, onAddToCart, onProductClick }: ProductCatalogProps) => {
  return (
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
              onClick={() => onProductClick(product)}
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
                      onAddToCart(product);
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
  );
};

export default ProductCatalog;
