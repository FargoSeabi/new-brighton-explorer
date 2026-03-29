import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const tours = [
  { label: "3-Hour Tour", value: "3hr", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore." },
  { label: "6-Hour Tour", value: "6hr", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore." },
  { label: "Full Day Tour", value: "full", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore." },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ tour: "", date: "", name: "" });
  const navigate = useNavigate();
  const next = () => setStep(step + 1);

  if (step === 1)
    return (
      <div className="container mx-auto py-12 px-4 max-w-3xl">
        <h2 className="text-3xl font-display italic font-bold text-foreground mb-8 text-center">
          Select Your Tour
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {tours.map((t) => (
            <div
              key={t.value}
              className="border-2 border-primary rounded-xl p-5 flex flex-col text-center"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{t.label}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{t.desc}</p>
              <Button
                variant="hero"
                size="sm"
                className="mx-auto"
                onClick={() => { setData({ ...data, tour: t.label }); next(); }}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      </div>
    );

  if (step === 2)
    return (
      <div className="container mx-auto py-12 px-4 max-w-md">
        <h2 className="text-3xl font-display italic font-bold text-foreground mb-8 text-center">
          Select Date
        </h2>
        <input
          type="date"
          onChange={(e) => setData({ ...data, date: e.target.value })}
          className="w-full p-3 border border-input rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <Button variant="hero" className="w-full mt-6" onClick={next} disabled={!data.date}>
          Next
        </Button>
      </div>
    );

  if (step === 3)
    return (
      <div className="container mx-auto py-12 px-4 max-w-md">
        <h2 className="text-3xl font-display italic font-bold text-foreground mb-8 text-center">
          Your Details
        </h2>
        <input
          placeholder="Full Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full p-3 border border-input rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <Button variant="hero" className="w-full mt-6" onClick={next} disabled={!data.name}>
          Next
        </Button>
      </div>
    );

  return (
    <div className="container mx-auto py-12 px-4 max-w-md text-center">
      <h2 className="text-3xl font-display italic font-bold text-foreground mb-2">
        Booking Confirmed!
      </h2>
      <p className="text-muted-foreground mb-6">Thank you for your booking!</p>

      <div className="border-t border-border pt-6 space-y-2 text-sm mb-8">
        <p className="text-foreground"><span className="text-muted-foreground">Tour:</span> {data.tour}</p>
        <p className="text-foreground"><span className="text-muted-foreground">Date:</span> {data.date}</p>
        <p className="text-foreground"><span className="text-muted-foreground">Name:</span> {data.name}</p>
      </div>

      {/* QR placeholder */}
      <div className="w-32 h-32 mx-auto mb-8 bg-muted border border-border rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-24 h-24">
          <rect x="5" y="5" width="25" height="25" fill="currentColor" className="text-foreground"/>
          <rect x="35" y="5" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="45" y="5" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="55" y="5" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="70" y="5" width="25" height="25" fill="currentColor" className="text-foreground"/>
          <rect x="10" y="10" width="15" height="15" fill="currentColor" className="text-background"/>
          <rect x="13" y="13" width="9" height="9" fill="currentColor" className="text-foreground"/>
          <rect x="75" y="10" width="15" height="15" fill="currentColor" className="text-background"/>
          <rect x="78" y="13" width="9" height="9" fill="currentColor" className="text-foreground"/>
          <rect x="5" y="35" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="15" y="35" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="25" y="40" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="40" y="35" width="10" height="10" fill="currentColor" className="text-foreground"/>
          <rect x="55" y="40" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="70" y="35" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="5" y="70" width="25" height="25" fill="currentColor" className="text-foreground"/>
          <rect x="10" y="75" width="15" height="15" fill="currentColor" className="text-background"/>
          <rect x="13" y="78" width="9" height="9" fill="currentColor" className="text-foreground"/>
          <rect x="35" y="60" width="5" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="45" y="70" width="10" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="60" y="65" width="5" height="10" fill="currentColor" className="text-foreground"/>
          <rect x="70" y="70" width="10" height="10" fill="currentColor" className="text-foreground"/>
          <rect x="85" y="60" width="10" height="5" fill="currentColor" className="text-foreground"/>
          <rect x="80" y="80" width="15" height="15" fill="currentColor" className="text-foreground"/>
        </svg>
      </div>

      <Button variant="hero" className="w-full" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  );
}
