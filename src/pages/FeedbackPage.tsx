import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { toast } from "sonner";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!feedback.trim()) return;
    toast.success("Thank you for your feedback!");
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-lg text-center">
      <h2 className="text-3xl font-display italic font-bold text-foreground mb-2">
        Share Your Feedback
      </h2>
      <p className="text-muted-foreground mb-6">We'd love to hear about your experience!</p>

      {/* Star Rating */}
      <div className="flex justify-center gap-1 mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => setRating(star)}>
            <Star
              size={32}
              className={star <= rating ? "text-primary fill-primary" : "text-muted-foreground"}
            />
          </button>
        ))}
      </div>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your Feedback"
        className="w-full h-32 p-4 border border-input rounded-xl bg-card text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring text-left"
      />
      <Button variant="hero" className="mt-4" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
