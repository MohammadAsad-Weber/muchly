import { v4 as uuidv4 } from "uuid";
import { StaticImageData } from "next/image";

// Category images
import Pizza from "@/public/food-category/pizza.png";
import Burger from "@/public/food-category/burger.png";
import FriedChicken from "@/public/food-category/fried-chicken.png";
import Nugget from "@/public/food-category/nugget.png";
import Sandwich from "@/public/food-category/sandwich.png";
import HotDog from "@/public/food-category/hot-dog.png";
import Taco from "@/public/food-category/taco.png";
import Wrap from "@/public/food-category/wrap.png";
import Fry from "@/public/food-category/fry.png";
import Momo from "@/public/food-category/momo.png";
import Milkshake from "@/public/food-category/milkshake.png";
import ColdDrink from "@/public/food-category/cold-drink.png";

// Pizza images
import Margherita from "@/public/items/pizza/margherita.jpg";
import PepperoniFeast from "@/public/items/pizza/pepperoni-feast.jpg";
import BBQChicken from "@/public/items/pizza/bbq-chicken.jpg";
import VeggieSupreme from "@/public/items/pizza/veggie-supreme.jpg";
import HawaiianParadise from "@/public/items/pizza/hawaiian-paradise.jpg";
import FourCheeseDelight from "@/public/items/pizza/four-cheese-delight.jpg";
import MeatLovers from "@/public/items/pizza/meat-lovers.jpg";
import SpicyJalapeño from "@/public/items/pizza/spicy-jalapeño.jpg";
import Mediterranean from "@/public/items/pizza/mediterranean.jpg";
import PaneerTikka from "@/public/items/pizza/paneer-tikka.jpg";
import TruffleMushroom from "@/public/items/pizza/truffle-mushroom.jpg";
import SmokedSalmon from "@/public/items/pizza/smoked-salmon.jpg";

// Burger images
import ClassicBeefBurger from "@/public/items/burger/classis-beef-burger.jpg";
import CheeseLover from "@/public/items/burger/cheese-lover.jpg";
import BaconBlast from "@/public/items/burger/bacon-blast.jpg";
import VeggieDelight from "@/public/items/burger/veggie-delight.jpg";
import SpicyChicken from "@/public/items/burger/spicy-chicken.jpg";
import MushroomSwiss from "@/public/items/burger/mushroom-swiss.jpg";
import DoubleTrouble from "@/public/items/burger/double-trouble.jpg";
import BBQRanch from "@/public/items/burger/bbq-ranch.jpg";
import HawaiianHeat from "@/public/items/burger/hawaiian-heat.jpg";
import BlackBeanVeggie from "@/public/items/burger/black-bean-veggie.jpg";
import TheUltimateStack from "@/public/items/burger/the-ultimate-stack.jpg";
import TruffleBurger from "@/public/items/burger/truffle-burger.jpg";

// Fried chicken images
import ClassicFriedChicken from "@/public/items/fried-chicken/crispy-fried-chicken.jpg";
import SpicyFriedChicken from "@/public/items/fried-chicken/spicy-fried-chicken.jpg";
import HoneyGlazedChicken from "@/public/items/fried-chicken/honey-glazed-chicken.jpg";
import CrispyChickenTenders from "@/public/items/fried-chicken/crispy-chicken-tenders.jpg";
import ButtermilkFriedChicken from "@/public/items/fried-chicken/buttermilk-fries-chicken.jpg";
import GarlicParmesanChicken from "@/public/items/fried-chicken/garlic-parmesan.jpg";
import BBQFriedChicken from "@/public/items/fried-chicken/bbq-fried-chicken.jpg";
import CajunFriedChicken from "@/public/items/fried-chicken/cajun-fried-chicken.jpeg";
import SweetChiliChicken from "@/public/items/fried-chicken/sweet-chili-chicken.jpg";
import DoubleCrispyChicken from "@/public/items/fried-chicken/double-cripy-chicken.jpg";
import LemonPepperChicken from "@/public/items/fried-chicken/lemon-pepper-chicken.jpg";
import SmokyFriedChicken from "@/public/items/fried-chicken/smoky-fried-chicken.jpg";

// Nuggets images
import ClassicChickenNuggets from "@/public/items/nuggets/crispy-chicken-nuggets.jpg";
import SpicyNuggets from "@/public/items/nuggets/spicy-nuggets.jpeg";
import CheesyChickenBites from "@/public/items/nuggets/cheesy-chicken-bites.jpg";
import BBQGlazedNuggets from "@/public/items/nuggets/bbq-glazed-nuggets.jpg";
import GarlicParmesanNuggets from "@/public/items/nuggets/garlic-parmesan-nuggets.jpg";
import SweetSourNuggets from "@/public/items/nuggets/sweet-sour-nuggets.jpg";
import CrispyPopcornNuggets from "@/public/items/nuggets/crispy-popcorn-nuggets.jpg";
import TeriyakiChickenNuggets from "@/public/items/nuggets/teriyaki-chicken-nuggets.jpg";
import SmokyChipotleNuggets from "@/public/items/nuggets/smoky-chipotle-nuggets.jpg";
import BuffaloChickenNuggets from "@/public/items/nuggets/buffalo-chicken-nuggets.jpg";
import LemonHerbNuggets from "@/public/items/nuggets/lemon-herb-nuggets.jpg";
import KoreanSpicyNuggets from "@/public/items/nuggets/spicy-korean-nuggets.jpg";

