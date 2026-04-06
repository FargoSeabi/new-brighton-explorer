import { Link } from "react-router-dom";
<<<<<<< HEAD
import { locations } from "@/data/locations";
=======
import routeArtsCentre from "@/assets/route-arts-centre.jpg";
import routeMemorial from "@/assets/route-memorial.jpg";
import stStephens from "@/assets/st stephens.jpg";
import georgePemba from "@/assets/george pemba.jpg";
import emoltheni from "@/assets/emlotheni.avif";
import kamaSchool from "@/assets/Kama-Primary-School.jpg";
import vuyisile from "@/assets/vuyisile.jpg";

export const locations = [
  { id: 1, name: "Mendi Arts Centre", desc: "A vibrant hub for local and international art exhibitions.", image: routeArtsCentre },
  { id: 2, name: "Mendi Memorial", desc: "A solemn tribute to the community's historical legacy.", image: routeMemorial },
  { id: 3, name: "St Stephen's Historic Site", desc: "An important cultural landmark with rich historical significance.", image: stStephens },
  { id: 4, name: "George Pemba Gallery", desc: "Dedicated to the works and legacy of the renowned South African artist.", image: georgePemba },
  { id: 5, name: "Emlotheni Cultural Centre", desc: "A space celebrating traditional crafts and cultural heritage.", image: emoltheni },
  { id: 6, name: "Kama Primary School", desc: "An educational landmark serving the local community for generations.", image: kamaSchool },
  { id: 7, name: "Vuyisile Heritage Museum", desc: "Preserving and showcasing the stories of our ancestors and community.", image: vuyisile },
];
>>>>>>> 0799e539438fa2996ca89c0f6af3879bed572d0e

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
