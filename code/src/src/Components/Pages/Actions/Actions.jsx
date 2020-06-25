import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cls from './Actions.module.css'

const Actions = () => {

    return (
        <section>
            <Container>
                <Row>
                    <Col className={cls.colomnStyle} >
                        <div className={cls.infoArea}>
                            <h3><i className="iStyle fa fa-2x fa-gift"/><br/>Система скидок при разовом заказе:
                            </h3>
                        </div>
                        <div className={cls.infoContent}>
                            <ul>
                                <li><span>
                             При заказе на сумму более 170 руб - скидка 10%
                        </span></li>
                                <li><span>
                                При заказе на сумму более 340 руб - скидка 20%
                        </span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className={cls.colomnStyle} >
                        <div className={cls.infoArea}>
                            <h3><i className="iStyle fa fa-2x fa-percent"/><br/>Накопительная скидка на общую сумму
                                покупок:</h3>
                        </div>
                        <div className={cls.infoContent}>
                            <ul>
                                <li><span>
                             Каждые 150 рублей увеличивают вашу скидку на 2%
                       </span></li>
                                <li><span>
                                Максимальная накопительная скидка составляет 36%
                        </span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            <p> Скидки не суммируются - побеждает максимальная.</p>
        </section>
    )
};

export default Actions;