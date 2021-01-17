import React, { Component } from "react";
// import styles from "./Home.module.css";
import { getCategory } from "../../containers/category/service/CategoryService";
import Card from "../../containers/card/Card";
import { notEmptyArray } from "../../utility/Validator";
import CustomCategory from "../../containers/category/CustomCategory";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Loading from "../../components/loading/Loading";
import Header from "../../containers/header/Header";
import { OrderBy } from "../../enums/OrderBy";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      orderBy: OrderBy.NEWEST.value,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { orderBy } = this.state;

    getCategory("/search", { "order-by": orderBy }).then((response) => {
      this.setState({
        items: [...response.data.response.results],
        loading: false,
      });
    });
  };

  refreshByOrdering = (order) => {
    this.setState({ loading: true, items: [], orderBy: order }, () => {
      this.fetchData();
    });
  };

  createUI = () => {
    const { items, orderBy } = this.state;

    return notEmptyArray(items) ? (
      <>
        <div className="col-l-12">
          <Card
            card={items[0]}
            styleConfig={{
              mainClass: [
                "col-l-6",
                "col-m-6",
                "col-s-6",
                "col-t-6",
                "col-mob-12",
              ],
              height: "630px",
            }}
          />

          <Card
            card={items[1]}
            styleConfig={{
              mainClass: [
                "col-l-3",
                "col-m-3",
                "col-s-6",
                "col-t-6",
                "col-mob-12",
              ],
              height: "400px",
            }}
          />

          <Card
            card={items[2]}
            styleConfig={{
              mainClass: [
                "col-l-3",
                "col-m-3",
                "col-s-6",
                "col-t-6",
                "col-mob-12",
              ],
              height: "400px",
            }}
          />

          <Card
            card={items[3]}
            styleConfig={{
              mainClass: [
                "col-l-3",
                "col-m-3",
                "col-s-3",
                "col-t-6",
                "col-mob-12",
              ],
              onlyContent: true,
              height: "200px",
            }}
          />

          <Card
            card={items[4]}
            styleConfig={{
              mainClass: [
                "col-l-3",
                "col-m-3",
                "col-s-3",
                "col-t-6",
                "col-mob-12",
              ],
              onlyContent: true,
              height: "200px",
            }}
          />
        </div>

        <div className="col-l-12">
          <Card card={items[5]} />

          <Card card={items[6]} />

          <Card card={items[7]} />

          <Card card={items[8]} />
        </div>

        <div className="col-l-12">
          <CustomCategory
            url={MenuItems.SPORTS.url}
            pageTitle={MenuItems.SPORTS.name}
            numOfItemsToShow={4}
            params={{ "order-by": orderBy }}
          />
        </div>
      </>
    ) : (
      ""
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Header
          pageTitle="Top Stories"
          refreshByOrdering={this.refreshByOrdering}
        />
        {loading ? <Loading /> : this.createUI()}
      </div>
    );
  }
}

export default Home;
