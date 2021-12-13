import React, { ComponentType } from "react";
import classes from "./styles.module.scss";

interface SizeButtonsProps {
  id: number;
  name: string;
}

const SizeButtons: ComponentType<SizeButtonsProps> = ({ id, name }) => {
  return (
    <button className={classes.button} key={id}>
      {name}
    </button>
  );
};

export default SizeButtons;
