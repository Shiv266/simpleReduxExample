const BUY_ICECREAM = "BUY_ICECREAM";

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

const value = {
  buyIceCream,
  BUY_ICECREAM,
};

module.exports = { value };
