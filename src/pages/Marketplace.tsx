import marketCrafts from "@/assets/market-crafts.jpg";
import marketJollof from "@/assets/market-jollof.jpg";
import marketBunnyChow from "@/assets/market-bunny-chow.jpg";
import marketVetkoek from "@/assets/market-vetkoek.jpg";
import marketArt from "@/assets/market-art.jpg";
import marketBobotie from "@/assets/market-bobotie.jpg";
import { Button } from "@/components/ui/button";

const items = [
  { name: "Beaded Necklace", price: "$15", image: marketCrafts },
  { name: "Handwoven Basket", price: "$25", image: marketJollof },
  { name: "Chakalaka", price: "$10", image: marketBunnyChow },
  { name: "Handwoven Basket", price: "$25", image: marketVetkoek },
  { name: "Chakalaka", price: "$10", image: marketBobotie },
  { name: "Wooden Carving", price: "$30", image: marketArt },
];

export default function Marketplace() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-display italic font-bold text-foreground mb-8 text-center">
        Local Marketplace
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-44 object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="p-4">
              <p className="text-sm font-medium text-foreground">{item.name} - {item.price}</p>
              <Button variant="hero" size="sm" className="mt-2 text-xs px-3 py-1 h-7">
                Like
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