// Sandwich images
import ClassicChickenSandwich from "@/public/items/sandwiches/classic-chicken-sandwich.jpg";
import SpicyGrilledSandwich from "@/public/items/sandwiches/spicy-grilled-sandwich.jpg";
import BBQPulledPorkSandwich from "@/public/items/sandwiches/bbq-pulled-pork-sandwich.jpg";
import TurkeyClubSandwich from "@/public/items/sandwiches/turkey-club-sandwich.jpg";
import BaconLettuceTomato from "@/public/items/sandwiches/bacon-lettuce-tomato.jpg";
import GrilledCheeseSupreme from "@/public/items/sandwiches/grilled-supreme-cheese.jpg";
import CrispyFishSandwich from "@/public/items/sandwiches/crispy-fish-sandwich.jpg";
import PhillySteakSandwich from "@/public/items/sandwiches/philly-steak-sandwich.jpg";
import VeggieAvocadoSandwich from "@/public/items/sandwiches/veggie-avocado-sandwich.jpg";
import BuffaloChickenSandwich from "@/public/items/sandwiches/buffalo-chicken-sandwich.jpg";
import HamSwissMelt from "@/public/items/sandwiches/hams-swiss-melt.jpg";
import RoastBeefSandwich from "@/public/items/sandwiches/roast-beef-sandwich.jpg";

// Hot-dog images
import ClassicHotDog from "@/public/items/hot-dogs/classic-hot-dog.jpg";
import ChiliCheeseDog from "@/public/items/hot-dogs/chili-cheese-dog.jpg";
import BaconWrappedDog from "@/public/items/hot-dogs/bacon-wrapped-dog.jpeg";
import NewYorkStyleDog from "@/public/items/hot-dogs/newyork-style-dog.jpg";
import ChicagoDog from "@/public/items/hot-dogs/chicago-dog.jpg";
import JalapeñoPopperDog from "@/public/items/hot-dogs/jalapeño-popper.jpg";
import BBQDog from "@/public/items/hot-dogs/bbq-dog.jpg";
import LoadedNachoDog from "@/public/items/hot-dogs/loaded-nacho-dog.jpg";
import KrautDog from "@/public/items/hot-dogs/kraut-dog.jpg";
import CheddarBratDog from "@/public/items/hot-dogs/cheddar-brat-dog.jpg";
import SouthwestDog from "@/public/items/hot-dogs/southwest-dog.jpg";
import VeganHotDog from "@/public/items/hot-dogs/vegan-hot-dog.jpg";

// Taco images
import ClassicBeefTaco from "@/public/items/tacos/classic-beef-taco.jpg";
import SpicyChickenTaco from "@/public/items/tacos/spicy-chicken-taco.jpg";
import FishTaco from "@/public/items/tacos/fish-taco.jpg";
import CarnitasTaco from "@/public/items/tacos/carnitas-taco.jpg";
import ShrimpTaco from "@/public/items/tacos/shrimp-taco.jpg";
import BarbacoaTaco from "@/public/items/tacos/barbacoa-taco.jpg";
import VegetarianTaco from "@/public/items/tacos/vegeterian-taco.jpg";
import ChorizoTaco from "@/public/items/tacos/chorizo-taco.jpg";
import KoreanBBQTaco from "@/public/items/tacos/korean-bbq-taco.jpg";
import BuffaloCauliflowerTaco from "@/public/items/tacos/buffalo-cauliflower-taco.jpg";
import SteakTaco from "@/public/items/tacos/steak-taco.jpg";
import ChipotlePorkTaco from "@/public/items/tacos/chipotle-pork-taco.jpg";

// Wrap images
import GrilledChickenWrap from "@/public/items/wraps/grilled-chicken-wrap.jpg";
import SpicyBuffaloWrap from "@/public/items/wraps/spicy-buffalo.jpg";
import ChickenCaesarWrap from "@/public/items/wraps/chicken-caeser.jpg";
import BBQRanchWrap from "@/public/items/wraps/bbq-ranch.jpg";
import VeggieDelightWrap from "@/public/items/wraps/veggie-delight.jpg";
import TandooriChickenWrap from "@/public/items/wraps/tandoori-chicken.jpg";
import FalafelHummusWrap from "@/public/items/wraps/falafel-hummus.jpg";
import TurkeyAvocadoWrap from "@/public/items/wraps/turkey-avocado.jpg";
import ChipotleSteakWrap from "@/public/items/wraps/chipotle-steak.jpg";
import AsianSesameWrap from "@/public/items/wraps/asian-sesame.jpg";
import GreekChickenWrap from "@/public/items/wraps/greek-chicken.jpg";
import EggCheeseBreakfastWrap from "@/public/items/wraps/egg-cheese-breakfast.jpg";

