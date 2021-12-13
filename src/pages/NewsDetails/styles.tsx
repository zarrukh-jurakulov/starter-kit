import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  newsDetails: {},

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

  newsDetailInfo: {
    marginTop: "43px",
  },

  newsCardContainer: {
    marginTop: "43px",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "120px",

    "& > h3": {
      fontSize: "30px",
      fontWeight: 700,
    },
  },

  iconContainer: {
    width: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  someNews: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
