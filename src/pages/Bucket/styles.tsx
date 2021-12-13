import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  bucket: {},
  bucket__card_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    maxWidth: "1400px",
    background: "#ffffff",
    boxShadow: "0px 6px 30px rgba(0, 60, 98, 0.1)",
    borderRadius: "30px",

    "&  form": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
      height: "600px",
      marginTop: "20px",
    },
  },

  service: {
    width: "590px",
  },

  service__type: {
    background: "#ffffff",
    boxShadow: "0px 6px 30px rgba(0, 60, 98, 0.1)",
    borderRadius: "30px",
    height: "100%",
    padding: "30px",
    marginTop: "20px",

    "&:first-child": {
      margin: 0,
    },
    "& > h5": {
      fontSize: "20px",
      fontWeight: 800,
    },

    "& > textarea": {
      width: "530px",
      height: "161px",
      padding: "10px",
      backgroundColor: "#f6f5f7",
      border: "none",
    },
  },

  select__type: {
    display: "flex",
    marginTop: "20px",

    "& > input": {
      width: "16px",
      height: "16px",
    },

    "& > p": {
      fontSize: "16px",
      marginLeft: "20px",
    },
  },

  user__info: {
    background: "#ffffff",
    boxShadow: "0px 6px 30px rgba(0, 60, 98, 0.1)",
    borderRadius: "30px",
    width: "590px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },

  leftRow: {
    " & > div:not(:last-child)": {
      marginBottom: "20px",
    },
  },
});
