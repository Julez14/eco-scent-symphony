import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, description, price, image }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-serif text-lg mb-2">{name}</h3>
      <p className="text-primary/60 text-sm mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="font-medium">{price}</span>
        <Button variant="ghost" className="hover:bg-secondary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};