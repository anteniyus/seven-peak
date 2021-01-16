import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";

import styles from "./Header.module.css";

import CustomButton from "../../components/customButton/CustomButton";
import CustomDropdown from "../../components/customDropdown/CustomDropdown";

import { GetAllOrderBy } from "../../enums/OrderBy";

function Header(props) {
  const { pageTitle, refreshByOrdering } = props;

  const options = GetAllOrderBy();

  return (
    <>
      <div className={styles.header}>
        <div className={["col-l-4", "col-mob-12"].join(" ")}>
          <div className={styles.title}>
            <h1>{pageTitle}</h1>
          </div>
        </div>

        <div className={["col-l-2", "col-mob-12", styles.right].join(" ")}>
          <CustomDropdown options={options} onChange={refreshByOrdering} />
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
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  refreshByOrdering: PropTypes.func,
};

export default Header;
