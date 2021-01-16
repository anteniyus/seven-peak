const OrderBy = {
  NEWEST: { value: "newest", label: "Newest First" },
  OLDEST: { value: "oldest", label: "Oldest First" },
};

const gets = () => Object.entries(OrderBy).map((entry) => entry[1]);

export { OrderBy, gets as GetAllOrderBy };
