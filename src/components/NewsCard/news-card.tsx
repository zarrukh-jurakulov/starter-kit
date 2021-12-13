import React, { ComponentType, useState } from "react";
import { useStyles } from "./styles";
import newsImage from "../../assets/images/Rectangle 2675.png";
import { NavLink as Link } from "react-router-dom";
import { Card, CardMedia, Container, Typography } from "@mui/material";

interface CardDataProps {
  id: number;
  header: string;
  summary: string;
}

const NewsCard: ComponentType<CardDataProps> = (props) => {
  const { id, header, summary } = props;
  const classes = useStyles();
  const [summaryDetails, setSummaryDetails] = useState<boolean>(false);

  return (
    <Card
      sx={{ maxWidth: 390, boxShadow: 0 }}
      className={classes.newsCard}
      key={id}>
      <Link to='/news-details'>
        <CardMedia
          component='img'
          sx={{ maxWidth: 390, maxHeight: 390 }}
          image={newsImage}
        />
      </Link>
      <Container className={classes.cardContent}>
        <Typography className={classes.cardHeader}>{header}</Typography>
        <Typography className={classes.cardSummary}>
          {summary.slice(0, 130)}
          {summary.length > 130 ? (
            <p onClick={() => setSummaryDetails(!summaryDetails)}>Еще...</p>
          ) : (
            ""
          )}
          {summaryDetails ? (
            <div>{summary.slice(131, summary.length - 1)}</div>
          ) : (
            ""
          )}
        </Typography>
      </Container>
    </Card>
  );
};

export default NewsCard;
