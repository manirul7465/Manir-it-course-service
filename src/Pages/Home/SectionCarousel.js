import React from 'react';
import { Carousel } from 'react-bootstrap';

const SectionCarousel = () => {
    return (
        <div >
            <Carousel fade>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/TgmvYzC/managed-services-banner-1024x328.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/B6ySv0h/New-Project.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/T29BLJc/New-Project-1.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SectionCarousel;