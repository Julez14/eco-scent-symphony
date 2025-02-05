import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="bg-secondary/30">
      <div className="container-custom py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Natural Freshness for Your Home
          </h1>
          <p className="text-lg md:text-xl text-primary/80 mb-8">
            Premium, sustainable, and eco-friendly air fresheners designed for families and pets.
            Experience the first refillable wall plug system with natural ingredients.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">
              Shop Now
            </Button>
            <Button className="btn-secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};