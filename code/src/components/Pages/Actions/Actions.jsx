import React from 'react';
import cls from './Actions.module.css'
import Zoom from 'react-reveal/Zoom';

const Actions = () => {
    return (
        <section className={cls.flexContainer}>
            <div className={cls.infoContainer}>
                <Zoom bottom>
                    <div className={cls.infoArea}>
                        <div className={cls.infoTitle}>
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
                    </div>
                    <div className={cls.infoArea}>
                        <div className={cls.infoTitle}>
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
                    </div>
                </Zoom>
            </div>
        </section>
    )
};

export default Actions;