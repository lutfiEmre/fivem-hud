import React, {useRef} from 'react';
import speedo4bg from '../img/speedo4bg.svg'


const RangeSliderr = () => {
    const progressbar = useRef()

    // const changeProgress = (progress) => {
    //     progressbar.current.style.width = `${progress}%`;
    // };

    /* change progress after 1 second (only for showcase) */

    return (
        <div className={'mt-[30px] flex-col  w-full h-fit justify-center items-center flex'}>
            <div className="progress-container w-full h-[5px]">
                <div  className="progress !w-[100px]"></div>
            </div>
            <svg className={'-mt-4'} xmlns="http://www.w3.org/2000/svg" width="55" height="57" viewBox="0 0 55 57" fill="none">
                <g filter="url(#filter0_d_220_1113)">
                    <path
                        d="M32.5213 28.6265C32.5216 28.7734 32.484 28.918 32.4119 29.046C32.3399 29.1741 32.2359 29.2814 32.1101 29.3573L24.3157 34.1256C24.1843 34.206 24.0337 34.25 23.8797 34.2528C23.7256 34.2557 23.5736 34.2173 23.4393 34.1418C23.3063 34.0674 23.1954 33.9589 23.1182 33.8275C23.041 33.6961 23.0002 33.5466 23 33.3942V23.8588C23.0002 23.7064 23.041 23.5568 23.1182 23.4254C23.1954 23.294 23.3063 23.1855 23.4393 23.1112C23.5736 23.0356 23.7256 22.9973 23.8797 23.0001C24.0337 23.003 24.1843 23.0469 24.3157 23.1274L32.1101 27.8956C32.2359 27.9716 32.3399 28.0789 32.4119 28.2069C32.484 28.335 32.5216 28.4795 32.5213 28.6265Z"
                        fill="#717171"/>
                </g>
                <defs>
                    <filter id="filter0_d_220_1113" x="0.63846" y="0.63846" width="54.2446" height="55.976"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="11.1808"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.5625 0 0 0 0 0.555469 0 0 0 0 0.555469 0 0 0 0.62 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_220_1113"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_220_1113" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default RangeSliderr;
