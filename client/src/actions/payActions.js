import axios from "axios";
export const paymentNew=(pay)=>dispatch=>{


    dispatch({type:'USER_PAYMENT_REQUEST'})
 
   axios
     .post("/api/pays/payment" , pay)
     .then(res => {
        dispatch({type:'USER_PAYMENT_SUCCESS'})
 
        console.log(res);
 
     })
     .catch(err => {
        dispatch({type:'USER_PAYMENT_FAILED' , payload : err})
        console.log(err);
 
     });
 
 }