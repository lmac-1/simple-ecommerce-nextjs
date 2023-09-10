import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartProvider } from "use-shopping-cart";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      // Connects to your Stripe account
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      // Redirected here after successful payments
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
      // Redirected here when you click back on Stripe Checkout
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
      currency="GBP"
      // Only customers from UK will be able to purchase
      // Having this setting means that we will capture shipping address
      allowedCountries={["GB"]}
      // Enables local storage
      shouldPersist={true}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
