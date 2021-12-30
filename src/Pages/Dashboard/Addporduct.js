import axios from 'axios';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import"./AddProduct.css"
const Addporduct = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://pure-escarpment-40758.herokuapp.com/services',data)
      .then(res=>{
          if(res.data.insertedId){
              alert('added successfully');
              reset();
          }
      })
    }

    return (
        <div className='addproduct'>
            <Container>
            <h1> Addproduct</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='name'/>
     
     
      <input type="number"{...register("price")} placeholder='price'/>
      <input {...register("img")} placeholder='image url'/>
       <textarea {...register("description")} placeholder='description'/>
      <Button className='add-button' type="submit">submit</Button>
    </form></Container>
        </div>
    );
};

export default Addporduct;