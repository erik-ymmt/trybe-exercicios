type slices = 4 | 6 | 8;
type commonFlavours = "Chicken" | "Pepperoni";

interface Pizza {
  flavor: string;
  slices: slices;
}

interface PizzaComum extends Pizza {
  flavor: commonFlavours;
}

interface PizzaVeg extends Pizza {
  flavor: 'broccoli';
}

const pizza1: Pizza = {
  flavor: "calabresa",
  slices: 8,
}

const pizza2: Pizza = {
  flavor: "margherita",
  slices: 6,
}

const pizza3: Pizza = {
  flavor: "Nutela",
  slices: 4,
}

const pizza4: PizzaComum = {
  flavor: "Chicken",
  slices: 8,
}

const pizza5: PizzaVeg = {
  flavor: "broccoli",
  slices: 8,
}