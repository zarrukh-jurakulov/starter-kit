import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  homeBannerMini: {
    width: "387px",
    // height: "135px",
    backgroundColor: "#e6a10a",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "6px 20px",
    textAlign: "center",

    "& p": {
      fontSize: "24px",
      fontWeight: 800,
      color: "white",
    },
  },

  deliveryEnterIcon: {
    marginBottom: "52px",
  },
});
