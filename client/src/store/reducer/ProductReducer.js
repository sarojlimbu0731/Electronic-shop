const initState = {
  products: [],
  product: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      let products = action.payload;
      products.forEach((product) => {
        let date = product.createDate;
        let day, month, yrs;
        date = new Date(date);
        date = JSON.stringify(date);
        yrs = date.slice(1, 5);
        month = date.slice(6, 8);
        day = date.slice(9, 11);
        date = day + "-" + month + "-" + yrs;
        product.createDate = date;
        product.price = parseInt(product.price.slice(1)) * 126;
      });

      return {
        ...state,
        products: [...products],
      };
    case "CHECK_PRODUCT":
      if (state.products.length > state.product.length) {
        state.product = state.products;
      } else {
        state.products = state.product;
      }
      const filtered = state.product.filter(
        (product) => product.category[1] === action.payload
      );

      return {
        ...state,
        products: [...filtered],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: [...state.product],
      };

    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.payload)
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
