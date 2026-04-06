import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import marketCrafts from "@/assets/market-crafts.jpg";
import marketJollof from "@/assets/market-jollof.jpg";
import marketBunnyChow from "@/assets/market-bunny-chow.jpg";
import marketVetkoek from "@/assets/market-vetkoek.jpg";
import marketArt from "@/assets/market-art.jpg";
import marketBobotie from "@/assets/market-bobotie.jpg";

const items = [
  { name: "Traditional Crafts", desc: "Handwoven beadwork, baskets, and handmade souvenirs.", image: marketCrafts, category: "Crafts", price: 45.99 },
  { name: "Jollof Rice", desc: "Spiced rice with grilled chicken and fried plantain.", image: marketJollof, category: "Food", price: 12.99 },
  { name: "Bunny Chow", desc: "Hollowed bread loaf filled with rich, spiced curry.", image: marketBunnyChow, category: "Food", price: 8.99 },
  { name: "Vetkoek", desc: "Golden fried dough filled with seasoned mince meat.", image: marketVetkoek, category: "Food", price: 6.99 },
  { name: "Bobotie", desc: "Traditional spiced minced meat with egg custard topping.", image: marketBobotie, category: "Food", price: 10.99 },
  { name: "Local Art", desc: "Bold African contemporary paintings, portraits, and prints.", image: marketArt, category: "Art", price: 89.99 },
];

export default function Marketplace() {
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      name: item.name,
      price: item.price,
      category: item.category,
      image: item.image,
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-foreground mb-2">Marketplace</h2>
      <p className="text-muted-foreground mb-8">Browse local goods, cultural food, and art from the community.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.category}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground flex-grow">{item.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-primary">R{item.price.toFixed(2)}</span>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                  className="gap-2"
                >
                  <ShoppingCart size={16} />
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
