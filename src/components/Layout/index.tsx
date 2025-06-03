import React, { useContext } from "react";
import { Title } from "../Title";
import styles from "./Layout.module.scss";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import classNames from "classnames";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { UserInfo } from "../UserInfo";
import { ThemeContext } from "../../providers/ThemeProvider/ThemeContext";

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
};
export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}: LayoutProps) => {
  const { theme } = useContext(ThemeContext);

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
      {children}
      <footer
        className={styles.footer}
      >{`© 2016—${new Date().getFullYear()} Potato Inc.`}</footer>
    </div>
  );
};
