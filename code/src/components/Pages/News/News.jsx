import React from 'react';
import cls from './News.module.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MiniSidebar from "../../MiniSidebar/MiniSidebar";
import Zoom from 'react-reveal/Zoom';
import exhibition from '../../../assets/images/exhibition.jpg'

const News = () => {

    return (
        <div className={cls.flexContainer}>
            <MiniSidebar/>
            <div className={cls.cardsContainer}>
                <Zoom clear>
                    <Card className={cls.card}>
                        <Card.Header className={cls.cardHeader}>Новости компании</Card.Header>

                        <Card.Body>
                            <Card.Title>Выставка товаров в Минске</Card.Title>
                            <Card.Img variant="top" src={exhibition}/>
                            <Card.Text>
                                Приглашаем на нашу ежегодную выставку товаров.
                            </Card.Text>
                            <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                            <Card.Footer className="text-muted">10.07.2020</Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card className={cls.card}>
                        <Card.Header className={cls.cardHeader}>Новости компании</Card.Header>
                        <Card.Body>
                            <Card.Title>Выставка товаров в Москве</Card.Title>
                            <Card.Img variant="top" src={exhibition}/>
                            <Card.Text>
                                Приглашаем на нашу ежегодную выставку товаров.
                            </Card.Text>
                            <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">10.07.2020</Card.Footer>
                    </Card>
                    <Card className={cls.card}>
                        <Card.Header className={cls.cardHeader}>Новости компании</Card.Header>
                        <Card.Body>
                            <Card.Title>Выставка товаров в Киеве</Card.Title>
                            <Card.Img variant="top" src={exhibition}/>
                            <Card.Text>
                                Приглашаем на нашу ежегодную выставку товаров.
                            </Card.Text>
                            <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">10.07.2020</Card.Footer>
                    </Card>
                    <Card className={cls.card}>
                        <Card.Header className={cls.cardHeader}>Новости компании</Card.Header>
                        <Card.Body>
                            <Card.Title>Выставка товаров в Казахстане</Card.Title>
                            <Card.Img variant="top" src={exhibition}/>
                            <Card.Text>
                                Приглашаем на нашу ежегодную выставку товаров.
                            </Card.Text>
                            <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">10.07.2020</Card.Footer>
                    </Card>
                </Zoom>
            </div>
        </div>

    );
}

export default News;