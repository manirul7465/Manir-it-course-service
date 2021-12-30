import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Myorder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://pure-escarpment-40758.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    })
           

          // delete item
          const handleDeleteItem = id => {
            const proceed = window.confirm('are you sure, you want to cancel order?');
            if (proceed) {
                const url = `https://pure-escarpment-40758.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('deleted succesfully');
                            const remainingbookings = orders.filter(order => order._id !== id);
                            setOrder(remainingbookings)
                        }
                    });
            }
        }
    

    return (
        <div>
            <h2 style={{marginBottom:'50px'}}>Your Orders Total = {orders.length}</h2>
            <ul>
                {
                    orders.map((order, index) => <div key={order._id} index={index} order={order}
                    >
                      <Container >
                        <Table striped bordered hover   size="sm">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th> Course & service</th>
                                    <th> price</th>
                                    <th>Your Email</th>
                                    <th>Date</th>
                                    <th>addres</th>
                                    <th>Cancel Order</th>
                                    <th>Order Status</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.productPrice}</td>
                                    <td>{order.email}</td>
                                    <td>{order.date}</td>
                                    <td>{order.address}</td>
                                    <button onClick={() => handleDeleteItem(order._id)} className="bg-warning"  style={{borderRadius:"10px"}}>Cancel order</button>
                                    <td style={{color:"royalblue"}}>{order.status}</td>
                                    <td >{order.payment?'paid'
                                    :
                                    <Link to={`/Dashboard/payment/${order._id}`}><button className="bg-warning"  style={{borderRadius:"10px"}}>pay</button></Link>
                                }</td>
                                </tr>
                               
                            </tbody>
                        </Table>
                      </Container>
                    </div>)

                }
            </ul>
        </div>
    );
};

export default Myorder;