import React from 'react';
import s from './Hero.module.scss';
import NextImage from 'next/image';
import IosDownloadIcon from "@/icons/IosDownloadIcon";
import AndroidDownloadIcon from "@/icons/AndroidDownloadIcon";
import image from './../../images/hero/image.png';

const Hero = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>Contact & Communicate With Fellow Drivers Instantly</h1>
                    <p className={s.desc}>ParkNTT helps drivers <span>contact and notify</span> each other about any problem with their vehicles <span>without sharing contact information</span>. It allows you to avoid stressful situations, save time, escape from parking tickets and reduce unnecessary expenses.</p>
                    <div className={s.download}>
                        <a href="#" className={s.download__link}>
                            <IosDownloadIcon />
                        </a>
                        <a href="#" className={s.download__link}>
                            <AndroidDownloadIcon />
                        </a>
                    </div>
                    <a href="#" className={s.journey}>Start journey</a>
                </div>
                <div className={s.image}>
                    <div className={s.image__container}>
                        <NextImage
                            src={image}
                            alt="Parkntt App"
                            width={579}
                            height={605}
                            priority={true}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;