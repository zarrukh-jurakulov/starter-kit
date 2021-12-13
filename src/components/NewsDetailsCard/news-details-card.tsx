import { ComponentType } from "react";
import { LikeIcon, ShareIcon } from "../../assets/icons";
import { useStyles } from "./styles";
import { Box } from "@mui/system";
import { CardMedia, Container, Typography } from "@mui/material";

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
  const classes = useStyles();
  return (
    <Box className={classes.newsDetailsCard} key={id}>
      <CardMedia
        component='img'
        alt='product_image'
        image={image}
        className={classes.imgContainer}
      />

      <div className={classes.content}>
        <Typography variant='h3' className={classes.header}>
          {header}
        </Typography>
        <Container sx={{ marginTop: "30px" }} />
        <Typography variant='h6' className={classes.summary}>
          {summary}
        </Typography>
        <div className={classes.icons}>
          <div className={classes.likes}>
            <div className={classes.iconBackground}>
              <LikeIcon />
            </div>
            <Typography variant='h6' className={classes.iconContent}>
              Likes (6)
            </Typography>
          </div>
          <div className={classes.shares}>
            <div className={classes.iconBackground}>
              <ShareIcon />
            </div>
            <Typography variant='h6' className={classes.iconContent}>
              Поделиться
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default NewsDetailsCard;
