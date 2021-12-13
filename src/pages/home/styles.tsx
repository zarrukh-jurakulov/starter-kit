import { makeStyles } from "@mui/styles";
import homeBannerMain from "../../assets/images/home_banner_main.png";

export const useStyles = makeStyles({
  homeContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: "450px",
  },

  homeBannerMain: {
    width: "750px",
    height: "270px",
    borderRadius: "50px",
    backgroundImage: `url(${homeBannerMain})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "90px 40px",
  },

  mainBannerTypography: {
    maxWidth: "325px",
  },

  mainBannerHeader: {
    color: "white",

    "& span": {
      color: "#7733fe",
    },
  },

  mainBannerButton: {
    backgroundColor: "#f23489",
    marginTop: "38px",
    width: "160px",
    height: "50px",
    fontSize: "20px",
    borderRadius: "50px",
    border: "none",
    color: "white",
    cursor: "pointer",
    textTransform: "capitalize",
  },

  miniBannerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "450px",
  },

  categoryContainer: {
    paddingTop: "86px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  iconContainer: {
    width: "90px",
    display: "flex",
    justifyContent: "space-between",
  },

  categoryItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "53px",
  },

  categoryTypeBtnContainer: {
    paddingTop: "135px",
    display: "flex",
    alignItems: "center",
    justifyContent: " space-between",
    width: "730px",
  },

  productCardContainer: {
    paddingTop: "40px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  seeAllBtnContainer: {
    paddingTop: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  see__all__btn: {
    backgroundColor: "#7733fe1a",
    width: "205px",
    height: "60px",
    borderRadius: "200px",
    fontWeight: 800,
    fontSize: "18px",
    border: "none",
    color: "#7733fe",
    cursor: "pointer",
    textTransform: "capitalize",
  },

  reviewsContainer: {},

  myreview: {
    paddingTop: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  myreviewIcons: {
    width: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  reviewsCardContainer: {
    paddingTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  newsContainer: {
    display: "flex",
    // align-items: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "column",
    paddingTop: "90px",
  },

  newsContainerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    "& h2": {
      fontWeight: 800,
    },

    " & > a > button": {
      backgroundColor: "#7733fe1a",
      width: "80px",
      height: "50px",
      border: "none",
      borderRadius: "200px",
      fontSize: "20px",
      color: "#7733fe",
      cursor: "pointer",
      textTransform: "capitalize",
    },
  },

  cardContainer: {
    paddingTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
