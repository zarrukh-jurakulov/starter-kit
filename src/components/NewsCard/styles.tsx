import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  newsCard: {
    width: "390px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRadius: "20px",
    "& img": {
      borderRadius: "20px",
      width: "100%",
      height: "300px",
    },
  },

  cardContent: {
    padding: "10px",
  },

  cardHeader: {
    color: "#0f1530",
    fontSize: "20px",
    fontWeight: 700,
  },

  cardSummary: {
    fontWeight: 700,
    fontSize: "16px",
    color: "rgba(15, 21, 48, 0.5)",
  },
});
