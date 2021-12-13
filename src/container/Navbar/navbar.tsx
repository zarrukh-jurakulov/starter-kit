import React from "react";
import { NavLink as Link } from "react-router-dom";
import {
  BuyIcon,
  CategoiesIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LogoIcon,
  SearchIcon,
  TelegramIcon,
} from "../../assets/icons";
import classes from "./styles.module.scss";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      {/* Top navbar */}
      {/* <Section> */}

      {/* </Section> */}
      <Container className={classes.nav__container}>
        <Link to='/'>Личный Кадинет</Link>
        <Link to='/'>Закладки</Link>
        <Link to='/'>Сравнение товаров</Link>
        <Link to='/'>Корзина</Link>
        <Link to='/'>Оплата и доставка</Link>
        <Link to='/'>Отзывы о магазине</Link>
      </Container>
      {/* Header */}
      <header className={classes.header__container}>
        <div
          className={classes.header__main__container}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "65%",
          }}>
          <Link to='/'>
            <LogoIcon />
          </Link>
          <div className={classes.search__container}>
            <input
              type='search'
              name='searchInput'
              className={classes.search__input}
              id='search'
            />
            <label htmlFor='search'>
              <SearchIcon stroke='black' />
            </label>
          </div>
          <div className={classes.connect}>
            <p className={classes.phone__number}>(90)978 17 71</p>
            <p className={classes.time__table}>Работаем с 9:00 до 18:00</p>
          </div>
          <div className={classes.social__sites}>
            <FacebookIcon />
            <InstagramIcon />
            <TelegramIcon />
          </div>
        </div>
        <div className={classes.favourites__and__buyes}>
          <Link to='/favourites'>
            <div className={classes.icon__container}>
              <HeartIcon />
            </div>
          </Link>
          <Link to='/bucket'>
            <div className={classes.icon__container}>
              <BuyIcon />
              <div className={classes.amount__prod__on__icon}>6</div>
            </div>
          </Link>
          <div className={classes.header__checkout__total}>
            <p>175 000 сум</p>
            <p>6 товаров</p>
          </div>
        </div>
      </header>
      {/* Menu navbar */}
      <div className={classes.menu__navbar}>
        <Link to='/catalog-products' className={classes.product__list}>
          <CategoiesIcon />
          Каталог Товаров
        </Link>
        <Link to='/news'>Новости</Link>
        <Link to='/'>Отзывы</Link>
        <Link to='/'>Все модели</Link>
        <Link to='/'>Производители</Link>
        <Link to='/'>Отзывы о магазине</Link>
      </div>
    </div>
  );
};

export default Navbar;
