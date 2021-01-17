const toggleActiveMenu = (activeItem, hash) => (dispatch) =>
  dispatch({ type: "TOGGLE_ACTIVE_MENU", activeItem, hash });
export default toggleActiveMenu;
