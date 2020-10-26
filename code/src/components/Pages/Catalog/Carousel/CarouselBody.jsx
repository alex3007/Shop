import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cls from './CarouselBody.module.css';
import slide1 from '../../../../assets/images/slide1.jpg';
import slide2 from '../../../../assets/images/slide2.jpg';
import {NavLink} from "react-router-dom";

const CarouselBody = (props) => {
    return (
        <div className={cls.container}>
            <NavLink to='/all_products'>
            <div className={cls.topBlock}>
                <h3>Качественная пневматика</h3>
            </div>
            <Carousel indicators={false}  conrtols={false} pause={false} className={cls.carousel}>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                        <h3>Качественная пневматика<br/> FESTO</h3>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Third slide"
                        />
                        <h3>Качественная пневматика<br/> FESTO</h3>
                    </div>
                </Carousel.Item>
            </Carousel>
            </NavLink>
        </div>
    );
};

export default CarouselBody;
