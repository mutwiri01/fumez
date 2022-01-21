export const placeOrderReducer =(state={} , action)=>{


    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return{
            ...state ,
            loading : true
        }
        case 'PLACE_ORDER_SUCCESS' : return{
         ...state ,
         loading : false,
         success : true
     }
     case 'PLACE_ORDER_FAILED' : return{
         ...state ,
         loading : false,
         error : true
     }
     default : return{state}
    }



}

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ORDER_CREATE_REQUEST':
            return {
                loading: true
            }

        case 'ORDER_CREATE_SUCCESS':
            return {
                loading: false,
                success: true,
                order: action.payload
            }

        case 'ORDER_CREATE_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        case 'ORDER_CREATE_RESET':
            return {}


        default:
            return state
    }
}

export const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ORDER_DELIVER_REQUEST':
            return {
                loading: true
            }

        case 'ORDER_DELIVER_SUCCESS':
            return {
                loading: false,
                success: true
            }

        case 'ORDER_DELIVER_FAIL':
            return {
                loading: false,
                error: action.payload
            }

        case 'ORDER_DELIVER_RESET':
            return {}

        default:
            return state
    }
}


export const getOrdersByUserIdReducer2 =(state={} , action)=>{


 switch(action.type)
 {
     case 'GET_ORDERSBYUSERID_REQUEST' : return{
         ...state ,
         loading : true
     }
     case 'GET_ORDERSBYUSERID_SUCCESS' : return{
      ...state ,
      loading : false,
      orders : action.payload
  }
  case 'GET_ORDERSBYUSERID_FAILED' : return{
      ...state ,
      loading : false,
      error : true
  }
  default : return{state}
 }



}

export const getOrdersByUserIdReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case 'GET_ORDERSBYUSERID_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'GET_ORDERSBYUSERID_SUCCESS':
            return {
                loading: false,
                orders: action.payload
            }

        case 'GET_ORDERSBYUSERID_FAILED':
            return {
                loading: false,
                error: action.payload
            }


        default:
            return state
    }
}


export const getOrderByIdReducer =(state={shippingAddress: {}} , action)=>{


 switch(action.type)
 {
     case 'GET_ORDERBYID_REQUEST' : return{
         ...state ,
         loading : true
     }
     case 'GET_ORDERBYID_SUCCESS' : return{
      ...state ,
      loading : false,
      order : action.payload
  }
  case 'GET_ORDERBYID_FAILED' : return{
      ...state ,
      loading : false,
      error : true
  }
  default : return{state}
 }



}



export const getAllOrdersReducer =(state={orders : []} , action)=>{


 switch(action.type)
 {
     case 'GET_ALLORDERS_REQUEST' : return{
         ...state ,
         loading : true
     }
     case 'GET_ALLORDERS_SUCCESS' : return{
      ...state ,
      loading : false,
      orders : action.payload
  }
  case 'GET_ALLORDERS_FAILED' : return{
      ...state ,
      loading : false,
      error : true
  }
  default : return{state}
 }



}