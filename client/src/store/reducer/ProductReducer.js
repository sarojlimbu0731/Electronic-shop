const initState={ 
products:[],
product:{ },
}



const productReducer = (state= initState,action)=>{

    switch(action.type){

        case "SET_PRODUCT":
            let products =action.payload;
            products.forEach(product => {
                product.price= parseInt(product.price.slice(1))*126
            });
         
            return {
               
                ...state,products:[...products]
            }
          
     
        case "PRODUCT":
             
            return {...state,product:state.products.find(product=>product.id === parseInt(action.payload) )}

        default:
            return state
    }
    
}

export default productReducer;