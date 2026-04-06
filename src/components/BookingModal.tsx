import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, User, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const tours = [
  { label: "3hr Tour", value: "3hr", price: "R350" },
  { label: "6hr Tour", value: "6hr", price: "R630" },
  { label: "Full Day", value: "Full Day", price: "R980" },
];

interface BookingModalProps {
  children: React.ReactNode;
}

export default function BookingModal({ children }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ tour: "", date: "", name: "" });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const next = () => setStep(step + 1);

  const steps = [
    { num: 1, label: "Tour", icon: Clock },
    { num: 2, label: "Date", icon: Calendar },
    { num: 3, label: "Details", icon: User },
    { num: 4, label: "Confirm", icon: CheckCircle },
  ];

  const handleConfirm = () => {
    setOpen(false);
    navigate("/confirmation");
  };

  const resetForm = () => {
    setStep(1);
    setData({ tour: "", date: "", name: "" });
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) resetForm();
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Book Your Tour</DialogTitle>
        </DialogHeader>

        {/* Progress */}
        <div className="flex justify-between mb-8 px-4">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                step >= s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                <s.icon size={14} />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="px-2">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4">Select a Tour</h3>
              <div className="space-y-3">
                {tours.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => { setData({ ...data, tour: t.value }); next(); }}
                    className="w-full flex justify-between items-center p-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition-all text-left group"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{t.label}</span>
                    <span className="text-primary font-bold">{t.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4">Select Date</h3>
              <input
                type="date"
                onChange={(e) => setData({ ...data, date: e.target.value })}
                className="w-full p-3 border border-input rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="hero" className="w-full mt-6" onClick={next} disabled={!data.date}>
                Next Step
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Details</h3>
              <input
                placeholder="Full Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full p-3 border border-input rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="hero" className="w-full mt-6" onClick={next} disabled={!data.name}>
                Next Step
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4">Confirm Booking</h3>
              <div className="bg-muted/30 border border-border rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Selected Tour</span>
                  <span className="font-semibold text-foreground">{data.tour}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <span className="font-semibold text-foreground">{data.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <span className="font-semibold text-foreground">{data.name}</span>
                </div>
              </div>
              <Button variant="success" className="w-full mt-6" onClick={handleConfirm}>
                Confirm Booking
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
