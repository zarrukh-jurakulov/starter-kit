import React from "react";
import { NavLink as Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { BellIcon } from "../../assets/icons";
import NewsCard from "../../components/NewsCard/news-card";
import newsData from "../../data/news.json";

const News = () => {
  return (
    <div className={classes.news}>
      <div className={classes.header}>
        <BellIcon />
        <h4>Новости</h4>
      </div>
      <div className={classes.news__container}>
        {newsData.map((e) => (
          <NewsCard id={e.id} header={e.header} summary={e.summary} />
        ))}
      </div>
    </div>
  );
};

export default News;
