import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cls from './CarouselBody.module.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';

const CarouselBody = (props) => {
    return (
        <div className={cls.container}>
            <img className={cls.topImage} src={slide2}/>
            <Carousel className={cls.carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Качественная пневматика</h3>
                        <p>Сервисное обслуживание</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Качественная пневматика</h3>
                        <p>Товары из Европы, СНГ и Китая</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBody;
