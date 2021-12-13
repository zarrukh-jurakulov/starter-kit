import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  newsDetailsCard: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },

  imgContainer: {
    width: "590px",
    height: "460px",
  },

  content: {
    marginLeft: "80px",
  },

  header: {
    fontSize: "30px",
    fontWeight: 800,
    paddingRight: "50px",
  },

  summary: {
    fontSize: "20px",
    fontWeight: 700,
    marginTop: "30px",
    color: "#0f153080",
  },

  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: "30px",

    padding: 0,
  },
  iconContent: {
    fontSize: "16px",
    color: "#0f15304d",
    fontWeight: 700,
    marginLeft: "12px",
  },

  likes: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "20px",
  },

  iconBackground: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 6px 20px rgba(0, 60, 98, 0.1)",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  shares: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "20px",
  },
});
