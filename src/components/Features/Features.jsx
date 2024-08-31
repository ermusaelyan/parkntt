import React from 'react';
import s from './Features.module.scss';
import NextImage from "next/image";
import image from "./../../images/features/image.png";

const Features = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.image}>
                <div className={s.image__container}>
                    <NextImage
                        src={image}
                        alt="Features"
                        width={442}
                        height={369}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
            <div className={s.content}>
                <h2 className={s.title}>Fill the <span>best experience</span> with <span>our features</span></h2>
                <ul className={s.list}>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>Send and Receive Notifications</h3>
                        <p className={s.text}>Notify and be notified with ease. Choose how you want to be notified—whether it's through push notifications, text messages, or voice messages by phone call.</p>
                    </li>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>Instant Chat with Drivers</h3>
                        <p className={s.text}>Communicate instantly without sharing personal information. Our secure in-app chat and text messaging solution ensures a private and safe interaction with fellow drivers.</p>
                    </li>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>Multiple QR Design Templates and Sizes</h3>
                        <p className={s.text}>The app enables you to choose your preferred template and size for your QR code.</p>
                    </li>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>Insurance and Registration Renewal Reminders</h3>
                        <p className={s.text}>Receive notifications about insurance and registration renewal dates one month in advance.</p>
                    </li>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>Identity Options</h3>
                        <p className={s.text}>You have the option to choose a nickname or opt to display your name for public visibility.</p>
                    </li>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>Ability to Order Multiple QR Codes</h3>
                        <p className={s.text}>The app allows you to order several QR codes, which is convenient if you have multiple cars or need to order for family members. Each QR code can be assigned to individual contact information.</p>
                    </li>
                </ul>
                <div className={s.users}>
                    <span>More then</span>
                    <div>
                        <span className={s.users__count}>100k</span>
                        <br />
                        happy users
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;