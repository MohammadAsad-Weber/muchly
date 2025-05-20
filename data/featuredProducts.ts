import { StaticImageData } from "next/image";

// Images
import LoadedFries from "@/public/images/loaded-fries.png";
import DoubleCheeseBurger from "@/public/images/double-cheese-burger.png";
import SpicyChickenSandwich from "@/public/images/spicy-chicken-sandwich.png";

// Interface
type Product = {
  image: StaticImageData;
  name: string;
  description: string;
};

// Featured products array
const featuredProducts: Array<Product> = [
  {
    image: DoubleCheeseBurger,
    name: "Cheesy Double Burger",
    description:
      "Two grilled beef patties, cheddar cheese, crispy onions, pickles, and signature sauce stacked in a warm brioche bun.",
  },
  {
    image: SpicyChickenSandwich,
    name: "Spicy Chicken Sandwich",
    description:
      "Crispy chicken breast coated in spicy seasoning, topped with pickles, lettuce, and creamy mayo on a soft roll.",
  },
  {
    image: LoadedFries,
    name: "Loaded Fries",
    description:
      "Crispy golden fries topped with melted cheese, smoky bacon bits, spicy ranch drizzle, scallions, and a pinch of paprika.",
  },
];

export default featuredProducts;
