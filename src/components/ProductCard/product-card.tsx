import React, { useState, ComponentType } from "react";
import { BuyIcon, HeartIcon, HeartPinkIcon } from "../../assets/icons";
import { NavLink as Link } from "react-router-dom";
import { Card, CardMedia, Container, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { Box } from "@mui/system";

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
  const classes = useStyles();
  return (
    <Card
      className={classes.product__card}
      sx={{ maxWidth: 285, boxShadow: 0 }}
      key={id}>
      <div className={classes.imgContainer}>
        <Link to='/product-details'>
          <CardMedia
            component='img'
            alt='product_image'
            width='285'
            height='285'
            image={image}
          />
        </Link>
        <div onClick={() => setIsFavourite((isFavourite) => !isFavourite)}>
          {isFavourite ? (
            <HeartPinkIcon className={classes.heartIcon} />
          ) : (
            <HeartIcon className={classes.heartIcon} />
          )}
        </div>
      </div>
      <Typography className={classes.productName}>{name}</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography variant='body2' className={classes.price}>
          {price} sum
        </Typography>
        <div className={classes.icon__container}>
          <BuyIcon fill='white' />
        </div>
      </Box>
    </Card>
  );
};

export default ProductCard;
