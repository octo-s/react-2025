import React, { useContext } from "react";
import { Title } from "../Title";
import styles from "./Layout.module.scss";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import classNames from "classnames";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { UserInfo } from "../UserInfo";
import { ThemeContext } from "../../providers/ThemeProvider/ThemeContext";
import { Cart } from "../Cart";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { Outlet } from "react-router";

type LayoutProps = {
  title: string;
};
export const Layout: React.FC<LayoutProps> = ({ title }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div className={classNames(styles.layout, theme)}>
      <ProgressBar />
      <header className={styles.header}>
        <Title title={title} />
        <>
          <UserInfo />
          <ThemeSwitcher />
        </>
      </header>
      <Outlet />
      {user && <Cart />}
      <footer
        className={styles.footer}
      >{`© 2016—${new Date().getFullYear()} Potato Inc.`}</footer>
    </div>
  );
};
