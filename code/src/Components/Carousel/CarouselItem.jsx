import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cls from './Carousel.module.css';
import slide1 from '../../Assets/images/slide1.jpg';
import slide2 from '../../Assets/images/slide2.jpg';

const CarouselItem = (props) => {
    return (
        <div className={cls.container}>
            <img className={cls.topImage} src={slide1}/>
            <Carousel className={cls.carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselItem;
