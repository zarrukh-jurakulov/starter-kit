import React, { ComponentType } from "react";
import { LikeIcon, ShareIcon } from "../../assets/icons";
import classes from "./styles.module.scss";

interface NewsDetailsProps {
  id: number;
  image: any;
  header: string;
  summary: string;
}

const NewsDetailsCard: ComponentType<NewsDetailsProps> = ({
  id,
  image,
  header,
  summary,
}) => {
  return (
    <div className={classes.news__details__card} key={id}>
      <div className={classes.img__container}>
        <img src={image} alt='' />
      </div>
      <div className={classes.content}>
        <header>{header}</header>
        <summary>{summary}</summary>
        <div className={classes.icons}>
          <div className={classes.likes}>
            <div className={classes.icon__background}>
              <LikeIcon />
            </div>
            <p>Likes (6)</p>
          </div>
          <div className={classes.shares}>
            <div className={classes.icon__background}>
              <ShareIcon />
            </div>
            <p>Поделиться</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
