import { useState } from "react";

export default function CheckoutButton() {
  const [status, setStatus] = useState("idle");

  return (
    <article className="mt-3 flex flex-col">
      {/* <div className="text-red-700 text-xs mb-3 h-5 text-center">
        Unable to connect to Stripe Checkout
      </div> */}
      <button className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md w-100">
        {status !== "loading" ? "Proceed to checkout" : "Loading..."}
      </button>
    </article>
  );
}
