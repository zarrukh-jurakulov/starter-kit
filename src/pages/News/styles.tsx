import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  news: {},
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",

    "& > h3": {
      fontSize: "26px",
      fontWeight: 700,
      marginLeft: "16px",
    },
  },

  newsContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto",
    marginTop: "43px",
  },
});
