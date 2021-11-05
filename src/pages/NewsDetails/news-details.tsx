import React from "react";
import classes from "./styles.module.scss";
import newsDetailsCardData from "../../data/news-details.json";
import newsDetails from "../../assets/images/news-details.png";
import NewsDetailsCard from "../../components/NewsDetailsCard/news-details-card";
import NewsCard from "../../components/NewsCard/news-card";
import newsData from "../../data/news.json";
import { BellIcon, NextIcon, PrevIcon } from "../../assets/icons";

const NewsDetails = () => {
  const renderNewsDetailsImage = (img: string) =>
    ({
      news__image: newsDetails,
    }[img]);

  return (
    <div className={classes.news__details}>
      <div className={classes.header}>
        <BellIcon />
        <h4>Новости</h4>
      </div>
      <div className={classes.news__detail__info}>
        {newsDetailsCardData.map((i) => (
          <NewsDetailsCard
            id={i.id}
            image={renderNewsDetailsImage(i.image)}
            header={i.header}
            summary={i.summary}
          />
        ))}
      </div>

      <div className={classes.news__card__container}>
        <div className={classes.header}>
          <h4>Другие новости</h4>
          <div className={classes.icon__container}>
            <PrevIcon />
            <NextIcon />
          </div>
        </div>
        <div className={classes.some__news}>
          {newsData.map((i) => (
            <NewsCard id={i.id} header={i.header} summary={i.summary} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
