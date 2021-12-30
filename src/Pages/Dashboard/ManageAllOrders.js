import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';


const ManageAllOrders = () => {
    
    const [order, setOrder] = useState([]);
    const [status,setStatus]=useState("");
    const handleStatus=(e)=>{
        setStatus(e.target.value)
    };
    console.log(status);
    useEffect(() => {
        fetch('https://pure-escarpment-40758.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

      // delete item
      const handleDeleteItem = id => {
        const proceed = window.confirm('are you sure, you want delete order?');
        if (proceed) {
            const url = `https://pure-escarpment-40758.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted succesfully');
                        const remainingbookings = order.filter(book => book._id !== id);
                        setOrder(remainingbookings)
                    }
                });
        }
    }
       const handleUpdate=(id)=>{
          fetch(`https://pure-escarpment-40758.herokuapp.com/updateStatus/${id}`,{
              method:"put",
              headers:{"content-type":"application/json"},
              body:JSON.stringify({status}),
          })

        console.log(id);
       }

    return (
        <div>
            
            <h1>Total orders:{order.length}</h1>
            <ul>
                {
                    order.map((book, index) => <div key={order._id} index={index} book={book}
                    >
                      <Container >
                        <Table striped bordered hover  >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th> Name</th>
                                    <th> Orders name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                   
                                    <th>order cancel</th>
                                    <th>Status</th>
                                    <th>Update </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{book.productName}</td>
                                    <td>{book.userName}</td>
                                    <td>{book.email}</td>
                                    <td>{book.date}</td>
                                    <td><button onClick={() => handleDeleteItem(book._id)} className="bg-warning"  style={{borderRadius:"10px"}}>delete order</button></td>
                                    
                                    <td><input onChange={handleStatus} type="text" defaultValue={book.status}/></td>
                                    <td> <button onClick={() => handleUpdate(book._id)} className="bg-warning"  style={{borderRadius:"10px"}}>update status</button></td>
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

export default ManageAllOrders;