// Fries images
import ClassicFrenchFries from "@/public/items/fries/classic-french-fries.jpg";
import CurlyFries from "@/public/items/fries/curly-fries.jpg";
import CheeseFries from "@/public/items/fries/cheese-fries.jpg";
import ChiliCheeseFries from "@/public/items/fries/chili-cheese-fries.jpg";
import GarlicParmesanFries from "@/public/items/fries/garlic-parmesan.jpg";
import SweetPotatoFries from "@/public/items/fries/sweet-potato-fries.jpg";
import LoadedBaconFries from "@/public/items/fries/loaded-bacon-fries.jpg";
import TruffleFries from "@/public/items/fries/truffle-fries.jpg";
import SpicyCajunFries from "@/public/items/fries/spicy-cajun-fries.jpg";
import WaffleFries from "@/public/items/fries/waffle-fries.jpg";
import CrinkleCutFries from "@/public/items/fries/crinkle-cut.jpg";
import SeasonedSteakFries from "@/public/items/fries/seasoned-steak.jpg";

// Momos images
import SteamedChickenMomos from "@/public/items/momos/steamed-chicken-momos.jpg";
import VegMomos from "@/public/items/momos/veg-momos.jpg";
import FriedChickenMomos from "@/public/items/momos/fried-chicken-momos.jpg";
import CheeseCornMomos from "@/public/items/momos/cheese-corn-momos.jpg";
import TandooriMomos from "@/public/items/momos/tandoori-momos.jpg";
import ChilliGarlicMomos from "@/public/items/momos/chili-garlic-momos.jpg";
import PaneerMomos from "@/public/items/momos/paneer-momos.jpg";
import ChickenKurkureMomos from "@/public/items/momos/chicken-kurkure-momos.jpg";
import ButterMasalaMomos from "@/public/items/momos/butter-masala-momos.jpg";
import PeriPeriMomos from "@/public/items/momos/peri-peri-momos.jpg";
import ChocolateMomos from "@/public/items/momos/chocolate-momos.jpg";
import SpicySchezwanMomos from "@/public/items/momos/spicy-schezwan-momos.jpg";

// Milkshake images
import ClassicVanillaShake from "@/public/items/milkshakes/classic-vanilla-shake.jpg";
import ChocolateFudgeShake from "@/public/items/milkshakes/chocolate-fudge-shake.jpg";
import StrawberryBlissShake from "@/public/items/milkshakes/strawberry-bliss-shake.jpg";
import OreoCrumbleShak from "@/public/items/milkshakes/oreo-crumble-shake.jpg";
import BananaCaramelShake from "@/public/items/milkshakes/banana-caramel-shake.jpg";
import MangoMagicShake from "@/public/items/milkshakes/mango-magic-shake.jpg";
import PeanutButterShake from "@/public/items/milkshakes/peanut-butter-shake.jpg";
import CoffeeMochaShake from "@/public/items/milkshakes/coffee-mocha-shake.jpg";
import KitKatShake from "@/public/items/milkshakes/kitkat-shake.jpg";
import BlueberryShak from "@/public/items/milkshakes/blueberry-shake.jpg";
import NutellaShake from "@/public/items/milkshakes/nutella-shake.jpg";
import SaltedCaramelShake from "@/public/items/milkshakes/salted-caramel-shake.jpg";

// Cold-drink images
import CocaCola from "@/public/items/cold-drinks/coca-cola.png";
import Pepsi from "@/public/items/cold-drinks/pepsi.png";
import Sprite from "@/public/items/cold-drinks/sprite.png";
import MountainDew from "@/public/items/cold-drinks/mountain-dwe.png";
import FantaOrange from "@/public/items/cold-drinks/fanta.png";
import ThumsUp from "@/public/items/cold-drinks/thums-up.png";
import Limca from "@/public/items/cold-drinks/limca.png";
import _7Up from "@/public/items/cold-drinks/7up.png";
import IcedLemonTea from "@/public/items/cold-drinks/iced-lemon-tea.png";
import ColdBrewCoffee from "@/public/items/cold-drinks/cold-brew-coffee.png";
import Mojito from "@/public/items/cold-drinks/mojito.png";
import BerryCooler from "@/public/items/cold-drinks/berry-cooler.png";

// Type alias
export type Category =
  | "Pizza"
  | "Burger"
  | "Fried Chicken"
  | "Nugget"
  | "Sandwich"
  | "Hot Dog"
  | "Taco"
  | "Wrap"
  | "Fry"
  | "Momo"
  | "Milkshake"
  | "Cold Drink";

// Interfaces
interface MenuItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: StaticImageData;
}
interface Menu {
  id: string;
  slug: string;
  category: Category;
  image: StaticImageData;
  items: MenuItem[];
}

