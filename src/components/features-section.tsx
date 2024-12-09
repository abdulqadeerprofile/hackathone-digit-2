"use client";

import { useEffect, useState } from 'react';
import { Truck, Medal, CreditCard, Recycle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from 'next/link';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2
        className={`text-3xl md:text-4xl font-serif text-center mb-16 font-clash transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{ fontFamily: 'var(--font-clash-reg)' }} // Apply custom font to the header
      >
        What makes our brand different
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`space-y-3 p-6 rounded-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ backgroundColor: 'white', transitionDelay: `${index * 100}ms` }} // Set background to white
          >
            <div className="transition-transform duration-300 ease-in-out hover:scale-110">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-clash-reg)' }}>
              {feature.title}
            </h3>
            <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-clash-reg)' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className="border-0 shadow-none group">
              <div className="aspect-square relative overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-clash font-medium text-lg" style={{ fontFamily: 'var(--font-clash-reg)' }}>
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-3" style={{ fontFamily: 'var(--font-clash-reg)' }}>
                £{product.price}
              </p>
              <Link href="/products">
                <Button
                  className="w-full transition-transform duration-200 hover:scale-105 active:scale-95"
                  variant="outline"
                  style={{ fontFamily: 'var(--font-clash-reg)' }} // Apply custom font to button text
                >
                  Add to cart
                </Button>
              </Link>
            </Card>
          </div>
        ))}
      </div>

      <div
        className={`text-center mt-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '500ms' }}
      >
        <Link href="/product-listing">
          <Button
            variant="outline"
            size="lg"
            className="font-clash transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{ fontFamily: 'var(--font-clash-reg)' }} // Apply custom font to button text
          >
            View collection
          </Button>
        </Link>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Unbeatable prices",
    description: "For our materials and quality, you won't find better prices anywhere"
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Recycled packaging",
    description: "We use 100% recycled materials to ensure our footprint is more manageable"
  }
];

const products = [
  {
    id: 1,
    name: "The Dandy chair",
    price: "250",
    image: "/dandy-chair.png"
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: "155",
    image: "/vase-set.png"
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: "125",
    image: "/silky-vase.png"
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    price: "399",
    image: "/lucy-lamp.png"
  }
];
