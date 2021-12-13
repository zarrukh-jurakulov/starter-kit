import React, { ComponentType } from "react";
import SizeButtons from "../Shared/SizeButtons/size-buttons";
import classes from "./styles.module.scss";
import sizeButtonsData from "../../data/size-buttons.json";
import dressImg from "../../assets/images/image 1531.png";
import { BuyIcon, MinusIcon, PlusIcon } from "../../assets/icons";

interface ProductDetailProps {
  id: number;
  header: string;
  price: number;
  summary: string;
}

const ProductDetail: ComponentType<ProductDetailProps> = ({
  id,
  header,
  price,
  summary,
}) => {
  return (
    <div className={classes.product__details} key={id}>
      <div className={classes.images}>
        <div className={classes.main__image}>
          <img src={dressImg} alt='' />
        </div>
        <div className={classes.gallery}>
          <img src={dressImg} alt='' />
          <img src={dressImg} alt='' />
          <img src={dressImg} alt='' />
          <img src={dressImg} alt='' />
        </div>
      </div>
      <div className={classes.content}>
        <header>{header}</header>
        <div className={classes.price}>{price} so'm</div>
        <summary>
          Производители Bonito Jeans <br /> Наличие: Есть в наличии <br />{" "}
          Модель: OP1009K-21
        </summary>
        <div className={classes.size}>
          <p>Размер:</p>
          <div className={classes.size__buttons}>
            {sizeButtonsData.map((i) => (
              <SizeButtons id={i.id} name={i.name} />
            ))}
          </div>
        </div>
        <div className={classes.color}>
          <p>Цвет:</p>
          <div className={classes.color__gallery}>
            <img src={dressImg} alt='' />
            <img src={dressImg} alt='' />
            <img src={dressImg} alt='' />
          </div>
        </div>
        <div className={classes.amount}>
          <p className={classes.header}>Количество:</p>
          <div className={classes.amount__button}>
            <div>
              <MinusIcon />
            </div>
            <h4>1</h4>
            <div>
              <PlusIcon />
            </div>
          </div>
        </div>
        <button className={classes.buy__button}>
          В карзину <BuyIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
