import classes from "./styles.module.scss";
import { DeleteIcon, MinusIcon, PlusIcon } from "../../../assets/icons";
import dressImg from "../../../assets/images/dress.png";

const BucketCard = () => {
  return (
    <div className={classes.bucket__card}>
      <div className={classes.first__column}>
        <input type='radio' name='' id='' />
        <img src={dressImg} alt='' />
        <div className={classes.header__price}>
          <p className={classes.header}>Платье для девочек (2-5 года)</p>
          <p className={classes.price}>180 000 сум</p>
        </div>
      </div>
      <div className={classes.second__column}>
        <select name='' id='' className={classes.select__size}>
          <option value=''>1 год</option>
          <option value=''>9 мес.</option>
          <option value=''>6 мес.</option>
          <option value=''>3 мес.</option>
        </select>
        <div className={classes.amount}>
          <MinusIcon />
          <p>1</p>
          <PlusIcon />
        </div>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
};

export default BucketCard;
