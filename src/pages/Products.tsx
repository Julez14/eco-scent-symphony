
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Products = () => {
  const categories = ["All", "Diffusers", "Refills", "Accessories"];
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    {
      name: "Wall Plug Diffuser",
      description: "Premium refillable air freshener with natural ingredients",
      price: "$29.99",
      category: "Diffusers",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    },
    {
      name: "Lavender Dreams Refill",
      description: "100ml natural scent liquid refill",
      price: "$19.99",
      category: "Refills",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
    {
      name: "Fresh Linen Refill",
      description: "100ml natural scent liquid refill",
      price: "$19.99",
      category: "Refills",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      name: "Car Diffuser",
      description: "Compact diffuser perfect for vehicles",
      price: "$24.99",
      category: "Diffusers",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    },
    {
      name: "Vanilla Sunset Refill",
      description: "100ml natural scent liquid refill",
      price: "$19.99",
      category: "Refills",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    },
    {
      name: "Diffuser Stand",
      description: "Elegant wooden stand for wall plug diffusers",
      price: "$14.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b",
    }
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Our Products
            </h1>
            <p className="text-primary/80 text-lg">
              Discover our collection of natural, eco-friendly home fragrances
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={cn(
                  "px-6 py-2 rounded-full transition-colors",
                  activeCategory === category && "bg-secondary text-primary"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Products;
