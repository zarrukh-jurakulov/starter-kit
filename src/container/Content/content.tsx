import React from "react";
import classes from "./styles.module.scss";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home/home";
import PersonalCabinet from "../../pages/PersonalCabinet/personal-cabinet";
import CatalogProducts from "../../pages/CatalogProducts/catalog-products";
import News from "../../pages/News/news";
import NewsDetails from "../../pages/NewsDetails/news-details";
import Favourites from "../../pages/Favourites/favourites";

const Content = () => {
  return (
    <div className={classes.content}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/personal-cabinet' component={PersonalCabinet} />
        <Route path='/catalog-products' component={CatalogProducts} />
        <Route path='/news' component={News} />
        <Route path='/news-details' component={NewsDetails} />
        <Route path='/favourites' component={Favourites} />
      </Switch>
    </div>
  );
};

export default Content;
