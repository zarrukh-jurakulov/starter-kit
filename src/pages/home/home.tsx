import classes from "./styles.module.scss";
import { NavLink as Link } from "react-router-dom";
import HomeBanner from "../../components/Home/HomeBanner/home-banner";
import Categories from "../../components/Home/Categories/categories";
import { categories } from "../../data/categoriesData";
import miniBanner from "../../data/mini-banner-source.json";
import React, { useState } from "react";
import {
  DeliveryIcon,
  NextIcon,
  PrevIcon,
  ProfileIcon,
  ValentineIcon,
} from "../../assets/icons";
import Categorytypebtn from "../../components/Home/CategoryTypeBtn/category-type-btn";
import categoryTypeBtnData from "../../data/category-type-btn.json";
import ProductCard from "../../components/ProductCard/product-card";
import productCardData from "../../data/product-card.json";
import kidsDressImg from "../../assets/images/dress.png";
import lastestReviewsData from "../../data/lastest-reviews.json";
import LastestReviews from "../../components/Home/LastestReviews/lastest-reviews";
import newsData from "../../data/news.json";
import NewsCard from "../../components/NewsCard/news-card";
import Section from "../../components/Section/section";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStyles } from "./styles";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
const Home = () => {
  const classes = useStyles();
  const renderIcon = (iconName: string) =>
    ({
      delivery: <DeliveryIcon />,
      valentine: <ValentineIcon />,
    }[iconName]);

  const renderProductImage = (productImage: string) =>
    ({
      kidsDress: kidsDressImg,
    }[productImage]);

  const renderProfileImage = (avatarImg: string) =>
    ({
      avatar: <ProfileIcon />,
    }[avatarImg]);

  return (
    <div>
      <div className={classes.homeContent}>
        <div className={classes.homeBannerMain}>
          <div className={classes.mainBannerTypography}>
            <Typography variant='h3' className={classes.mainBannerHeader}>
              Коллекция детской одежды от <span>Bonito Kids</span>
            </Typography>
            <Button className={classes.mainBannerButton}>Подробнее</Button>
          </div>
        </div>
        <div className={classes.miniBannerContainer}>
          {miniBanner.map((item: any, idx: number) => (
            <HomeBanner
              id={idx}
              name={item.name}
              icon={renderIcon(item.icon)}
              styles={item.styles}
            />
          ))}
        </div>
      </div>

      <div className={classes.categoryContainer}>
        <div className={classes.header}>
          <Typography variant='h3'>Категории</Typography>
          <Box className={classes.iconContainer}>
            <PrevIcon />
            <NextIcon />
          </Box>
        </div>
        <div className={classes.categoryItems}>
          <Swiper
            spaceBetween={100}
            slidesPerView={6}
            navigation={{
              nextEl: ".next",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            {categories.map((e) => (
              <SwiperSlide>
                <Categories id={e.id} name={e.name} image={e.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={classes.categoryTypeBtnContainer}>
        {categoryTypeBtnData.map((item) => (
          <Categorytypebtn id={item.id} name={item.name} />
        ))}
      </div>
      <div className={classes.productCardContainer}>
        {productCardData.map((item: any, idx: number) => (
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
            image={renderProductImage(item.image)}
          />
        ))}
      </div>

      <div className={classes.seeAllBtnContainer}>
        <Link to='/catalog-products'>
          <Button className={classes.see__all__btn}>Смотреть все</Button>
        </Link>
      </div>
      <div className={classes.reviewsContainer}>
        <div className={classes.myreview}>
          <Typography variant='h3'>Последние отзывы</Typography>
          <Box className={classes.myreviewIcons}>
            <PrevIcon />
            <NextIcon />
          </Box>
        </div>
        <div className={classes.reviewsCardContainer}>
          <Swiper
            spaceBetween={100}
            slidesPerView={2}
            navigation={{
              nextEl: ".next",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            {lastestReviewsData.map((i) => (
              <SwiperSlide>
                <LastestReviews
                  header={i.header}
                  summary={i.summary}
                  profileImg={renderProfileImage(i.profile.avatar)}
                  profileName={i.profile.name}
                  profileDate={i.profile.date}
                  styles={i.styles}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* news */}
      <div className={classes.newsContainer}>
        <div className={classes.newsContainerHeader}>
          <Typography variant='h3'>Новости</Typography>
          <Link to='/news'>
            <Button>Все</Button>
          </Link>
        </div>
        <div className={classes.cardContainer}>
          {newsData.map((i) => (
            <NewsCard id={i.id} header={i.header} summary={i.summary} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
