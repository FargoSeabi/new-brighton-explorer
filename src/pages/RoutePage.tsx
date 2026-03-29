import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import routeArtsCentre from "@/assets/route-arts-centre.jpg";
import routeMemorial from "@/assets/route-memorial.jpg";
import routeChurch from "@/assets/route-church.jpg";

export const locations = [
  { id: 1, name: "Mendi Arts Centre", desc: "Lorem ipsum dolor sit, culturarum, lorem ipsum dolor sit consectetur adipiscing.", image: routeArtsCentre },
  { id: 2, name: "Mendi Memorial", desc: "Lorem ipsum dolor sit, culturarum, lorem ipsum dolor sit consectetur adipiscing.", image: routeMemorial },
  { id: 3, name: "St Stephen's Church", desc: "Lorem ipsum dolor sit, culturarum, lorem ipsum dolor sit consectetur adipiscing.", image: routeChurch },
];

export default function RoutePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-display italic font-bold text-foreground mb-8 text-center">
        Explore the Route
      </h2>

      {/* Images row */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {locations.map((loc) => (
          <div key={loc.id} className="rounded-xl overflow-hidden h-48">
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        ))}
      </div>

      {/* Info cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {locations.map((loc) => (
          <div key={loc.id} className="bg-card border border-border rounded-xl p-5 text-center">
            <h3 className="text-base font-semibold text-foreground mb-2">{loc.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{loc.desc}</p>
            <Link to={`/route/${loc.id}`}>
              <Button variant="hero" size="sm">VIEW DETAILS</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
