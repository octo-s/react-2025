export type Ingredient = string;

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  ingredients: Ingredient[];
};

export type Review = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type Restaurant = {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: Review[];
};

