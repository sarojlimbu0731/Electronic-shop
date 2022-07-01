const initstate= {
    products:[],
    totalprice:0,
    totalqty:0,
}

const cartReducer=(state=initstate, action) =>{
         switch(action.type){
            case "ADD_TO_CART":
                const {product,quantity} =action.payload;
                
                const check= state.products.find(item=> item.id === product.id)
                if (check){
                    return state
                }
                else{
                    const tprice= state.totalprice + quantity* product.price
                    

                     product.stock= product.stock-quantity
                    
                  
                    const tqty= state.totalqty +quantity
                    product.quantity=quantity
                    return {
                        ...state, products:[...state.products,product],totalprice:tprice, totalqty:tqty
                    }
                }
            default:
                return state
         }
}

export default cartReducer