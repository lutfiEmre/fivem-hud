import React from 'react';
import map from '../img/map.svg'

const Hud8 = () => {
    return (
        <div className={'absolute left-[50px] w-fit h-fit bottom-[50px] '}>
            <div className={'flex flex-col w-fit gap-[13px]'}>
                <img src={map} alt=""/>
                <div className={'flex mt-[10px] flex-row gap-[20px]'}>
                    <Hud8/>+

                </div>
            </div>
        </div>
    );
};

export default Hud8;
