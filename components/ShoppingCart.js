import CartItem from "./CartItem";

const items = [
  { id: 1, emoji: "🍉", quantity: 1, name: "Watermelon", price: "£1.00" },
  { id: 2, emoji: "🍎", quantity: 3, name: "Apple", price: "£0.60" },
];

export default function ShoppingCart() {
  return (
    <div className="bg-white flex flex-col absolute right-3 md:right-9 top-14 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md">
      {items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <button className="bg-emerald-50 mt-3 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md w-100">
        Proceed to checkout
      </button>
    </div>
  );
}
