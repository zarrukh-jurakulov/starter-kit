import React, { ComponentType } from "react";
import { NextEnterIcon } from "../../../assets/icons";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "./styles";

interface Props {
  id: number;
  name: string;
  icon: React.ReactNode;
  styles: { bgColor?: string; bgGradient?: any; fontSize: string };
}
const HomeBanner: ComponentType<Props> = (props) => {
  const { id, name, icon, styles } = props;
  const classes = useStyles();

  return (
    <Box
      key={id}
      className={classes.homeBannerMini}
      style={{
        backgroundColor: styles.bgColor,
        background: `linear-gradient(to right, ${styles.bgGradient?.primary} 0%, ${styles.bgGradient?.secondary} 100%)`,
      }}>
      {icon}
      <Typography style={{ fontSize: styles.fontSize }}>{name}</Typography>
      <div className={classes.deliveryEnterIcon}>
        <NextEnterIcon />
      </div>
    </Box>
  );
};

export default HomeBanner;
