import React from "react";
import { Title } from "../Title";
type LayoutProps = {
  children?: React.ReactNode;
  title: string;
};
export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}: LayoutProps) => {
  return (
    <>
      <header>
        <Title title={title} />
      </header>
      {children}
      <footer>{`© 2016—${new Date().getFullYear()} Potato Inc.`}</footer>
    </>
  );
};
