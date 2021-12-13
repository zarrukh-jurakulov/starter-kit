import newsDetailsCardData from "../../data/news-details.json";
import newsDetails from "../../assets/images/news-details.png";
import NewsDetailsCard from "../../components/NewsDetailsCard/news-details-card";
import NewsCard from "../../components/NewsCard/news-card";
import newsData from "../../data/news.json";
import { BellIcon, NextIcon, PrevIcon } from "../../assets/icons";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";
import { Box } from "@mui/system";

const NewsDetails = () => {
  const classes = useStyles();
  const renderNewsDetailsImage = (img: string) =>
    ({
      news__image: newsDetails,
    }[img]);

  return (
    <div className={classes.newsDetails}>
      <Box className={classes.header}>
        <BellIcon />
        <Typography variant='h3'>Новости</Typography>
      </Box>
      <div className={classes.newsDetailInfo}>
        {newsDetailsCardData.map((i) => (
          <NewsDetailsCard
            id={i.id}
            image={renderNewsDetailsImage(i.image)}
            header={i.header}
            summary={i.summary}
          />
        ))}
      </div>

      <div className={classes.newsCardContainer}>
        <Box className={classes.cardHeader}>
          <Typography variant='h3'>Другие новости</Typography>
          <Box className={classes.iconContainer}>
            <PrevIcon />
            <NextIcon />
          </Box>
        </Box>
        <div className={classes.someNews}>
          {newsData.map((i) => (
            <NewsCard id={i.id} header={i.header} summary={i.summary} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
