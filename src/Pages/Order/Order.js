import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./Order.css";
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/UseAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Order = () => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing:'ease'
    });
})
  const { orderId } = useParams();
  const [product, setProducts] = useState({});
  const { user,token } = useAuth();

  useEffect(() => {
    const url=`https://pure-escarpment-40758.herokuapp.com/services/${orderId}`
    fetch(url,{
      headers:{
        'authorization':`Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [orderId,token])




  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
         
  const onSubmit = data => {
    data.status="pending";
fetch(`https://pure-escarpment-40758.herokuapp.com/orders`, {
 method: 'POST',
 headers: {
     'content-type': 'application/json'
 },
 body: JSON.stringify(data)

})
 .then(res => res.json())
 .then(result => {
     if (result.insertedId) {
         alert('booking proccess')
         reset();
     }
 })

};




  return (
    <div>

      <div style={{ backgroundColor: 'darkslateblue', height: '150px', marginBottom: '30px' }}>
        <Container >
          <h1 style={{ color: 'whitesmoke' }}>Go Back</h1>
          <Link style={{ textDecoration: 'none' }} to="/Allservice" ><h1 style={{ color: 'yellow', textDecorationLine: 'overline' }}> Course & Services</h1></Link>
        </Container>
      </div>


      <Row xs={1} md={1}>
        <Col lg={6} data-aos='flip-left'>
          <div >
            <img src={product?.img} alt="" style={{ width: '90%', height: '450px' }} />
          </div>
        </Col>
        <Col lg={6} style={{ padding: '40px', textAlign: 'left' }} data-aos='fade-right'>
          <h2>
            {product.name}
          </h2>
          <h5 >{product?.description}</h5>
          <h4>price: {product?.price}</h4>
        </Col>
      </Row>
      <div className='book-area'>
        <Row>
          <Col>
            <h1 className='booking-text'>
              start your journey with manir it
            </h1>
          </Col>

          <Col className='booking'>

            <h1 >Booking now</h1>
            <form className="booking-form"  onSubmit={handleSubmit(onSubmit)} data-aos='zoom-in-down'>
              <input
                placeholder={product.name}
                defaultValue={product.name}
                {...register("productName", { required: true })}
              />
              {errors.name?.type === "required" && (
                <small>product Name is required</small>
              )}
              <input
                placeholder={product.price}
                defaultValue={product.price}
                {...register("productPrice", { required: true })}
              />
              {errors.name?.type === "required" && (
                <small>price is required</small>
              )}
                

                <input
                placeholder={user.name}
                defaultValue={user.displayName}
                {...register("userName", { required: true })}
              />
              {errors.email && <small>username is required</small>}

              <input
                placeholder={user.email}
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && <small>Email is required</small>}
            
              <input
                placeholder="address"
                defaultValue={user.address}
                {...register("address", { required: true })}
              />
              {errors.address && <small>Address is required</small>}
              <input
                type="date"
                placeholder="date"
                {...register("date", { required: true })}
              />
              {errors.date && <small>Date is required</small>}

              <input className="btn-book mt-3" type="submit" />
            </form>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Order;