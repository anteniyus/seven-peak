import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";

import styles from "./Header.module.css";

import CustomButton from "../../components/customButton/CustomButton";
import CustomDropdown from "../../components/customDropdown/CustomDropdown";

import { GetAllOrderBy, OrderBy } from "../../enums/OrderBy";
import { isFunction } from "../../utility/Validator";

function Header(props) {
  const { pageTitle, refreshByOrdering, defaultOrderBy } = props;

  const options = GetAllOrderBy();

  const [orderBy, setOrderBy] = useState(defaultOrderBy || 0);

  function changeHandler(selectedValue) {
    setOrderBy(selectedValue);
    if (isFunction(refreshByOrdering)) refreshByOrdering(selectedValue);
  }

  return (
    <>
      <div className={styles.header}>
        <div className={["col-l-4", "col-mob-12"].join(" ")}>
          <div className={styles.title}>
            <h1 className={styles.h1}>{pageTitle}</h1>
          </div>
        </div>

        <div className={["col-l-2", "col-mob-12", styles.right].join(" ")}>
          <CustomDropdown
            options={options}
            value={orderBy}
            onChange={(event) => changeHandler(event.target.value)}
          />
        </div>

        <div className={["col-l-4", "col-mob-12", styles.right].join(" ")}>
          <Link to="/allBookmarks">
            <CustomButton
              title="VIEW BOOKMARK"
              iconComponent={<BsFillBookmarkFill />}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

Header.defaultProps = {
  refreshByOrdering: () => {},
  defaultOrderBy: OrderBy.NEWEST.value,
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  refreshByOrdering: PropTypes.func,
  defaultOrderBy: PropTypes.string,
};

export default Header;
