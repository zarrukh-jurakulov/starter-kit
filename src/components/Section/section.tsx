import React, { ComponentType } from "react";
import classes from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}
const Section: ComponentType<Props> = ({ children }) => {
  return <div className={classes.section}>{children}</div>;
};

export default Section;
