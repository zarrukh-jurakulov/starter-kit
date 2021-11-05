import React, { useState, ComponentType } from "react";
import classes from "./styles.module.scss";
import { BuyIcon, HeartIcon, HeartPinkIcon } from "../../assets/icons";

interface ProductCardProps {
  id: number;
  image: React.ReactNode | any;
  name: string;
  price: number;
}

const ProductCard: ComponentType<ProductCardProps> = ({
  id,
  image,
  name,
  price,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  return (
    <div className={classes.product__card}>
      <div className={classes.img__container}>
        <img src={image} alt='product__image' />
        <div onClick={() => setIsFavourite(!isFavourite)}>
          {isFavourite ? (
            <HeartPinkIcon className={classes.heart__icon} />
          ) : (
            <HeartIcon className={classes.heart__icon} />
          )}
        </div>
      </div>
      <header className={classes.product__name}>{name}</header>
      <div className={classes.price__container}>
        <div className={classes.price}>{price} sum</div>
        <div className={classes.icon__container}>
          <BuyIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
