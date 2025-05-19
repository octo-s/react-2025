import { createRoot } from 'react-dom/client';
import {restaurants} from "./data/mock";

const reactRoot = createRoot(document.getElementById('root')!)

reactRoot.render(
    <>
        <h1>Список ресторанов</h1>
        {restaurants.map(({id, name, menu, reviews}) => (
            <>
                <h2 key={id}>{name}</h2>
                <h3>Меню</h3>
                <ul>
                    {menu.map(({id: menuId, name, price, ingredients}) => (
                        <li key={menuId}>
                            <h4>{name} - {price} eur</h4>
                            <ul>
                                {ingredients.map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <h3>Отзывы</h3>
                <ul>
                    {reviews.map(({id: reviewId, user, rating, text}) => (
                        <li key={reviewId}>
                            <h4>{user} - {rating} stars</h4>
                            <>{text}</>
                        </li>
                    ))}
                </ul>
            </>
        ))}
    </>
);