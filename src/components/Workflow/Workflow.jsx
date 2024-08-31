import React from 'react';
import s from './Workflow.module.scss';

const Workflow = () => {
    return (
        <section className={s.wrapper}>
            <ul className={s.step__list}>
                    <li className={s.step__item}>
                        <div className={s.step__order}>01</div>
                        <h3 className={s.step__title}>Order & Stick QR Code on Your Car</h3>
                        <p className={s.step__desc}>We will deliver a printed QR code that you should stick on your vehicle.</p>
                    </li>
                    <li className={s.step__item}>
                        <div className={s.step__order}>02</div>
                        <h3 className={s.step__title}>Choose Notification Method</h3>
                        <p className={s.step__desc}>You can choose to receive messages from drivers as push notification, text message, or voice message by phone call.</p>
                    </li>
                    <li className={s.step__item}>
                        <div className={s.step__order}>03</div>
                        <h3 className={s.step__title}>Send Notifications</h3>
                        <p className={s.step__desc}>If you come across an issue with any vehicle that bothers you, simply scan the QR code on the offending vehicle and notify for FREE.</p>
                    </li>
                    <li className={s.step__item}>
                        <div className={s.step__order}>04</div>
                        <h3 className={s.step__title}>Receive Notifications</h3>
                        <p className={s.step__desc}>If you have a parking issue, other drivers can scan your QR code to communicate with you instead of calling tow-truck.</p>
                    </li>
                </ul>
            <div className={s.content}>
                <h2 className={s.title}>How it <span>works</span></h2>
                <p className={s.text}>If you have parking problems or need to notify other drivers about issues with their vehicle, the ParkNTT app lets you connect  instantly without sharing contact information.</p>
                <div className={s.slider}></div>
                <span className={s.advice}>Don't Stress About Parking</span>
                <a href="#" className={s.link}>Discover the app</a>
            </div>
        </section>
    );
};

export default Workflow;