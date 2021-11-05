import React, { ComponentType } from "react";
import classes from "./styles.module.scss";

interface CategoryTypeProps {
  id: number;
  name: string;
}
const Categorytypebtn: ComponentType<CategoryTypeProps> = ({ id, name }) => {
  return (
    <div key={id}>
      <button className={classes.category__type_btn}>{name}</button>
    </div>
  );
};

export default Categorytypebtn;
