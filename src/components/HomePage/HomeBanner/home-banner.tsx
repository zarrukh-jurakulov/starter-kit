import React, { ComponentType } from "react";
import classes from "./styles.module.scss";
import { NextEnterIcon } from "../../../assets/icons";

interface Props {
  id: number;
  name: string;
  icon: React.ReactNode;
  styles: { bgColor?: string; bgGradient?: any; fontSize: string };
}
const HomeBanner: ComponentType<Props> = ({ id, name, icon, styles }) => {
  return (
    <div
      key={id}
      className={classes.home__banner_mini}
      style={{
        backgroundColor: styles.bgColor,
        background: `linear-gradient(to right, ${styles.bgGradient?.primary} 0%, ${styles.bgGradient?.secondary} 100%)`,
      }}>
      {icon}
      <p style={{ fontSize: styles.fontSize }}>{name}</p>
      <div className={classes.delivery__enter__icon}>
        <NextEnterIcon />
      </div>
    </div>
  );
};

export default HomeBanner;
