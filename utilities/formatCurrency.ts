const formatCurrency = (price: number): string => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export default formatCurrency;
