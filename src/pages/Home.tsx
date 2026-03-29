import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-cultural.jpg";

const tours = [
  { label: "3-Hour Tour", value: "3hr", desc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit, consectetur adipiscing elit, eiusmod et con rur purification, solem." },
  { label: "6-Hour Tour", value: "6hr", desc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit, consectetur adipiscing elit, eiusmod et con rur purification, solem." },
  { label: "Full Day Tour", value: "full", desc: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit, consectetur adipiscing elit, eiusmod et con rur purification, solem." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Cultural festival with traditional dancers"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-display italic font-bold text-primary-foreground mb-3 drop-shadow-lg">
            Experience New Brighton
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-8">
            Smart Cultural Tourism Corridor
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/route">
              <Button variant="hero" size="lg">Explore Route</Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Cards */}
      <section className="container mx-auto py-14 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div key={tour.value} className="bg-card border border-border rounded-xl p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-foreground mb-3">{tour.label}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{tour.desc}</p>
              <Link to="/booking">
                <Button variant="hero" size="sm">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
