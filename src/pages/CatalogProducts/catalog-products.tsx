import React, { ComponentType } from "react";
import classes from "./styles.module.scss";
import ProductCard from "../../components/ProductCard/product-card";
import CatalogSidebar from "../../components/CatalogSidebar/catalog-sidebar";
import productCardData from "../../data/product-card.json";
import kidsDressImg from "../../assets/images/dress.png";

interface ProductCardProps {
  id: number;
  image: React.ReactNode | any;
  name: string;
  price: number;
}

const CatalogProducts: ComponentType<ProductCardProps> = ({
  id,
  image,
  name,
  price,
}) => {
  const renderProductImage = (productImage: string) =>
    ({
      kidsDress: kidsDressImg,
    }[productImage]);
  return (
    <div className={classes.catalog__products}>
      <aside className={classes.catalog__sidebar__container}>
        <CatalogSidebar />
      </aside>
      <div className={classes.products__container}>
        {productCardData.map((e) => (
          <ProductCard
            id={e.id}
            image={renderProductImage(e.image)}
            name={e.name}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogProducts;
