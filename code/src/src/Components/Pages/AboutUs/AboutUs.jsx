import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cls from './AboutUs.module.css';
import marker from '../../../assets/images/marker.png'
import Flip from 'react-reveal/Flip';

const AboutUs = () => {

    return (
        <Flip left>
            <Container>
                <Row>
                    <Col className={cls.colomnStyle}>
                        <div className={cls.infoArea}>
                            <h3 className={cls.titleArea}>Наши компетенции:</h3>
                            <ul className={cls.list}>
                                <li><img src={marker}/><span> Продажа качественного оборудования;
                        </span></li>
                                <li><img src={marker}/><span> Проектирование и прототипирование любых деталей, корпусов, механизмов;
                        </span></li>
                                <li><img src={marker}/><span> Сервисное обслуживание;
                        </span></li>
                                <li><img src={marker}/><span> Ремонт и модернизация устройств;
                        </span></li>
                                <li><img src={marker}/><span> Технические консультации;
                        </span></li>
                                <li><img src={marker}/><span> Подбор и поставка комплектующих;
                        </span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Flip>
    );
};

export default AboutUs;