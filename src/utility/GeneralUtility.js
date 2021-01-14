const GRN = () =>
  new Date()
    .getTime()
    .concat(
      "_",
      Math.floor(Math.random() * new Date().getTime()),
      "_",
      Math.random() * new Date().getTime()
    );
export default GRN;
