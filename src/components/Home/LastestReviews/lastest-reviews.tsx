import React, { ComponentType } from "react";
import { DoubleQuoteIcon } from "../../../assets/icons";
import classes from "./styles.module.scss";
import { useStyles } from "./styles";

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
  const classes = useStyles();
  return (
    <div className={classes.lastestReviews}>
      <div>
        <DoubleQuoteIcon />
      </div>
      <div className={classes.headerContainer}>{header}</div>
      <div className={classes.summaryContainer}>{summary}</div>
      <div className={classes.profile}>
        <div className={classes.avatar}>{profileImg}</div>
        <div className={classes.userInfo}>
          <span>{profileName}</span>
          <p>{profileDate}</p>
        </div>
      </div>
    </div>
  );
};

export default LastestReviews;
