import { Link } from "react-router-dom";
import { locations } from "@/data/locations";

export default function RoutePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-foreground mb-2">Tour Route</h2>
      <p className="text-muted-foreground mb-8">Explore the key cultural and historical sites along the tour.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <Link key={loc.id} to={`/route/${loc.id}`}>
            <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group overflow-hidden">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {loc.name}
                </h3>
                <p className="text-sm text-muted-foreground">{loc.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
