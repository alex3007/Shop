import React from 'react';
import cls from './Delivery.module.css'
import Flip from 'react-reveal/Flip';

const Delivery = () => {
    return (
        <div className={cls.flexContainer}>
            <div className={cls.infoContainer}>
                <Flip right>
                    <div className={cls.infoArea}>
                        <div className={cls.infoTitle}>
                            <h3><i className="iStyle fa fa-2x fa-shopping-bag"/><br/>Как оформить заказ:</h3>
                        </div>
                        <ul className={cls.list}>
                            <li><span> Вы можете выбрать любой товар на витрине сайта (регион - Минск) и
                            заказать его онлайн
                        </span></li>
                            <li><span> Заказать по телефонам:<br/> +375 33 333-22-11,<br/> +375 44 333-22-11
                        </span></li>
                            <li><span> Заказать по электронной почте:<br/>pneumatics@info.by
                        </span></li>
                            <li><span> Написать нам в Viber, Telegram, Whatsapp, VK <br/>(тел. +375 33
                            333-22-11)
                        </span></li>
                        </ul>
                    </div>
                    <div className={cls.infoArea}>
                        <div className={cls.infoTitle}>
                            <h3><i className="iStyle fa fa-2x fa-truck"/><br/>Способы доставки:</h3>
                        </div>
                        <ul className={cls.list}>
                            <li><span>
                            Экспресс доставка курьером в течение дня по Минску
                        </span></li>
                            <li><span>
                            Самовывоз со склада в Минске
                        </span></li>
                            <li><span>
                            Наложенный платеж Белпочта (получение и оплата в отделении РУП Белпочта)
                        </span></li>
                            <li><span>
                            Наложенный платеж + доставка курьером до двери
                        </span></li>
                            <li><span>
                            Доставка транспортной компанией по РБ (DPD, АвтолайтЭкспресс, DHL, EMS)
                        </span></li>
                        </ul>
                    </div>
                </Flip>
            </div>
        </div>

    )
};

export default Delivery;