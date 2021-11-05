import React from "react";
import {
  ClockIcon,
  FacebookFLetterIcon,
  InstagramILetterIcon,
  LocationIcon,
  LogoIcon,
  MessageIcon,
  PhoneIcon,
  TelegramTLetter,
} from "../../assets/icons";
import classes from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.main}>
          <div className={classes.logo}>
            <LogoIcon />
          </div>
          <div className={classes.additional}>
            <span>Дополнительно</span>
            <div>
              <p>Производители</p>
              <p>Карта сайта</p>
              <p>Контакты</p>
            </div>
          </div>
          <div className={classes.personal__cabinet}>
            <span>Личный кабинет</span>
            <div>
              <p>Личный кабинет</p>
              <p>История заказов</p>
            </div>
          </div>
          <div className={classes.social}>
            <p>Подпишитесь, чтобы не пропускать акции</p>
            <div className={classes.send__email}>
              <form action=''>
                <input type='email' name='' id='' placeholder='Email ...' />
                <button>Подписаться</button>
              </form>
            </div>
            <div className={classes.social__websites}>
              <div className={classes.icons}>
                <FacebookFLetterIcon />
                <InstagramILetterIcon />
                <TelegramTLetter />
              </div>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.contact__items}>
          <LocationIcon />
          <p>Яккасарайский р-он, Next</p>
        </div>
        <div className={classes.contact__items}>
          <PhoneIcon />
          <p>(90) 978 17 71</p>
        </div>
        <div className={classes.contact__items}>
          <ClockIcon />
          <p>с 9:00 до 18:00</p>
        </div>
        <div className={classes.contact__items}>
          <MessageIcon />
          <p>bonitokids@mail.ru</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
