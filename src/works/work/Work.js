import React from 'react';
import style from './Work.module.css'

export const Work = (props) => {
    return (
        <div className={style.workBlock}>
            <div className={style.iconContainer}>
                <a href={''}>Смотреть</a>
            </div>
            <div className={style.descriptionContainer}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
