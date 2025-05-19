import { createRoot } from 'react-dom/client';
import {restaurants} from "./data/mock";

const reactRoot = createRoot(document.getElementById('root')!)

reactRoot.render(
    <>
        <h1>Список ресторанов</h1>
        {restaurants.map((restaurant) => (
            <>
                <h2 key={restaurant.id}>{restaurant.name}</h2>
                <h3>Меню</h3>
                <ul>
                    {restaurant.menu.map((menuItem) => (
                        <li key={menuItem.id}>
                            <h4>{menuItem.name} - {menuItem.price} eur</h4>
                            <ul>
                                {menuItem.ingredients.map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <h3>Отзывы</h3>
                <ul>
                    {restaurant.reviews.map((review) => (
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