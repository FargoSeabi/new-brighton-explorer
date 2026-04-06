import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, Calendar, User, CheckCircle } from "lucide-react";

const tours = [
  { label: "3hr Tour", value: "3hr", price: "R350" },
  { label: "6hr Tour", value: "6hr", price: "R630" },
  { label: "Full Day", value: "Full Day", price: "R980" },
];

export default function BookingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ tour: "", date: "", name: "" });
  const navigate = useNavigate();

  const next = () => setStep(step + 1);

  const steps = [
    { num: 1, label: "Tour", icon: Clock },
    { num: 2, label: "Date", icon: Calendar },
    { num: 3, label: "Details", icon: User },
    { num: 4, label: "Confirm", icon: CheckCircle },
  ];

  const handleClose = () => {
    setStep(1);
    setData({ tour: "", date: "", name: "" });
    onOpenChange(false);
  };

  const handleConfirm = () => {
    navigate("/confirmation");
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book a Tour</DialogTitle>
        </DialogHeader>

        {/* Progress */}
        <div className="flex justify-between mb-10">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step >= s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <s.icon size={18} />
              </div>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Select Tour</h2>
            <div className="space-y-3">
              {tours.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    setData({ ...data, tour: t.value });
                    next();
                  }}
                  className="w-full flex justify-between items-center p-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition-all text-left"
                >
                  <span className="font-medium text-foreground">{t.label}</span>
                  <span className="text-primary font-semibold">{t.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Select Date</h2>
            <input
              type="date"
              title="Select tour date"
              onChange={(e) => setData({ ...data, date: e.target.value })}
              className="w-full p-3 border border-input rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="hero" className="w-full mt-6" onClick={next} disabled={!data.date}>
              Next
            </Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Details</h2>
            <input
              placeholder="Full Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full p-3 border border-input rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="hero" className="w-full mt-6" onClick={next} disabled={!data.name}>
              Next
            </Button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Confirm Booking</h2>
            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tour</span>
                <span className="font-medium text-foreground">{data.tour}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium text-foreground">{data.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium text-foreground">{data.name}</span>
              </div>
            </div>
            <Button variant="success" className="w-full mt-6" onClick={handleConfirm}>
              Confirm Booking
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
