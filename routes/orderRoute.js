const express = require("express");
const router = express.Router();
const Order = require('../models/orderModel')
router.post("/placeorder", (req, res) => {
    const { cartItems , currentUser , subtotal} = req.body



    const payee = cartItems



    if(payee)
    {
        const order = new Order({

              userid : currentUser._id ,
              name : currentUser.name,
              email : currentUser.email ,
              orderItems : cartItems ,
              shippingAddress : {
                  address : token.card.address_line1 ,
                  city : token.card.address_city,
                  country : token.card.address_country,
                  postalCode : token.card.addres_zip
              },
              orderAmount : subtotal,
              isDelivered : false


        })

        order.save(err=>{

            if(err)
            {
                return res.status(400).json({ message: 'Something went wrong' });
            }
            else{
                res.send('Order Placed Successfully')
            }

        })
    }
    else{
        return res.status(400).json({ message: 'Payment failed' });
    }

 
  


});

router.post("/add", (req, res) => {

    const { cartItems, currentUser, subtotal, shippingAddress } = req.body
    const payee = cartItems



    if(payee)
    {
        const order = new Order({

              userid : currentUser._id ,
              name : currentUser.name,
              email : currentUser.email ,
              orderItems : cartItems ,
              shippingAddress : shippingAddress,
              orderAmount : subtotal,
              isDelivered : false,
              isPaid : false


        })

        order.save(err=>{

            if(err)
            {
                return res.status(400).json({ message: 'Something went wrong' });
            }
            else{
                res.send('Order Placed Successfully')
            }

        })
    }
    else{
        return res.status(400).json({ message: 'Payment failed' });
    }


});


router.post("/deliver", (req, res) => {

    const { cartItems } = req.body
    const payee = cartItems



    if(payee)
    {
        const order = new Order({

              isDelivered : true
              


        })

        order.save(err=>{

            if(err)
            {
                return res.status(400).json({ message: 'Something went wrong' });
            }
            else{
                res.send('Order Delivered Successfully')
            }

        })
    }
    else{
        return res.status(400).json({ message: 'Delivery failed' });
    }


});



router.post("/getordersbyuserid", (req, res) => {

    const userid = req.body.userid

    Order.find({userid : userid} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'somethingss went wrong' });
        }
        else{
            res.send(docs)
        }

    })
  
});




router.post("/getordersbyuserid", (req, res) => {

    const userid = req.body.userid

    Order.find({userid : userid} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs)
        }

    })
  
});


router.post("/getorderbyid", (req, res) => {

    const orderid = req.body.orderid

    Order.find({_id: orderid} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
            res.send(docs[0])
        }

    })
  
});


router.get("/getallorders", (req, res) => {

    Order.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }else{
             res.send(docs)
        }

    })
  
});




















module.exports = router
