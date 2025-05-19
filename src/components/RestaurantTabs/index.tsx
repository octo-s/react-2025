import {restaurants} from "../../data/mock.ts";
import {useState} from "react";

import type {Restaurant as RestaurantType} from "../../types/restaurant";
import {Dish} from "../Dish";
import {Review} from "../Review/Review.tsx";

type RestaurantProps = {
    restaurant: RestaurantType;
}

export const Restaurant = ({restaurant}:RestaurantProps) => {
    const {name, menu, reviews} = restaurant;

    return (
        <>
            <h2>{name}</h2>
            <h3>Меню</h3>
            {menu.map((dish) => (
                <Dish key={dish.id} dish={dish} />
            ))}
            <h3>Отзывы</h3>
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </>
    );
};

export const RestaurantTabs= () => {
    const [activeRestaurant, setActiveRestaurant] = useState<RestaurantType>(restaurants[0])

    return (
        <>
            {restaurants.map((restaurant) => (
                <button key={restaurant.id} onClick={() => setActiveRestaurant(restaurant)}>
                    {restaurant.name}
                </button>
            ))}
            <Restaurant restaurant={activeRestaurant} />
        </>
    );
};