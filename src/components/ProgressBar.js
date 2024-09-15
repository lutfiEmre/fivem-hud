import React, { useState} from 'react';
import speedo4bg from "../img/speedo4bg.svg";

const ProgressBar = ({ progressData }) => {
    const [progress, setProgress] = useState(0);


    return (
        <div className={'relative '}>
            <div className="animated-progress absolute  boxshadow7  top-0 z-20 asdasd !w-[196px] !h-[39px] ">
                <span className={'bg-[#18CBA6]'} style={{width: `20%`}}></span>
            </div>
            <img className={'!w-[196px] absolute  top-0 !h-[39px] object-cover'} src={speedo4bg} alt=""/>

        </div>
    );
};

export default ProgressBar;
