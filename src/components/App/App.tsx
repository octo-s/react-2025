import React from "react";
import { Layout } from "../Layout";
import { RestaurantTabs } from "../RestaurantTabs";
import ThemeProvider from "../../providers/ThemeProvider";
import { UserProvider } from "../../providers/UserProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

type AppProps = {
  title: string;
};

export const App: React.FC<AppProps> = ({ title }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout title={title}>
            <RestaurantTabs />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
