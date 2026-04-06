import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import RoutePage from "@/pages/RoutePage";
import RouteDetail from "@/pages/RouteDetail";
import Confirmation from "@/pages/Confirmation";
import Marketplace from "@/pages/Marketplace";
import Cart from "@/pages/Cart";
import FeedbackPage from "@/pages/FeedbackPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/route/:id" element={<RouteDetail />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
=======
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/route" element={<RoutePage />} />
            <Route path="/route/:id" element={<RouteDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
>>>>>>> 0799e539438fa2996ca89c0f6af3879bed572d0e
  </QueryClientProvider>
);

export default App;
