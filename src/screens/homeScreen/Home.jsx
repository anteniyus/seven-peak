import React, { Component } from "react";
// import styles from "./Home.module.css";
import { getCategory } from "../../containers/category/service/CategoryService";
import Card from "../../containers/card/Card";
import { notEmptyArray } from "../../utility/Validator";
import CustomCategory from "../../containers/category/CustomCategory";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";

// const firstDiv = ["col-l-6", "col-m-6", "col-s-12", "col-mob-12"];
// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    getCategory("/search", {}).then((response) => {
      this.setState({
        items: [...response.data.response.results],
      });
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        {notEmptyArray(items) ? (
          <>
            <div className="col-l-12">
              <Card
                card={items[0]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-6", "col-m-6", "col-s-6"],
                }}
              />

              <Card
                card={items[1]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3", "col-s-6"],
                }}
              />

              <Card
                card={items[2]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3", "col-s-6"],
                }}
              />

              <Card
                card={items[3]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3", "col-s-3"],
                  onlyContent: true,
                }}
              />

              <Card
                card={items[4]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3", "col-s-3"],
                  onlyContent: true,
                }}
              />
            </div>

            <div className="col-l-12">
              <Card
                card={items[5]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3"],
                }}
              />

              <Card
                card={items[6]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3"],
                }}
              />

              <Card
                card={items[7]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3"],
                }}
              />

              <Card
                card={items[8]}
                styleConfig={{
                  autoHeight: true,
                  mainClass: ["col-l-3", "col-m-3"],
                }}
              />
            </div>

            <div className="col-l-12">
              <CustomCategory
                url={MenuItems.SPORTS.url}
                pageTitle={MenuItems.SPORTS.name}
                numOfItemsToShow={4}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
