import {Layout} from "../Layout";
import {RestaurantTabs} from "../RestaurantTabs";

type AppProps = {
    title: string;
}

export const App= ({title}:AppProps) => {
    return (
        <Layout title={title}>
            <RestaurantTabs />
        </Layout>
    );
};