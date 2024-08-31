import React from 'react';
import s from './Presentation.module.scss';
import IosDownloadIcon from "@/icons/IosDownloadIcon";
import AndroidDownloadIcon from "@/icons/AndroidDownloadIcon";
import ArrayIcon from "@/icons/ArrayIcon";

const Presentation = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.instructions}>
                <div className={s.video}>

                </div>
                <div className={s.scroll}>
                    <button className={s.scroll__button}>
                        <ArrayIcon />
                    </button>
                    <span className={s.scroll__title}>Scan QR</span>
                    <button className={s.scroll__button}>
                        <ArrayIcon />
                    </button>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.info}>
                    <h2 className={s.title}>The App That Connects Drivers. Don't Stress, Just Scan and Communicate</h2>
                    <p className={s.desc}>Your Stress-Free Solution for Instant Driver Communication</p>
                    <div className={s.download}>
                        <a href="#" className={s.download__link}>
                            <IosDownloadIcon />
                        </a>
                        <a href="#" className={s.download__link}>
                            <AndroidDownloadIcon />
                        </a>
                    </div>
                </div>
                <div className={s.qr}>Scan QR to Download the app</div>
            </div>
        </section>
    );
};

export default Presentation;