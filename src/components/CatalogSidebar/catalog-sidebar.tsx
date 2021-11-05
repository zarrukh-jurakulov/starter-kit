import React, { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropDownLine } from "react-icons/ri";
import classes from "./styles.module.scss";

const CatalogSidebar = () => {
  const [showallModel, setShowAllModel] = useState<boolean>(false);
  const [forGirls, setForGirls] = useState<boolean>(false);
  const [forToddlers, setForToddlers] = useState<boolean>(false);
  const [forBoys, setForBoys] = useState<boolean>(false);
  const [forTeenager, setForTeenager] = useState<boolean>(false);

  return (
    <aside className={classes.catalog__sidebar}>
      {/* Dropdown for all Model */}
      <div className={classes.dropdown__container}>
        <button
          className={classes.dropdown__header}
          onClick={() => setShowAllModel(!showallModel)}>
          Все модели{" "}
          {showallModel ? <RiArrowDropDownLine /> : <RiArrowDropLeftLine />}
        </button>
        {showallModel && (
          <div className={classes.menu__items}>
            <p>Футболки</p>
            <p>Платья</p>
            <p>Джемпер</p>
            <p>Наски</p>
            <p>Комбинезоны</p>
            <p>Обувь</p>
          </div>
        )}
      </div>
      {/* Dropdown For Grills dress */}
      <div className={classes.dropdown__container}>
        <button
          className={classes.dropdown__header}
          onClick={() => setForGirls(!forGirls)}>
          Девочкам{" "}
          {forGirls ? <RiArrowDropDownLine /> : <RiArrowDropLeftLine />}
        </button>
        {forGirls && (
          <div className={classes.menu__items}>
            <p>Футболки</p>
            <p>Платья</p>
            <p>Джемпер</p>
            <p>Наски</p>
            <p>Комбинезоны</p>
            <p>Обувь</p>
          </div>
        )}
      </div>
      {/* Dropdown for Toddlers dress */}
      <div className={classes.dropdown__container}>
        <button
          className={classes.dropdown__header}
          onClick={() => setForToddlers(!forToddlers)}>
          Малышам{" "}
          {forToddlers ? <RiArrowDropDownLine /> : <RiArrowDropLeftLine />}
        </button>
        {forToddlers && (
          <div className={classes.menu__items}>
            <p>Футболки</p>
            <p>Платья</p>
            <p>Джемпер</p>
            <p>Наски</p>
            <p>Комбинезоны</p>
            <p>Обувь</p>
          </div>
        )}
      </div>
      {/* Dropdown For Boys dress */}
      <div className={classes.dropdown__container}>
        <button
          className={classes.dropdown__header}
          onClick={() => setForBoys(!forBoys)}>
          Мальчикам{" "}
          {forBoys ? <RiArrowDropDownLine /> : <RiArrowDropLeftLine />}
        </button>
        {forBoys && (
          <div className={classes.menu__items}>
            <p>Футболки</p>
            <p>Платья</p>
            <p>Джемпер</p>
            <p>Наски</p>
            <p>Комбинезоны</p>
            <p>Обувь</p>
          </div>
        )}
      </div>
      {/* Dropdown for  Teenager drees*/}
      <div className={classes.dropdown__container}>
        <button
          className={classes.dropdown__header}
          onClick={() => setForTeenager(!forTeenager)}>
          Подросткам{" "}
          {forTeenager ? <RiArrowDropDownLine /> : <RiArrowDropLeftLine />}
        </button>
        {forTeenager && (
          <div className={classes.menu__items}>
            <p>Футболки</p>
            <p>Платья</p>
            <p>Джемпер</p>
            <p>Наски</p>
            <p>Комбинезоны</p>
            <p>Обувь</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CatalogSidebar;
