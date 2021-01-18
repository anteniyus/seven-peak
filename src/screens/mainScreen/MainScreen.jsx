import React from "react";
import { Switch, Route } from "react-router-dom";

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

      <div className="row">
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/sport" component={SportsScreen} />
          <Route path="/culture" component={CultureScreen} />
          <Route path="/lifeandstyle" component={LifestyleScreen} />
          <Route path="/viewArticle" component={ArticleScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/allBookmarks" component={AllBookmarksScreen} />
        </Switch>
      </div>
    </>
  );
}

export default MainScreen;
