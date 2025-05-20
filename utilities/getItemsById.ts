import menu from "@/data/menu";

// Functions
const getWishlistItemsById = (ids: string[]) => {
  const productIdSet = new Set(ids);
  return menu.flatMap((category) =>
    category.items.filter((item) => productIdSet.has(item.id))
  );
};
const getCartItemsById = (items: { id: string; quantity: number }[]) => {
  const productMap = new Map(items.map(({ id, quantity }) => [id, quantity]));
  return menu.flatMap((category) =>
    category.items
      .filter((item) => productMap.has(item.id))
      .map((item) => ({
        ...item,
        quantity: productMap.get(item.id),
      }))
  );
};

export { getWishlistItemsById, getCartItemsById };
