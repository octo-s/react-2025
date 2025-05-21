import React from "react";
import { Layout } from "../Layout";
import { RestaurantTabs } from "../RestaurantTabs";

type AppProps = {
  title: string;
};

export const App: React.FC<AppProps> = ({ title }) => {
  return (
    <Layout title={title}>
      <RestaurantTabs />
    </Layout>
  );
};
