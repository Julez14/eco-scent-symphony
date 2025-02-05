import { ProductCard } from "./ProductCard";

export const FeaturedProducts = () => {
  const products = [
    {
      name: "Wall Plug Diffuser",
      description: "Premium refillable air freshener with natural ingredients",
      price: "$29.99",
      image: "/placeholder.svg",
    },
    {
      name: "Lavender Dreams Refill",
      description: "100ml natural scent liquid refill",
      price: "$19.99",
      image: "/placeholder.svg",
    },
    {
      name: "Fresh Linen Refill",
      description: "100ml natural scent liquid refill",
      price: "$19.99",
      image: "/placeholder.svg",
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