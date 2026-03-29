import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/route", label: "Route" },
  { to: "/booking", label: "Contributes" },
  { to: "/marketplace", label: "Cooperatives list" },
  { to: "/feedback", label: "Visitor" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-display italic font-bold text-foreground">New Brighton</span>
          <span className="text-[10px] text-muted-foreground tracking-wide">Your Gateway to Culture</span>
        </Link>

        <div className="hidden lg:flex items-center gap-5">
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
          <Link to="/booking">
            <Button variant="hero" size="sm">Book Now</Button>
          </Link>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card px-4 py-3 space-y-2">
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
        </div>
      )}
    </nav>
  );
}
