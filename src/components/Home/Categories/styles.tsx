import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  categoryItem: {
    width: "185px",
    height: "185px",
    backgroundColor: "#f2f4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: "20px",
    transition: "0.3s ease-in-out",

    "&:hover": {
      backgroundColor: "#19063d",
      color: "white",
      boxShadow: "0px 6px 20px rgba(0, 60, 98, 0.1)",
      transform: "scale(1.1)",
    },

    "& > p": {
      padding: "0px 58px",
      fontSize: "20px",
      fontWeight: 700,
    },
  },

  categoryIcon: {
    padding: "35px 74px",
  },
});
