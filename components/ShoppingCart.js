import CartItem from "./CartItem";

const items = [];

export default function ShoppingCart() {
  return (
    <div className="bg-white flex flex-col absolute right-3 md:right-9 top-14 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md">
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <button className="bg-emerald-50 mt-3 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md w-100">
            Proceed to checkout
          </button>
        </>
      ) : (
        <div className="p-5">You have no items in your cart</div>
      )}
    </div>
  );
}
