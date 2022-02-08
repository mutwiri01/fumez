import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Userslist from './Userslist'
import Orderslist from './Orderslist'
import Addproduct from './Addproduct'
import Productslist from './Productslist'
import Editproduct from './Editproduct'
import { useSelector, useDispatch } from 'react-redux'



function Adminscreen() {
      

    const userstate = useSelector(state=>state.loginReducer)

    const currentUser = userstate.currentUser
    useEffect(() => {

        if(currentUser)
        {
            if(!currentUser.isAdmin){

                window.location.href='/homescreen'
            }
        }
        else{
            window.location.href='/homescreen'

        }

        
       
    }, [])

    return (
        <div>
            <div className="row justify-content-center mt-2">
                <div className="col-md-10">
                    <h2>Admin Panel</h2>
                    <ul className='admin p-2'>
                        <li><Link to='/mg_kitush/userslist'>UsersList</Link></li>
                        <li><Link to='/mg_kitush/productslist' >Products List</Link></li>
                        <li><Link to='/mg_kitush/addnewproduct'>Add New Product</Link></li>
                        <li><Link to='/mg_kitush/orderslist'>Orderslist</Link></li>
                    </ul>


                    <Switch>
                        <Route path='/mg_kitush/' component={Userslist} exact />
                        <Route path='/mg_kitush/userslist' component={Userslist} />
                        <Route path='/mg_kitush/orderslist' component={Orderslist} />
                        <Route path='/mg_kitush/addnewproduct' component={Addproduct} />
                        <Route path='/mg_kitush/productslist' component={Productslist} />
                        <Route path='/mg_kitush/editproduct/:productid' component={Editproduct} />


                    </Switch>

                </div>
            </div>
        </div>
    )
}

export default Adminscreen
