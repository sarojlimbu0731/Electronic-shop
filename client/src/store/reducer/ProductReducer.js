const initState={ 
products:[],
product:{ },
}



const productReducer = (state= initState,action)=>{

    switch(action.type){

        case "SET_PRODUCT":
            let products =action.payload;
            products.forEach(product => {
                let date=product.createDate
                let day,month,yrs
                date=new Date(date)
                date=JSON.stringify(date)
                yrs=date.slice(1,5)
                month=date.slice(6,8)
                day=date.slice(9,11)
                date=day+"-"+month+"-"+yrs
                product.createDate=date
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