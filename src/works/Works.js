import React from 'react';
import style from './Works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work title={'JS'} description={'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text'}/>
                    <Work title={'JS'} description={'Text Text Text Text Text Text Text Text Text Text Text Text Text Text'}/>
                </div>
            </div>
        </div>
    );
};
