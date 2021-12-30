import React from 'react';
import Header from '../../Header/Header';
import Reviews from '../Dashboard/Reviews';
import Footer from '../Footer/Footer';



import Courses from './Courses';

import Developents from './Developents';




import SectionCarousel from './SectionCarousel';


const Home = () => {
    return (
        <div className='app'>
            <Header/>
            <SectionCarousel></SectionCarousel> 
            <Developents></Developents>
            <Courses></Courses>
            <Reviews></Reviews>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;