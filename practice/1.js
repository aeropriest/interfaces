let anyType: any = "any type";
anyType.toUpper();

const DiscountType = {
  Standard: "Standard",
  Seasonal: "Seasonal",
  Weight: "Weight",
};

function getDiscountedPrice(cartWeight, totalPrice, discountType) {
  let discount = 0;
  switch (discountType) {
    case DiscountType.Standard:
      discount = 6;
      break;
    case DiscountType.Seasonal:
      discount = 12;
      break;
    case DiscountType.Weight:
      discount = cartWeight <= 10 ? 6 : 18;
      break;
  }

  return ((100 - discount) * totalPrice) / 100;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
