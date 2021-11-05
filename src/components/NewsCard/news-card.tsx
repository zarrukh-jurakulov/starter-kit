import React, { ComponentType } from "react";
import classes from "./styles.module.scss";
import newsImage from "../../assets/images/Rectangle 2675.png";
import { NavLink as Link } from "react-router-dom";

interface CardDataProps {
  id: number;
  header: string;
  summary: string;
}

const NewsCard: ComponentType<CardDataProps> = ({ id, header, summary }) => {
  return (
    <div className={classes.news__card} key={id}>
      <div className={classes.image__container}>
        <Link to='/news-details'>
          <img src={newsImage} alt='' />
        </Link>
      </div>
      <div className={classes.card__content}>
        <div className={classes.card__header}>{header}</div>
        <div className={classes.card__summary}>{summary}</div>
      </div>
    </div>
  );
};

export default NewsCard;
