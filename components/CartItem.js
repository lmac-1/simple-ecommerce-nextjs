import Image from "next/image";

export default function CartItem({ item }) {
  const { name, emoji, quantity, price } = item;

  return (
    <div className="flex items-center gap-4 mb-3">
      <p className="text-4xl">{emoji}</p>
      <div>
        {name} <span className="text-xs">({quantity})</span>
      </div>
      <div className="ml-auto">{price}</div>
      <button className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1">
        <Image alt="delete icon" src="./trash.svg" width={20} height={20} />
      </button>
    </div>
  );
}
