import React from 'react';
import cls from './News.module.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const News = () => {

    return (
        <div className={cls.cardsContainer}>
            <Card className={cls.card} >
                <Card.Header>Новости компании</Card.Header>
                <Card.Body>
                    <Card.Title>Выставка товаров в Минске</Card.Title>
                    <Card.Text>
                        Приглашаем на нашу ежегодную выставку товаров.
                    </Card.Text>
                    <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                </Card.Body>
            </Card>
            <Card className={cls.card}>
                <Card.Header>Новости компании</Card.Header>
                <Card.Body>
                    <Card.Title>Выставка товаров в Москве</Card.Title>
                    <Card.Text>
                        Приглашаем на нашу ежегодную выставку товаров.
                    </Card.Text>
                    <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                </Card.Body>
            </Card>
            <Card className={cls.card}>
                <Card.Header>Новости компании</Card.Header>
                <Card.Body>
                    <Card.Title>Выставка товаров в Киеве</Card.Title>
                    <Card.Text>
                        Приглашаем на нашу ежегодную выставку товаров.
                    </Card.Text>
                    <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                </Card.Body>
            </Card>
            <Card className={cls.card}>
                <Card.Header>Новости компании</Card.Header>
                <Card.Body>
                    <Card.Title>Выставка товаров в Казахстане</Card.Title>
                    <Card.Text>
                        Приглашаем на нашу ежегодную выставку товаров.
                    </Card.Text>
                    <Button variant="primary" className={cls.btnColor}>Подробнее</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default News;