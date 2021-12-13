import React from "react";
import { NavLink as Link } from "react-router-dom";
import { BellIcon } from "../../assets/icons";
import NewsCard from "../../components/NewsCard/news-card";
import newsData from "../../data/news.json";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";

const News = () => {
  const classes = useStyles();
  return (
    <div className={classes.news}>
      <div className={classes.header}>
        <BellIcon />
        <Typography variant='h3'>Новости</Typography>
      </div>
      <div className={classes.newsContainer}>
        {newsData.map((e) => (
          <NewsCard id={e.id} header={e.header} summary={e.summary} />
        ))}
      </div>
    </div>
  );
};

export default News;
