import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BookingDialog from "./BookingDialog";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/route", label: "Route" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/feedback", label: "Feedback" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="text-xl font-bold text-foreground tracking-tight">
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
          <Button variant="hero" size="sm" onClick={() => setBookingOpen(true)}>Book Now</Button>
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
        </div>
      )}
      
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </nav>
  );
}
