import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.container}>
                <a href="">Главная</a>
                <a href="">Скиллы</a>
                <a href="">Проекты</a>
                <a href="">Контакты</a>
            </div>
        </div>
    );
};
