import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <a href="/" className="font-serif text-2xl font-semibold">
              EVER AROMA
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/products" className="text-primary hover:text-primary/80">
              Products
            </a>
            <a href="/about" className="text-primary hover:text-primary/80">
              About
            </a>
            <a href="/reviews" className="text-primary hover:text-primary/80">
              Reviews
            </a>
          </div>

          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="/products" className="text-primary hover:text-primary/80 px-4">
                Products
              </a>
              <a href="/about" className="text-primary hover:text-primary/80 px-4">
                About
              </a>
              <a href="/reviews" className="text-primary hover:text-primary/80 px-4">
                Reviews
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};