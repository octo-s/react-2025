import { createRoot } from 'react-dom/client';
import type {MenuItem, Restaurant, Review} from "./types/restaurant";
import {restaurants} from "./data/mock";

const reactRoot = createRoot(document.getElementById('root')!)

reactRoot.render(
    <>
        <h1>Список ресторанов</h1>
        {restaurants.map((restaurant: Restaurant) => (
            <>
                <h2 key={restaurant.id}>{restaurant.name}</h2>
                <h3>Меню</h3>
                <ul>
                    {restaurant.menu.map((menuItem: MenuItem) => (
                        <li key={menuItem.id}>
                            <h4>{menuItem.name} - {menuItem.price} eur</h4>
                            <ul>
                                {menuItem.ingredients.map((ingredient) => (
                                    <li>{ingredient}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <h3>Отзывы</h3>
                <ul>
                    {restaurant.reviews.map((review: Review) => (
                        <li key={review.id}>
                            <h4>{review.user} - {review.rating} stars</h4>
                            <>{review.text}</>
                        </li>
                    ))}
                </ul>
            </>
        ))}
    </>
);