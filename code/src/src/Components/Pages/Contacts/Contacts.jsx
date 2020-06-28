import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cls from './Contacts.module.css';
import Flip from 'react-reveal/Flip';

const Contacts = () => {

    return (
        <Flip left>
            <Container>
                <Row>
                    <Col className={cls.colomnStyle}>
                        <div className={cls.infoArea}>
                            <h3 className={cls.titleArea}>Наши контакты:</h3>
                            <ul className={cls.list}>
                                <li><i className="fa fa-2x fa-mobile-phone"/><span> +375-33-333-22-11;
                        </span></li>
                                <li><i className="fa fa-2x fa-mobile-phone"/><span> +375-44-333-22-11;
                        </span></li>
                                <li><i className="fa fa-envelope-o"/><span> pneumatics@info.by
                        </span></li>
                                <li><i className="fa fa-map"/><span> Минск, ул. Центральная,1
                        </span></li>
                                <li><i className="fa fa-2x fa-telegram"/>
                                    <i className="fa fa-2x fa-vk"/>
                                    <i className="fa fa-2x fa-whatsapp"/>
                                    <i className="fa fa-2x fa-linkedin"/>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Flip>
    );
}

export default Contacts;