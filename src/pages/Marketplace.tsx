import { ShoppingBag, UtensilsCrossed, Palette } from "lucide-react";

const items = [
  { name: "Crafts", desc: "Handmade local crafts and souvenirs.", icon: ShoppingBag },
  { name: "Food", desc: "Traditional dishes and local delicacies.", icon: UtensilsCrossed },
  { name: "Art", desc: "Paintings, sculptures, and prints from local artists.", icon: Palette },
];

export default function Marketplace() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-foreground mb-2">Marketplace</h2>
      <p className="text-muted-foreground mb-8">Browse local goods and support the community.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
