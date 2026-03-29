import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!feedback.trim()) return;
    toast.success("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-lg">
      <h2 className="text-3xl font-bold text-foreground mb-2">Feedback</h2>
      <p className="text-muted-foreground mb-6">We'd love to hear about your experience.</p>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full h-32 p-4 border border-input rounded-xl bg-card text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button variant="hero" className="w-full mt-4" onClick={handleSubmit}>
        Submit Feedback
      </Button>
    </div>
  );
}
