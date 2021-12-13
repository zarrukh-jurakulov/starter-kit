import { Button } from "@mui/material";
import { ComponentType } from "react";
import { useStyles } from "./styles";

interface CategoryTypeProps {
  id: number;
  name: string;
}
const Categorytypebtn: ComponentType<CategoryTypeProps> = ({ id, name }) => {
  const classes = useStyles();
  return (
    <div key={id}>
      <Button
        variant='outlined'
        color='info'
        className={classes.category__type_btn}>
        {name}
      </Button>
    </div>
  );
};

export default Categorytypebtn;
