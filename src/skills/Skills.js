import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Text Text Text Text Text Text Text Text Text Text Text Text Text Text'}/>
                    <Skill title={'React'} description={'Text'}/>
                    <Skill title={'HTML'} description={'Text'}/>
                </div>
            </div>
        </div>
    );
};
