import { notEmptyArray } from "../../utility/Validator";

const MenuItems = {
  HOME: {
    name: "NEWS TODAY",
    color: "#388e3c",
    url: "/the-guardian",
    sectionId: "top",
  },
  SPORTS: {
    name: "SPORTS",
    color: "#f50057",
    url: "/sport",
    sectionId: "sport",
    title: "Sports",
  },
  CULTURE: {
    name: "CULTURE",
    color: "#ffca28",
    url: "/culture",
    sectionId: "culture",
    title: "Culture",
  },
  LIFESTYLE: {
    name: "LIFESTYLE",
    color: "#2196f3",
    url: "/lifeandstyle",
    sectionId: "lifeandstyle",
    title: "Lifestyle",
  },
};

const gets = () => Object.entries(MenuItems).map((entry) => entry[1]);

const getBySectionId = (sectionId) => {
  const finded = Object.entries(MenuItems).find(
    (entry) => entry[1].sectionId === sectionId
  );
  return notEmptyArray(finded) ? finded[1] : null;
};

export { MenuItems, gets as getMenuItems, getBySectionId };
