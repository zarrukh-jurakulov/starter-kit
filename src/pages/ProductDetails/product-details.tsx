import React, { useState } from "react";
// import classes from "./styles.module.scss";
import productDetailsData from "../../data/product-detail.json";
import ProductDetail from "../../components/ProductDetails/product-details";
import "./styles.scss";
import { Table, TableCell, TableRow } from "@mui/material";
import ProductInfoTab from "../../components/ProductInfoTab/product-info-tab";

const ProductDetails = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  const breadCrumpArr = [
    "Девочкам",
    "Комплекты",
    "Комплект двойка для детей (5-8 лет)",
  ];
  return (
    <div className={"product__details"}>
      <div className={"breadcrump"}>
        {breadCrumpArr.map((e) => e).join(" > ")}
      </div>
      <div className={"card__container"}>
        {productDetailsData.map((i) => (
          <ProductDetail
            id={i.id}
            header={i.header}
            price={i.price}
            summary={i.summary}
          />
        ))}
      </div>
      <hr />
      <div style={{ marginTop: "40px" }}>
        <ProductInfoTab />
      </div>
      {/* <div className='container'>
        <div className='bloc-tabs'>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            ОПИСАНИЕ
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>
            ХАРАКТЕРИСТИКИ
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>
            ОТЗЫВОВ (0)
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}>
            ТАБЛИЦА РАЗМЕРОВ
          </button>
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }>
            <div style={{ width: "700px", fontSize: "18px" }}>
              Стильные комплекты для маленьких стиляг с красивыми принтами.
              Комплекты мягкие, удобно носить. Одежды от Bonito Kids украсят
              осенние дни ощущениями комфорта и легкости. Bonito Kids -
              Одевайтесь вместе с нами!
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }>
            <Table style={{ border: "1px solid #E3E1E7", width: "1200px" }}>
              <TableRow>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Артикул:
                </TableCell>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  BK1483
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Пол:
                </TableCell>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Мальчик
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Состав:
                </TableCell>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Материал мягкий, 100%хлопок, средняя плотность.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Сезон:
                </TableCell>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Всесезонный.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Коллекция:
                </TableCell>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Bonito Kids
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Размер:
                </TableCell>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  3 - 4 - 5 - 6 - 7 лет.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  Рост:
                </TableCell>
                <TableCell style={{ border: "1px solid #E3E1E7" }}>
                  98 - 104 - 110 - 116 - 122 см.
                </TableCell>
              </TableRow>
            </Table>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }>
            <h2>ОТЗЫВОВ (0)</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }>
            <h2>ТАБЛИЦА РАЗМЕРОВ</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
