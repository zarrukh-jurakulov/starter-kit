import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  category__type_btn: {
    backgroundColor: "#f2f4ff",
    borderRadius: "100px",
    color: "#0f1530",
    height: "52px",
    border: "none",
    padding: "0px 20px",
    fontSize: "16px",
    cursor: "pointer",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#19063d",
      color: "white",
    },
  },
});
