import React from "react";
import { Title } from "../Title";
import styles from "./Layout.module.scss";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import classNames from "classnames";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTheme } from "../../providers/ThemeProvider/useTheme";
import { UserInfo } from "../UserInfo";

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
};
export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}: LayoutProps) => {
  const { theme } = useTheme();

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
