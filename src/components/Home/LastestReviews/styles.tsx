import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  lastestReviews: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    width: "500px",
    height: "430px",
    borderRadius: "20px",
    paddingLeft: "52px",
    paddingRight: "127px",
    backgroundColor: "#f2f4ff",
  },
  profile: {
    paddingTop: "30px",
    width: "160px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatar: {
    width: "66px",
    height: "66px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    "&:first-child": {
      fontSize: "17px",
      fontWeight: 800,
    },

    "& > p": {
      paddingTop: "7px",
    },
  },
  headerContainer: {
    paddingLeft: "22px",
    fontWeight: 900,
    fontSize: "26px",
  },
  summaryContainer: {
    color: "#19063d80",
    fontWeight: 600,
    fontSize: "14px",
    paddingLeft: "22px",
    paddingTop: "30px",
  },
});
