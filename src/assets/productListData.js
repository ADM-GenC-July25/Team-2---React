import Spaceship from "./spaceship.jfif";
import Toy from "./toy.jpg";
import Car from "./car.jfif";
import QualityWaterBottle from "./qualityWaterBottle.jpg";
import NewPS4 from "./newPs4.jpg";

const products = [
  {
    id: 1,
    img: Spaceship,
    name: "Spaceship",
    price: 100,
    shortDesc: "A fast spaceship",
    longDesc:
      "This spaceship can travel at the speed of light and is equipped with the latest technology.",
    reviews: [],
  },
  {
    id: 2,
    img: Toy,
    name: "Toy",
    price: 200,
    shortDesc: "A fun toy",
    longDesc:
      "This toy is perfect for children of all ages and provides hours of entertainment.",
    reviews: [],
  },
  {
    id: 3,
    img: Car,
    name: "Car",
    price: 300,
    shortDesc: "A luxury car",
    longDesc:
      "This car offers a smooth ride and comes with all the modern amenities you could want.",
    reviews: [],
  },
  {
    id: 4,
    img: QualityWaterBottle,
    name: "water bottle",
    price: 10,
    shortDesc: "A reusable water bottle 💔",
    longDesc:
      "This water bottle is made from stainless steel and keeps your drinks cold for hours.",
    reviews: [],
  },
  {
    id: 5,
    img: NewPS4,
    name: "New PS4",
    price: 1500,
    shortDesc: "A high-end gaming console ❤️‍🩹",
    longDesc:
      "This PS4 offers stunning graphics and a vast library of games to choose from.",
    reviews: [],
  },
];

export default products;
