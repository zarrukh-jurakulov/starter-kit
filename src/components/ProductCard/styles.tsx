import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  product__card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    objectFit: "cover",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    marginTop: "40px",
  },
  imgContainer: {
    width: "290px",
    height: "290px",
    objectFit: "cover",
    position: "relative",
    borderRadius: "20px",

    "& img": {
      borderRadius: "20px",
    },
    "&:hover": {
      background: "url(.png)",
    },
  },
  heartIcon: {
    position: "absolute",
    top: 23,
    right: 23,
    cursor: "pointer",
  },
  productName: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#0f1530",
    paddingRight: "25px",
  },

  price__container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    color: "red",
  },
  price: {
    color: "#ee43b4",
    fontWeight: 800,
    fontSize: "22px",
  },

  icon__container: {
    backgroundColor: "#7733fe",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
