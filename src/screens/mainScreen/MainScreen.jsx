import React from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./MainScreen.module.css";

import NavigationArea from "../../containers/navigationArea/NavigationArea";
import HomeScreen from "../homeScreen/HomeScreen";
import SportsScreen from "../sportsScreen/SportsScreen";
import CultureScreen from "../cultureScreen/CultureScreen";
import LifestyleScreen from "../lifestyleScreen/LifestyleScreen";
import ArticleScreen from "../articleScreen/ArticleScreen";
import SearchScreen from "../searchScreen/SearchScreen";
import AllBookmarksScreen from "../allBookmarksScreen/AllBookmarksScreen";

function MainScreen() {
  return (
    <>
      <NavigationArea />

      <div className={styles.row}>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/sports" component={SportsScreen} />
          <Route path="/cultures" component={CultureScreen} />
          <Route path="/lifestyles" component={LifestyleScreen} />
          <Route path="/viewArticle" component={ArticleScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/allBookmarks" component={AllBookmarksScreen} />
        </Switch>
      </div>
    </>
  );
}

export default MainScreen;
