import React, { ComponentType } from "react";
import { DoubleQuoteIcon } from "../../../assets/icons";
import classes from "./styles.module.scss";

interface LastestReviewsProps {
  header: string;
  summary: string;
  profileImg: any;
  profileName: string;
  profileDate: string;
  styles: any;
}

const LastestReviews: ComponentType<LastestReviewsProps> = ({
  header,
  summary,
  profileImg,
  profileName,
  profileDate,
  styles,
}) => {
  return (
    <div
      className={classes.lastest__reviews}
      style={{ backgroundColor: styles.bgColor }}>
      <div className={classes.icon__container}>
        <DoubleQuoteIcon />
      </div>
      <div
        className={classes.header__container}
        style={{ color: styles.color }}>
        {header}
      </div>
      <div
        className={classes.summary__container}
        style={{ color: styles.summaryColor }}>
        {summary}
      </div>
      <div className={classes.profile}>
        <div className={classes.avatar}>{profileImg}</div>
        <div
          className={classes.user__info}
          style={{ color: styles.summaryColor }}>
          <span>{profileName}</span>
          <p>{profileDate}</p>
        </div>
      </div>
    </div>
  );
};

export default LastestReviews;
