const initState={ 
products:[
    {
        id:1,name:"laptop",price:2000,stock:5,quantity:0
    }
    ,
    {
        id:2,name:"samsung",price:4000,stock:3,quantity:0
    },
    {
        id:3,name:"desktop",price:5000,stock:10,quantity:0
    },
    {
        id:4,name:"mouse",price:400,stock:4,quantity:0
    },
    {
        id:5,name:"keyboard",price:200,stock:6,quantity:0
    },
    {
        id:6,name:"mobile",price:1000,stock:2,quantity:0
    }
],
product:{}
}

const productReducer = (state= initState,action)=>{

    switch(action.type){
        case "PRODUCT":
            return {...state,product:state.products.find(product=>product.id === parseInt(action.id) )}
        default:
            return state
    }
}

export default productReducer;