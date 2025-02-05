import { ProductCard } from "./ProductCard";

export const FeaturedProducts = () => {
  const products = [
    {
      name: "Wall Plug Diffuser",
      description: "Premium refillable air freshener with natural ingredients",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    },
    {
      name: "Lavender Dreams Refill",
      description: "100ml natural scent liquid refill",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
    {
      name: "Fresh Linen Refill",
      description: "100ml natural scent liquid refill",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};