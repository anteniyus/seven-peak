import { connect } from "react-redux";

export default function connectWrapper(WrappedComponent) {
  function mapStateToProps(state) {
    return {
      activeMenu: state,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      toggleActiveMenu: (activeItem, hash) =>
        dispatch({
          type: "TOGGLE_ACTIVE_MENU",
          activeItem,
          hash,
        }),
    };
  }

  return connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true,
  })(WrappedComponent);
}
