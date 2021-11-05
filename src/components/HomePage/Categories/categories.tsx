import React from "react";
import classes from "./styles.module.scss";

const Categories = ({ id, name, image }: any) => {
  return (
    <div key={id} className={classes.category__item}>
      <div className={classes.categoryIcon}>{image}</div>
      <p>{name}</p>
    </div>
  );
};

export default Categories;
