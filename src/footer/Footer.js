import React from 'react';
import style from  './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Анастасия Мартьянова</h2>
                <div className={style.contactBlock}>
                    <a href={''} className={style.contact}></a>
                    <a href={''} className={style.contact}></a>
                    <a href={''} className={style.contact}></a>
                    <a href={''} className={style.contact}></a>
                </div>
            </div>
        </div>
    );
};
