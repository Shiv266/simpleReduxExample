const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

const value = {
  buyCake,
  BUY_CAKE,
};

module.exports = { value };
