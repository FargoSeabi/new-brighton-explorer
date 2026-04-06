import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "@/components/BookingModal";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Link to="/marketplace" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} /> Back to Marketplace
        </Link>
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Start adding items from the marketplace!</p>
          <Link to="/marketplace">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link to="/marketplace" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft size={16} /> Back to Marketplace
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Shopping Cart</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.name} className="bg-card rounded-xl border border-border p-4 flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                  width={100}
                  height={100}
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <p className="font-bold text-primary">R{item.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="px-2 py-1 border border-border rounded hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="px-2 py-1 border border-border rounded hover:bg-muted"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold">R{(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-destructive hover:bg-destructive/10 p-2 rounded transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-6 sticky top-20">
            <h3 className="text-xl font-bold text-foreground mb-4">Order Summary</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">R{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span className="font-medium">R{(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-lg text-primary">R{(getTotalPrice() * 1.1).toFixed(2)}</span>
              </div>
            </div>
            <BookingModal>
              <Button className="w-full">Proceed to Checkout</Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </div>
  );
}
