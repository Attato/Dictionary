import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from 'components/header/Header';
import { motion } from 'framer-motion';
import "./Tickets.scss"

const back = "M15.88 18.12a1.25 1.25 0 01-1.76 1.76l-7-7a1.25 1.25 0 010-1.76l7-7a1.25 1.25 0 011.76 1.76L9.77 12z"

const AnimationTop = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
		transition: {delay: custom * 0.2},
    }),
}

const AnimationLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
		transition: {delay: custom * 0.2},
    }),
}

const Tickets = () => {   

    let [name, setName] = useState("Ваше имя")

    const handle = (e) => {
		setName(e.currentTarget.value)
	}

    console.log()

    return (
        <motion.div initial="hidden" whileInView="visible">
            <Header/>
            <div className="tickets__flex">
                <div className="main__wrapper">
                    <Link to="/AirTickets">
                        <div className="tickets__flex">
                            <svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d={back}></path></svg>
                            <p className="back__toMain-text">Назад</p>
                        </div>
                    </Link>
                    <motion.div variants={AnimationLeft} custom={6}>
                        <p className="main__label">Имя:</p>
                        <input className="main__input" onChange={handle} maxLength="15" placeholder="Введите Имя"/>
                    </motion.div>
                    <motion.div variants={AnimationLeft} custom={7.5}>
                        <p className="main__label">Имя:</p>
                        <input className="main__input" onChange={handle} maxLength="15" placeholder="Введите Имя"/>
                    </motion.div>
                    <motion.div variants={AnimationLeft} custom={9}>
                        <p className="main__label">Имя:</p>
                        <input className="main__input" onChange={handle} maxLength="15" placeholder="Введите Имя"/>
                    </motion.div>
                </div>
                <div className="white__wrapper">
                    <section className="tickets">
                        <section className="tickets__container">
                            <motion.article variants={AnimationTop} custom={2} className="ticket tickets__item">
                            <div className="ticket__top">
                                <div className="ticket__image"></div>
                                <div className="ticket__description">
                                <h2 className="ticket__title">Авиабилеты</h2>
                                <div className="ticket__data">
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Имя:</p>
                                    <p className="ticket__data-text ticket__data-text_type_name">
                                        {name}
                                    </p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Дата и время:</p>
                                    <p className="ticket__data-text">01.09.2021, 18.00</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Возраст:</p>
                                    <p className="ticket__data-text ticket__data-text_type_age">19</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Локация:</p>
                                    <p className="ticket__data-text">Юбилейный</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-top.svg"  className="ticket__cutline" alt="" />
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-bottom.svg" className="ticket__cutline" alt=""/>
                            <div className="ticket__bottom">
                                <img src="https://code.s3.yandex.net/web-code/entrance-test/qr.svg" alt="" className="ticket__qr" />
                                <p className="ticket__qr-text">
                                Просканируйте QR-код на входе в концертный зал
                                </p>
                            </div>
                            </motion.article>
                            <motion.article variants={AnimationTop} custom={1.5} className="ticket tickets__item">
                            <div className="ticket__top">
                                <div className="ticket__image"></div>
                                <div className="ticket__description">
                                <h2 className="ticket__title">Авиабилеты</h2>
                                <div className="ticket__data">
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Имя:</p>
                                    <p className="ticket__data-text ticket__data-text_type_name">
                                        {name}
                                    </p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Дата и время:</p>
                                    <p className="ticket__data-text">01.09.2021, 18.00</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Возраст:</p>
                                    <p className="ticket__data-text ticket__data-text_type_age">21</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Локация:</p>
                                    <p className="ticket__data-text">Юбилейный</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-top.svg"  className="ticket__cutline" alt="" />
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-bottom.svg" className="ticket__cutline" alt=""/>
                            <div className="ticket__bottom">
                                <img src="https://code.s3.yandex.net/web-code/entrance-test/qr.svg" alt="" className="ticket__qr" />
                                <p className="ticket__qr-text">
                                Просканируйте QR-код на входе в концертный зал
                                </p>
                            </div>
                            </motion.article>
                            <motion.article variants={AnimationTop} custom={1} className="ticket tickets__item">
                            <div className="ticket__top">
                                <div className="ticket__image"></div>
                                <div className="ticket__description">
                                <h2 className="ticket__title">Авиабилеты</h2>
                                <div className="ticket__data">
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Имя:</p>
                                    <p className="ticket__data-text ticket__data-text_type_name">
                                        {name}
                                    </p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Дата и время:</p>
                                    <p className="ticket__data-text">01.09.2021, 18.00</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Возраст:</p>
                                    <p className="ticket__data-text ticket__data-text_type_age">17</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Локация:</p>
                                    <p className="ticket__data-text">Юбилейный</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-top.svg"  className="ticket__cutline" alt="" />
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-bottom.svg" className="ticket__cutline" alt=""/>
                            <div className="ticket__bottom">
                                <img src="https://code.s3.yandex.net/web-code/entrance-test/qr.svg" alt="" className="ticket__qr" />
                                <p className="ticket__qr-text">
                                Просканируйте QR-код на входе в концертный зал
                                </p>
                            </div>
                            </motion.article>
                            <motion.article variants={AnimationTop} custom={.5} className="ticket tickets__item">
                            <div className="ticket__top">
                                <div className="ticket__image"></div>
                                <div className="ticket__description">
                                <h2 className="ticket__title">Авиабилеты</h2>
                                <div className="ticket__data">
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Имя:</p>
                                    <p className="ticket__data-text ticket__data-text_type_name">
                                        {name}
                                    </p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Дата и время:</p>
                                    <p className="ticket__data-text">01.09.2021, 18.00</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Возраст:</p>
                                    <p className="ticket__data-text ticket__data-text_type_age">23</p>
                                    </div>
                                    <div className="ticket__data-cell">
                                    <p className="ticket__label">Локация:</p>
                                    <p className="ticket__data-text">Юбилейный</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-top.svg"  className="ticket__cutline" alt="" />
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-bottom.svg" className="ticket__cutline" alt=""/>
                            <div className="ticket__bottom">
                                <img src="https://code.s3.yandex.net/web-code/entrance-test/qr.svg" alt="" className="ticket__qr" />
                                <p className="ticket__qr-text">
                                Просканируйте QR-код на входе в концертный зал
                                </p>
                            </div>
                            </motion.article>
                            <motion.article variants={AnimationTop} className="ticket tickets__item">
                                <div className="ticket__top">
                                    <div className="ticket__image"></div>
                                    <div className="ticket__description">
                                    <h2 className="ticket__title">Авиабилеты</h2>
                                    <div className="ticket__data">
                                        <div className="ticket__data-cell">
                                            <p className="ticket__label">Имя:</p>
                                            <p className="ticket__data-text ticket__data-text_type_name">{name}</p>
                                        </div>
                                        <div className="ticket__data-cell">
                                            <p className="ticket__label">Дата и время:</p>
                                            <p className="ticket__data-text">24.05.2022, 23.00</p>
                                        </div>
                                        <div className="ticket__data-cell">
                                            <p className="ticket__label">Возраст:</p>
                                            <p className="ticket__data-text ticket__data-text_type_age">12</p>
                                        </div>
                                        <div className="ticket__data-cell">
                                            <p className="ticket__label">Локация:</p>
                                            <p className="ticket__data-text">Санкт-Петербург</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-top.svg"  className="ticket__cutline" alt="" />
                            <img src="https://code.s3.yandex.net/web-code/entrance-test/seam-part-bottom.svg" className="ticket__cutline" alt=""/>
                            <div className="ticket__bottom">
                                <img src="https://qr-online.ru/qrfiles/7dd3af2d2d732101794b877b5dc47435.svg" alt="" className="ticket__qr" />
                                <p className="ticket__qr-text">
                                Просканируйте QR-код на входе в аэропорт
                                </p>
                            </div>
                            </motion.article>
                        </section>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default Tickets;
