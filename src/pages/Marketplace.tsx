import marketCrafts from "@/assets/market-crafts.jpg";
import marketJollof from "@/assets/market-jollof.jpg";
import marketBunnyChow from "@/assets/market-bunny-chow.jpg";
import marketVetkoek from "@/assets/market-vetkoek.jpg";
import marketArt from "@/assets/market-art.jpg";
import marketBobotie from "@/assets/market-bobotie.jpg";

const items = [
  { name: "Traditional Crafts", desc: "Handwoven beadwork, baskets, and handmade souvenirs.", image: marketCrafts, category: "Crafts" },
  { name: "Jollof Rice", desc: "Spiced rice with grilled chicken and fried plantain.", image: marketJollof, category: "Food" },
  { name: "Bunny Chow", desc: "Hollowed bread loaf filled with rich, spiced curry.", image: marketBunnyChow, category: "Food" },
  { name: "Vetkoek", desc: "Golden fried dough filled with seasoned mince meat.", image: marketVetkoek, category: "Food" },
  { name: "Bobotie", desc: "Traditional spiced minced meat with egg custard topping.", image: marketBobotie, category: "Food" },
  { name: "Local Art", desc: "Bold African contemporary paintings, portraits, and prints.", image: marketArt, category: "Art" },
];

export default function Marketplace() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-foreground mb-2">Marketplace</h2>
      <p className="text-muted-foreground mb-8">Browse local goods, cultural food, and art from the community.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="p-5">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.category}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
