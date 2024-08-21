import React from 'react';
import s from './Workflow.module.scss';

const Workflow = () => {
    return (
        <section className={s.wrapper}>
            <ul className={s.step__list}>
                    <li className={s.step__item}>
                        <div className={s.step__order}>01</div>
                        <h3 className={s.step__title}>Order & Stick QR Code on Your Car</h3>
                        <p className={s.step__desc}>Order & Stick QR Code on Your Car</p>
                    </li>
                    <li className={s.step__item}>
                        <div className={s.step__order}>02</div>
                        <h3 className={s.step__title}>Order & Stick QR Code on Your Car</h3>
                        <p className={s.step__desc}>Order & Stick QR Code on Your Car</p>
                    </li>
                    <li className={s.step__item}>
                        <div className={s.step__order}>03</div>
                        <h3 className={s.step__title}>Order & Stick QR Code on Your Car</h3>
                        <p className={s.step__desc}>Order & Stick QR Code on Your Car</p>
                    </li>
                    <li className={s.step__item}>
                        <div className={s.step__order}>04</div>
                        <h3 className={s.step__title}>Order & Stick QR Code on Your Car</h3>
                        <p className={s.step__desc}>Order & Stick QR Code on Your Car</p>
                    </li>
                </ul>
        </section>
    );
};

export default Workflow;