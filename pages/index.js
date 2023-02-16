import Product from "@/components/Product";

const products = [
  { id: 1, name: "Watermelon", price: "£1.00", emoji: "🍉" },
  { id: 2, name: "Apple", price: "£0.20", emoji: "🍎" },
  { id: 3, name: "Pineapple", price: "£1.05", emoji: "🍍" },
  { id: 4, name: "Banana", price: "£0.20", emoji: "🍌" },
];

export default function Home() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[900px]">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
