import { Link } from "react-router-dom";
import routeArtsCentre from "@/assets/route-arts-centre.jpg";
import routeMemorial from "@/assets/route-memorial.jpg";
import stStephens from "@/assets/st stephens.jpg";
import georgePemba from "@/assets/george pemba.jpg";
import emoltheni from "@/assets/emlotheni.avif";
import kamaSchool from "@/assets/Kama-Primary-School.jpg";
import vuyisile from "@/assets/vuyisile.jpg";

export const locations = [
  { id: 1, name: "Mendi Arts Centre", desc: "The Mendi Arts Centre serves as the starting point of the tourism route. It is a cultural and community space that introduces visitors to New Brighton’s history, identity, and purpose of the experience. This stop is used for welcoming visitors, orientation, and setting expectations for a slow, immersive cultural journey.", image: routeArtsCentre },
  { id: 2, name: "Mendi Memorial", desc: "This site reflects the legacy of the SS Mendi tragedy, where Black South African soldiers lost their lives during World War I. It is an important symbol of sacrifice, identity, and recognition of historically marginalised contributions", image: routeMemorial },
  { id: 3, name: "St Stephen's Historic Site", desc: "St Stephen's Anglican Church         Description: St Stephen’s Anglican Church is a spiritual and cultural landmark within New Brighton. It represents the role of religion in community life, unity, and resilience, especially during times of struggle", image: stStephens },
  { id: 4, name: "George Pemba Gallery", desc: "This stop focuses on present-day community life and social issues, particularly mental health awareness. It allows visitors to understand that New Brighton is not only about history, but also about current realities, challenges, and resilience.", image: georgePemba },
  { id: 5, name: "Emlotheni Cultural Centre", desc: "The Emlotheni Memorial Site is a heritage and remembrance space where freedom fighters are buried. It connects visitors to the struggle against apartheid and highlights the sacrifices made by individuals such as Vuyisile Mini.", image: emoltheni },
  { id: 6, name: "Kama Primary School", desc: "An educational landmark serving the local community for generations.", image: kamaSchool },
  { id: 7, name: "Vuyisile Heritage Museum", desc: "Preserving and showcasing the stories of our ancestors and community.", image: vuyisile },
];

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
