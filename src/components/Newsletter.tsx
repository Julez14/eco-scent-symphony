import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="bg-accent/30 py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Join Our Community
          </h2>
          <p className="text-primary/80 mb-8">
            Subscribe to receive updates, exclusive offers, and tips for a more sustainable lifestyle.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="btn-primary whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};