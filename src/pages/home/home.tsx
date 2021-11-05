import classes from "./styles.module.scss";
import { NavLink as Link } from "react-router-dom";
import HomeBanner from "../../components/HomePage/HomeBanner/home-banner";
import Categories from "../../components/HomePage/Categories/categories";
import { categories } from "../../data/categoriesData";
import miniBanner from "../../data/mini-banner-source.json";
import {
  DeliveryIcon,
  NextIcon,
  PrevIcon,
  ProfileIcon,
  ValentineIcon,
} from "../../assets/icons";
import Categorytypebtn from "../../components/HomePage/CategoryTypeBtn/category-type-btn";
import categoryTypeBtnData from "../../data/category-type-btn.json";
import ProductCard from "../../components/ProductCard/product-card";
import productCardData from "../../data/product-card.json";
import kidsDressImg from "../../assets/images/dress.png";
import lastestReviewsData from "../../data/lastest-reviews.json";
import LastestReviews from "../../components/HomePage/LastestReviews/lastest-reviews";
import newsData from "../../data/news.json";
import NewsCard from "../../components/NewsCard/news-card";

const Home = () => {
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
      <div className={classes.home__content}>
        <div className={classes.home__banner__main}>
          <div className={classes.main__banner__typography}>
            <h2 className={classes.main__banner__header}>
              Коллекция детской одежды от <span>Bonito Kids</span>
            </h2>
            <button className={classes.main__banner__button}>Подробнее</button>
          </div>
        </div>
        <div className={classes.mini__banner__container}>
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

      <div className={classes.category__container}>
        <h3>Категории</h3>
        <div className={classes.category__items}>
          {categories.map((e) => (
            <Categories id={e.id} name={e.name} image={e.image} />
          ))}
        </div>
      </div>
      <div className={classes.category__type_btn__container}>
        {categoryTypeBtnData.map((item) => (
          <Categorytypebtn id={item.id} name={item.name} />
        ))}
      </div>
      <div className={classes.product__card__container}>
        {productCardData.map((item: any, idx: number) => (
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
            image={renderProductImage(item.image)}
          />
        ))}
      </div>
      <div className={classes.see__all__btn__container}>
        <Link to='/catalog-products'>
          <button className={classes.see__all__btn}>Смотреть все</button>
        </Link>
      </div>
      <div className={classes.reviews__container}>
        <div className={classes.myreview}>
          <h2>Последние отзывы</h2>
          <div className={classes.myreview_icons}>
            <PrevIcon />
            <NextIcon />
          </div>
        </div>
        <div className={classes.reviews__card__container}>
          {lastestReviewsData.map((i) => (
            <LastestReviews
              header={i.header}
              summary={i.summary}
              profileImg={renderProfileImage(i.profile.avatar)}
              profileName={i.profile.name}
              profileDate={i.profile.date}
              styles={i.styles}
            />
          ))}
        </div>
      </div>
      {/* news */}
      <div className={classes.news__container}>
        <div className={classes.news__container__header}>
          <h2>Новости</h2>
          <Link to='/news'>
            <button>Все</button>
          </Link>
        </div>
        <div className={classes.card__container}>
          {newsData.map((i) => (
            <NewsCard id={i.id} header={i.header} summary={i.summary} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
