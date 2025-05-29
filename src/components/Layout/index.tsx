import React from "react";
import { Title } from "../Title";
import styles from "./Layout.module.scss";
import { ProgressBar } from "../ProgressBar/ProgressBar";

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
};
export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <header className={styles.header}>
        <Title title={title} />
      </header>
      {children}
      <footer
        className={styles.footer}
      >{`© 2016—${new Date().getFullYear()} Potato Inc.`}</footer>
    </div>
  );
};
