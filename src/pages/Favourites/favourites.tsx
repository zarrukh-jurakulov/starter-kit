import React from "react";
import classes from "./styles.module.scss";
import { HeartWithBackIcon } from "../../assets/icons";
import productData from "../../data/product-card.json";
import ProductCard from "../../components/ProductCard/product-card";
import kidsDressimg from "../../assets/images/dress.png";

const Favourites = () => {
  const renderIcon = (iconName: string) =>
    ({
      kidsDress: kidsDressimg,
    }[iconName]);

  return (
    <div className={classes.favourites}>
      <div className={classes.header}>
        <HeartWithBackIcon />
        <h4>Избранные</h4>
      </div>
      <div className={classes.favourite__products}>
        {productData.map((e) => (
          <ProductCard
            id={e.id}
            image={renderIcon(e.image)}
            name={e.name}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
