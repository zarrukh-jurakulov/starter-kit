import { useState } from "react";
import classes from "./styles.module.scss";
import BucketBackground from "../../components/Bucket/BucketBackgroung/bucket-background";
import BucketCard from "../../components/Bucket/BucketCard/bucket-card";
import Grid from "@mui/material/Grid";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  TextareaAutosize,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

const Bucket = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  return (
    <div className={classes.bucket}>
      <div className={classes.bucket__card_container}>
        <BucketCard />
      </div>

      <Grid container spacing={2.5} style={{ marginTop: "20px", padding: 0 }}>
        <Grid item xs={6} className={classes.leftRow} style={{ padding: 0 }}>
          <Grid xs={12}>
            <div
              style={{
                background: " #FFFFFF",
                boxShadow: " 0px 6px 30px rgba(0, 60, 98, 0.1)",
                borderRadius: "30px",
                padding: "30px",
              }}>
              <FormControl component='fieldset'>
                <FormLabel
                  component='legend'
                  style={{ fontSize: "20px", fontWeight: 700 }}>
                  Способ доставки
                </FormLabel>
                <RadioGroup aria-label='Способ доставки'>
                  <FormControlLabel
                    value='delivery'
                    control={<Radio />}
                    label='Бесплатная доставка'
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Grid xs={12}>
            <div
              style={{
                background: " #FFFFFF",
                boxShadow: " 0px 6px 30px rgba(0, 60, 98, 0.1)",
                borderRadius: "30px",
                padding: "30px",
              }}>
              <FormControl component='fieldset'>
                <FormLabel
                  component='legend'
                  style={{ fontSize: "20px", fontWeight: 700 }}>
                  Способ оплаты
                </FormLabel>
                <RadioGroup aria-label='Способ оплаты'>
                  <FormControlLabel
                    value='afterDelivery'
                    control={<Radio />}
                    label='Оплата при доставке'
                  />
                  <FormControlLabel
                    value='online'
                    control={<Radio />}
                    label='Оплата payme, click'
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
          <Grid xs={12}>
            <div
              style={{
                background: " #FFFFFF",
                boxShadow: " 0px 6px 30px rgba(0, 60, 98, 0.1)",
                borderRadius: "30px",
                padding: "30px",
              }}>
              <FormControl component='fieldset'>
                <FormLabel
                  component='legend'
                  style={{ fontSize: "20px", fontWeight: 700 }}>
                  Комментарий
                </FormLabel>
                <TextareaAutosize
                  aria-label='minimum height'
                  minRows={9}
                  placeholder='Комментарий'
                  style={{
                    width: 530,
                    marginTop: "17px",
                    // padding: "16px",
                  }}
                />
              </FormControl>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <div
            className={classes.leftRow}
            style={{
              background: " #FFFFFF",
              boxShadow: " 0px 6px 30px rgba(0, 60, 98, 0.1)",
              borderRadius: "30px",
              padding: "30px",
            }}>
            <FormControl component='fieldset'>
              <FormLabel
                component='legend'
                style={{ fontSize: "20px", fontWeight: 700 }}>
                Ваш адрес
              </FormLabel>
              <TextField
                id='outlined-basic'
                label='Имя, Фамилия'
                variant='outlined'
                style={{
                  width: "530px",
                  marginTop: "20px",
                  height: "56px",
                  borderRadius: "15px",
                }}
              />
              <FormControl fullWidth style={{ marginTop: "20px" }}>
                <InputLabel id='demo-simple-select-label'>Город</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={age}
                  label='Age'
                  onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <TextField
                style={{ marginTop: "20px", width: "530px", height: "56px" }}
                id='outlined-basic'
                label='Адрес (ориентир)'
                variant='outlined'
              />
              <TextField
                style={{ marginTop: "20px" }}
                id='outlined-basic'
                label='Email...'
                variant='outlined'
              />
              <TextField
                style={{ marginTop: "20px" }}
                id='outlined-basic'
                label='Телефон'
                variant='outlined'
              />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography style={{ marginTop: "20px" }}>Итого:</Typography>
              <Typography style={{ marginTop: "20px", color: "#EE43B4" }}>
                540 000 сум
              </Typography>
            </Box>
            <Button
              style={{
                marginTop: "20px",
                width: "530px",
                height: "66px",
                backgroundColor: "#7733FE",
                borderRadius: "1000px",
                padding: 0,
              }}
              variant='contained'>
              Оформить заказ
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bucket;

/* 
<form action=''>
        <div className={classes.service}>
          <div className={classes.service__type}>
            <h5>Способ доставки</h5>
            <div className={classes.select__type}>
              <input type='radio' name='selectType' id='' />
              <p>Бесплатная доставка</p>
            </div>
          </div>
          <div className={classes.service__type}>
            <h5>Способ оплаты</h5>
            <div className={classes.select__type}>
              <input type='radio' name='selectType' id='' />
              <p>Оплата при доставке</p>
            </div>
            <div className={classes.select__type}>
              <input type='radio' name='selectType' id='' />
              <p>Оплата payme, click</p>
            </div>
          </div>
          <div className={classes.service__type}>
            <h5>Комментарий</h5>
            <textarea
              rows={4}
              className={classes.select__type}
              placeholder='Комментарий'></textarea>
          </div>
        </div>
        <div className={classes.user__info}>
          <h5 className={classes.header}>Ваш адрес</h5>
          <select name='' id=''>
            <option value=''>Город</option>
          </select>

          <input type='text' name='' id='' />
        </div>
      </form>*/
