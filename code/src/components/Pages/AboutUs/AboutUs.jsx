import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cls from './AboutUs.module.css';
import marker from '../../../assets/images/marker.png'
import Zoom from "react-reveal/Zoom";
import Card from "react-bootstrap/Card";
import exhibition from "../../../assets/images/exhibition.jpg";


const AboutUs = () => {

    return (
        <Container>
            <Row>
                <Col className={cls.colomnStyle}>
                    <Zoom clear>
                        <div className={cls.infoArea}>
                            <h3 className={cls.titleArea}>Наши компетенции</h3>
                            <ul className={cls.list}>
                                <li><img src={marker}/>
                                    <span> Продажа качественного пневмо-оборудования;
                        </span></li>
                                <li><img src={marker}/>
                                <span> Подбор и поставка комплектующих;
                        </span></li>
                                <li><img src={marker}/>
                                    <span> Сервисное обслуживание;
                        </span></li>
                                <li><img src={marker}/>
                                <span> Технические консультации;
                        </span></li>
                                <li><img src={marker}/>
                                    <span> Проектирование и внедрение устройств;
                        </span></li>
                                <li><img src={marker}/>
                                    <span> Ремонт и модернизация оборудования;
                        </span></li>


                            </ul>
                            <Card className={cls.card}>
                                <Card.Body>
                                    <Card.Img variant="top" src={exhibition}/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Zoom>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;