import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import heroBg from "@/assets/hero-cultural.jpg";

export default function Home() {
  return (
    <div>
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Cultural festival with traditional dancers in vibrant costumes"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            Experience New Brighton
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Discover the cultural heritage, historic landmarks, and vibrant community of this coastal gem.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/route">
              <Button variant="hero" size="lg">Explore Route</Button>
            </Link>
            <BookingModal>
              <Button variant="hero" size="lg">Book a Tour</Button>
            </BookingModal>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Why Visit New Brighton?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Rich History", desc: "Centuries of cultural heritage waiting to be explored." },
            { title: "Coastal Beauty", desc: "Stunning seaside views and golden sandy beaches." },
            { title: "Local Culture", desc: "Vibrant arts, crafts, and culinary experiences." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
