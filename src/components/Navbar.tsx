import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import BookingModal from "./BookingModal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/route", label: "Route" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/feedback", label: "Feedback" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="text-xl font-bold text-foreground tracking-tight">
          Explore 
          New Brighton
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="sm" className="gap-2">
              <ShoppingCart size={18} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
          <BookingModal>
            <Button variant="hero" size="sm">Book Now</Button>
          </BookingModal>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/cart" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
