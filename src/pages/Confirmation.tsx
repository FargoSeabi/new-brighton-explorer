import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Confirmation() {
  return (
    <div className="container mx-auto py-16 px-4 text-center max-w-md">
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="text-accent" size={32} />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
      <p className="text-muted-foreground mb-8">
        Your tour has been booked. A QR code will be sent to your email for check-in.
      </p>
      <Link to="/">
        <Button variant="hero">Back to Home</Button>
      </Link>
    </div>
  );
}
