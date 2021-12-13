import { useStyles } from "./styles";

const Categories = ({ id, name, image }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.categoryItem} key={id}>
      <div className={classes.categoryIcon}>{image}</div>
      <p>{name}</p>
    </div>
  );
};

export default Categories;
