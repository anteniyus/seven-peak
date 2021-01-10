const MenuItems = {
  HOME: { name: "NEWS TODAY", color: "#388e3c", url: "/" },
  SPORTS: { name: "SPORTS", color: "#f50057", url: "/sports" },
  CULTURE: { name: "CULTURE", color: "#ffca28", url: "/cultures" },
  LIFESTYLE: { name: "LIFESTYLE", color: "#2196f3", url: "/lifeStyles" },
};

const gets = () => Object.entries(MenuItems).map((entry) => entry[1]);

export { MenuItems, gets as getMenuItems };
