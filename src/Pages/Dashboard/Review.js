import React from 'react';
import './Review.css';

import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/UseAuth';
import { Button } from 'react-bootstrap';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://pure-escarpment-40758.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('review proccess')
                    reset();
                }
            })

    };


    return (
        <div className="addproduct">
            
            <h2 className="order" > Review here</h2>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <textarea placeholder="write your feedback" defaultValue="" {...register("description")} />
                <input placeholder="give rating mark 1-5"  {...register("rating")} />
                <Button className='add-button' type="submit">submit</Button>

            </form>
        </div>
    );
};

export default Review;