import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  product__details: {
    "& > hr": {
      position: "absolute",
      width: "99.9%",
      right: "0%",
      left: "0%",
      top: "125",
      marginTop: "50px",
      color: "#a19ab033",
    },
  },

  card__container: {
    marginTop: "25px",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    // background: #f1f1f1,
    margin: "100px auto 0",
    WordBreak: " break-all",
  },

  blocTabs: {
    display: "flex",
  },

  tabs: {
    padding: "15px",
    textAlign: "center",
    background: "white",
    cursor: "pointer",
    boxSizing: "content-box",
    position: "relative",
    outline: "none",
    fontSize: "18px",
    fontWeight: 700,
    color: "#0f153080",
  },

  activeTabs: {
    background: "white",
  },
});
