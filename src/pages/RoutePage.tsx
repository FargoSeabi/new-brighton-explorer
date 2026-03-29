import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export const locations = [
  { id: 1, name: "Mendi Arts Centre", desc: "A vibrant hub for local and international art exhibitions." },
  { id: 2, name: "Mendi Memorial", desc: "A solemn tribute to the community's historical legacy." },
  { id: 3, name: "St Stephen's Church", desc: "A beautiful Victorian-era church with stunning architecture." },
];

export default function RoutePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-foreground mb-2">Tour Route</h2>
      <p className="text-muted-foreground mb-8">Explore the key cultural and historical sites along the tour.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <Link key={loc.id} to={`/route/${loc.id}`}>
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {loc.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{loc.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
