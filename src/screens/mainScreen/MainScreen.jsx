import React from "react";
import { Switch, Route } from "react-router-dom";

import NavigationArea from "../../containers/navigationArea/NavigationArea";
// import HomeScreen from "../homeScreen/HomeScreen";
import Home from "../homeScreen/Home";
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

      <div className="row">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sport" component={SportsScreen} />
          <Route path="/culture" component={CultureScreen} />
          <Route path="/lifestyle" component={LifestyleScreen} />
          <Route path="/viewArticle" component={ArticleScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/allBookmarks" component={AllBookmarksScreen} />
        </Switch>
      </div>
    </>
  );
}

export default MainScreen;
