const initstate = {
  products: [],
  totalprice: 0,
  totalqty: 0,
};

const cartReducer = (state = initstate, action) => {
    let findpro;
    let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;

      const check = state.products.find((item) => item.id === product.id);
      if (check) {
        return state;
      } else {
        product.stock=product.stock-1
        const tprice = state.totalprice + quantity * product.price;
        const tqty = state.totalqty + quantity;
        product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totalprice: tprice,
          totalqty: tqty,
        };
      }
    case "INC":
        findpro= state.products.find(product=>product.id === action.payload);
        index = state.products.findIndex(product=> product.id === action.payload);
        if(findpro.stock>0){
        findpro.quantity +=1
        findpro.stock =findpro.stock-1
        console.log(findpro.stock)
        state.products[index]= findpro;

        return {
          ...state,
          totalprice:state.totalprice + findpro.price,
          totalqty:state.totalqty+ 1
      }
      }
      else{
        return state
      }
  
    case "DEC":
        findpro=state.products.find(product=>product.id === action.payload)
        index= state.products.findIndex(product=>product.id=== action.payload)
      if (findpro.quantity>1){
        findpro.quantity -=1
        state.products[index]= findpro
      }
      return {
        ...state,
        totalprice: state.totalprice -findpro.price,
        totalqty:state.totalqty -1
      }
    case "REMOVE":
        findpro=state.products.find(product=>product.id === action.payload)
        const filtered =state.products.filter(product=> product.id !== action.payload)
        return {
            ...state,
            products:filtered,
            totalprice:state.totalprice- findpro.quantity*findpro.price,
            totalqty:state.totalqty- findpro.quantity
        }

    default:
      return state;
  }
};

export default cartReducer;
