import { useParams, Link } from "react-router-dom";
import { locations } from "./RoutePage";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

export default function RouteDetail() {
  const { id } = useParams();
  const location = locations.find((l) => l.id === parseInt(id || "0"));

  if (!location) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p className="text-muted-foreground">Location not found.</p>
        <Link to="/route"><Button variant="link">Back to Route</Button></Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <Link to="/route" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft size={16} /> Back to Route
      </Link>
      <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">{location.name}</h2>
        </div>
        <p className="text-muted-foreground mb-4">{location.desc}</p>
        <p className="text-sm text-muted-foreground">
          This is a significant cultural and historical site in New Brighton. Visitors can explore
          the rich heritage and learn about the community's story through guided tours and exhibits.
        </p>
      </div>
    </div>
  );
}
