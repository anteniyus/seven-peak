const reducer = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_ACTIVE_MENU":
      return {
        ...state,
        activeItem: action.activeItem,
        hash: action.hash,
      };
    default:
      return state;
  }
};

export default reducer;