// Menu data array
const menu: Menu[] = [
  {
    id: uuidv4(),
    slug: "pizzas",
    category: "Pizza",
    image: Pizza,
    items: [
      {
        id: uuidv4(),
        name: "Margherita",
        price: 8.99,
        rating: 4.2,
        image: Margherita,
      },
      {
        id: uuidv4(),
        name: "Pepperoni Feast",
        price: 10.49,
        rating: 4.6,
        image: PepperoniFeast,
      },
      {
        id: uuidv4(),
        name: "BBQ Chicken",
        price: 11.99,
        rating: 4.7,
        image: BBQChicken,
      },
      {
        id: uuidv4(),
        name: "Veggie Supreme",
        price: 9.99,
        rating: 4.3,
        image: VeggieSupreme,
      },
      {
        id: uuidv4(),
        name: "Hawaiian Paradise",
        price: 10.29,
        rating: 3.9,
        image: HawaiianParadise,
      },
      {
        id: uuidv4(),
        name: "Four Cheese Delight",
        price: 9.49,
        rating: 4.5,
        image: FourCheeseDelight,
      },
      {
        id: uuidv4(),
        name: "Meat Lovers",
        price: 12.49,
        rating: 4.8,
        image: MeatLovers,
      },
      {
        id: uuidv4(),
        name: "Spicy Jalapeño",
        price: 9.79,
        rating: 4.1,
        image: SpicyJalapeño,
      },
      {
        id: uuidv4(),
        name: "Mediterranean",
        price: 10.99,
        rating: 4.4,
        image: Mediterranean,
      },
      {
        id: uuidv4(),
        name: "Paneer Tikka",
        price: 10.59,
        rating: 4.4,
        image: PaneerTikka,
      },
      {
        id: uuidv4(),
        name: "Truffle Mushroom",
        price: 13.99,
        rating: 4.9,
        image: TruffleMushroom,
      },
      {
        id: uuidv4(),
        name: "Smoked Salmon",
        price: 14.49,
        rating: 4.2,
        image: SmokedSalmon,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "burgers",
    category: "Burger",
    image: Burger,
    items: [
      {
        id: uuidv4(),
        name: "Classic Beef Burger",
        price: 8.99,
        rating: 4.5,
        image: ClassicBeefBurger,
      },
      {
        id: uuidv4(),
        name: "Cheese Lover",
        price: 9.49,
        rating: 4.7,
        image: CheeseLover,
      },
      {
        id: uuidv4(),
        name: "Bacon Blast",
        price: 10.99,
        rating: 4.8,
        image: BaconBlast,
      },
      {
        id: uuidv4(),
        name: "Veggie Delight",
        price: 7.99,
        rating: 4.2,
        image: VeggieDelight,
      },
      {
        id: uuidv4(),
        name: "Spicy Chicken",
        price: 9.29,
        rating: 4.6,
        image: SpicyChicken,
      },
      {
        id: uuidv4(),
        name: "Mushroom Swiss",
        price: 10.49,
        rating: 4.7,
        image: MushroomSwiss,
      },
      {
        id: uuidv4(),
        name: "Double Trouble",
        price: 12.99,
        rating: 4.9,
        image: DoubleTrouble,
      },
      {
        id: uuidv4(),
        name: "BBQ Ranch",
        price: 9.89,
        rating: 4.4,
        image: BBQRanch,
      },
      {
        id: uuidv4(),
        name: "Hawaiian Heat",
        price: 9.59,
        rating: 4.3,
        image: HawaiianHeat,
      },
      {
        id: uuidv4(),
        name: "Black Bean Veggie",
        price: 8.49,
        rating: 4.1,
        image: BlackBeanVeggie,
      },
      {
        id: uuidv4(),
        name: "The Ultimate Stack",
        price: 13.49,
        rating: 4.9,
        image: TheUltimateStack,
      },
      {
        id: uuidv4(),
        name: "Truffle Burger",
        price: 14.99,
        rating: 4.8,
        image: TruffleBurger,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "fried-chickens",
    category: "Fried Chicken",
    image: FriedChicken,
    items: [
      {
        id: uuidv4(),
        name: "Classic Fried Chicken",
        price: 7.99,
        rating: 4.5,
        image: ClassicFriedChicken,
      },
      {
        id: uuidv4(),
        name: "Spicy Fried Chicken",
        price: 8.49,
        rating: 4.7,
        image: SpicyFriedChicken,
      },
      {
        id: uuidv4(),
        name: "Honey Glazed Chicken",
        price: 8.99,
        rating: 4.6,
        image: HoneyGlazedChicken,
      },
      {
        id: uuidv4(),
        name: "Crispy Chicken Tenders",
        price: 6.99,
        rating: 4.4,
        image: CrispyChickenTenders,
      },
      {
        id: uuidv4(),
        name: "Buttermilk Fried Chicken",
        price: 9.29,
        rating: 4.8,
        image: ButtermilkFriedChicken,
      },
      {
        id: uuidv4(),
        name: "Garlic Parmesan Chicken",
        price: 9.59,
        rating: 4.5,
        image: GarlicParmesanChicken,
      },
      {
        id: uuidv4(),
        name: "BBQ Fried Chicken",
        price: 8.79,
        rating: 4.3,
        image: BBQFriedChicken,
      },
      {
        id: uuidv4(),
        name: "Cajun Fried Chicken",
        price: 8.99,
        rating: 4.6,
        image: CajunFriedChicken,
      },
      {
        id: uuidv4(),
        name: "Sweet Chili Chicken",
        price: 9.19,
        rating: 4.4,
        image: SweetChiliChicken,
      },
      {
        id: uuidv4(),
        name: "Double Crispy Chicken",
        price: 10.49,
        rating: 4.7,
        image: DoubleCrispyChicken,
      },
      {
        id: uuidv4(),
        name: "Lemon Pepper Chicken",
        price: 9.89,
        rating: 4.5,
        image: LemonPepperChicken,
      },
      {
        id: uuidv4(),
        name: "Smoky Fried Chicken",
        price: 9.99,
        rating: 4.8,
        image: SmokyFriedChicken,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "nuggets",
    category: "Nugget",
    image: Nugget,
    items: [
      {
        id: uuidv4(),
        name: "Classic Chicken Nuggets",
        price: 5.99,
        rating: 4.4,
        image: ClassicChickenNuggets,
      },
      {
        id: uuidv4(),
        name: "Spicy Nuggets",
        price: 6.29,
        rating: 4.6,
        image: SpicyNuggets,
      },
      {
        id: uuidv4(),
        name: "Cheesy Chicken Bites",
        price: 6.49,
        rating: 4.5,
        image: CheesyChickenBites,
      },
      {
        id: uuidv4(),
        name: "BBQ Glazed Nuggets",
        price: 6.79,
        rating: 4.3,
        image: BBQGlazedNuggets,
      },
      {
        id: uuidv4(),
        name: "Garlic Parmesan Nuggets",
        price: 6.99,
        rating: 4.7,
        image: GarlicParmesanNuggets,
      },
      {
        id: uuidv4(),
        name: "Sweet & Sour Nuggets",
        price: 6.59,
        rating: 4.2,
        image: SweetSourNuggets,
      },
      {
        id: uuidv4(),
        name: "Crispy Popcorn Nuggets",
        price: 5.89,
        rating: 4.1,
        image: CrispyPopcornNuggets,
      },
      {
        id: uuidv4(),
        name: "Teriyaki Chicken Nuggets",
        price: 6.79,
        rating: 4.4,
        image: TeriyakiChickenNuggets,
      },
      {
        id: uuidv4(),
        name: "Smoky Chipotle Nuggets",
        price: 6.99,
        rating: 4.6,
        image: SmokyChipotleNuggets,
      },
      {
        id: uuidv4(),
        name: "Buffalo Chicken Nuggets",
        price: 6.49,
        rating: 4.3,
        image: BuffaloChickenNuggets,
      },
      {
        id: uuidv4(),
        name: "Lemon Herb Nuggets",
        price: 6.19,
        rating: 4.2,
        image: LemonHerbNuggets,
      },
      {
        id: uuidv4(),
        name: "Korean Spicy Nuggets",
        price: 7.29,
        rating: 4.8,
        image: KoreanSpicyNuggets,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "sandwiches",
    category: "Sandwich",
    image: Sandwich,
    items: [
      {
        id: uuidv4(),
        name: "Classic Chicken Sandwich",
        price: 7.49,
        rating: 4.4,
        image: ClassicChickenSandwich,
      },
      {
        id: uuidv4(),
        name: "Spicy Grilled Sandwich",
        price: 7.99,
        rating: 4.6,
        image: SpicyGrilledSandwich,
      },
      {
        id: uuidv4(),
        name: "BBQ Pulled Pork Sandwich",
        price: 8.49,
        rating: 4.7,
        image: BBQPulledPorkSandwich,
      },
      {
        id: uuidv4(),
        name: "Turkey Club Sandwich",
        price: 7.79,
        rating: 4.5,
        image: TurkeyClubSandwich,
      },
      {
        id: uuidv4(),
        name: "Bacon Lettuce Tomato",
        price: 6.99,
        rating: 4.3,
        image: BaconLettuceTomato,
      },
      {
        id: uuidv4(),
        name: "Grilled Cheese Supreme",
        price: 6.49,
        rating: 4.2,
        image: GrilledCheeseSupreme,
      },
      {
        id: uuidv4(),
        name: "Crispy Fish Sandwich",
        price: 7.59,
        rating: 4.4,
        image: CrispyFishSandwich,
      },
      {
        id: uuidv4(),
        name: "Philly Steak Sandwich",
        price: 8.99,
        rating: 4.8,
        image: PhillySteakSandwich,
      },
      {
        id: uuidv4(),
        name: "Veggie Avocado Sandwich",
        price: 6.79,
        rating: 4.1,
        image: VeggieAvocadoSandwich,
      },
      {
        id: uuidv4(),
        name: "Buffalo Chicken Sandwich",
        price: 7.89,
        rating: 4.5,
        image: BuffaloChickenSandwich,
      },
      {
        id: uuidv4(),
        name: "Ham & Swiss Melt",
        price: 6.99,
        rating: 4.3,
        image: HamSwissMelt,
      },
      {
        id: uuidv4(),
        name: "Roast Beef Sandwich",
        price: 8.19,
        rating: 4.6,
        image: RoastBeefSandwich,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "hot-dogs",
    category: "Hot Dog",
    image: HotDog,
    items: [
      {
        id: uuidv4(),
        name: "Classic Hot Dog",
        price: 4.99,
        rating: 4.2,
        image: ClassicHotDog,
      },
      {
        id: uuidv4(),
        name: "Chili Cheese Dog",
        price: 5.79,
        rating: 4.6,
        image: ChiliCheeseDog,
      },
      {
        id: uuidv4(),
        name: "Bacon Wrapped Dog",
        price: 5.99,
        rating: 4.7,
        image: BaconWrappedDog,
      },
      {
        id: uuidv4(),
        name: "New York Style Dog",
        price: 5.49,
        rating: 4.5,
        image: NewYorkStyleDog,
      },
      {
        id: uuidv4(),
        name: "Chicago Dog",
        price: 5.69,
        rating: 4.6,
        image: ChicagoDog,
      },
      {
        id: uuidv4(),
        name: "Jalapeño Popper Dog",
        price: 5.89,
        rating: 4.4,
        image: JalapeñoPopperDog,
      },
      {
        id: uuidv4(),
        name: "BBQ Dog",
        price: 5.59,
        rating: 4.3,
        image: BBQDog,
      },
      {
        id: uuidv4(),
        name: "Loaded Nacho Dog",
        price: 6.29,
        rating: 4.7,
        image: LoadedNachoDog,
      },
      {
        id: uuidv4(),
        name: "Kraut Dog",
        price: 5.39,
        rating: 4.2,
        image: KrautDog,
      },
      {
        id: uuidv4(),
        name: "Cheddar Brat Dog",
        price: 6.49,
        rating: 4.8,
        image: CheddarBratDog,
      },
      {
        id: uuidv4(),
        name: "Southwest Dog",
        price: 5.99,
        rating: 4.5,
        image: SouthwestDog,
      },
      {
        id: uuidv4(),
        name: "Vegan Hot Dog",
        price: 6.19,
        rating: 4.1,
        image: VeganHotDog,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "tacos",
    category: "Taco",
    image: Taco,
    items: [
      {
        id: uuidv4(),
        name: "Classic Beef Taco",
        price: 3.99,
        rating: 4.5,
        image: ClassicBeefTaco,
      },
      {
        id: uuidv4(),
        name: "Spicy Chicken Taco",
        price: 4.29,
        rating: 4.6,
        image: SpicyChickenTaco,
      },
      {
        id: uuidv4(),
        name: "Fish Taco",
        price: 4.79,
        rating: 4.4,
        image: FishTaco,
      },
      {
        id: uuidv4(),
        name: "Carnitas Taco",
        price: 4.59,
        rating: 4.7,
        image: CarnitasTaco,
      },
      {
        id: uuidv4(),
        name: "Shrimp Taco",
        price: 4.89,
        rating: 4.6,
        image: ShrimpTaco,
      },
      {
        id: uuidv4(),
        name: "Barbacoa Taco",
        price: 4.69,
        rating: 4.8,
        image: BarbacoaTaco,
      },
      {
        id: uuidv4(),
        name: "Vegetarian Taco",
        price: 3.79,
        rating: 4.2,
        image: VegetarianTaco,
      },
      {
        id: uuidv4(),
        name: "Chorizo Taco",
        price: 4.49,
        rating: 4.3,
        image: ChorizoTaco,
      },
      {
        id: uuidv4(),
        name: "Korean BBQ Taco",
        price: 5.19,
        rating: 4.7,
        image: KoreanBBQTaco,
      },
      {
        id: uuidv4(),
        name: "Buffalo Cauliflower Taco",
        price: 4.09,
        rating: 4.1,
        image: BuffaloCauliflowerTaco,
      },
      {
        id: uuidv4(),
        name: "Steak Taco",
        price: 5.29,
        rating: 4.8,
        image: SteakTaco,
      },
      {
        id: uuidv4(),
        name: "Chipotle Pork Taco",
        price: 4.69,
        rating: 4.5,
        image: ChipotlePorkTaco,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "wraps",
    category: "Wrap",
    image: Wrap,
    items: [
      {
        id: uuidv4(),
        name: "Grilled Chicken Wrap",
        price: 7.49,
        rating: 4.5,
        image: GrilledChickenWrap,
      },
      {
        id: uuidv4(),
        name: "Spicy Buffalo Wrap",
        price: 7.99,
        rating: 4.6,
        image: SpicyBuffaloWrap,
      },
      {
        id: uuidv4(),
        name: "Chicken Caesar Wrap",
        price: 7.59,
        rating: 4.4,
        image: ChickenCaesarWrap,
      },
      {
        id: uuidv4(),
        name: "BBQ Ranch Wrap",
        price: 7.79,
        rating: 4.5,
        image: BBQRanchWrap,
      },
      {
        id: uuidv4(),
        name: "Veggie Delight Wrap",
        price: 6.99,
        rating: 4.2,
        image: VeggieDelightWrap,
      },
      {
        id: uuidv4(),
        name: "Tandoori Chicken Wrap",
        price: 8.29,
        rating: 4.7,
        image: TandooriChickenWrap,
      },
      {
        id: uuidv4(),
        name: "Falafel & Hummus Wrap",
        price: 6.89,
        rating: 4.3,
        image: FalafelHummusWrap,
      },
      {
        id: uuidv4(),
        name: "Turkey Avocado Wrap",
        price: 7.69,
        rating: 4.6,
        image: TurkeyAvocadoWrap,
      },
      {
        id: uuidv4(),
        name: "Chipotle Steak Wrap",
        price: 8.49,
        rating: 4.8,
        image: ChipotleSteakWrap,
      },
      {
        id: uuidv4(),
        name: "Asian Sesame Wrap",
        price: 7.29,
        rating: 4.4,
        image: AsianSesameWrap,
      },
      {
        id: uuidv4(),
        name: "Greek Chicken Wrap",
        price: 7.89,
        rating: 4.5,
        image: GreekChickenWrap,
      },
      {
        id: uuidv4(),
        name: "Egg & Cheese Breakfast Wrap",
        price: 6.49,
        rating: 4.1,
        image: EggCheeseBreakfastWrap,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "fries",
    category: "Fry",
    image: Fry,
    items: [
      {
        id: uuidv4(),
        name: "Classic French Fries",
        price: 3.49,
        rating: 4.3,
        image: ClassicFrenchFries,
      },
      {
        id: uuidv4(),
        name: "Curly Fries",
        price: 3.99,
        rating: 4.5,
        image: CurlyFries,
      },
      {
        id: uuidv4(),
        name: "Cheese Fries",
        price: 4.49,
        rating: 4.6,
        image: CheeseFries,
      },
      {
        id: uuidv4(),
        name: "Chili Cheese Fries",
        price: 4.99,
        rating: 4.7,
        image: ChiliCheeseFries,
      },
      {
        id: uuidv4(),
        name: "Garlic Parmesan Fries",
        price: 4.59,
        rating: 4.5,
        image: GarlicParmesanFries,
      },
      {
        id: uuidv4(),
        name: "Sweet Potato Fries",
        price: 3.79,
        rating: 4.4,
        image: SweetPotatoFries,
      },
      {
        id: uuidv4(),
        name: "Loaded Bacon Fries",
        price: 5.29,
        rating: 4.8,
        image: LoadedBaconFries,
      },
      {
        id: uuidv4(),
        name: "Truffle Fries",
        price: 5.49,
        rating: 4.7,
        image: TruffleFries,
      },
      {
        id: uuidv4(),
        name: "Spicy Cajun Fries",
        price: 3.99,
        rating: 4.4,
        image: SpicyCajunFries,
      },
      {
        id: uuidv4(),
        name: "Waffle Fries",
        price: 4.29,
        rating: 4.3,
        image: WaffleFries,
      },
      {
        id: uuidv4(),
        name: "Crinkle-Cut Fries",
        price: 3.69,
        rating: 4.2,
        image: CrinkleCutFries,
      },
      {
        id: uuidv4(),
        name: "Seasoned Steak Fries",
        price: 4.79,
        rating: 4.6,
        image: SeasonedSteakFries,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "momos",
    category: "Momo",
    image: Momo,
    items: [
      {
        id: uuidv4(),
        name: "Steamed Chicken Momos",
        price: 6.49,
        rating: 4.5,
        image: SteamedChickenMomos,
      },
      {
        id: uuidv4(),
        name: "Veg Momos",
        price: 5.99,
        rating: 4.3,
        image: VegMomos,
      },
      {
        id: uuidv4(),
        name: "Fried Chicken Momos",
        price: 6.99,
        rating: 4.6,
        image: FriedChickenMomos,
      },
      {
        id: uuidv4(),
        name: "Cheese Corn Momos",
        price: 6.79,
        rating: 4.4,
        image: CheeseCornMomos,
      },
      {
        id: uuidv4(),
        name: "Tandoori Momos",
        price: 7.29,
        rating: 4.7,
        image: TandooriMomos,
      },
      {
        id: uuidv4(),
        name: "Chilli Garlic Momos",
        price: 7.49,
        rating: 4.6,
        image: ChilliGarlicMomos,
      },
      {
        id: uuidv4(),
        name: "Paneer Momos",
        price: 6.59,
        rating: 4.4,
        image: PaneerMomos,
      },
      {
        id: uuidv4(),
        name: "Chicken Kurkure Momos",
        price: 7.89,
        rating: 4.8,
        image: ChickenKurkureMomos,
      },
      {
        id: uuidv4(),
        name: "Butter Masala Momos",
        price: 7.19,
        rating: 4.5,
        image: ButterMasalaMomos,
      },
      {
        id: uuidv4(),
        name: "Peri Peri Momos",
        price: 7.39,
        rating: 4.3,
        image: PeriPeriMomos,
      },
      {
        id: uuidv4(),
        name: "Chocolate Momos",
        price: 5.49,
        rating: 4.1,
        image: ChocolateMomos,
      },
      {
        id: uuidv4(),
        name: "Spicy Schezwan Momos",
        price: 7.69,
        rating: 4.6,
        image: SpicySchezwanMomos,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "milkshakes",
    category: "Milkshake",
    image: Milkshake,
    items: [
      {
        id: uuidv4(),
        name: "Classic Vanilla Shake",
        price: 4.99,
        rating: 4.4,
        image: ClassicVanillaShake,
      },
      {
        id: uuidv4(),
        name: "Chocolate Fudge Shake",
        price: 5.29,
        rating: 4.6,
        image: ChocolateFudgeShake,
      },
      {
        id: uuidv4(),
        name: "Strawberry Bliss Shake",
        price: 5.19,
        rating: 4.5,
        image: StrawberryBlissShake,
      },
      {
        id: uuidv4(),
        name: "Oreo Crumble Shake",
        price: 5.59,
        rating: 4.7,
        image: OreoCrumbleShak,
      },
      {
        id: uuidv4(),
        name: "Banana Caramel Shake",
        price: 5.39,
        rating: 4.3,
        image: BananaCaramelShake,
      },
      {
        id: uuidv4(),
        name: "Mango Magic Shake",
        price: 5.49,
        rating: 4.4,
        image: MangoMagicShake,
      },
      {
        id: uuidv4(),
        name: "Peanut Butter Shake",
        price: 5.69,
        rating: 4.6,
        image: PeanutButterShake,
      },
      {
        id: uuidv4(),
        name: "Coffee Mocha Shake",
        price: 5.79,
        rating: 4.7,
        image: CoffeeMochaShake,
      },
      {
        id: uuidv4(),
        name: "KitKat Shake",
        price: 5.89,
        rating: 4.8,
        image: KitKatShake,
      },
      {
        id: uuidv4(),
        name: "Blueberry Shake",
        price: 5.59,
        rating: 4.5,
        image: BlueberryShak,
      },
      {
        id: uuidv4(),
        name: "Nutella Shake",
        price: 5.99,
        rating: 4.9,
        image: NutellaShake,
      },
      {
        id: uuidv4(),
        name: "Salted Caramel Shake",
        price: 5.49,
        rating: 4.6,
        image: SaltedCaramelShake,
      },
    ],
  },
  {
    id: uuidv4(),
    slug: "cold-drinks",
    category: "Cold Drink",
    image: ColdDrink,
    items: [
      {
        id: uuidv4(),
        name: "Coca-Cola",
        price: 2.49,
        rating: 4.5,
        image: CocaCola,
      },
      {
        id: uuidv4(),
        name: "Pepsi",
        price: 2.49,
        rating: 4.4,
        image: Pepsi,
      },
      {
        id: uuidv4(),
        name: "Sprite",
        price: 2.49,
        rating: 4.3,
        image: Sprite,
      },
      {
        id: uuidv4(),
        name: "Mountain Dew",
        price: 2.69,
        rating: 4.4,
        image: MountainDew,
      },
      {
        id: uuidv4(),
        name: "Fanta Orange",
        price: 2.49,
        rating: 4.2,
        image: FantaOrange,
      },
      {
        id: uuidv4(),
        name: "Thums Up",
        price: 2.79,
        rating: 4.6,
        image: ThumsUp,
      },
      {
        id: uuidv4(),
        name: "Limca",
        price: 2.59,
        rating: 4.3,
        image: Limca,
      },
      {
        id: uuidv4(),
        name: "7Up",
        price: 2.49,
        rating: 4.2,
        image: _7Up,
      },
      {
        id: uuidv4(),
        name: "Iced Lemon Tea",
        price: 3.29,
        rating: 4.5,
        image: IcedLemonTea,
      },
      {
        id: uuidv4(),
        name: "Cold Brew Coffee",
        price: 3.99,
        rating: 4.7,
        image: ColdBrewCoffee,
      },
      {
        id: uuidv4(),
        name: "Mojito (Mint)",
        price: 3.49,
        rating: 4.6,
        image: Mojito,
      },
      {
        id: uuidv4(),
        name: "Berry Cooler",
        price: 3.69,
        rating: 4.6,
        image: BerryCooler,
      },
    ],
  },
];

export default menu;
