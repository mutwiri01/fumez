import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId, deliverOrder} from "../actions/orderActions";
import Loader from "../components/Loader";
import Error from '../components/Error'
import { Link } from "react-router-dom";
export default function Ordersscreen() {

  const orderstate=useSelector(state=>state.getOrdersByUserIdReducer)

  const {orders , error , loading} = orderstate
  
  const orderDeliver = useSelector(state => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver


  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2>MY ORDERS</h2>

          <table className="table table-striped table-responsive-sm">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Status</th>
              </tr>
            </thead>


            <tbody>

                  {loading && (<Loader/>)}
                  {orders && (orders.map(order=>{
                    return <tr onClick={()=>{window.location=`/orderinfo/${order._id}`}}>
                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0,10)}</td>
                      <td>{order.isPaid ? (<li>Payment Processing</li>) : (<li>Payment Completed</li>)}</td>
                      <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>
                      </tr>
                     
                   
                  }))}

                  {error && (<Error error='something went wrong'/>)}

            </tbody>

         

            
          </table>
        </div>
      </div>
    </div>
  );
}