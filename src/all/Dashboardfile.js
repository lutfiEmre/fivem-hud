import React, {useState} from 'react';
import speedo1 from '../img/speedo1.svg'
import speedo2 from '../img/speedo2.svg'
import speedo3 from '../img/speedo3.svg'
import speedo4 from '../img/speedo4.svg'
import speedo5 from '../img/speedo5.svg'
import speedo6 from '../img/speedo6.svg'
import speedo7 from '../img/speedo7.svg'
import speedo8 from '../img/speedo8.svg'
import speedo9 from '../img/speedo9.svg'
import speedo10 from '../img/speedo10.svg'

const Dashboardfile = ({setAktifhud,aktifHud}) => {
    const [colorss, setColorss] = useState({
        hud1c1: "#58E8CE",
        hud1c2: '#FFFFFF',
        hud1c3: '#FFFFFF',
        hud1c4: '#7F5DC8',
        hud1c5: '#FFFFFF',
        hud1c6: '#FFFFFF',
        hud2c1: "#58E8CE",
        hud2c2: '#FFFFFF',
        hud2c3: '#FFFFFF',
        hud2c4: '#7F5DC8',
        hud2c5: '#FFFFFF',
        hud2c6: '#FFFFFF',
    })

    const [opacityy,setOpacityy] = useState({
        hud1o1: "100",
        hud1o2: "100",
        hud1o3: "100",
        hud1o4: "100",
        hud1o5: "100",
        hud1o6: "100",
    })
    const [settings, setSettings] = useState({
        main: "general",
        cinematicm: false,
        showlocation: true,
        minimap: true,
        editmode: false,
        hideallhud: false,
        restored: false,
        hideusermoney: false,
        speedomod: "kmh",
        hideonlineu: false,
        hideserverlogo: true,
        hideallstatus: false,
        hidehealth: false,
        hidehungry: false,
        hidearmory: false,
        hidedeh: false,
        hideenegry: false,
        hidestress: false,
        onset: false,
        settings1: false,
        settings2: false,
        settings3: false,
        settings4: false,

    })
    return (
        <div className={'w-full flex justify-center items-center h-full'}>
            <div
                className={'2xl:w-[1289px] z-40 h-[600px] w-[1100px] 2xl:h-[784px] pt-[31px] overflow-hidden   dashboard1'}>
                <div className={'flex flex-row justify-between px-[26px] items-center gap-[22px]'}>
                    <div className={'flex flex-row items-center gap-[22px]'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="64" viewBox="0 0 63 64"
                             fill="none">
                            <rect y="0.806946" width="62.4688" height="62.4688" rx="1.64392"
                                  fill="url(#paint0_linear_79_533)"/>
                            <path
                                d="M44.9436 29.5787C44.915 29.434 44.8556 29.2972 44.7694 29.1775C44.6832 29.0579 44.5722 28.9582 44.4441 28.8852L40.6132 26.702L40.5978 22.3845C40.5974 22.2358 40.5646 22.089 40.5019 21.9542C40.4391 21.8194 40.3479 21.6998 40.2344 21.6037C38.8448 20.4283 37.2445 19.5275 35.5187 18.9492C35.3828 18.9032 35.2388 18.8862 35.0959 18.8993C34.953 18.9123 34.8145 18.9551 34.6891 19.025L30.8249 21.1851L26.9569 19.0211C26.8315 18.9509 26.6927 18.9077 26.5496 18.8945C26.4065 18.8812 26.2622 18.8981 26.126 18.9441C24.4012 19.526 22.8027 20.4303 21.4155 21.6088C21.3022 21.7048 21.211 21.8242 21.1483 21.9587C21.0855 22.0933 21.0527 22.2399 21.052 22.3884L21.0328 26.7098L17.202 28.8929C17.0738 28.9659 16.9628 29.0656 16.8766 29.1852C16.7904 29.3049 16.731 29.4417 16.7024 29.5864C16.3518 31.3482 16.3518 33.1618 16.7024 34.9236C16.731 35.0683 16.7904 35.2051 16.8766 35.3248C16.9628 35.4444 17.0738 35.5441 17.202 35.6171L21.0328 37.8003L21.0482 42.1191C21.0487 42.2678 21.0814 42.4146 21.1441 42.5494C21.2069 42.6842 21.2982 42.8038 21.4116 42.8999C22.8012 44.0753 24.4015 44.9761 26.1273 45.5544C26.2632 45.6004 26.4072 45.6174 26.5501 45.6043C26.693 45.5913 26.8315 45.5484 26.9569 45.4786L30.8249 43.3121L34.693 45.476C34.8461 45.5613 35.0186 45.6055 35.1938 45.6044C35.306 45.6044 35.4175 45.5862 35.5239 45.5505C37.2482 44.9688 38.8466 44.0655 40.2344 42.8883C40.3477 42.7924 40.4389 42.673 40.5016 42.5384C40.5643 42.4039 40.5972 42.2573 40.5978 42.1088L40.6171 37.7874L44.4479 35.6042C44.5761 35.5313 44.687 35.4316 44.7732 35.3119C44.8594 35.1923 44.9189 35.0554 44.9475 34.9108C45.2961 33.1504 45.2948 31.3386 44.9436 29.5787ZM30.8249 37.3855C29.809 37.3855 28.8158 37.0842 27.971 36.5197C27.1263 35.9553 26.4679 35.153 26.0791 34.2144C25.6903 33.2757 25.5886 32.2429 25.7868 31.2464C25.985 30.25 26.4742 29.3347 27.1926 28.6163C27.911 27.8979 28.8263 27.4086 29.8228 27.2104C30.8192 27.0122 31.8521 27.1139 32.7907 27.5027C33.7294 27.8915 34.5316 28.5499 35.0961 29.3947C35.6605 30.2394 35.9618 31.2326 35.9618 32.2486C35.9618 33.611 35.4206 34.9175 34.4572 35.8809C33.4939 36.8442 32.1873 37.3855 30.8249 37.3855Z"
                                fill="black"/>
                            <defs>
                                <linearGradient id="paint0_linear_79_533" x1="31.2344" y1="0.806945"
                                                x2="54.6602"
                                                y2="58.755" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F3F2FC"/>
                                    <stop offset="1" stop-color="white"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className={'flex flex-col gap-[0Apx]'}>
                            <h1 className={'text-[#9D9D9D] text-[32px] Bold'}>SETTINGS</h1>
                            <h3 className={'text-[18px] Semibold text-[#9B9B9B]'}>Dusa Hud |
                                www.devdusa.tebex.io</h3>
                        </div>
                    </div>
                    <div className={'flex gap-[14px] flex-col mr-[25px]'}>
                        <div onClick={() => {
                            setAktifhud({...aktifHud, dashboard: false})
                        }} className={'flex cursor-pointer flex-row gap-[12px]'}>
                            <div
                                className={'w-[50px] h-[21px] Bold text-[12px] flex justify-center items-center bg-white rounded-[1px]'}>
                                ESC
                            </div>
                            <h3 className={'text-[#9F9F9F] tet-[13px] font-medium'}>Exit Settings</h3>
                        </div>
                        <div className={'flex cursor-pointer flex-row gap-[12px]'}>
                            <div
                                className={'w-[50px] h-[21px] Bold text-[12px] flex justify-center items-center bg-white rounded-[1px]'}>
                                CLICK
                            </div>
                            <h3 className={'text-[#9F9F9F] tet-[13px] font-medium'}>to Save Settings</h3>
                        </div>
                    </div>
                </div>
                <div className={'mt-[40px] w-full flex flex-row p-[3px] dashboard3 '}>
                    <div onClick={() => {
                        setSettings({
                            ...settings,
                            main: 'general'
                        })
                    }}
                         className={`${settings.main === 'general' ? 'dashboard2 text-[#020710]' : 'text-[#9F9F9F]'} w-[33%] cursor-pointer flex justify-center items-center p-[3px]  h-[30px]`}>
                        <h1 className={' font-bold text-[14px]'}>General Settings</h1>
                    </div>
                    <div onClick={() => {
                        setSettings({
                            ...settings,
                            main: 'speedometers'
                        })
                    }}
                         className={`${settings.main === 'speedometers' ? 'dashboard2  text-[#020710]' : 'text-[#9F9F9F]'} cursor-pointer w-[33%] flex justify-center items-center p-[3px]  h-[30px]`}>
                        <h1 className={' font-bold text-[14px]'}>Speedometers</h1>
                    </div>
                    <div onClick={() => {
                        setSettings({
                            ...settings,
                            main: 'status'
                        })
                    }}
                         className={`${settings.main === 'status' ? 'dashboard2  text-[#020710]' : 'text-[#9F9F9F]'} cursor-pointer w-[34%] flex justify-center items-center p-[3px]  h-[30px]`}>
                        <h1 className={' font-bold text-[14px]'}>Status Settings</h1>
                    </div>
                </div>
                {settings.main === 'general' ?
                    <div
                        className={'px-[26px] overflow-hidden w-full xl:h-[600px] h-[380px] overflow-y-auto pr-[36px] mt-[31px] flex flex-col  gap-[17px]'}>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="25"
                                     viewBox="0 0 41 25" fill="none">
                                    <path
                                        d="M30.0665 3.03331V22.1665C30.0665 22.8915 29.7785 23.5867 29.2659 24.0993C28.7533 24.6119 28.0581 24.8999 27.3332 24.8999H2.73332C2.0084 24.8999 1.31317 24.6119 0.800571 24.0993C0.287974 23.5867 0 22.8915 0 22.1665V3.03331C0 2.30839 0.287974 1.61316 0.800571 1.10056C1.31317 0.587962 2.0084 0.299988 2.73332 0.299988H27.3332C28.0581 0.299988 28.7533 0.587962 29.2659 1.10056C29.7785 1.61316 30.0665 2.30839 30.0665 3.03331ZM39.9748 3.07602C39.782 3.02884 39.5814 3.02301 39.3862 3.05894C39.191 3.09486 39.0056 3.17171 38.8422 3.28443L33.1039 7.10937C33.0103 7.17182 32.9336 7.25643 32.8805 7.35567C32.8275 7.45491 32.7998 7.56571 32.7998 7.67824V17.5216C32.7998 17.6341 32.8275 17.7449 32.8805 17.8442C32.9336 17.9434 33.0103 18.028 33.1039 18.0905L38.8746 21.9376C39.0906 22.0817 39.3432 22.1613 39.6028 22.167C39.8624 22.1728 40.1182 22.1045 40.3404 21.9701C40.5459 21.8394 40.7145 21.6582 40.83 21.4437C40.9454 21.2293 41.0039 20.9888 40.9998 20.7452V4.39997C41 4.09687 40.8993 3.80231 40.7138 3.56265C40.5282 3.32298 40.2683 3.15179 39.9748 3.07602Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Cinematic Mode

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        cinematicm: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.cinematicm === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            cinematicm: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.cinematicm === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33"
                                     viewBox="0 0 33 33" fill="none">
                                    <path
                                        d="M32.999 12.941C32.9952 13.4775 32.8189 13.9985 32.4963 14.4272C32.1736 14.8559 31.7217 15.1694 31.2072 15.3216L19.0564 19.0608L15.3173 31.2115C15.1649 31.7259 14.8513 32.1777 14.4226 32.5003C13.994 32.8229 13.4731 32.9993 12.9366 33.0034H12.889C12.363 33.0083 11.8487 32.8473 11.4194 32.5433C10.99 32.2393 10.6674 31.8077 10.4973 31.3099L0.14627 3.39143C0.142919 3.3832 0.140264 3.37471 0.138335 3.36604C-0.0164024 2.91662 -0.0419019 2.43281 0.0647371 1.96962C0.171376 1.50643 0.405872 1.08247 0.74155 0.745967C1.07723 0.409463 1.50061 0.173924 1.96353 0.066146C2.42646 -0.0416322 2.91034 -0.0173226 3.36013 0.136308L3.38552 0.144244L31.3056 10.5016C31.8112 10.6744 32.2482 11.0043 32.5529 11.4432C32.8575 11.8821 33.0139 12.4069 32.999 12.941Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Show Location

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        showlocation: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.showlocation === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            showlocation: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.showlocation === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36"
                                     viewBox="0 0 38 36" fill="none">
                                    <path
                                        d="M37.4373 3.23203C37.2622 3.09561 37.0584 3.00086 36.8412 2.95496C36.6241 2.90906 36.3993 2.91322 36.184 2.96713L25.0161 5.75867L13.8079 0.153665C13.4956 -0.00209867 13.1379 -0.0409804 12.7994 0.0440502L1.10712 2.96713C0.790927 3.04616 0.510228 3.22861 0.309631 3.48548C0.109034 3.74235 4.93465e-05 4.0589 0 4.38482V30.6925C3.3624e-05 30.9146 0.0506772 31.1337 0.148085 31.3333C0.245492 31.5329 0.387101 31.7077 0.562156 31.8443C0.737211 31.981 0.941108 32.076 1.15836 32.122C1.37561 32.1681 1.60051 32.1641 1.81596 32.1102L12.9839 29.3187L24.1921 34.9237C24.3956 35.024 24.6193 35.0765 24.8462 35.0771C24.9656 35.0771 25.0847 35.0623 25.2006 35.0333L36.8929 32.1102C37.2091 32.0312 37.4898 31.8487 37.6904 31.5918C37.891 31.335 38 31.0184 38 30.6925V4.38482C38 4.16253 37.9494 3.94316 37.8519 3.74339C37.7544 3.54363 37.6126 3.36874 37.4373 3.23203ZM13.1538 26.3079C13.0344 26.308 12.9153 26.3227 12.7994 26.3517L2.92308 28.8199V5.52665L12.9839 3.01097L13.1538 3.09501V26.3079ZM35.0769 29.5507L25.0161 32.0664L24.8462 31.9823V8.76943C24.9656 8.76996 25.0846 8.75585 25.2006 8.72741L35.0769 6.25741V29.5507Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Minimap

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        minimap: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.minimap === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            minimap: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.minimap === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="35"
                                     viewBox="0 0 31 35" fill="none">
                                    <path
                                        d="M29.7083 0.0625H6.45833C4.74548 0.0625 3.10277 0.74293 1.8916 1.9541C0.68043 3.16527 0 4.80798 0 6.52083V18.1458C0 19.1735 0.408258 20.1592 1.13496 20.8859C1.86166 21.6126 2.84729 22.0208 3.875 22.0208H11.625L10.3511 29.5561C10.3395 29.6271 10.3336 29.6989 10.3333 29.7708C10.3333 31.1411 10.8777 32.4553 11.8466 33.4242C12.8156 34.3932 14.1297 34.9375 15.5 34.9375C16.8703 34.9375 18.1844 34.3932 19.1534 33.4242C20.1223 32.4553 20.6667 31.1411 20.6667 29.7708C20.6664 29.6989 20.6605 29.6271 20.6489 29.5561L19.375 22.0208H27.125C28.1527 22.0208 29.1383 21.6126 29.865 20.8859C30.5917 20.1592 31 19.1735 31 18.1458V1.35417C31 1.0116 30.8639 0.683055 30.6217 0.44082C30.3794 0.198586 30.0509 0.0625 29.7083 0.0625ZM6.45833 2.64583H23.25V9.10417C23.25 9.44674 23.3861 9.77528 23.6283 10.0175C23.8706 10.2597 24.1991 10.3958 24.5417 10.3958C24.8842 10.3958 25.2128 10.2597 25.455 10.0175C25.6972 9.77528 25.8333 9.44674 25.8333 9.10417V2.64583H28.4167V14.2708H2.58333V6.52083C2.58333 5.49312 2.99159 4.5075 3.71829 3.78079C4.445 3.05409 5.43062 2.64583 6.45833 2.64583Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Freeform Edit Mode

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        editmode: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.editmode === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            editmode: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.editmode === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28"
                                     viewBox="0 0 34 28" fill="none">
                                    <path
                                        d="M6.50532 0.381223C6.4058 0.269032 6.28499 0.177711 6.14991 0.112552C6.01483 0.0473936 5.86816 0.00969329 5.7184 0.00163658C5.56864 -0.00642013 5.41878 0.0153268 5.27748 0.0656172C5.13619 0.115908 5.00629 0.193741 4.8953 0.294607C4.78431 0.395472 4.69444 0.517363 4.63091 0.653216C4.56737 0.789068 4.53143 0.93618 4.52517 1.08602C4.51891 1.23587 4.54245 1.38547 4.59443 1.52614C4.64642 1.66682 4.7258 1.79579 4.82799 1.90556L7.55366 4.90464C2.40832 8.0624 0.195487 12.9301 0.0977365 13.1511C0.0332968 13.296 0 13.4529 0 13.6115C0 13.7701 0.0332968 13.927 0.0977365 14.0719C0.14732 14.1838 1.34724 16.8443 4.01482 19.5119C7.56924 23.0649 12.0587 24.9434 17 24.9434C19.5395 24.9579 22.0534 24.435 24.3766 23.4092L27.4933 26.8389C27.5928 26.9511 27.7136 27.0424 27.8487 27.1076C27.9838 27.1727 28.1304 27.2104 28.2802 27.2185C28.4299 27.2266 28.5798 27.2048 28.7211 27.1545C28.8624 27.1042 28.9923 27.0264 29.1033 26.9255C29.2143 26.8247 29.3041 26.7028 29.3677 26.5669C29.4312 26.4311 29.4671 26.284 29.4734 26.1341C29.4797 25.9843 29.4561 25.8347 29.4041 25.694C29.3522 25.5533 29.2728 25.4243 29.1706 25.3146L6.50532 0.381223ZM19.1137 17.6207C18.2247 18.0883 17.2056 18.2475 16.2163 18.0732C15.2271 17.8989 14.3238 17.401 13.6482 16.6576C12.9726 15.9143 12.563 14.9676 12.4838 13.9662C12.4046 12.9649 12.6602 11.9656 13.2104 11.1252L19.1137 17.6207ZM33.9023 14.0719C33.8428 14.2051 32.4077 17.3827 29.1763 20.2769C28.9536 20.4767 28.6609 20.5804 28.362 20.5653C28.0632 20.5502 27.7825 20.4175 27.5811 20.1962L13.2317 4.41164C13.0944 4.26101 13.0003 4.07615 12.9592 3.87652C12.9182 3.6769 12.9317 3.4699 12.9984 3.27733C13.0651 3.08475 13.1825 2.91373 13.3383 2.78226C13.494 2.6508 13.6823 2.56376 13.8833 2.53031C14.9135 2.36021 15.9559 2.2754 17 2.27672C21.9413 2.27672 26.4308 4.15523 29.9852 7.70964C32.6528 10.3772 33.8527 13.0391 33.9023 13.1511C33.9667 13.296 34 13.4529 34 13.6115C34 13.7701 33.9667 13.927 33.9023 14.0719Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Hide All Hud

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        hideallhud: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.hideallhud === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            hideallhud: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.hideallhud === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31"
                                     viewBox="0 0 30 31" fill="none">
                                    <path
                                        d="M23.1933 0.846047C23.2321 0.701265 23.2989 0.565532 23.3901 0.446603C23.4813 0.327675 23.5951 0.227882 23.7249 0.152927C23.8547 0.0779716 23.9979 0.029323 24.1465 0.00976038C24.2951 -0.00980221 24.4461 0.000104756 24.5909 0.0389153C26.8582 0.647829 28.7263 2.05104 29.8472 3.99329C29.9985 4.25539 30.0394 4.56684 29.9611 4.85915C29.8827 5.15145 29.6915 5.40065 29.4294 5.55194C29.1673 5.70322 28.8558 5.74419 28.5635 5.66583C28.2712 5.58747 28.022 5.39621 27.8707 5.13411C27.055 3.71949 25.6803 2.69275 24.0005 2.24355C23.8557 2.20483 23.72 2.13795 23.601 2.04675C23.4821 1.95555 23.3823 1.84181 23.3074 1.71203C23.2324 1.58225 23.1838 1.43897 23.1642 1.29038C23.1446 1.14179 23.1545 0.990806 23.1933 0.846047ZM8.26427 28.7662C6.92666 27.711 5.80865 26.3648 4.74911 24.5281C4.67421 24.3983 4.57447 24.2845 4.4556 24.1933C4.33673 24.1021 4.20106 24.0352 4.05632 23.9964C3.91159 23.9576 3.76063 23.9477 3.61207 23.9672C3.4635 23.9867 3.32024 24.0353 3.19047 24.1103C3.06069 24.1852 2.94694 24.2849 2.8557 24.4038C2.76447 24.5226 2.69755 24.6583 2.65875 24.803C2.61995 24.9478 2.61004 25.0987 2.62958 25.2473C2.64912 25.3959 2.69773 25.5391 2.77264 25.6689C3.98334 27.7652 5.27817 29.3181 6.85108 30.5573C7.08897 30.7403 7.3894 30.8222 7.68726 30.7853C7.98512 30.7483 8.25641 30.5954 8.44233 30.3598C8.62825 30.1241 8.71382 29.8247 8.68049 29.5264C8.64715 29.2282 8.49761 28.955 8.26427 28.7662ZM24.8932 4.9088C24.7454 4.64542 24.5468 4.414 24.3089 4.22796C24.071 4.04192 23.7986 3.90495 23.5074 3.825C23.2161 3.74505 22.9119 3.72371 22.6124 3.76222C22.3129 3.80073 22.024 3.89832 21.7624 4.04933C21.5009 4.20034 21.2719 4.40177 21.0889 4.64193C20.9058 4.8821 20.7722 5.15622 20.6958 5.44841C20.6195 5.7406 20.6019 6.04504 20.6441 6.34407C20.6863 6.64311 20.7874 6.93079 20.9417 7.19044L23.2233 11.142C23.2982 11.2717 23.3469 11.415 23.3664 11.5636C23.386 11.7121 23.3761 11.8631 23.3373 12.0078C23.2985 12.1526 23.2315 12.2883 23.1403 12.4071C23.049 12.526 22.9353 12.6257 22.8055 12.7006C21.7575 13.3058 20.9929 14.3025 20.6797 15.4714C20.3666 16.6403 20.5306 17.8857 21.1356 18.9338C21.2869 19.1959 21.3278 19.5073 21.2495 19.7996C21.1711 20.0919 20.9799 20.3411 20.7178 20.4924C20.4557 20.6437 20.1442 20.6847 19.8519 20.6063C19.5596 20.528 19.3104 20.3367 19.1591 20.0746C18.3522 18.6727 18.0671 17.0305 18.3541 15.4386C18.6412 13.8467 19.482 12.4076 20.7277 11.3758L14.9737 1.41503C14.6712 0.890838 14.1728 0.508308 13.5882 0.351593C13.0035 0.194877 12.3806 0.276815 11.8564 0.579379C11.3322 0.881944 10.9497 1.38035 10.793 1.96496C10.6363 2.54956 10.7182 3.17248 11.0208 3.69667L15.5841 11.6011C15.726 11.8625 15.7602 12.1689 15.6795 12.4551C15.5989 12.7413 15.4096 12.9847 15.1521 13.1334C14.8946 13.2821 14.5892 13.3245 14.301 13.2513C14.0128 13.1782 13.7645 12.9955 13.609 12.742L7.90491 2.86102C7.60235 2.33683 7.10394 1.9543 6.51933 1.79758C5.93473 1.64087 5.31181 1.72281 4.78762 2.02537C4.26342 2.32794 3.88089 2.82634 3.72418 3.41095C3.56746 3.99556 3.6494 4.61847 3.95197 5.14267L10.2265 16.0104C10.3061 16.1403 10.359 16.2848 10.3819 16.4354C10.4047 16.586 10.3972 16.7397 10.3598 16.8874C10.3223 17.035 10.2557 17.1737 10.1638 17.2952C10.0718 17.4167 9.95651 17.5185 9.82459 17.5947C9.69268 17.6709 9.54683 17.7199 9.39567 17.7388C9.24451 17.7578 9.09108 17.7462 8.94446 17.7049C8.79783 17.6635 8.66096 17.5933 8.54194 17.4982C8.42291 17.4031 8.32413 17.2851 8.25144 17.1512L4.25856 10.2364C4.10875 9.97688 3.90928 9.74938 3.67154 9.56691C3.4338 9.38445 3.16245 9.25059 2.87298 9.173C2.58352 9.0954 2.2816 9.07558 1.98447 9.11466C1.68734 9.15374 1.40082 9.25097 1.14127 9.40078C0.881711 9.5506 0.654207 9.75007 0.471742 9.98781C0.289277 10.2255 0.155424 10.4969 0.0778267 10.7864C0.00022929 11.0758 -0.0195936 11.3777 0.0194902 11.6749C0.058574 11.972 0.155799 12.2585 0.305614 12.5181L6.58013 23.3858C8.2481 26.2605 10.9883 28.3561 14.1995 29.2128C17.4107 30.0696 20.8306 29.6175 23.7089 27.9557C26.5872 26.2939 28.6887 23.5582 29.5523 20.3489C30.416 17.1395 29.9712 13.7186 28.3156 10.8368L24.8932 4.9088Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Restore Defaults

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        restored: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.restored === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            restored: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.restored === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28"
                                     viewBox="0 0 34 28" fill="none">
                                    <path
                                        d="M6.50532 0.381223C6.4058 0.269032 6.28499 0.177711 6.14991 0.112552C6.01483 0.0473936 5.86816 0.00969329 5.7184 0.00163658C5.56864 -0.00642013 5.41878 0.0153268 5.27748 0.0656172C5.13619 0.115908 5.00629 0.193741 4.8953 0.294607C4.78431 0.395472 4.69444 0.517363 4.63091 0.653216C4.56737 0.789068 4.53143 0.93618 4.52517 1.08602C4.51891 1.23587 4.54245 1.38547 4.59443 1.52614C4.64642 1.66682 4.7258 1.79579 4.82799 1.90556L7.55366 4.90464C2.40832 8.0624 0.195487 12.9301 0.0977365 13.1511C0.0332968 13.296 0 13.4529 0 13.6115C0 13.7701 0.0332968 13.927 0.0977365 14.0719C0.14732 14.1838 1.34724 16.8443 4.01482 19.5119C7.56924 23.0649 12.0587 24.9434 17 24.9434C19.5395 24.9579 22.0534 24.435 24.3766 23.4092L27.4933 26.8389C27.5928 26.9511 27.7136 27.0424 27.8487 27.1076C27.9838 27.1727 28.1304 27.2104 28.2802 27.2185C28.4299 27.2266 28.5798 27.2048 28.7211 27.1545C28.8624 27.1042 28.9923 27.0264 29.1033 26.9255C29.2143 26.8247 29.3041 26.7028 29.3677 26.5669C29.4312 26.4311 29.4671 26.284 29.4734 26.1341C29.4797 25.9843 29.4561 25.8347 29.4041 25.694C29.3522 25.5533 29.2728 25.4243 29.1706 25.3146L6.50532 0.381223ZM19.1137 17.6207C18.2247 18.0883 17.2056 18.2475 16.2163 18.0732C15.2271 17.8989 14.3238 17.401 13.6482 16.6576C12.9726 15.9143 12.563 14.9676 12.4838 13.9662C12.4046 12.9649 12.6602 11.9656 13.2104 11.1252L19.1137 17.6207ZM33.9023 14.0719C33.8428 14.2051 32.4077 17.3827 29.1763 20.2769C28.9536 20.4767 28.6609 20.5804 28.362 20.5653C28.0632 20.5502 27.7825 20.4175 27.5811 20.1962L13.2317 4.41164C13.0944 4.26101 13.0003 4.07615 12.9592 3.87652C12.9182 3.6769 12.9317 3.4699 12.9984 3.27733C13.0651 3.08475 13.1825 2.91373 13.3383 2.78226C13.494 2.6508 13.6823 2.56376 13.8833 2.53031C14.9135 2.36021 15.9559 2.2754 17 2.27672C21.9413 2.27672 26.4308 4.15523 29.9852 7.70964C32.6528 10.3772 33.8527 13.0391 33.9023 13.1511C33.9667 13.296 34 13.4529 34 13.6115C34 13.7701 33.9667 13.927 33.9023 14.0719Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Hide User Money

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        hideusermoney: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.hideusermoney === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            hideusermoney: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.hideusermoney === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28"
                                     viewBox="0 0 34 28" fill="none">
                                    <path
                                        d="M6.50532 0.381223C6.4058 0.269032 6.28499 0.177711 6.14991 0.112552C6.01483 0.0473936 5.86816 0.00969329 5.7184 0.00163658C5.56864 -0.00642013 5.41878 0.0153268 5.27748 0.0656172C5.13619 0.115908 5.00629 0.193741 4.8953 0.294607C4.78431 0.395472 4.69444 0.517363 4.63091 0.653216C4.56737 0.789068 4.53143 0.93618 4.52517 1.08602C4.51891 1.23587 4.54245 1.38547 4.59443 1.52614C4.64642 1.66682 4.7258 1.79579 4.82799 1.90556L7.55366 4.90464C2.40832 8.0624 0.195487 12.9301 0.0977365 13.1511C0.0332968 13.296 0 13.4529 0 13.6115C0 13.7701 0.0332968 13.927 0.0977365 14.0719C0.14732 14.1838 1.34724 16.8443 4.01482 19.5119C7.56924 23.0649 12.0587 24.9434 17 24.9434C19.5395 24.9579 22.0534 24.435 24.3766 23.4092L27.4933 26.8389C27.5928 26.9511 27.7136 27.0424 27.8487 27.1076C27.9838 27.1727 28.1304 27.2104 28.2802 27.2185C28.4299 27.2266 28.5798 27.2048 28.7211 27.1545C28.8624 27.1042 28.9923 27.0264 29.1033 26.9255C29.2143 26.8247 29.3041 26.7028 29.3677 26.5669C29.4312 26.4311 29.4671 26.284 29.4734 26.1341C29.4797 25.9843 29.4561 25.8347 29.4041 25.694C29.3522 25.5533 29.2728 25.4243 29.1706 25.3146L6.50532 0.381223ZM19.1137 17.6207C18.2247 18.0883 17.2056 18.2475 16.2163 18.0732C15.2271 17.8989 14.3238 17.401 13.6482 16.6576C12.9726 15.9143 12.563 14.9676 12.4838 13.9662C12.4046 12.9649 12.6602 11.9656 13.2104 11.1252L19.1137 17.6207ZM33.9023 14.0719C33.8428 14.2051 32.4077 17.3827 29.1763 20.2769C28.9536 20.4767 28.6609 20.5804 28.362 20.5653C28.0632 20.5502 27.7825 20.4175 27.5811 20.1962L13.2317 4.41164C13.0944 4.26101 13.0003 4.07615 12.9592 3.87652C12.9182 3.6769 12.9317 3.4699 12.9984 3.27733C13.0651 3.08475 13.1825 2.91373 13.3383 2.78226C13.494 2.6508 13.6823 2.56376 13.8833 2.53031C14.9135 2.36021 15.9559 2.2754 17 2.27672C21.9413 2.27672 26.4308 4.15523 29.9852 7.70964C32.6528 10.3772 33.8527 13.0391 33.9023 13.1511C33.9667 13.296 34 13.4529 34 13.6115C34 13.7701 33.9667 13.927 33.9023 14.0719Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Hide Online Users

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        hideonlineu: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.hideonlineu === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            hideonlineu: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.hideonlineu === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'flex flex-row w-full pr-[18px] items-center bg-[#D9D9D9]  bg-opacity-[6%] justify-between'}>
                            <div
                                className={'flex rounded-[5px] py-[21px] w-full px-[32px] gap-[39px] flex-row items-center '}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28"
                                     viewBox="0 0 34 28" fill="none">
                                    <path
                                        d="M6.50532 0.381223C6.4058 0.269032 6.28499 0.177711 6.14991 0.112552C6.01483 0.0473936 5.86816 0.00969329 5.7184 0.00163658C5.56864 -0.00642013 5.41878 0.0153268 5.27748 0.0656172C5.13619 0.115908 5.00629 0.193741 4.8953 0.294607C4.78431 0.395472 4.69444 0.517363 4.63091 0.653216C4.56737 0.789068 4.53143 0.93618 4.52517 1.08602C4.51891 1.23587 4.54245 1.38547 4.59443 1.52614C4.64642 1.66682 4.7258 1.79579 4.82799 1.90556L7.55366 4.90464C2.40832 8.0624 0.195487 12.9301 0.0977365 13.1511C0.0332968 13.296 0 13.4529 0 13.6115C0 13.7701 0.0332968 13.927 0.0977365 14.0719C0.14732 14.1838 1.34724 16.8443 4.01482 19.5119C7.56924 23.0649 12.0587 24.9434 17 24.9434C19.5395 24.9579 22.0534 24.435 24.3766 23.4092L27.4933 26.8389C27.5928 26.9511 27.7136 27.0424 27.8487 27.1076C27.9838 27.1727 28.1304 27.2104 28.2802 27.2185C28.4299 27.2266 28.5798 27.2048 28.7211 27.1545C28.8624 27.1042 28.9923 27.0264 29.1033 26.9255C29.2143 26.8247 29.3041 26.7028 29.3677 26.5669C29.4312 26.4311 29.4671 26.284 29.4734 26.1341C29.4797 25.9843 29.4561 25.8347 29.4041 25.694C29.3522 25.5533 29.2728 25.4243 29.1706 25.3146L6.50532 0.381223ZM19.1137 17.6207C18.2247 18.0883 17.2056 18.2475 16.2163 18.0732C15.2271 17.8989 14.3238 17.401 13.6482 16.6576C12.9726 15.9143 12.563 14.9676 12.4838 13.9662C12.4046 12.9649 12.6602 11.9656 13.2104 11.1252L19.1137 17.6207ZM33.9023 14.0719C33.8428 14.2051 32.4077 17.3827 29.1763 20.2769C28.9536 20.4767 28.6609 20.5804 28.362 20.5653C28.0632 20.5502 27.7825 20.4175 27.5811 20.1962L13.2317 4.41164C13.0944 4.26101 13.0003 4.07615 12.9592 3.87652C12.9182 3.6769 12.9317 3.4699 12.9984 3.27733C13.0651 3.08475 13.1825 2.91373 13.3383 2.78226C13.494 2.6508 13.6823 2.56376 13.8833 2.53031C14.9135 2.36021 15.9559 2.2754 17 2.27672C21.9413 2.27672 26.4308 4.15523 29.9852 7.70964C32.6528 10.3772 33.8527 13.0391 33.9023 13.1511C33.9667 13.296 34 13.4529 34 13.6115C34 13.7701 33.9667 13.927 33.9023 14.0719Z"
                                        fill="#999999"/>
                                </svg>
                                <div className={'flex flex-col'}>
                                    <h1 className={' text-[21px] font-bold text-[#939393]'}>
                                        Hide Server Logo

                                    </h1>
                                    <h2 className={'font-bold text-[12px] text-[#7D7D7D]'}>
                                        Off-On Settings
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                <div onClick={() => {
                                    setSettings({
                                        ...settings,
                                        hideserverlogo: true
                                    })
                                }}
                                     className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.hideserverlogo === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                    <h3>ON</h3>
                                </div>
                                <div
                                    onClick={() => {
                                        setSettings({
                                            ...settings,
                                            hideserverlogo: false
                                        })
                                    }}
                                    className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.hideserverlogo === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                    <h3>OFF</h3>
                                </div>
                            </div>
                        </div>
                        <div className={'ml-[11px]'}></div>
                    </div>
                    : ''}
                {settings.main === 'speedometers' ?
                    <div
                        className={'px-[26px] w-full h-[371px] xl:h-[600px] pr-[36px] mt-[31px] flex flex-col gap-[15px]'}>
                        <div className={'px-[28px] items-center flex rounded-[5px] py-3 w-full h-[87px] dashboard6'}>

                            <div className={'flex flex-row justify-between items-center w-full'}>
                                <div className={'flex  flex-row gap-[47px] items-center'}>
                                    <svg className={''} xmlns="http://www.w3.org/2000/svg" width="39" height="28"
                                         viewBox="0 0 39 28" fill="none">
                                        <path
                                            d="M39 20.3603V24.5389C39 25.2777 38.7065 25.9863 38.1841 26.5087C37.6617 27.0311 36.9531 27.3246 36.2143 27.3246H17.3985C17.2701 27.3247 17.1441 27.2893 17.0345 27.2223C16.9249 27.1552 16.836 27.0592 16.7776 26.9447C16.7193 26.8303 16.6937 26.702 16.7037 26.5739C16.7137 26.4458 16.7589 26.323 16.8344 26.2191L27.5559 11.4809C27.7782 11.1857 27.8774 10.8159 27.833 10.4491C27.7885 10.0823 27.6037 9.747 27.3174 9.51347C27.1701 9.39917 27.0013 9.31562 26.8211 9.26776C26.6409 9.2199 26.4529 9.20871 26.2683 9.23485C26.0837 9.26099 25.9062 9.32393 25.7464 9.41994C25.5865 9.51595 25.4476 9.64308 25.3378 9.79378L12.8021 27.0408C12.7364 27.1302 12.6503 27.2026 12.551 27.2519C12.4516 27.3013 12.3419 27.3262 12.231 27.3246H2.78571C2.0469 27.3246 1.33834 27.0311 0.815917 26.5087C0.293494 25.9863 0 25.2777 0 24.5389V20.5571C0 20.2454 -1.45286e-07 19.9355 0.0226338 19.6291C0.031575 19.4505 0.108877 19.2822 0.238527 19.159C0.368176 19.0358 0.540236 18.9673 0.719062 18.9675H5.57143C5.76237 18.9679 5.95136 18.9291 6.12666 18.8534C6.30196 18.7777 6.45982 18.6667 6.59044 18.5275C6.72107 18.3882 6.82166 18.2235 6.88597 18.0438C6.95028 17.864 6.97694 17.6729 6.96429 17.4824C6.93348 17.1236 6.76775 16.7898 6.50052 16.5485C6.2333 16.3071 5.88447 16.176 5.52442 16.1818H1.37893C1.27269 16.1817 1.16787 16.1573 1.0725 16.1105C0.977133 16.0637 0.893743 15.9956 0.828714 15.9116C0.763685 15.8276 0.71874 15.7298 0.69732 15.6258C0.6759 15.5217 0.678573 15.4141 0.705134 15.3112C2.79442 7.67838 9.35129 1.88236 17.3358 0.985704C17.4334 0.975155 17.5321 0.985336 17.6254 1.01558C17.7187 1.04582 17.8046 1.09545 17.8774 1.1612C17.9503 1.22695 18.0084 1.30735 18.048 1.39712C18.0875 1.4869 18.1077 1.58402 18.1071 1.68213V6.43178C18.1067 6.62272 18.1456 6.81171 18.2213 6.98701C18.297 7.16231 18.4079 7.32017 18.5472 7.45079C18.6864 7.58141 18.8511 7.682 19.0309 7.74631C19.2107 7.81063 19.4018 7.83728 19.5923 7.82463C19.9511 7.79383 20.2848 7.62809 20.5262 7.36087C20.7675 7.09364 20.8986 6.74482 20.8929 6.38477V1.67343C20.8923 1.57532 20.9125 1.47819 20.952 1.38842C20.9916 1.29864 21.0497 1.21825 21.1226 1.15249C21.1954 1.08674 21.2813 1.03712 21.3746 1.00687C21.4679 0.976631 21.5666 0.96645 21.6642 0.976998C25.5623 1.41503 29.2382 3.01669 32.2132 5.57338C35.1882 8.13007 37.3244 11.5233 38.3436 15.3112C38.3702 15.4143 38.3729 15.522 38.3513 15.6262C38.3298 15.7304 38.2847 15.8283 38.2195 15.9123C38.1543 15.9964 38.0707 16.0643 37.9751 16.1111C37.8795 16.1578 37.7745 16.182 37.6681 16.1818H33.4756C33.1161 16.1769 32.7682 16.3084 32.5017 16.5497C32.2352 16.791 32.07 17.1242 32.0392 17.4824C32.0265 17.6729 32.0532 17.864 32.1175 18.0438C32.1818 18.2235 32.2824 18.3882 32.413 18.5275C32.5437 18.6667 32.7015 18.7777 32.8768 18.8534C33.0521 18.9291 33.2411 18.9679 33.4321 18.9675H38.2931C38.4737 18.9674 38.6472 19.0374 38.7772 19.1628C38.9071 19.2882 38.9832 19.4591 38.9896 19.6395C39 19.8781 39 20.1183 39 20.3603Z"
                                            fill="#999999"/>
                                    </svg>
                                    <div className={'flex flex-col '}>
                                        <h3 className={'Semibold text-[21px] text-[#939393]'}>Speed Type (KMH/MPH)</h3>
                                        <h3 className={'font-semibold text-[12px] text-[#7D7D7D]'}>Off-On Settings</h3>

                                    </div>
                                </div>
                                <div
                                    className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                    <div onClick={() => {
                                        setSettings({
                                            ...settings,
                                            speedomod: "kmh"
                                        })
                                    }}
                                         className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.speedomod === "kmh" ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                        <h3>KMH</h3>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setSettings({
                                                ...settings,
                                                speedomod: "mph"
                                            })
                                        }}
                                        className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.speedomod === "mph" ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                        <h3>MPH</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-[11px] overflow-y-auto'}>
                            <div className={'flex flex-row gap-[10px]'}>
                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo1} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #1
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 1
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 1 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 1 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo2} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #2
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 2
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 2 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 2 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo3} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #3
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 3
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 3 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 3 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo4} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #4
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 4
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 4 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 4 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo5} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #5
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 5
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 5 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 5 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className={'flex flex-row gap-[10px]'}>
                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo6} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #6
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 6
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 6 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 6 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo7} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #7
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 7
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 7 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 7 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo8} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #8
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 8
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 8 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 8 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo9} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #9
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 9
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 9 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 9 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={'w-[20%] dashboard7 h-[231px] flex flex-col pt-[20px] justify-start items-center'}>
                                    <div className={' flex justify-center items-center flex-col'}>
                                        <img src={speedo10} className={'w-[195px] h-[80px]'} alt=""/>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Speedometer #10
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div onClick={() => {
                                        setAktifhud({
                                            ...aktifHud,
                                            speedotype: 10
                                        })
                                    }} className={'px-[23px] w-full'}>
                                        <div
                                            className={`${aktifHud.speedotype === 10 ? 'dashboard8' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-full h-[32px]`}>
                                            {aktifHud.speedotype === 10 ? 'Selected' : 'Select'}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> : ''}
                {settings.main === 'status' ?
                    <div
                        className={'px-[26px] w-full xl:h-[600px] h-[371px] pr-[36px] mt-[31px] flex flex-col gap-[15px]'}>
                        <div className={'px-[28px] items-center flex rounded-[5px] py-3 w-full h-[87px] dashboard6'}>

                            <div className={'flex flex-row justify-between items-center w-full'}>
                                <div className={'flex  flex-row gap-[47px] items-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28"
                                         fill="none">
                                        <path
                                            d="M6.50532 0.381223C6.4058 0.269032 6.28499 0.177711 6.14991 0.112552C6.01483 0.0473936 5.86816 0.00969329 5.7184 0.00163658C5.56864 -0.00642013 5.41878 0.0153268 5.27748 0.0656172C5.13619 0.115908 5.00629 0.193741 4.8953 0.294607C4.78431 0.395472 4.69444 0.517363 4.63091 0.653216C4.56737 0.789068 4.53143 0.93618 4.52517 1.08602C4.51891 1.23587 4.54245 1.38547 4.59443 1.52614C4.64642 1.66682 4.7258 1.79579 4.82799 1.90556L7.55366 4.90464C2.40832 8.0624 0.195487 12.9301 0.0977365 13.1511C0.0332968 13.296 0 13.4529 0 13.6115C0 13.7701 0.0332968 13.927 0.0977365 14.0719C0.14732 14.1838 1.34724 16.8443 4.01482 19.5119C7.56924 23.0649 12.0587 24.9434 17 24.9434C19.5395 24.9579 22.0534 24.435 24.3766 23.4092L27.4933 26.8389C27.5928 26.9511 27.7136 27.0424 27.8487 27.1076C27.9838 27.1727 28.1304 27.2104 28.2802 27.2185C28.4299 27.2266 28.5798 27.2048 28.7211 27.1545C28.8624 27.1042 28.9923 27.0264 29.1033 26.9255C29.2143 26.8247 29.3041 26.7028 29.3677 26.5669C29.4312 26.4311 29.4671 26.284 29.4734 26.1341C29.4797 25.9843 29.4561 25.8347 29.4041 25.694C29.3522 25.5533 29.2728 25.4243 29.1706 25.3146L6.50532 0.381223ZM19.1137 17.6207C18.2247 18.0883 17.2056 18.2475 16.2163 18.0732C15.2271 17.8989 14.3238 17.401 13.6482 16.6576C12.9726 15.9143 12.563 14.9676 12.4838 13.9662C12.4046 12.9649 12.6602 11.9656 13.2104 11.1252L19.1137 17.6207ZM33.9023 14.0719C33.8428 14.2051 32.4077 17.3827 29.1763 20.2769C28.9536 20.4767 28.6609 20.5804 28.362 20.5653C28.0632 20.5502 27.7825 20.4175 27.5811 20.1962L13.2317 4.41164C13.0944 4.26101 13.0003 4.07615 12.9592 3.87652C12.9182 3.6769 12.9317 3.4699 12.9984 3.27733C13.0651 3.08475 13.1825 2.91373 13.3383 2.78226C13.494 2.6508 13.6823 2.56376 13.8833 2.53031C14.9135 2.36021 15.9559 2.2754 17 2.27672C21.9413 2.27672 26.4308 4.15523 29.9852 7.70964C32.6528 10.3772 33.8527 13.0391 33.9023 13.1511C33.9667 13.296 34 13.4529 34 13.6115C34 13.7701 33.9667 13.927 33.9023 14.0719Z"
                                            fill="#999999"/>
                                    </svg>
                                    <div className={'flex flex-col '}>
                                        <h3 className={'Semibold text-[21px] text-[#939393]'}>Hide All Status</h3>
                                        <h3 className={'font-semibold text-[12px] text-[#7D7D7D]'}>Off-On Settings</h3>

                                    </div>
                                </div>
                                <div
                                    className={'w-[139px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                    <div onClick={() => {
                                        setSettings({
                                            ...settings,
                                            hideallstatus: true,
                                        })
                                    }}
                                         className={`w-[50%] rounded-[8px]  flex justify-center items-center h-12 ${settings.hideallstatus === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                        <h3>ON</h3>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setSettings({
                                                ...settings,
                                                hideallstatus: false,
                                            })
                                        }}
                                        className={`w-[50%] rounded-[8px] flex  justify-center h-12 items-center ${settings.hideallstatus === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                        <h3>OFF</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-[11px] overflow-y-auto'}>
                            <div className={'flex flex-row gap-[10px]'}>
                                <div
                                    className={'w-[33%] dashboard7 h-[70px] flex flex-row pl-[29px] pr-[15px] justify-between items-center'}>
                                    <div className={'flex flex-row items-center gap-[20px]'}>
                                        <svg className={'w-[23px] h-[23px]'} xmlns="http://www.w3.org/2000/svg"
                                             width="22" height="21" viewBox="0 0 22 21" fill="none">
                                            <path
                                                d="M19.6001 2.58432C17.5505 0.448546 14.2226 0.448546 12.173 2.58432L10.7779 4.03016L9.38283 2.57925C7.32822 0.443473 4.00534 0.443473 1.95581 2.57925C-0.352456 4.97883 -0.352456 8.87497 1.95581 11.2745L10.7779 20.4619L19.6001 11.2796C21.9083 8.88004 21.9083 4.9839 19.6001 2.58432Z"
                                                fill="#999999"/>
                                        </svg>
                                        <div className={'flex flex-col '}>
                                            <h3 className={'Semibold text-[17px] text-[#939393]'}>Hide Health</h3>
                                            <h3 className={'font-semibold text-[9px] text-[#7D7D7D]'}>Off-On
                                                Settings</h3>

                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                hidehealth: true,
                                            })
                                        }}
                                             className={`w-[50%] text-[12px] rounded-[8px]  flex justify-center items-center h-12 ${settings.hidehealth === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                            <h3>ON</h3>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setSettings({
                                                    ...settings,
                                                    hidehealth: false,
                                                })
                                            }}
                                            className={`w-[50%] text-[12px] rounded-[8px] flex  justify-center h-12 items-center ${settings.hidehealth === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                            <h3>OFF</h3>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className={'w-[33%] dashboard7 h-[70px] flex flex-row pl-[29px] pr-[15px] justify-between items-center'}>
                                    <div className={'flex flex-row items-center gap-[20px]'}>
                                        <svg className={'w-[23px] h-[23px]'} xmlns="http://www.w3.org/2000/svg"
                                             width="21" height="18" viewBox="0 0 21 18" fill="none">
                                            <path
                                                d="M2.69855 6.59827C2.56413 6.43289 2.46849 6.23947 2.41869 6.03224C2.36889 5.82502 2.36619 5.60926 2.41078 5.40086C3.07275 2.27189 6.65609 -1.16377e-09 10.9326 -2.03659e-09C15.2091 -2.90941e-09 18.7924 2.27189 19.4544 5.40086C19.4995 5.60942 19.4972 5.82543 19.4476 6.03298C19.3981 6.24053 19.3026 6.4343 19.1682 6.60002C19.0337 6.76573 18.8638 6.89915 18.671 6.99045C18.4781 7.08174 18.2672 7.12857 18.0538 7.12749L3.81133 7.12749C3.59808 7.12813 3.3874 7.08092 3.19481 6.98933C3.00222 6.89774 2.83264 6.7641 2.69855 6.59827ZM19.9542 11.4467L16.2898 12.7832L12.9817 11.4548C12.8119 11.3869 12.6224 11.3869 12.4525 11.4548L9.15606 12.7742L5.85425 11.4548C5.6917 11.3898 5.51094 11.387 5.34642 11.4467L1.4263 12.8722C1.26062 12.9452 1.12889 13.0784 1.05786 13.2449C0.986827 13.4114 0.981811 13.5987 1.04383 13.7688C1.10585 13.9388 1.23025 14.0789 1.39179 14.1606C1.55333 14.2423 1.73991 14.2595 1.91364 14.2087L3.09235 13.7819L3.09235 14.255C3.09235 15.2001 3.46781 16.1066 4.13615 16.7749C4.80448 17.4433 5.71093 17.8187 6.65609 17.8187L15.2091 17.8187C16.1542 17.8187 17.0607 17.4433 17.729 16.7749C18.3974 16.1066 18.7728 15.2001 18.7728 14.255L18.7728 13.3934L20.4415 12.7867C20.5351 12.7593 20.6221 12.713 20.6971 12.6507C20.772 12.5884 20.8334 12.5113 20.8774 12.4243C20.9214 12.3373 20.9471 12.2422 20.9529 12.1449C20.9586 12.0475 20.9444 11.9501 20.911 11.8585C20.8776 11.7669 20.8257 11.6831 20.7587 11.6123C20.6916 11.5416 20.6107 11.4853 20.521 11.4471C20.4314 11.4088 20.3348 11.3894 20.2373 11.3899C20.1398 11.3905 20.0434 11.411 19.9542 11.4503L19.9542 11.4467ZM1.66685 9.97849L20.1983 9.97849C20.3874 9.97849 20.5686 9.90339 20.7023 9.76973C20.836 9.63606 20.9111 9.45477 20.9111 9.26574C20.9111 9.0767 20.836 8.89541 20.7023 8.76175C20.5686 8.62808 20.3874 8.55299 20.1983 8.55299L1.66685 8.55299C1.47782 8.55299 1.29653 8.62808 1.16286 8.76175C1.02919 8.89541 0.954102 9.0767 0.954102 9.26574C0.954102 9.45477 1.02919 9.63606 1.16286 9.76973C1.29653 9.90339 1.47782 9.97849 1.66685 9.97849Z"
                                                fill="#999999"/>
                                        </svg>
                                        <div className={'flex flex-col '}>
                                            <h3 className={'Semibold text-[17px] text-[#939393]'}>Hide Hungry</h3>
                                            <h3 className={'font-semibold text-[9px] text-[#7D7D7D]'}>Off-On
                                                Settings</h3>

                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                hidehungry: true,
                                            })
                                        }}
                                             className={`w-[50%] text-[12px] rounded-[8px]  flex justify-center items-center h-12 ${settings.hidehungry === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                            <h3>ON</h3>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setSettings({
                                                    ...settings,
                                                    hidehungry: false,
                                                })
                                            }}
                                            className={`w-[50%] text-[12px] rounded-[8px] flex  justify-center h-12 items-center ${settings.hidehungry === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                            <h3>OFF</h3>
                                        </div>
                                    </div>

                                </div>

                                <div
                                    className={'w-[33%] dashboard7 h-[70px] flex flex-row pl-[29px] pr-[15px] justify-between items-center'}>
                                    <div className={'flex flex-row items-center gap-[20px]'}>
                                        <svg className={'w-[23px] h-[23px]'} xmlns="http://www.w3.org/2000/svg"
                                             width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path
                                                d="M17.992 3.19495L17.63 3.16709C13.508 2.84481 9.25465 0.163119 9.21484 0.139247L9 0L8.78515 0.139247C8.74535 0.163119 4.49204 2.84481 0.37003 3.16709L0.00797223 3.19495L6.90757e-06 3.55703C6.90757e-06 3.66048 -0.0517196 13.8501 8.79708 19.118L9 19.2374L9.20292 19.118C18.0517 13.8501 18 3.66048 18 3.55703L17.992 3.19495Z"
                                                fill="#999999"/>
                                        </svg>
                                        <div className={'flex flex-col '}>
                                            <h3 className={'Semibold text-[17px] text-[#939393]'}>Hide Armor</h3>
                                            <h3 className={'font-semibold text-[9px] text-[#7D7D7D]'}>Off-On
                                                Settings</h3>

                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                hidearmory: true,
                                            })
                                        }}
                                             className={`w-[50%] text-[12px] rounded-[8px]  flex justify-center items-center h-12 ${settings.hidearmory === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                            <h3>ON</h3>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setSettings({
                                                    ...settings,
                                                    hidearmory: false,
                                                })
                                            }}
                                            className={`w-[50%] text-[12px] rounded-[8px] flex  justify-center h-12 items-center ${settings.hidearmory === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                            <h3>OFF</h3>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div className={'flex flex-row gap-[10px]'}>
                                <div
                                    className={'w-[33%] dashboard7 h-[70px] flex flex-row pl-[29px] pr-[15px] justify-between items-center'}>
                                    <div className={'flex flex-row items-center gap-[20px]'}>
                                        <svg className={'w-[23px] h-[23px]'} xmlns="http://www.w3.org/2000/svg"
                                             width="15" height="20" viewBox="0 0 15 20" fill="none">
                                            <path
                                                d="M7.5 20C11.625 20 15 16.625 15 12.5C15 8.375 7.5 1.53074e-09 7.5 1.53074e-09C7.5 1.53074e-09 -1.73483e-09 8.5 -2.55123e-09 12.5C-3.36762e-09 16.5 3.375 20 7.5 20Z"
                                                fill="#999999"/>
                                        </svg>
                                        <div className={'flex flex-col '}>
                                            <h3 className={'Semibold text-[17px] text-[#939393]'}>Hide Dehydration</h3>
                                            <h3 className={'font-semibold text-[9px] text-[#7D7D7D]'}>Off-On
                                                Settings</h3>

                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                hidedeh: true,
                                            })
                                        }}
                                             className={`w-[50%] text-[12px] rounded-[8px]  flex justify-center items-center h-12 ${settings.hidedeh === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                            <h3>ON</h3>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setSettings({
                                                    ...settings,
                                                    hidedeh: false,
                                                })
                                            }}
                                            className={`w-[50%] text-[12px] rounded-[8px] flex  justify-center h-12 items-center ${settings.hidedeh === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                            <h3>OFF</h3>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className={'w-[33%] dashboard7 h-[70px] flex flex-row pl-[29px] pr-[15px] justify-between items-center'}>
                                    <div className={'flex flex-row items-center gap-[20px]'}>
                                        <svg className={'w-[23px] h-[23px]'} xmlns="http://www.w3.org/2000/svg"
                                             width="16" height="22" viewBox="0 0 16 22" fill="none">
                                            <path
                                                d="M7.11017 21.9959C6.99423 21.9958 6.87921 21.9755 6.77023 21.936C6.56002 21.859 6.38172 21.7137 6.26389 21.5234C6.14606 21.333 6.09551 21.1086 6.12035 20.8862L6.89021 13.7975H1.00132C0.819685 13.7978 0.641406 13.7486 0.485631 13.6551C0.329856 13.5617 0.202471 13.4276 0.117155 13.2673C0.0318402 13.1069 -0.00818127 12.9264 0.00138906 12.745C0.0109594 12.5636 0.0697601 12.3883 0.171476 12.2378L8.05999 0.440014C8.18475 0.255387 8.36761 0.117729 8.57955 0.048897C8.79148 -0.0199354 9.02033 -0.0159975 9.22977 0.0600857C9.43111 0.134835 9.60303 0.27243 9.72008 0.452502C9.83712 0.632573 9.89307 0.845548 9.87965 1.0599L9.10979 8.19855H14.9987C15.1803 8.19827 15.3586 8.24749 15.5144 8.3409C15.6701 8.43431 15.7975 8.56839 15.8828 8.72874C15.9682 8.88909 16.0082 9.06965 15.9986 9.25104C15.989 9.43242 15.9302 9.60777 15.8285 9.75825L7.94001 21.556C7.8483 21.6917 7.72466 21.8028 7.57996 21.8795C7.43526 21.9562 7.27394 21.9962 7.11017 21.9959Z"
                                                fill="#999999"/>
                                        </svg>
                                        <div className={'flex flex-col '}>
                                            <h3 className={'Semibold text-[17px] text-[#939393]'}>Hide Energy</h3>
                                            <h3 className={'font-semibold text-[9px] text-[#7D7D7D]'}>Off-On
                                                Settings</h3>

                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                hideenegry: true,
                                            })
                                        }}
                                             className={`w-[50%] text-[12px] rounded-[8px]  flex justify-center items-center h-12 ${settings.hideenegry === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                            <h3>ON</h3>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setSettings({
                                                    ...settings,
                                                    hideenegry: false,
                                                })
                                            }}
                                            className={`w-[50%] text-[12px] rounded-[8px] flex  justify-center h-12 items-center ${settings.hideenegry === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                            <h3>OFF</h3>
                                        </div>
                                    </div>

                                </div>

                                <div
                                    className={'w-[33%] dashboard7 h-[70px] flex flex-row pl-[29px] pr-[15px] justify-between items-center'}>
                                    <div className={'flex flex-row items-center gap-[20px]'}>
                                        <svg className={'w-[23px] h-[23px]'} xmlns="http://www.w3.org/2000/svg"
                                             width="25" height="22" viewBox="0 0 25 22" fill="none">
                                            <path
                                                d="M21.5515 5.17265V4.7416C21.5504 3.80756 21.2734 2.89465 20.7554 2.11744C20.2373 1.34024 19.5012 0.733353 18.6395 0.372945C17.7778 0.0125365 16.8289 -0.0853385 15.9117 0.0916018C14.9946 0.268542 14.1502 0.712415 13.4844 1.36752C13.445 1.40721 13.4138 1.45432 13.3928 1.5061C13.3717 1.55789 13.3611 1.61334 13.3615 1.66926V11.23C13.3617 11.3078 13.3829 11.384 13.4229 11.4506C13.4629 11.5173 13.5201 11.5719 13.5886 11.6086C13.6571 11.6454 13.7342 11.663 13.8118 11.6595C13.8895 11.656 13.9647 11.6316 14.0296 11.5889C14.8494 11.0633 15.8017 10.7815 16.7755 10.7764C17.0009 10.7722 17.2193 10.8545 17.3859 11.0064C17.5525 11.1584 17.6545 11.3684 17.671 11.5932C17.6771 11.7102 17.6594 11.8272 17.6188 11.937C17.5783 12.0469 17.5157 12.1474 17.435 12.2323C17.3544 12.3172 17.2572 12.3848 17.1496 12.4309C17.0419 12.477 16.926 12.5007 16.8089 12.5006C15.8943 12.5006 15.0172 12.8639 14.3705 13.5106C13.7237 14.1573 13.3604 15.0344 13.3604 15.949V19.6C13.3603 19.6645 13.3747 19.7282 13.4025 19.7864C13.4303 19.8446 13.4708 19.8958 13.521 19.9363C14.1328 20.4426 14.853 20.8009 15.6259 20.9836C16.3987 21.1662 17.2032 21.1681 17.9769 20.9892C18.7505 20.8103 19.4725 20.4554 20.0867 19.9521C20.7009 19.4487 21.1907 18.8105 21.5181 18.087C21.5511 18.0143 21.5632 17.9338 21.5531 17.8546C21.543 17.7754 21.511 17.7005 21.4609 17.6384C21.4107 17.5762 21.3442 17.5292 21.2689 17.5027C21.1936 17.4761 21.1123 17.471 21.0343 17.4879C20.497 17.611 19.9475 17.6732 19.3963 17.6732H18.5633C18.3408 17.676 18.1256 17.5945 17.9607 17.4452C17.7958 17.2959 17.6935 17.0898 17.6742 16.8682C17.6664 16.7503 17.6829 16.632 17.7227 16.5208C17.7625 16.4095 17.8248 16.3076 17.9056 16.2214C17.9864 16.1352 18.0842 16.0665 18.1927 16.0196C18.3012 15.9728 18.4181 15.9488 18.5363 15.949H19.3984C20.2991 15.9504 21.1867 15.7329 21.9848 15.3154C22.9299 14.8231 23.715 14.0716 24.2482 13.149C24.7813 12.2264 25.0404 11.1708 24.9949 10.1062C24.9494 9.04155 24.6013 8.01195 23.9915 7.13813C23.3816 6.26431 22.5352 5.5825 21.5515 5.17265ZM20.2584 9.05214H19.8273C18.7984 9.05214 17.8117 8.64341 17.0841 7.91587C16.3566 7.18832 15.9478 6.20156 15.9478 5.17265V4.7416C15.9478 4.51295 16.0387 4.29367 16.2003 4.132C16.362 3.97032 16.5813 3.87949 16.8099 3.87949C17.0386 3.87949 17.2579 3.97032 17.4195 4.132C17.5812 4.29367 17.6721 4.51295 17.6721 4.7416V5.17265C17.6721 5.45569 17.7278 5.73595 17.8361 5.99744C17.9444 6.25893 18.1032 6.49653 18.3033 6.69666C18.7075 7.10085 19.2557 7.32793 19.8273 7.32793H20.2584C20.487 7.32793 20.7063 7.41875 20.868 7.58043C21.0297 7.74211 21.1205 7.96139 21.1205 8.19003C21.1205 8.41868 21.0297 8.63796 20.868 8.79964C20.7063 8.96131 20.487 9.05214 20.2584 9.05214ZM8.18886 3.81035e-07C6.93174 0.00142649 5.72653 0.501444 4.83762 1.39036C3.9487 2.27927 3.44868 3.48449 3.44726 4.7416V5.17265C2.46373 5.58272 1.61751 6.26471 1.00784 7.13865C0.398158 8.01259 0.0503005 9.04225 0.005055 10.1069C-0.0401905 11.1715 0.219052 12.227 0.752381 13.1495C1.28571 14.072 2.07102 14.8233 3.0162 15.3154C3.81427 15.7329 4.70183 15.9504 5.60253 15.949H6.43554C6.65833 15.9457 6.87409 16.0269 7.03944 16.1763C7.20478 16.3256 7.30743 16.532 7.32675 16.754C7.33458 16.8719 7.31808 16.9902 7.27827 17.1015C7.23847 17.2128 7.17621 17.3147 7.09536 17.4009C7.01451 17.4871 6.9168 17.5557 6.8083 17.6026C6.6998 17.6494 6.58282 17.6735 6.46464 17.6732H5.60253C5.05087 17.6735 4.50097 17.6109 3.96345 17.4868C3.88544 17.4698 3.80424 17.4748 3.7289 17.5012C3.65356 17.5276 3.58704 17.5745 3.53675 17.6365C3.48647 17.6985 3.4544 17.7733 3.44411 17.8524C3.43383 17.9316 3.44574 18.0121 3.47851 18.0849C3.80582 18.8085 4.29561 19.447 4.90981 19.9505C5.524 20.4541 6.24604 20.8092 7.01982 20.9883C7.79359 21.1674 8.59825 21.1657 9.37124 20.9832C10.1442 20.8008 10.8647 20.4425 11.4767 19.9363C11.5269 19.8958 11.5674 19.8446 11.5952 19.7864C11.623 19.7282 11.6374 19.6645 11.6373 19.6V15.949C11.6373 15.0344 11.274 14.1573 10.6273 13.5106C9.98056 12.8639 9.10344 12.5006 8.18886 12.5006C8.07173 12.5007 7.9558 12.477 7.84814 12.4309C7.74048 12.3848 7.64335 12.3172 7.56268 12.2323C7.482 12.1474 7.41947 12.0469 7.37891 11.937C7.33835 11.8272 7.3206 11.7102 7.32675 11.5932C7.34325 11.3682 7.44543 11.158 7.61223 11.0061C7.77902 10.8541 7.99774 10.7719 8.22334 10.7764C9.19713 10.7815 10.1494 11.0633 10.9692 11.5889C11.0341 11.6316 11.1093 11.656 11.187 11.6595C11.2646 11.663 11.3417 11.6454 11.4102 11.6086C11.4787 11.5719 11.5359 11.5173 11.5759 11.4506C11.6159 11.384 11.6371 11.3078 11.6373 11.23V1.66926C11.6377 1.55611 11.5935 1.44735 11.5144 1.36644C10.6293 0.490567 9.43413 -0.000499348 8.18886 3.81035e-07ZM9.05097 5.17265C9.05097 6.20156 8.64223 7.18832 7.91469 7.91587C7.18714 8.64341 6.20038 9.05214 5.17148 9.05214H4.74042C4.51178 9.05214 4.2925 8.96131 4.13082 8.79964C3.96914 8.63796 3.87831 8.41868 3.87831 8.19003C3.87831 7.96139 3.96914 7.74211 4.13082 7.58043C4.2925 7.41875 4.51178 7.32793 4.74042 7.32793H5.17148C5.45451 7.32793 5.73477 7.27218 5.99626 7.16387C6.25775 7.05555 6.49535 6.8968 6.69548 6.69666C6.89562 6.49653 7.05438 6.25893 7.16269 5.99744C7.271 5.73595 7.32675 5.45569 7.32675 5.17265V4.7416C7.32675 4.51295 7.41758 4.29367 7.57925 4.132C7.74093 3.97032 7.96021 3.87949 8.18886 3.87949C8.4175 3.87949 8.63678 3.97032 8.79846 4.132C8.96014 4.29367 9.05097 4.51295 9.05097 4.7416V5.17265Z"
                                                fill="#999999"/>
                                        </svg>
                                        <div className={'flex flex-col '}>
                                            <h3 className={'Semibold text-[17px] text-[#939393]'}>Hide Stress</h3>
                                            <h3 className={'font-semibold text-[9px] text-[#7D7D7D]'}>Off-On
                                                Settings</h3>

                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100px] items-center flex-row flex items-center h-[49px] dashboard4'}>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                hidestress: true,
                                            })
                                        }}
                                             className={`w-[50%] text-[12px] rounded-[8px]  flex justify-center items-center h-12 ${settings.hidestress === true ? 'text-[#E0E0E0] dashboard5 mr-1' : 'text-[#7D7D7E]'} cursor-pointer transition-shadow ease-in-out duration-200 p-[15px]`}>
                                            <h3>ON</h3>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setSettings({
                                                    ...settings,
                                                    hidestress: false,
                                                })
                                            }}
                                            className={`w-[50%] text-[12px] rounded-[8px] flex  justify-center h-12 items-center ${settings.hidestress === false ? 'text-[#E0E0E0] dashboard5' : 'text-[#7D7D7E] dashboard ml-1'} cursor-pointer ease-in-out  duration-200 p-[15px]`}>
                                            <h3>OFF</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={'grid grid-rows-auto h-full grid-cols-3 w-full gap-[10px] pr-1'}>
                                <div
                                    className={'w-[340px] h-[230px] items-center flex-col flex pb-[20px]  pt-[20px] dashboard10'}>
                                    <svg className={'w-[200px] h-[100px]'} xmlns="http://www.w3.org/2000/svg"
                                         width="273" height="138" viewBox="0 0 273 138" fill="none">
                                        <path
                                            d="M1 63.8145C1 63.3647 1.36467 63 1.81452 63H45.7984C46.2482 63 46.6129 63.3647 46.6129 63.8145V107.798C46.6129 108.248 46.2482 108.613 45.7984 108.613H1.81452C1.36467 108.613 1 108.248 1 107.798V63.8145Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M1 70.3306C1 69.8807 1.36467 69.5161 1.81452 69.5161H45.7984C46.2482 69.5161 46.6129 69.8807 46.6129 70.3306V107.798C46.6129 108.248 46.2482 108.613 45.7984 108.613H1.81452C1.36467 108.613 1 108.248 1 107.798V70.3306Z"
                                            fill="#E12E59"/>
                                        <path
                                            d="M30.6823 79.5288C29.1795 77.9628 26.7394 77.9628 25.2366 79.5288L24.2137 80.5889L23.1908 79.5251C21.6843 77.9591 19.2479 77.9591 17.7452 79.5251C16.0527 81.2845 16.0527 84.1412 17.7452 85.9006L24.2137 92.637L30.6823 85.9044C32.3747 84.1449 32.3747 81.2882 30.6823 79.5288Z"
                                            fill="white"/>
                                        <path
                                            d="M53.129 63.8145C53.129 63.3647 53.4937 63 53.9435 63H97.9274C98.3773 63 98.7419 63.3647 98.7419 63.8145V107.798C98.7419 108.248 98.3773 108.613 97.9274 108.613H53.9435C53.4937 108.613 53.129 108.248 53.129 107.798V63.8145Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M53.129 88.2499C53.129 87.8001 53.4937 87.4354 53.9436 87.4354H97.9274C98.3773 87.4354 98.7419 87.8001 98.7419 88.2499L98.7419 107.798C98.7419 108.248 98.3773 108.613 97.9274 108.613H53.9435C53.4937 108.613 53.129 108.248 53.129 107.798L53.129 88.2499Z"
                                            fill="#882EE1"/>
                                        <path
                                            d="M77 93.8975C80.3 93.8975 83 91.1975 83 87.8975C83 84.5975 77 77.8975 77 77.8975C77 77.8975 71 84.6975 71 87.8975C71 91.0975 73.7 93.8975 77 93.8975Z"
                                            fill="white"/>
                                        <path
                                            d="M105.258 63.8145C105.258 63.3647 105.623 63 106.073 63H150.056C150.506 63 150.871 63.3647 150.871 63.8145V107.798C150.871 108.248 150.506 108.613 150.056 108.613H106.073C105.623 108.613 105.258 108.248 105.258 107.798V63.8145Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M105.258 79.2903C105.258 78.8404 105.623 78.4758 106.073 78.4758H150.056C150.506 78.4758 150.871 78.8404 150.871 79.2903L150.871 107.798C150.871 108.248 150.506 108.613 150.056 108.613H106.073C105.623 108.613 105.258 108.248 105.258 107.798L105.258 79.2903Z"
                                            fill="#DE2EE1"/>
                                        <path
                                            d="M121.396 83.4892C121.288 83.3569 121.212 83.2021 121.172 83.0363C121.132 82.8706 121.13 82.698 121.165 82.5312C121.695 80.0281 124.562 78.2105 127.983 78.2105C131.404 78.2105 134.271 80.0281 134.8 82.5312C134.836 82.6981 134.834 82.8709 134.795 83.0369C134.755 83.203 134.679 83.358 134.571 83.4906C134.464 83.6231 134.328 83.7299 134.173 83.8029C134.019 83.8759 133.85 83.9134 133.68 83.9125H122.286C122.115 83.913 121.947 83.8753 121.793 83.802C121.638 83.7287 121.503 83.6218 121.396 83.4892ZM135.2 87.3679L132.269 88.4371L129.622 87.3744C129.486 87.32 129.335 87.32 129.199 87.3744L126.562 88.4299L123.92 87.3744C123.79 87.3224 123.645 87.3201 123.514 87.3679L120.378 88.5083C120.245 88.5667 120.14 88.6733 120.083 88.8065C120.026 88.9397 120.022 89.0895 120.072 89.2256C120.121 89.3616 120.221 89.4737 120.35 89.5391C120.479 89.6044 120.629 89.6181 120.768 89.5775L121.711 89.2361V89.6145C121.711 90.3707 122.011 91.0958 122.546 91.6305C123.08 92.1652 123.805 92.4655 124.562 92.4655H131.404C132.16 92.4655 132.885 92.1652 133.42 91.6305C133.955 91.0958 134.255 90.3707 134.255 89.6145V88.9253L135.59 88.4399C135.665 88.418 135.734 88.381 135.794 88.3311C135.854 88.2812 135.903 88.2196 135.939 88.15C135.974 88.0804 135.994 88.0043 135.999 87.9264C136.004 87.8486 135.992 87.7706 135.965 87.6973C135.939 87.624 135.897 87.557 135.844 87.5004C135.79 87.4438 135.725 87.3988 135.654 87.3682C135.582 87.3376 135.505 87.322 135.427 87.3225C135.349 87.3229 135.271 87.3394 135.2 87.3708V87.3679ZM120.57 86.1933H135.395C135.547 86.1933 135.692 86.1333 135.799 86.0263C135.906 85.9194 135.966 85.7744 135.966 85.6231C135.966 85.4719 135.906 85.3269 135.799 85.2199C135.692 85.113 135.547 85.0529 135.395 85.0529H120.57C120.419 85.0529 120.274 85.113 120.167 85.2199C120.06 85.3269 120 85.4719 120 85.6231C120 85.7744 120.06 85.9194 120.167 86.0263C120.274 86.1333 120.419 86.1933 120.57 86.1933Z"
                                            fill="white"/>
                                        <path
                                            d="M157.387 63.8145C157.387 63.3647 157.752 63 158.202 63H202.185C202.635 63 203 63.3647 203 63.8145V107.798C203 108.248 202.635 108.613 202.185 108.613H158.202C157.752 108.613 157.387 108.248 157.387 107.798V63.8145Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M157.387 103.726C157.387 103.276 157.752 102.911 158.202 102.911H202.185C202.635 102.911 203 103.276 203 103.726L203 107.798C203 108.248 202.635 108.613 202.185 108.613H158.202C157.752 108.613 157.387 108.248 157.387 107.798L157.387 103.726Z"
                                            fill="#E12E39"/>
                                        <path
                                            d="M179.777 93.8717C179.683 93.8716 179.589 93.8551 179.501 93.823C179.33 93.7604 179.185 93.6424 179.089 93.4877C178.994 93.3331 178.953 93.1508 178.973 92.97L179.598 87.2105H174.814C174.666 87.2107 174.521 87.1707 174.395 87.0948C174.268 87.0189 174.165 86.91 174.095 86.7797C174.026 86.6494 173.993 86.5027 174.001 86.3553C174.009 86.2079 174.057 86.0655 174.139 85.9432L180.549 76.3575C180.65 76.2075 180.799 76.0957 180.971 76.0397C181.143 75.9838 181.329 75.987 181.499 76.0488C181.663 76.1096 181.802 76.2214 181.898 76.3677C181.993 76.514 182.038 76.687 182.027 76.8612L181.402 82.6613H186.186C186.334 82.6611 186.479 82.7011 186.605 82.777C186.732 82.8529 186.835 82.9618 186.905 83.0921C186.974 83.2224 187.007 83.3691 186.999 83.5165C186.991 83.6638 186.943 83.8063 186.861 83.9286L180.451 93.5143C180.377 93.6245 180.276 93.7148 180.159 93.7771C180.041 93.8394 179.91 93.8719 179.777 93.8717Z"
                                            fill="white"/>
                                        <path
                                            d="M210 63.8145C210 63.3647 210.365 63 210.815 63H254.798C255.248 63 255.613 63.3647 255.613 63.8145V107.798C255.613 108.248 255.248 108.613 254.798 108.613H210.815C210.365 108.613 210 108.248 210 107.798V63.8145Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M210 103.726C210 103.276 210.365 102.911 210.815 102.911H254.798C255.248 102.911 255.613 103.276 255.613 103.726L255.613 107.798C255.613 108.248 255.248 108.613 254.798 108.613H210.815C210.365 108.613 210 108.248 210 107.798L210 103.726Z"
                                            fill="#E12E39"/>
                                        <path
                                            d="M239.517 80.8794V80.5691C239.516 79.8966 239.317 79.2393 238.944 78.6797C238.571 78.1201 238.041 77.6831 237.42 77.4236C236.8 77.1641 236.117 77.0937 235.456 77.2211C234.796 77.3485 234.188 77.6681 233.709 78.1397C233.68 78.1683 233.658 78.2022 233.643 78.2395C233.628 78.2768 233.62 78.3167 233.62 78.357V85.2408C233.62 85.2967 233.636 85.3516 233.664 85.3996C233.693 85.4476 233.735 85.4869 233.784 85.5133C233.833 85.5398 233.889 85.5525 233.945 85.55C234 85.5475 234.055 85.5299 234.101 85.4991C234.692 85.1207 235.377 84.9178 236.078 84.9141C236.241 84.9111 236.398 84.9704 236.518 85.0798C236.638 85.1892 236.711 85.3403 236.723 85.5022C236.728 85.5864 236.715 85.6707 236.686 85.7498C236.656 85.8289 236.611 85.9012 236.553 85.9624C236.495 86.0235 236.425 86.0722 236.348 86.1054C236.27 86.1386 236.187 86.1556 236.102 86.1555C235.444 86.1555 234.812 86.4171 234.347 86.8828C233.881 87.3484 233.62 87.9799 233.62 88.6384V91.2672C233.619 91.3136 233.63 91.3594 233.65 91.4013C233.67 91.4432 233.699 91.4801 233.735 91.5092C234.176 91.8738 234.694 92.1318 235.251 92.2633C235.807 92.3948 236.386 92.3962 236.943 92.2674C237.5 92.1385 238.02 91.883 238.462 91.5206C238.905 91.1582 239.257 90.6987 239.493 90.1778C239.517 90.1254 239.526 90.0675 239.518 90.0104C239.511 89.9534 239.488 89.8995 239.452 89.8547C239.416 89.81 239.368 89.7762 239.314 89.757C239.259 89.7379 239.201 89.7342 239.145 89.7464C238.758 89.8351 238.362 89.8798 237.965 89.8798H237.366C237.205 89.8818 237.05 89.8232 236.932 89.7157C236.813 89.6082 236.739 89.4598 236.725 89.3002C236.72 89.2153 236.732 89.1302 236.76 89.0501C236.789 88.9699 236.834 88.8966 236.892 88.8345C236.95 88.7724 237.021 88.723 237.099 88.6893C237.177 88.6555 237.261 88.6382 237.346 88.6384H237.967C238.615 88.6394 239.254 88.4828 239.829 88.1822C240.51 87.8278 241.075 87.2867 241.459 86.6224C241.843 85.9581 242.029 85.1981 241.996 84.4316C241.964 83.665 241.713 82.9237 241.274 82.2946C240.835 81.6654 240.225 81.1745 239.517 80.8794ZM238.586 83.6727H238.276C237.535 83.6727 236.824 83.3784 236.301 82.8545C235.777 82.3307 235.482 81.6202 235.482 80.8794V80.5691C235.482 80.4044 235.548 80.2466 235.664 80.1302C235.781 80.0138 235.939 79.9484 236.103 79.9484C236.268 79.9484 236.426 80.0138 236.542 80.1302C236.658 80.2466 236.724 80.4044 236.724 80.5691V80.8794C236.724 81.0832 236.764 81.285 236.842 81.4733C236.92 81.6616 237.034 81.8326 237.178 81.9767C237.469 82.2677 237.864 82.4312 238.276 82.4312H238.586C238.751 82.4312 238.909 82.4966 239.025 82.613C239.141 82.7294 239.207 82.8873 239.207 83.0519C239.207 83.2166 239.141 83.3745 239.025 83.4909C238.909 83.6073 238.751 83.6727 238.586 83.6727ZM229.896 77.1551C228.991 77.1561 228.123 77.5162 227.483 78.1562C226.843 78.7962 226.483 79.6639 226.482 80.5691V80.8794C225.774 81.1747 225.165 81.6657 224.726 82.295C224.287 82.9242 224.036 83.6655 224.004 84.4321C223.971 85.1986 224.158 85.9585 224.542 86.6227C224.926 87.287 225.491 87.8279 226.172 88.1822C226.746 88.4828 227.385 88.6394 228.034 88.6384H228.634C228.794 88.636 228.949 88.6945 229.068 88.802C229.187 88.9096 229.261 89.0582 229.275 89.218C229.281 89.3029 229.269 89.3881 229.24 89.4682C229.212 89.5483 229.167 89.6217 229.109 89.6838C229.05 89.7458 228.98 89.7953 228.902 89.829C228.824 89.8627 228.74 89.88 228.655 89.8798H228.034C227.637 89.88 227.241 89.835 226.854 89.7456C226.798 89.7334 226.739 89.737 226.685 89.756C226.631 89.775 226.583 89.8087 226.546 89.8534C226.51 89.898 226.487 89.9519 226.48 90.0089C226.472 90.0659 226.481 90.1238 226.505 90.1762C226.74 90.6973 227.093 91.1569 227.535 91.5195C227.977 91.8821 228.497 92.1378 229.054 92.2667C229.611 92.3957 230.191 92.3944 230.747 92.263C231.304 92.1317 231.823 91.8737 232.263 91.5092C232.299 91.4801 232.329 91.4432 232.349 91.4013C232.369 91.3594 232.379 91.3136 232.379 91.2672V88.6384C232.379 87.9799 232.117 87.3484 231.652 86.8828C231.186 86.4171 230.554 86.1555 229.896 86.1555C229.812 86.1556 229.728 86.1386 229.651 86.1054C229.573 86.0722 229.503 86.0235 229.445 85.9624C229.387 85.9012 229.342 85.8289 229.313 85.7498C229.284 85.6707 229.271 85.5864 229.275 85.5022C229.287 85.3402 229.361 85.1889 229.481 85.0795C229.601 84.9701 229.758 84.9109 229.921 84.9141C230.622 84.9178 231.308 85.1207 231.898 85.4991C231.945 85.5299 231.999 85.5475 232.055 85.55C232.111 85.5525 232.166 85.5398 232.215 85.5133C232.265 85.4869 232.306 85.4476 232.335 85.3996C232.363 85.3516 232.379 85.2967 232.379 85.2408V78.357C232.379 78.2755 232.347 78.1972 232.29 78.139C231.653 77.5083 230.793 77.1548 229.896 77.1551ZM230.517 80.8794C230.517 81.6202 230.222 82.3307 229.699 82.8545C229.175 83.3784 228.464 83.6727 227.723 83.6727H227.413C227.248 83.6727 227.091 83.6073 226.974 83.4909C226.858 83.3745 226.792 83.2166 226.792 83.0519C226.792 82.8873 226.858 82.7294 226.974 82.613C227.091 82.4966 227.248 82.4312 227.413 82.4312H227.723C227.927 82.4312 228.129 82.3911 228.317 82.3131C228.506 82.2351 228.677 82.1208 228.821 81.9767C228.965 81.8326 229.079 81.6616 229.157 81.4733C229.235 81.285 229.275 81.0832 229.275 80.8794V80.5691C229.275 80.4044 229.341 80.2466 229.457 80.1302C229.573 80.0138 229.731 79.9484 229.896 79.9484C230.061 79.9484 230.218 80.0138 230.335 80.1302C230.451 80.2466 230.517 80.4044 230.517 80.5691V80.8794Z"
                                            fill="white"/>
                                        <path
                                            d="M114.077 19.0731C114.34 19.0731 114.48 19.2132 114.48 19.476V20.6146C114.48 20.8599 114.34 21 114.077 21H107.946C107.7 21 107.56 20.8599 107.56 20.6146V9.1406C107.56 8.87784 107.7 8.7377 107.946 8.7377H109.172C109.435 8.7377 109.575 8.87784 109.575 9.1406V19.0731H114.077Z"
                                            fill="white"/>
                                        <path
                                            d="M120.936 21.2277C117.38 21.2277 114.577 18.4249 114.577 14.8688C114.577 11.3128 117.38 8.50997 120.936 8.50997C124.474 8.50997 127.295 11.3128 127.295 14.8688C127.295 18.4249 124.474 21.2277 120.936 21.2277ZM120.936 19.2658C123.388 19.2658 125.28 17.3914 125.28 14.8688C125.28 12.3463 123.388 10.4719 120.936 10.4719C118.483 10.4719 116.591 12.3463 116.591 14.8688C116.591 17.3914 118.483 19.2658 120.936 19.2658Z"
                                            fill="white"/>
                                        <path
                                            d="M134.913 21.2277C131.182 21.2277 128.519 18.4249 128.519 14.8688C128.519 11.3128 131.182 8.50997 134.913 8.50997C137.593 8.50997 139.888 10.1391 140.676 12.504C140.746 12.7667 140.606 12.9419 140.343 12.9419H138.995C138.784 12.9419 138.644 12.8368 138.539 12.6441C137.944 11.3303 136.542 10.4719 134.913 10.4719C132.285 10.4719 130.534 12.3463 130.534 14.8688C130.534 17.3914 132.285 19.2658 134.913 19.2658C136.542 19.2658 137.944 18.4249 138.539 17.1111C138.644 16.9009 138.784 16.7958 138.995 16.7958H140.343C140.606 16.7958 140.764 16.971 140.676 17.2162C139.905 19.5811 137.611 21.2277 134.913 21.2277Z"
                                            fill="white"/>
                                        <path
                                            d="M151.858 20.5621C151.946 20.8423 151.823 21 151.525 21H150.177C149.949 21 149.791 20.8949 149.721 20.6847L148.985 18.53H143.905L143.169 20.6847C143.099 20.8949 142.942 21 142.732 21H141.365C141.085 21 140.945 20.8423 141.05 20.5621L145.131 9.07053C145.202 8.86032 145.359 8.7377 145.587 8.7377H147.321C147.531 8.7377 147.707 8.86032 147.777 9.07053L151.858 20.5621ZM144.536 16.6381H148.355L146.445 11.0325L144.536 16.6381Z"
                                            fill="white"/>
                                        <path
                                            d="M159.316 8.7377C159.579 8.7377 159.719 8.87784 159.719 9.1406V10.2792C159.719 10.5245 159.579 10.6646 159.316 10.6646H156.601V20.6146C156.601 20.8599 156.461 21 156.215 21H154.989C154.726 21 154.586 20.8599 154.586 20.6146V10.6646H151.871C151.626 10.6646 151.486 10.5245 151.486 10.2792V9.1406C151.486 8.87784 151.626 8.7377 151.871 8.7377H159.316Z"
                                            fill="white"/>
                                        <path
                                            d="M161.208 9.1406C161.208 8.87784 161.348 8.7377 161.593 8.7377H162.819C163.082 8.7377 163.222 8.87784 163.222 9.1406V20.6146C163.222 20.8599 163.082 21 162.819 21H161.593C161.348 21 161.208 20.8599 161.208 20.6146V9.1406Z"
                                            fill="white"/>
                                        <path
                                            d="M171.419 21.2277C167.862 21.2277 165.06 18.4249 165.06 14.8688C165.06 11.3128 167.862 8.50997 171.419 8.50997C174.957 8.50997 177.777 11.3128 177.777 14.8688C177.777 18.4249 174.957 21.2277 171.419 21.2277ZM171.419 19.2658C173.871 19.2658 175.763 17.3914 175.763 14.8688C175.763 12.3463 173.871 10.4719 171.419 10.4719C168.966 10.4719 167.074 12.3463 167.074 14.8688C167.074 17.3914 168.966 19.2658 171.419 19.2658Z"
                                            fill="white"/>
                                        <path
                                            d="M186.359 9.1406C186.359 8.87784 186.499 8.7377 186.745 8.7377H187.971C188.234 8.7377 188.374 8.87784 188.374 9.1406V20.6146C188.374 20.8599 188.234 21 187.971 21H187.112C186.902 21 186.727 20.9299 186.622 20.7548L181.629 12.6792V20.6146C181.629 20.8599 181.489 21 181.227 21H180C179.755 21 179.615 20.8599 179.615 20.6146V9.1406C179.615 8.87784 179.755 8.7377 180 8.7377H180.876C181.086 8.7377 181.244 8.82529 181.349 9.00046L186.359 17.0585V9.1406Z"
                                            fill="white"/>
                                        <path
                                            d="M201.944 9.1406C201.944 8.87784 202.084 8.7377 202.329 8.7377H203.555C203.818 8.7377 203.958 8.87784 203.958 9.1406V20.6146C203.958 20.8599 203.818 21 203.555 21H202.697C202.487 21 202.312 20.9299 202.206 20.7548L197.214 12.6792V20.6146C197.214 20.8599 197.074 21 196.811 21H195.585C195.34 21 195.199 20.8599 195.199 20.6146V9.1406C195.199 8.87784 195.34 8.7377 195.585 8.7377H196.461C196.671 8.7377 196.829 8.82529 196.934 9.00046L201.944 17.0585V9.1406Z"
                                            fill="white"/>
                                        <path
                                            d="M216.232 20.5621C216.319 20.8423 216.197 21 215.899 21H214.55C214.322 21 214.165 20.8949 214.095 20.6847L213.359 18.53H208.279L207.543 20.6847C207.473 20.8949 207.315 21 207.105 21H205.739C205.459 21 205.318 20.8423 205.424 20.5621L209.505 9.07053C209.575 8.86032 209.733 8.7377 209.961 8.7377H211.695C211.905 8.7377 212.08 8.86032 212.15 9.07053L216.232 20.5621ZM208.91 16.6381H212.728L210.819 11.0325L208.91 16.6381Z"
                                            fill="white"/>
                                        <path
                                            d="M229.029 8.7377C229.292 8.7377 229.432 8.87784 229.432 9.1406V20.6146C229.432 20.8599 229.292 21 229.029 21H227.803C227.558 21 227.417 20.8599 227.417 20.6146V12.0836L224.474 18.6877C224.387 18.8979 224.247 18.9855 224.019 18.9855H223.091C222.88 18.9855 222.723 18.8979 222.635 18.6877L219.71 12.0836V20.6146C219.71 20.8599 219.57 21 219.307 21H218.081C217.835 21 217.695 20.8599 217.695 20.6146V9.1406C217.695 8.87784 217.835 8.7377 218.081 8.7377H219.71C219.937 8.7377 220.078 8.82529 220.165 9.0355L223.564 16.6556L226.944 9.0355C227.032 8.82529 227.19 8.7377 227.4 8.7377H229.029Z"
                                            fill="white"/>
                                        <path
                                            d="M238.656 19.0731C238.919 19.0731 239.059 19.2132 239.059 19.476V20.6146C239.059 20.8599 238.919 21 238.656 21H232.262C232.017 21 231.877 20.8599 231.877 20.6146V9.1406C231.877 8.87784 232.017 8.7377 232.262 8.7377H238.569C238.831 8.7377 238.971 8.87784 238.971 9.1406V10.2792C238.971 10.5245 238.831 10.6646 238.569 10.6646H233.891V13.8703H238.131C238.393 13.8703 238.534 14.0105 238.534 14.2557V15.3593C238.534 15.6221 238.393 15.7622 238.131 15.7622H233.891V19.0731H238.656Z"
                                            fill="white"/>
                                        <path
                                            d="M112.318 36.5121C112.499 36.5121 112.589 36.6135 112.589 36.7826V37.7407C112.589 37.9098 112.499 38 112.318 38H108.373C108.204 38 108.114 37.9098 108.114 37.7407V30.38C108.114 30.2109 108.204 30.1095 108.373 30.1095H109.388C109.568 30.1095 109.658 30.2109 109.658 30.38V36.5121H112.318Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M116.013 38.1578C114.356 38.1578 113.026 36.8615 113.026 35.182C113.026 33.5137 114.356 32.2174 116.013 32.2174C117.658 32.2174 118.989 33.5137 118.989 35.182C118.989 36.8615 117.658 38.1578 116.013 38.1578ZM116.013 36.7375C116.869 36.7375 117.534 36.095 117.534 35.182C117.534 34.2689 116.869 33.6264 116.013 33.6264C115.145 33.6264 114.48 34.2689 114.48 35.182C114.48 36.095 115.145 36.7375 116.013 36.7375Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M125.208 35.9485C125.4 35.9485 125.501 36.0612 125.433 36.2528C125.073 37.38 123.991 38.1578 122.706 38.1578C120.992 38.1578 119.718 36.8615 119.718 35.182C119.718 33.5137 120.992 32.2174 122.706 32.2174C123.991 32.2174 125.073 32.9952 125.433 34.1224C125.501 34.3027 125.4 34.4267 125.208 34.4267H124.205C124.058 34.4267 123.957 34.3591 123.878 34.2351C123.641 33.8631 123.213 33.6489 122.706 33.6489C121.838 33.6489 121.173 34.2915 121.173 35.182C121.173 36.0837 121.838 36.7262 122.706 36.7262C123.213 36.7262 123.641 36.5008 123.878 36.1401C123.957 36.0161 124.047 35.9485 124.205 35.9485H125.208Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M128.607 32.2174C129.847 32.2174 130.895 32.9613 130.895 34.4267V37.7407C130.895 37.9098 130.805 38.0113 130.625 38.0113H129.745C129.576 38.0113 129.475 37.9098 129.475 37.7407V37.5153C129.148 37.9098 128.663 38.1578 127.953 38.1578C126.95 38.1578 126.048 37.5717 126.048 36.3881C126.048 35.2045 126.95 34.6071 127.953 34.6071C128.663 34.6071 129.148 34.8212 129.475 35.1143V34.5056C129.475 33.8406 129.137 33.5588 128.607 33.5588C128.178 33.5588 127.863 33.7391 127.773 34.0435C127.705 34.2013 127.649 34.2802 127.491 34.2802H126.589C126.42 34.2802 126.307 34.19 126.319 34.0097C126.465 32.8486 127.446 32.2174 128.607 32.2174ZM128.438 37.087C129.08 37.087 129.475 36.7939 129.475 36.3881C129.475 35.9485 129.08 35.6892 128.438 35.6892C127.807 35.6892 127.502 35.9823 127.502 36.3881C127.502 36.7939 127.807 37.087 128.438 37.087Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M134.725 32.3639C134.906 32.3639 134.996 32.4654 134.996 32.6344V33.5024C134.996 33.6715 134.906 33.7617 134.725 33.7617H134.026V37.7407C134.026 37.9098 133.936 38 133.756 38H132.843C132.674 38 132.572 37.9098 132.572 37.7407V33.7617H131.873C131.693 33.7617 131.603 33.6715 131.603 33.5024V32.6344C131.603 32.4654 131.693 32.3639 131.873 32.3639H132.572V30.8309C132.572 30.6618 132.674 30.5604 132.843 30.5604H133.756C133.936 30.5604 134.026 30.6618 134.026 30.8309V32.3639H134.725Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M136.112 31.5749C135.942 31.5749 135.841 31.4847 135.841 31.3156V30.38C135.841 30.2109 135.942 30.1095 136.112 30.1095H137.036C137.205 30.1095 137.295 30.2109 137.295 30.38V31.3156C137.295 31.4847 137.205 31.5749 137.036 31.5749H136.112ZM136.112 38C135.942 38 135.841 37.9098 135.841 37.7407V32.6344C135.841 32.4654 135.942 32.3639 136.112 32.3639H137.036C137.205 32.3639 137.295 32.4654 137.295 32.6344V37.7407C137.295 37.9098 137.205 38 137.036 38H136.112Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M141.32 38.1578C139.663 38.1578 138.333 36.8615 138.333 35.182C138.333 33.5137 139.663 32.2174 141.32 32.2174C142.966 32.2174 144.296 33.5137 144.296 35.182C144.296 36.8615 142.966 38.1578 141.32 38.1578ZM141.32 36.7375C142.177 36.7375 142.842 36.095 142.842 35.182C142.842 34.2689 142.177 33.6264 141.32 33.6264C140.452 33.6264 139.787 34.2689 139.787 35.182C139.787 36.095 140.452 36.7375 141.32 36.7375Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M148.306 32.2174C149.354 32.2174 150.143 33.0177 150.143 34.4042V37.7407C150.143 37.9098 150.042 38 149.873 38H148.949C148.779 38 148.689 37.9098 148.689 37.7407V34.5169C148.689 33.8631 148.306 33.5588 147.788 33.5588C147.224 33.5588 146.773 33.8969 146.773 34.7423V37.7407C146.773 37.9098 146.683 38 146.502 38H145.589C145.42 38 145.319 37.9098 145.319 37.7407V32.6344C145.319 32.4654 145.42 32.3639 145.589 32.3639H146.502C146.683 32.3639 146.773 32.4654 146.773 32.6344V32.9501C147.089 32.4766 147.607 32.2174 148.306 32.2174Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M158.465 30.38C158.465 30.2109 158.566 30.1095 158.735 30.1095H159.75C159.919 30.1095 160.02 30.2109 160.02 30.38V37.7407C160.02 37.9098 159.919 38 159.75 38H159.051C158.904 38 158.792 37.9549 158.713 37.8309L155.759 33.1304V37.7407C155.759 37.9098 155.669 38 155.489 38H154.474C154.305 38 154.215 37.9098 154.215 37.7407V30.38C154.215 30.2109 154.305 30.1095 154.474 30.1095H155.185C155.32 30.1095 155.433 30.1658 155.512 30.2898L158.465 34.9903V30.38Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M163.667 32.2174C164.907 32.2174 165.956 32.9613 165.956 34.4267V37.7407C165.956 37.9098 165.865 38.0113 165.685 38.0113H164.806C164.637 38.0113 164.535 37.9098 164.535 37.7407V37.5153C164.208 37.9098 163.724 38.1578 163.013 38.1578C162.01 38.1578 161.108 37.5717 161.108 36.3881C161.108 35.2045 162.01 34.6071 163.013 34.6071C163.724 34.6071 164.208 34.8212 164.535 35.1143V34.5056C164.535 33.8406 164.197 33.5588 163.667 33.5588C163.239 33.5588 162.923 33.7391 162.833 34.0435C162.765 34.2013 162.709 34.2802 162.551 34.2802H161.65C161.48 34.2802 161.368 34.19 161.379 34.0097C161.526 32.8486 162.506 32.2174 163.667 32.2174ZM163.498 37.087C164.141 37.087 164.535 36.7939 164.535 36.3881C164.535 35.9485 164.141 35.6892 163.498 35.6892C162.867 35.6892 162.563 35.9823 162.563 36.3881C162.563 36.7939 162.867 37.087 163.498 37.087Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M172.852 32.2174C173.923 32.2174 174.61 32.905 174.61 34.2013V37.7407C174.61 37.9098 174.509 38 174.34 38H173.427C173.246 38 173.156 37.9098 173.156 37.7407V34.314C173.156 33.7504 172.818 33.5588 172.435 33.5588C172.04 33.5588 171.601 33.7842 171.601 34.5169V37.7407C171.601 37.9098 171.51 38 171.33 38H170.417C170.248 38 170.146 37.9098 170.146 37.7407V34.314C170.146 33.7504 169.82 33.5588 169.425 33.5588C169.03 33.5588 168.591 33.7842 168.591 34.5169V37.7407C168.591 37.9098 168.501 38 168.332 38H167.407C167.238 38 167.137 37.9098 167.137 37.7407V32.6344C167.137 32.4654 167.238 32.3639 167.407 32.3639H168.332C168.501 32.3639 168.591 32.4654 168.591 32.6344V32.9162C168.895 32.4654 169.38 32.2174 169.943 32.2174C170.53 32.2174 171.014 32.4766 171.307 32.9613C171.691 32.4766 172.198 32.2174 172.852 32.2174Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M178.472 32.2174C180.14 32.2174 181.29 33.5249 181.29 35.1932C181.29 35.3172 181.279 35.4299 181.268 35.5427C181.256 35.7117 181.144 35.7907 180.986 35.7907H176.995C177.198 36.591 177.807 36.9517 178.528 36.9517C178.957 36.9517 179.329 36.7826 179.554 36.5459C179.656 36.4444 179.746 36.3881 179.881 36.3881H180.783C180.986 36.3881 181.087 36.5121 181.008 36.6812C180.58 37.628 179.656 38.1578 178.506 38.1578C176.669 38.1578 175.485 36.8728 175.485 35.182C175.485 33.5137 176.702 32.2174 178.472 32.2174ZM176.995 34.6409H179.836C179.667 33.8406 179.069 33.5249 178.461 33.5249C177.694 33.5249 177.164 33.942 176.995 34.6409Z"
                                            fill="white" fill-opacity="0.46"/>
                                        <path
                                            d="M52 0.814518C52 0.364674 52.3647 0 52.8145 0H96.7984C97.2482 0 97.6129 0.364671 97.6129 0.814516V44.7984C97.6129 45.2482 97.2482 45.6129 96.7984 45.6129H52.8145C52.3647 45.6129 52 45.2482 52 44.7984V0.814518Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M52 1.81452C52 1.36467 52.3647 1 52.8145 1H96.1855C96.6353 1 97 1.36467 97 1.81452V45.1855C97 45.6353 96.6353 46 96.1855 46H52.8145C52.3647 46 52 45.6353 52 45.1855V1.81452Z"
                                            fill="white"/>
                                        <path
                                            d="M72.0539 17.9982C72.0539 17.7374 72.2006 17.5907 72.4614 17.5907H74.2542C74.515 17.5907 74.6617 17.7374 74.6617 17.9982V28.5925C74.6617 28.8533 74.515 29 74.2542 29H73.0318C72.8199 29 72.6406 28.9185 72.5266 28.7392L68.6311 22.6434V28.5925C68.6311 28.8533 68.4844 29 68.2236 29H66.4307C66.17 29 66.0233 28.8533 66.0233 28.5925V17.9982C66.0233 17.7374 66.17 17.5907 66.4307 17.5907H67.6532C67.8651 17.5907 68.0443 17.6722 68.1584 17.8515L72.0539 23.9473V17.9982Z"
                                            fill="black"/>
                                        <path
                                            d="M83.062 26.49C83.3228 26.49 83.4695 26.6367 83.4695 26.8974V28.5925C83.4695 28.8533 83.3228 29 83.062 29H77.0314C76.7706 29 76.624 28.8533 76.624 28.5925V17.9982C76.624 17.7374 76.7706 17.5907 77.0314 17.5907H82.9806C83.2413 17.5907 83.388 17.7374 83.388 17.9982V19.6933C83.388 19.9541 83.2413 20.1008 82.9806 20.1008H79.2318V22.0077H82.5731C82.8339 22.0077 82.9806 22.1544 82.9806 22.4152V24.0451C82.9806 24.3059 82.8339 24.4526 82.5731 24.4526H79.2318V26.49H83.062Z"
                                            fill="black"/>
                                        <path
                                            d="M0 0.814518C0 0.364674 0.364671 0 0.814516 0H44.7984C45.2482 0 45.6129 0.364671 45.6129 0.814516V44.7984C45.6129 45.2482 45.2482 45.6129 44.7984 45.6129H0.814518C0.364674 45.6129 0 45.2482 0 44.7984V0.814518Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M0 1.81452C0 1.36467 0.364671 1 0.814516 1H44.1855C44.6353 1 45 1.36467 45 1.81452V45.1855C45 45.6353 44.6353 46 44.1855 46H0.814517C0.364672 46 0 45.6353 0 45.1855V1.81452Z"
                                            fill="white"/>
                                        <path
                                            d="M19.2 22.7V18.3C19.2 17.4248 19.5477 16.5854 20.1665 15.9665C20.7854 15.3477 21.6248 15 22.5 15C23.3752 15 24.2146 15.3477 24.8335 15.9665C25.4523 16.5854 25.8 17.4248 25.8 18.3V22.7C25.8 23.5752 25.4523 24.4146 24.8335 25.0335C24.2146 25.6523 23.3752 26 22.5 26C21.6248 26 20.7854 25.6523 20.1665 25.0335C19.5477 24.4146 19.2 23.5752 19.2 22.7ZM28 22.7C28 22.5541 27.9421 22.4142 27.8389 22.3111C27.7358 22.2079 27.5959 22.15 27.45 22.15C27.3041 22.15 27.1642 22.2079 27.0611 22.3111C26.9579 22.4142 26.9 22.5541 26.9 22.7C26.9 23.867 26.4364 24.9861 25.6113 25.8113C24.7861 26.6364 23.667 27.1 22.5 27.1C21.333 27.1 20.2139 26.6364 19.3887 25.8113C18.5636 24.9861 18.1 23.867 18.1 22.7C18.1 22.5541 18.0421 22.4142 17.9389 22.3111C17.8358 22.2079 17.6959 22.15 17.55 22.15C17.4041 22.15 17.2642 22.2079 17.1611 22.3111C17.0579 22.4142 17 22.5541 17 22.7C17.0017 24.063 17.5087 25.377 18.423 26.3878C19.3373 27.3986 20.594 28.0345 21.95 28.1725V29.85C21.95 29.9959 22.0079 30.1358 22.1111 30.2389C22.2142 30.3421 22.3541 30.4 22.5 30.4C22.6459 30.4 22.7858 30.3421 22.8889 30.2389C22.9921 30.1358 23.05 29.9959 23.05 29.85V28.1725C24.406 28.0345 25.6627 27.3986 26.577 26.3878C27.4913 25.377 27.9983 24.063 28 22.7Z"
                                            fill="black"/>
                                        <path
                                            d="M273 118.098C273 117.69 272.669 117.359 272.261 117.359H139.26C138.852 117.359 138.521 117.69 138.521 118.098V136.57C138.521 136.979 138.852 137.309 139.26 137.309H272.261C272.669 137.309 273 136.979 273 136.57V118.098Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M273 118.098C273 117.69 272.669 117.359 272.261 117.359H167.338C166.93 117.359 166.599 117.69 166.599 118.098V136.57C166.599 136.979 166.93 137.309 167.338 137.309H272.261C272.669 137.309 273 136.979 273 136.57V118.098Z"
                                            fill="#2E60E1"/>
                                        <path
                                            d="M200.593 123.76L200.816 123.743C203.354 123.544 205.973 121.893 205.998 121.878L206.13 121.793L206.262 121.878C206.287 121.893 208.906 123.544 211.444 123.743L211.667 123.76L211.672 123.983C211.672 124.047 211.704 130.321 206.255 133.564L206.13 133.638L206.005 133.564C200.557 130.321 200.588 124.047 200.588 123.983L200.593 123.76Z"
                                            fill="white"/>
                                        <path
                                            d="M1 118.186C1 117.777 1.33081 117.447 1.73889 117.447H134.74C135.148 117.447 135.479 117.777 135.479 118.186V136.658C135.479 137.066 135.148 137.397 134.74 137.397H1.73889C1.33081 137.397 1 137.066 1 136.658V118.186Z"
                                            fill="#010100" fill-opacity="0.33"/>
                                        <path
                                            d="M1 118.186C1 117.777 1.33081 117.447 1.73889 117.447H81.5394C81.9474 117.447 82.2783 117.777 82.2783 118.186V136.658C82.2783 137.066 81.9474 137.397 81.5394 137.397H1.73889C1.33081 137.397 1 137.066 1 136.658V118.186Z"
                                            fill="#1CB459"/>
                                        <path
                                            d="M71.9453 124.033C71.0843 123.136 69.6863 123.136 68.8253 124.033L68.2392 124.64L67.6531 124.031C66.79 123.134 65.3941 123.134 64.5331 124.031C63.5634 125.039 63.5634 126.676 64.5331 127.684L68.2392 131.543L71.9453 127.686C72.915 126.678 72.915 125.041 71.9453 124.033Z"
                                            fill="white"/>
                                    </svg>
                                    <div className={'flex flex-col items-center'}>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Status Style #1
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div className={'px-[23px] flex flex-row justify-center w-full gap-[5px]'}>
                                        <div onClick={() => {
                                            setAktifhud({
                                                ...aktifHud,
                                                hud1: !aktifHud.hud1,
                                            })
                                        }}
                                             className={`${aktifHud.hud1 === true ? 'dashboard8 text-black' : 'dashboard9 text-[#ABABAB]'} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center  text-[11px] font-bold w-[142px] h-[32px]`}>
                                            <h1 className={'select-none'}>{aktifHud.hud1 === 2 ? 'Selected' : 'Select'}</h1>
                                        </div>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                onset: !settings.onset,
                                                settings1: !settings.settings1,
                                            })
                                        }}
                                             className={`${aktifHud.hud1 === true ? 'dashboard8' : 'dashboard9 !text-red-600'} mt-[22px] cursor-pointer flex justify-center items-center text-black text-[11px] font-bold w-[32px] h-[32px]`}>
                                            <svg
                                                className={`${aktifHud.hud1 === true ? '!fill-black' : '!fill-[#ABABAB]'} !text-red-600 !stroke-none`}
                                                xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 14 14" fill="none">
                                                <path
                                                    d="M12.8153 7.10486C12.818 7.00906 12.818 6.91327 12.8153 6.81747L13.8078 5.57746C13.8599 5.51235 13.8959 5.43593 13.913 5.35436C13.9301 5.27278 13.9278 5.18833 13.9063 5.1078C13.7433 4.49628 13.4999 3.90907 13.1825 3.36154C13.1409 3.2899 13.0832 3.22897 13.0139 3.18358C12.9446 3.13819 12.8656 3.10961 12.7834 3.1001L11.2054 2.92448C11.1398 2.85529 11.0732 2.78877 11.0058 2.7249L10.8196 1.14296C10.81 1.06061 10.7813 0.981637 10.7358 0.912338C10.6903 0.84304 10.6292 0.785331 10.5575 0.743813C10.01 0.426658 9.42274 0.183711 8.8112 0.0213597C8.73067 -0.000154116 8.64622 -0.00245306 8.56464 0.0146481C8.48307 0.0317493 8.40665 0.0677725 8.34154 0.119815L7.10486 1.10703C7.00906 1.10703 6.91327 1.10703 6.81747 1.10703L5.57746 0.116489C5.51235 0.0644463 5.43593 0.0284232 5.35436 0.011322C5.27278 -0.00577922 5.18833 -0.0034804 5.1078 0.0180334C4.49628 0.181036 3.90907 0.424419 3.36154 0.741817C3.2899 0.783412 3.22897 0.841154 3.18358 0.910448C3.13819 0.979742 3.10961 1.05867 3.1001 1.14096L2.92448 2.72158C2.85529 2.78766 2.78877 2.85418 2.7249 2.92115L1.14296 3.10276C1.06061 3.11234 0.981637 3.14103 0.912338 3.18653C0.84304 3.23204 0.785331 3.29311 0.743813 3.36487C0.426723 3.91247 0.183569 4.49966 0.0206944 5.11113C-0.000728396 5.1917 -0.00291951 5.27619 0.0142977 5.35777C0.0315149 5.43934 0.0676586 5.51574 0.119815 5.58079L1.10703 6.81747C1.10703 6.91327 1.10703 7.00906 1.10703 7.10486L0.116489 8.34487C0.0644463 8.40997 0.0284232 8.48639 0.011322 8.56797C-0.00577922 8.64955 -0.0034804 8.734 0.0180334 8.81453C0.181036 9.42605 0.424419 10.0133 0.741817 10.5608C0.783412 10.6324 0.841154 10.6934 0.910448 10.7387C0.979742 10.7841 1.05867 10.8127 1.14096 10.8222L2.71892 10.9979C2.785 11.067 2.85152 11.1336 2.91849 11.1974L3.10276 12.7794C3.11234 12.8617 3.14103 12.9407 3.18653 13.01C3.23204 13.0793 3.29311 13.137 3.36487 13.1785C3.91247 13.4956 4.49966 13.7388 5.11113 13.9016C5.1917 13.9231 5.27619 13.9252 5.35777 13.908C5.43934 13.8908 5.51574 13.8547 5.58079 13.8025L6.81747 12.8153C6.91327 12.818 7.00906 12.818 7.10486 12.8153L8.34487 13.8078C8.40997 13.8599 8.48639 13.8959 8.56797 13.913C8.64955 13.9301 8.734 13.9278 8.81453 13.9063C9.42615 13.7436 10.0134 13.5002 10.5608 13.1825C10.6324 13.1409 10.6934 13.0832 10.7387 13.0139C10.7841 12.9446 10.8127 12.8656 10.8222 12.7834L10.9979 11.2054C11.067 11.1398 11.1336 11.0732 11.1974 11.0058L12.7794 10.8196C12.8617 10.81 12.9407 10.7813 13.01 10.7358C13.0793 10.6903 13.137 10.6292 13.1785 10.5575C13.4956 10.0099 13.7388 9.42266 13.9016 8.8112C13.9231 8.73062 13.9252 8.64614 13.908 8.56456C13.8908 8.48298 13.8547 8.40659 13.8025 8.34154L12.8153 7.10486ZM6.96116 9.62213C6.43487 9.62213 5.9204 9.46607 5.48281 9.17368C5.04522 8.88129 4.70415 8.4657 4.50275 7.97947C4.30135 7.49324 4.24865 6.95821 4.35133 6.44203C4.454 5.92586 4.70743 5.45172 5.07958 5.07958C5.45172 4.70743 5.92586 4.454 6.44203 4.35133C6.95821 4.24865 7.49324 4.30135 7.97947 4.50275C8.4657 4.70415 8.88129 5.04522 9.17368 5.48281C9.46607 5.9204 9.62213 6.43487 9.62213 6.96116C9.62213 7.6669 9.34178 8.34372 8.84275 8.84275C8.34372 9.34178 7.6669 9.62213 6.96116 9.62213Z"
                                                    fill=""/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                                {settings.settings1 ? (
                                    <div
                                        className={'w-[340px] pl-[18px] pr-[10px] h-[230px] items-start flex-col flex   pt-[7px] dashboard10'}>
                                        <div className={'flex  flex-row w-full justify-between items-center'}>
                                            <div className={'flex flex-col items-start'}>
                                                <h3 className={'text-[#939393] mt-[10px] 2xl:text-[18px] text-[14px] font-semibold'}>
                                                    Status Style Settings #1
                                                </h3>
                                                <h4 className={`text-white font-semibold 2xl:text-[10px] text-[9px]`}>Selected
                                                    Now</h4>
                                            </div>
                                            <div className={'flex flex-row mr-1 items-center gap-[5px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                     viewBox="0 0 12 12" fill="none">
                                                    <path
                                                        d="M5.80365 0.261963C4.6558 0.261963 3.53372 0.602341 2.57932 1.24005C1.62491 1.87777 0.881044 2.78417 0.441779 3.84465C0.00251463 4.90513 -0.112417 6.07205 0.111518 7.19785C0.335453 8.32365 0.888198 9.35776 1.69985 10.1694C2.51151 10.9811 3.54562 11.5338 4.67142 11.7578C5.79722 11.9817 6.96414 11.8668 8.02462 11.4275C9.08509 10.9882 9.9915 10.2444 10.6292 9.28995C11.2669 8.33554 11.6073 7.21347 11.6073 6.06561C11.6057 4.52689 10.9937 3.05165 9.90566 1.96361C8.81762 0.875564 7.34238 0.263588 5.80365 0.261963ZM5.58044 2.94057C5.71288 2.94057 5.84235 2.97985 5.95248 3.05343C6.0626 3.12701 6.14843 3.2316 6.19911 3.35396C6.2498 3.47632 6.26306 3.61097 6.23722 3.74087C6.21138 3.87077 6.1476 3.99009 6.05395 4.08374C5.9603 4.17739 5.84098 4.24117 5.71108 4.26701C5.58118 4.29285 5.44654 4.27959 5.32417 4.2289C5.20181 4.17822 5.09722 4.09239 5.02364 3.98226C4.95006 3.87214 4.91078 3.74267 4.91078 3.61022C4.91078 3.43262 4.98134 3.26229 5.10692 3.13671C5.23251 3.01112 5.40283 2.94057 5.58044 2.94057ZM6.25009 9.19066C6.01329 9.19066 5.78618 9.09659 5.61873 8.92914C5.45129 8.7617 5.35722 8.53459 5.35722 8.29779V6.06561C5.23882 6.06561 5.12527 6.01858 5.04154 5.93486C4.95782 5.85113 4.91078 5.73758 4.91078 5.61918C4.91078 5.50078 4.95782 5.38723 5.04154 5.3035C5.12527 5.21978 5.23882 5.17274 5.35722 5.17274C5.59402 5.17274 5.82113 5.26682 5.98857 5.43426C6.15602 5.60171 6.25009 5.82881 6.25009 6.06561V8.29779C6.36849 8.29779 6.48204 8.34482 6.56577 8.42855C6.64949 8.51227 6.69652 8.62582 6.69652 8.74422C6.69652 8.86263 6.64949 8.97618 6.56577 9.0599C6.48204 9.14362 6.36849 9.19066 6.25009 9.19066Z"
                                                        fill="#969696"/>
                                                </svg>
                                                <h3 className={'text-[11px] font-semibold text-[#969696]'}>
                                                    100 = Never Hide
                                                </h3>
                                            </div>
                                        </div>
                                        <div
                                            className={'w-full mt-[19px] h-full flex flex-col justify-start items-center'}>
                                            <div className={'flex flex-row gap-[10px]'}>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o1}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.4967 16.9915C33.4967 26.2414 25.9982 33.7399 16.7484 33.7399C7.4985 33.7399 0 26.2414 0 16.9915C0 7.74166 7.4985 0.243164 16.7484 0.243164C25.9982 0.243164 33.4967 7.74166 33.4967 16.9915ZM0.953051 16.9915C0.953051 25.715 8.02485 32.7868 16.7484 32.7868C25.4719 32.7868 32.5437 25.715 32.5437 16.9915C32.5437 8.26802 25.4719 1.19621 16.7484 1.19621C8.02485 1.19621 0.953051 8.26802 0.953051 16.9915Z"
                                                            fill={colorss.hud2c1} fill-opacity="0.26"/>
                                                        <circle cx="16.7475" cy="16.9917" r="15.7632"
                                                                fill={colorss.hud2c1} fill-opacity="0.08"/>
                                                        <path
                                                            d="M30.8693 16.9913C30.8693 24.7902 24.547 31.1125 16.7481 31.1125C8.94922 31.1125 2.62695 24.7902 2.62695 16.9913C2.62695 9.19238 8.94922 2.87012 16.7481 2.87012C24.547 2.87012 30.8693 9.19238 30.8693 16.9913ZM2.88083 16.9913C2.88083 24.65 9.08943 30.8586 16.7481 30.8586C24.4068 30.8586 30.6154 24.65 30.6154 16.9913C30.6154 9.33259 24.4068 3.12399 16.7481 3.12399C9.08943 3.12399 2.88083 9.33259 2.88083 16.9913Z"
                                                            fill={colorss.hud2c1}/>
                                                        <path
                                                            d="M30.8693 16.9913C30.8693 14.8331 30.3746 12.7037 29.4233 10.7665C28.4719 8.82932 27.0892 7.13599 25.3814 5.81655C23.6735 4.49712 21.6859 3.58669 19.5713 3.15521C17.4567 2.72374 15.2714 2.78269 13.1831 3.32753L13.4859 4.48789C15.3968 3.98931 17.3966 3.93537 19.3316 4.3302C21.2666 4.72504 23.0854 5.55815 24.6482 6.76553C26.211 7.97292 27.4763 9.52246 28.3469 11.2951C29.2174 13.0678 29.6701 15.0164 29.6701 16.9913H30.8693Z"
                                                            fill={colorss.hud2c1}/>
                                                        <path
                                                            d="M20.8421 13.067C19.8564 12.0398 18.2558 12.0398 17.2701 13.067L16.5991 13.7624L15.9281 13.0646C14.9399 12.0374 13.3418 12.0374 12.3561 13.0646C11.2459 14.2187 11.2459 16.0925 12.3561 17.2466L16.5991 21.6653L20.8421 17.2491C21.9523 16.095 21.9523 14.2211 20.8421 13.067Z"
                                                            fill={colorss.hud2c1}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o1: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c1}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c1} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c1: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o2}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.6432 16.9913C33.6432 26.2411 26.1447 33.7396 16.8948 33.7396C7.64498 33.7396 0.146484 26.2411 0.146484 16.9913C0.146484 7.74142 7.64498 0.24292 16.8948 0.24292C26.1447 0.24292 33.6432 7.74142 33.6432 16.9913ZM1.09953 16.9913C1.09953 25.7148 8.17134 32.7866 16.8948 32.7866C25.6184 32.7866 32.6902 25.7148 32.6902 16.9913C32.6902 8.26777 25.6184 1.19597 16.8948 1.19597C8.17134 1.19597 1.09953 8.26777 1.09953 16.9913Z"
                                                            fill={colorss.hud2c2} fill-opacity="0.26"/>
                                                        <circle cx="16.894" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c2} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.0158 16.9913C31.0158 24.7902 24.6935 31.1125 16.8946 31.1125C9.0957 31.1125 2.77344 24.7902 2.77344 16.9913C2.77344 9.19238 9.0957 2.87012 16.8946 2.87012C24.6935 2.87012 31.0158 9.19238 31.0158 16.9913ZM3.02732 16.9913C3.02732 24.65 9.23591 30.8586 16.8946 30.8586C24.5533 30.8586 30.7619 24.65 30.7619 16.9913C30.7619 9.33259 24.5533 3.12399 16.8946 3.12399C9.23591 3.12399 3.02732 9.33259 3.02732 16.9913Z"
                                                            fill={colorss.hud2c2}/>
                                                        <path
                                                            d="M31.0158 16.9913C31.0158 14.8331 30.5211 12.7037 29.5698 10.7665C28.6184 8.82932 27.2357 7.13599 25.5278 5.81655C23.82 4.49712 21.8324 3.58669 19.7178 3.15521C17.6032 2.72374 15.4179 2.78269 13.3296 3.32753L13.6324 4.48789C15.5433 3.98931 17.543 3.93537 19.4781 4.3302C21.4131 4.72504 23.2319 5.55815 24.7947 6.76553C26.3575 7.97292 27.6228 9.52246 28.4934 11.2951C29.3639 13.0678 29.8166 15.0164 29.8166 16.9913H31.0158Z"
                                                            fill={colorss.hud2c2}/>
                                                        <path
                                                            d="M16.5168 21.7928C18.9011 21.7928 20.8519 19.842 20.8519 17.4576C20.8519 15.0733 16.5168 10.2324 16.5168 10.2324C16.5168 10.2324 12.1816 15.1456 12.1816 17.4576C12.1816 19.7697 14.1325 21.7928 16.5168 21.7928Z"
                                                            fill={colorss.hud2c2}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o2: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c2}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c1} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c2: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>

                                                    <svg style={{opacity: `${opacityy.hud1o3}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.7897 16.9913C33.7897 26.2411 26.2912 33.7396 17.0413 33.7396C7.79147 33.7396 0.292969 26.2411 0.292969 16.9913C0.292969 7.74142 7.79147 0.24292 17.0413 0.24292C26.2912 0.24292 33.7897 7.74142 33.7897 16.9913ZM1.24602 16.9913C1.24602 25.7148 8.31782 32.7866 17.0413 32.7866C25.7648 32.7866 32.8366 25.7148 32.8366 16.9913C32.8366 8.26777 25.7648 1.19597 17.0413 1.19597C8.31782 1.19597 1.24602 8.26777 1.24602 16.9913Z"
                                                            fill={colorss.hud2c3} fill-opacity="0.26"/>
                                                        <circle cx="17.0405" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c3} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.1623 16.9913C31.1623 24.7902 24.84 31.1125 17.0411 31.1125C9.24219 31.1125 2.91992 24.7902 2.91992 16.9913C2.91992 9.19238 9.24219 2.87012 17.0411 2.87012C24.84 2.87012 31.1623 9.19238 31.1623 16.9913ZM3.1738 16.9913C3.1738 24.65 9.3824 30.8586 17.0411 30.8586C24.6998 30.8586 30.9084 24.65 30.9084 16.9913C30.9084 9.33259 24.6998 3.12399 17.0411 3.12399C9.3824 3.12399 3.1738 9.33259 3.1738 16.9913Z"
                                                            fill={colorss.hud2c3}/>
                                                        <path
                                                            d="M31.1623 16.9913C31.1623 14.8331 30.6676 12.7037 29.7162 10.7665C28.7649 8.82932 27.3822 7.13599 25.6743 5.81655C23.9665 4.49712 21.9789 3.58669 19.8643 3.15521C17.7497 2.72374 15.5643 2.78269 13.4761 3.32753L13.7788 4.48789C15.6898 3.98931 17.6895 3.93537 19.6246 4.3302C21.5596 4.72504 23.3783 5.55815 24.9412 6.76553C26.504 7.97292 27.7693 9.52246 28.6398 11.2951C29.5104 13.0678 29.9631 15.0164 29.9631 16.9913H31.1623Z"
                                                            fill={colorss.hud2c3}/>
                                                        <path
                                                            d="M12.2878 15.5086C12.2116 15.4149 12.1573 15.3052 12.1291 15.1878C12.1009 15.0703 12.0993 14.948 12.1246 14.8298C12.4999 13.056 14.5313 11.7681 16.9557 11.7681C19.38 11.7681 21.4114 13.056 21.7867 14.8298C21.8122 14.9481 21.8109 15.0705 21.7828 15.1882C21.7548 15.3058 21.7006 15.4157 21.6244 15.5096C21.5482 15.6036 21.4519 15.6792 21.3426 15.731C21.2332 15.7827 21.1137 15.8093 20.9927 15.8087L12.9186 15.8087C12.7977 15.809 12.6783 15.7823 12.5691 15.7303C12.4599 15.6784 12.3638 15.6027 12.2878 15.5086ZM22.07 18.2573L19.9927 19.0149L18.1173 18.2618C18.021 18.2233 17.9136 18.2233 17.8173 18.2618L15.9485 19.0098L14.0767 18.2618C13.9846 18.225 13.8821 18.2234 13.7888 18.2573L11.5665 19.0654C11.4726 19.1067 11.3979 19.1822 11.3576 19.2766C11.3174 19.371 11.3145 19.4772 11.3497 19.5736C11.3849 19.67 11.4554 19.7494 11.547 19.7958C11.6385 19.8421 11.7443 19.8518 11.8428 19.823L12.511 19.581L12.511 19.8492C12.511 20.3851 12.7239 20.8989 13.1027 21.2778C13.4816 21.6567 13.9955 21.8695 14.5313 21.8695L19.38 21.8695C19.9158 21.8695 20.4297 21.6567 20.8086 21.2778C21.1874 20.8989 21.4003 20.3851 21.4003 19.8492L21.4003 19.3608L22.3463 19.0169C22.3993 19.0014 22.4486 18.9751 22.4911 18.9398C22.5336 18.9044 22.5684 18.8608 22.5934 18.8114C22.6183 18.7621 22.6329 18.7082 22.6362 18.653C22.6394 18.5978 22.6314 18.5426 22.6124 18.4907C22.5935 18.4387 22.5641 18.3912 22.5261 18.3511C22.488 18.311 22.4422 18.2791 22.3914 18.2574C22.3405 18.2357 22.2858 18.2247 22.2305 18.225C22.1752 18.2254 22.1206 18.237 22.07 18.2593L22.07 18.2573ZM11.7029 17.4249L22.2084 17.4249C22.3156 17.4249 22.4184 17.3823 22.4941 17.3065C22.5699 17.2308 22.6125 17.128 22.6125 17.0208C22.6125 16.9137 22.5699 16.8109 22.4941 16.7351C22.4184 16.6593 22.3156 16.6168 22.2084 16.6168L11.7029 16.6168C11.5957 16.6168 11.4929 16.6593 11.4172 16.7351C11.3414 16.8109 11.2988 16.9137 11.2988 17.0208C11.2988 17.128 11.3414 17.2308 11.4172 17.3065C11.4929 17.3823 11.5957 17.4249 11.7029 17.4249Z"
                                                            fill={colorss.hud2c3}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o3: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c3}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c1} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c3: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o4}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.9362 16.9915C33.9362 26.2414 26.4377 33.7399 17.1878 33.7399C7.93795 33.7399 0.439453 26.2414 0.439453 16.9915C0.439453 7.74166 7.93795 0.243164 17.1878 0.243164C26.4377 0.243164 33.9362 7.74166 33.9362 16.9915ZM1.3925 16.9915C1.3925 25.715 8.4643 32.7868 17.1878 32.7868C25.9113 32.7868 32.9831 25.715 32.9831 16.9915C32.9831 8.26802 25.9113 1.19621 17.1878 1.19621C8.4643 1.19621 1.3925 8.26802 1.3925 16.9915Z"
                                                            fill={colorss.hud2c4} fill-opacity="0.26"/>
                                                        <circle cx="17.188" cy="16.9917" r="15.7632"
                                                                fill={colorss.hud2c4} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.3087 16.9913C31.3087 24.7902 24.9865 31.1125 17.1876 31.1125C9.38867 31.1125 3.06641 24.7902 3.06641 16.9913C3.06641 9.19238 9.38867 2.87012 17.1876 2.87012C24.9865 2.87012 31.3087 9.19238 31.3087 16.9913ZM3.32028 16.9913C3.32028 24.65 9.52888 30.8586 17.1876 30.8586C24.8463 30.8586 31.0549 24.65 31.0549 16.9913C31.0549 9.33259 24.8463 3.12399 17.1876 3.12399C9.52888 3.12399 3.32028 9.33259 3.32028 16.9913Z"
                                                            fill={colorss.hud2c4}/>
                                                        <path
                                                            d="M31.3087 16.9913C31.3087 14.8331 30.8141 12.7037 29.8627 10.7665C28.9114 8.82932 27.5287 7.13599 25.8208 5.81655C24.113 4.49712 22.1254 3.58669 20.0108 3.15521C17.8962 2.72374 15.7108 2.78269 13.6226 3.32753L13.9253 4.48789C15.8362 3.98931 17.836 3.93537 19.771 4.3302C21.7061 4.72504 23.5248 5.55815 25.0877 6.76553C26.6505 7.97292 27.9158 9.52246 28.7863 11.2951C29.6569 13.0678 30.1095 15.0164 30.1095 16.9913H31.3087Z"
                                                            fill={colorss.hud2c4}/>
                                                        <path
                                                            d="M16.873 23.1691C16.8053 23.169 16.7382 23.1571 16.6746 23.134C16.5519 23.0891 16.4478 23.0043 16.3791 22.8933C16.3103 22.7822 16.2808 22.6512 16.2953 22.5214L16.7446 18.3846H13.308C13.202 18.3848 13.0979 18.3561 13.007 18.3016C12.9161 18.2471 12.8418 18.1688 12.792 18.0752C12.7422 17.9817 12.7189 17.8763 12.7244 17.7704C12.73 17.6646 12.7643 17.5623 12.8237 17.4744L17.4272 10.5895C17.5001 10.4818 17.6068 10.4015 17.7304 10.3613C17.8541 10.3211 17.9877 10.3234 18.1099 10.3678C18.2274 10.4114 18.3277 10.4917 18.396 10.5968C18.4643 10.7019 18.497 10.8262 18.4892 10.9513L18.0399 15.1172H21.4765C21.5825 15.1171 21.6865 15.1458 21.7774 15.2003C21.8683 15.2548 21.9427 15.3331 21.9925 15.4266C22.0423 15.5202 22.0656 15.6256 22.06 15.7314C22.0544 15.8373 22.0201 15.9396 21.9608 16.0274L17.3572 22.9123C17.3037 22.9915 17.2316 23.0563 17.1471 23.1011C17.0627 23.1459 16.9685 23.1692 16.873 23.1691Z"
                                                            fill={colorss.hud2c4}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o4: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c4}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c4} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c4: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o5}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="35" height="34"
                                                         viewBox="0 0 35 34" fill="none">
                                                        <path
                                                            d="M34.0827 16.9913C34.0827 26.2411 26.5842 33.7396 17.3343 33.7396C8.08443 33.7396 0.585938 26.2411 0.585938 16.9913C0.585938 7.74142 8.08443 0.24292 17.3343 0.24292C26.5842 0.24292 34.0827 7.74142 34.0827 16.9913ZM1.53899 16.9913C1.53899 25.7148 8.61079 32.7866 17.3343 32.7866C26.0578 32.7866 33.1296 25.7148 33.1296 16.9913C33.1296 8.26777 26.0578 1.19597 17.3343 1.19597C8.61079 1.19597 1.53899 8.26777 1.53899 16.9913Z"
                                                            fill={colorss.hud2c5} fill-opacity="0.26"/>
                                                        <circle cx="17.3345" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c5} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.4552 16.9913C31.4552 24.7902 25.133 31.1125 17.3341 31.1125C9.53515 31.1125 3.21289 24.7902 3.21289 16.9913C3.21289 9.19238 9.53515 2.87012 17.3341 2.87012C25.133 2.87012 31.4552 9.19238 31.4552 16.9913ZM3.46677 16.9913C3.46677 24.65 9.67537 30.8586 17.3341 30.8586C24.9928 30.8586 31.2014 24.65 31.2014 16.9913C31.2014 9.33259 24.9928 3.12399 17.3341 3.12399C9.67537 3.12399 3.46677 9.33259 3.46677 16.9913Z"
                                                            fill={colorss.hud2c5}/>
                                                        <path
                                                            d="M31.4552 16.9913C31.4552 14.8331 30.9606 12.7037 30.0092 10.7665C29.0579 8.82932 27.6752 7.13599 25.9673 5.81655C24.2594 4.49712 22.2719 3.58669 20.1573 3.15521C18.0427 2.72374 15.8573 2.78269 13.7691 3.32753L14.0718 4.48789C15.9827 3.98931 17.9825 3.93537 19.9175 4.3302C21.8525 4.72504 23.6713 5.55815 25.2341 6.76553C26.797 7.97292 28.0623 9.52246 28.9328 11.2951C29.8034 13.0678 30.256 15.0164 30.256 16.9913H31.4552Z"
                                                            fill={colorss.hud2c5}/>
                                                        <path
                                                            d="M22.5072 12.8938L22.2925 12.8773C19.8489 12.6863 17.3273 11.0965 17.3037 11.0823L17.1764 10.9998L17.049 11.0823C17.0254 11.0965 14.5039 12.6863 12.0602 12.8773L11.8455 12.8938L11.8408 13.1085C11.8408 13.1698 11.8102 19.2106 17.0561 22.3337L17.1764 22.4044L17.2967 22.3337C22.5426 19.2106 22.5119 13.1698 22.5119 13.1085L22.5072 12.8938Z"
                                                            fill={colorss.hud2c5}/>
                                                    </svg>


                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o5: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c5}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c5} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c5: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o6}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="35" height="34"
                                                         viewBox="0 0 35 34" fill="none">
                                                        <path
                                                            d="M34.2291 16.9915C34.2291 26.2414 26.7306 33.7399 17.4808 33.7399C8.23092 33.7399 0.732422 26.2414 0.732422 16.9915C0.732422 7.74166 8.23092 0.243164 17.4808 0.243164C26.7306 0.243164 34.2291 7.74166 34.2291 16.9915ZM1.68547 16.9915C1.68547 25.715 8.75727 32.7868 17.4808 32.7868C26.2043 32.7868 33.2761 25.715 33.2761 16.9915C33.2761 8.26802 26.2043 1.19621 17.4808 1.19621C8.75727 1.19621 1.68547 8.26802 1.68547 16.9915Z"
                                                            fill={colorss.hud2c6} fill-opacity="0.26"/>
                                                        <circle cx="17.48" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c6} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.6017 16.9915C31.6017 24.7904 25.2795 31.1127 17.4805 31.1127C9.68164 31.1127 3.35938 24.7904 3.35938 16.9915C3.35938 9.19262 9.68164 2.87036 17.4805 2.87036C25.2795 2.87036 31.6017 9.19262 31.6017 16.9915ZM3.61325 16.9915C3.61325 24.6502 9.82185 30.8588 17.4805 30.8588C25.1392 30.8588 31.3478 24.6502 31.3478 16.9915C31.3478 9.33284 25.1392 3.12424 17.4805 3.12424C9.82185 3.12424 3.61325 9.33284 3.61325 16.9915Z"
                                                            fill={colorss.hud2c6}/>
                                                        <path
                                                            d="M31.6017 16.9915C31.6017 14.8334 31.107 12.7039 30.1557 10.7667C29.2043 8.82957 27.8216 7.13623 26.1138 5.8168C24.4059 4.49736 22.4184 3.58694 20.3038 3.15546C18.1892 2.72398 16.0038 2.78293 13.9155 3.32778L14.2183 4.48813C16.1292 3.98955 18.129 3.93561 20.064 4.33045C21.999 4.72528 23.8178 5.55839 25.3806 6.76578C26.9434 7.97316 28.2087 9.5227 29.0793 11.2954C29.9499 13.068 30.4025 15.0166 30.4025 16.9915H31.6017Z"
                                                            fill={colorss.hud2c6}/>
                                                        <path
                                                            d="M21.4122 14.1784V13.9664C21.4116 13.507 21.2754 13.0581 21.0207 12.6758C20.7659 12.2936 20.4039 11.9952 19.9801 11.8179C19.5563 11.6407 19.0897 11.5926 18.6386 11.6796C18.1876 11.7666 17.7723 11.9849 17.4449 12.307C17.4255 12.3266 17.4102 12.3497 17.3998 12.3752C17.3895 12.4007 17.3842 12.4279 17.3845 12.4554V17.1573C17.3846 17.1955 17.395 17.233 17.4147 17.2658C17.4343 17.2985 17.4625 17.3254 17.4961 17.3435C17.5298 17.3616 17.5678 17.3702 17.6059 17.3685C17.6441 17.3668 17.6811 17.3548 17.713 17.3338C18.1162 17.0753 18.5845 16.9367 19.0634 16.9342C19.1743 16.9321 19.2817 16.9726 19.3636 17.0473C19.4455 17.122 19.4957 17.2253 19.5038 17.3359C19.5068 17.3934 19.4981 17.4509 19.4781 17.505C19.4582 17.559 19.4274 17.6084 19.3878 17.6502C19.3481 17.6919 19.3003 17.7252 19.2474 17.7479C19.1944 17.7705 19.1374 17.7822 19.0798 17.7821C18.63 17.7821 18.1987 17.9608 17.8807 18.2788C17.5626 18.5969 17.3839 19.0282 17.3839 19.478V21.2735C17.3839 21.3052 17.391 21.3366 17.4046 21.3652C17.4183 21.3938 17.4382 21.419 17.4629 21.4389C17.7638 21.6879 18.118 21.8641 18.498 21.9539C18.8781 22.0437 19.2737 22.0447 19.6542 21.9567C20.0347 21.8687 20.3898 21.6942 20.6918 21.4466C20.9939 21.1991 21.2348 20.8852 21.3958 20.5295C21.412 20.4937 21.4179 20.4541 21.413 20.4151C21.408 20.3762 21.3923 20.3394 21.3676 20.3088C21.3429 20.2782 21.3102 20.2551 21.2732 20.2421C21.2362 20.229 21.1962 20.2265 21.1578 20.2348C20.8936 20.2954 20.6234 20.3259 20.3523 20.326H19.9426C19.8332 20.3273 19.7274 20.2872 19.6463 20.2138C19.5652 20.1404 19.5149 20.039 19.5054 19.9301C19.5015 19.8721 19.5097 19.8139 19.5292 19.7592C19.5488 19.7045 19.5794 19.6543 19.6192 19.6119C19.6589 19.5696 19.707 19.5358 19.7604 19.5127C19.8137 19.4897 19.8712 19.4779 19.9294 19.478H20.3533C20.7963 19.4787 21.2328 19.3717 21.6252 19.1664C22.09 18.9243 22.4762 18.5547 22.7384 18.101C23.0006 17.6473 23.128 17.1282 23.1056 16.6046C23.0832 16.081 22.912 15.5747 22.6121 15.1449C22.3122 14.7152 21.8959 14.3799 21.4122 14.1784ZM20.7762 16.0862H20.5643C20.0583 16.0862 19.573 15.8852 19.2152 15.5274C18.8574 15.1696 18.6564 14.6844 18.6564 14.1784V13.9664C18.6564 13.8539 18.7011 13.7461 18.7806 13.6666C18.8601 13.5871 18.9679 13.5424 19.0804 13.5424C19.1928 13.5424 19.3006 13.5871 19.3802 13.6666C19.4597 13.7461 19.5043 13.8539 19.5043 13.9664V14.1784C19.5043 14.3175 19.5317 14.4554 19.585 14.584C19.6383 14.7126 19.7164 14.8294 19.8148 14.9278C20.0136 15.1266 20.2831 15.2383 20.5643 15.2383H20.7762C20.8887 15.2383 20.9965 15.283 21.076 15.3625C21.1556 15.442 21.2002 15.5498 21.2002 15.6623C21.2002 15.7747 21.1556 15.8825 21.076 15.9621C20.9965 16.0416 20.8887 16.0862 20.7762 16.0862ZM14.8406 11.6345C14.2224 11.6352 13.6297 11.8811 13.1925 12.3183C12.7554 12.7554 12.5095 13.3481 12.5088 13.9664V14.1784C12.0251 14.38 11.6089 14.7154 11.3091 15.1452C11.0093 15.575 10.8382 16.0814 10.816 16.6049C10.7937 17.1285 10.9212 17.6476 11.1835 18.1012C11.4458 18.5549 11.832 18.9244 12.2968 19.1664C12.6893 19.3717 13.1258 19.4787 13.5687 19.478H13.9784C14.0879 19.4764 14.1941 19.5163 14.2754 19.5898C14.3567 19.6632 14.4072 19.7647 14.4167 19.8739C14.4205 19.9319 14.4124 19.9901 14.3928 20.0448C14.3732 20.0995 14.3426 20.1496 14.3029 20.192C14.2631 20.2344 14.2151 20.2682 14.1617 20.2912C14.1083 20.3143 14.0508 20.3261 13.9927 20.326H13.5687C13.2974 20.3261 13.027 20.2953 12.7626 20.2343C12.7243 20.2259 12.6843 20.2284 12.6473 20.2413C12.6102 20.2543 12.5775 20.2774 12.5528 20.3079C12.5281 20.3384 12.5123 20.3751 12.5072 20.4141C12.5022 20.453 12.508 20.4926 12.5242 20.5284C12.6851 20.8843 12.926 21.1982 13.228 21.4459C13.5301 21.6935 13.8852 21.8682 14.2657 21.9563C14.6462 22.0444 15.042 22.0435 15.4221 21.9538C15.8023 21.864 16.1566 21.6878 16.4576 21.4389C16.4823 21.419 16.5022 21.3938 16.5158 21.3652C16.5295 21.3366 16.5366 21.3052 16.5365 21.2735V19.478C16.5365 19.0282 16.3578 18.5969 16.0398 18.2788C15.7218 17.9608 15.2904 17.7821 14.8406 17.7821C14.783 17.7822 14.726 17.7705 14.6731 17.7479C14.6201 17.7252 14.5724 17.6919 14.5327 17.6502C14.493 17.6084 14.4623 17.559 14.4423 17.505C14.4224 17.4509 14.4136 17.3934 14.4167 17.3359C14.4248 17.2252 14.475 17.1219 14.5571 17.0471C14.6391 16.9724 14.7466 16.932 14.8576 16.9342C15.3365 16.9367 15.8048 17.0753 16.2079 17.3338C16.2399 17.3548 16.2769 17.3668 16.3151 17.3685C16.3532 17.3702 16.3912 17.3616 16.4248 17.3435C16.4585 17.3254 16.4867 17.2985 16.5063 17.2658C16.526 17.233 16.5364 17.1955 16.5365 17.1573V12.4554C16.5367 12.3998 16.515 12.3463 16.4761 12.3065C16.0408 11.8758 15.453 11.6343 14.8406 11.6345ZM15.2646 14.1784C15.2646 14.6844 15.0636 15.1696 14.7058 15.5274C14.348 15.8852 13.8627 16.0862 13.3567 16.0862H13.1447C13.0323 16.0862 12.9245 16.0416 12.845 15.9621C12.7654 15.8825 12.7208 15.7747 12.7208 15.6623C12.7208 15.5498 12.7654 15.442 12.845 15.3625C12.9245 15.283 13.0323 15.2383 13.1447 15.2383H13.3567C13.4959 15.2383 13.6338 15.2109 13.7623 15.1576C13.8909 15.1043 14.0078 15.0263 14.1062 14.9278C14.2046 14.8294 14.2827 14.7126 14.336 14.584C14.3892 14.4554 14.4167 14.3175 14.4167 14.1784V13.9664C14.4167 13.8539 14.4613 13.7461 14.5408 13.6666C14.6204 13.5871 14.7282 13.5424 14.8406 13.5424C14.9531 13.5424 15.0609 13.5871 15.1404 13.6666C15.2199 13.7461 15.2646 13.8539 15.2646 13.9664V14.1784Z"
                                                            fill={colorss.hud2c6}/>
                                                    </svg>


                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o6: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c6}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c6} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c6: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>

                                            </div>
                                            <div
                                                className={'mt-[30px] px-[33px] flex-row gap-[10px] w-full flex justify-start items-start'}>
                                                <div
                                                    className={`w-[102px] cursor-pointer active:text-[#E0E0E0] active:bg-gradient-to-r from-gray-500 to-gray-500  transition-400  text-[7px] font-semibold flex flex-row justify-center items-center text-black dashboard14 h-[23px]`}>
                                                    <h1 className={'select-none'}>Save Settings</h1>
                                                </div>
                                                <div
                                                    className={'w-[102px] cursor-pointer active:text-black active:bg-gradient-to-r from-white to-gray-200 transition-400  text-[7px] text-[#E0E0E0] font-semibold  flex flex-row justify-center items-center dashboard15 h-[23px]'}>

                                                    <h1 className={'select-none'}>
                                                        Restore Defaults
                                                    </h1>
                                                </div>
                                                <div onClick={() => {
                                                    setSettings({...settings, settings1: false})
                                                }}
                                                     className={'w-[102px] active:text-black active:bg-gradient-to-r from-white to-gray-200 transition-400 cursor-pointer text-[7px] text-[#E0E0E0] flex justify-center items-center font-semibold  dashboard15 h-[23px]'}>
                                                    <h1 className={'select-none'}>
                                                        Cancel
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>) : ''}
                                {settings.settings2 ? (
                                    <div
                                        className={'w-[340px] pl-[18px] pr-[10px] h-[230px] items-start flex-col flex   pt-[7px] dashboard10'}>
                                        <div className={'flex  flex-row w-full justify-between items-center'}>
                                            <div className={'flex flex-col items-start'}>
                                                <h3 className={'text-[#939393] mt-[10px] 2xl:text-[18px] text-[14px] font-semibold'}>
                                                    Status Style Settings #2
                                                </h3>
                                                <h4 className={`text-white font-semibold 2xl:text-[10px] text-[9px]`}>Selected
                                                    Now</h4>
                                            </div>
                                            <div className={'flex flex-row mr-1 items-center gap-[5px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                     viewBox="0 0 12 12" fill="none">
                                                    <path
                                                        d="M5.80365 0.261963C4.6558 0.261963 3.53372 0.602341 2.57932 1.24005C1.62491 1.87777 0.881044 2.78417 0.441779 3.84465C0.00251463 4.90513 -0.112417 6.07205 0.111518 7.19785C0.335453 8.32365 0.888198 9.35776 1.69985 10.1694C2.51151 10.9811 3.54562 11.5338 4.67142 11.7578C5.79722 11.9817 6.96414 11.8668 8.02462 11.4275C9.08509 10.9882 9.9915 10.2444 10.6292 9.28995C11.2669 8.33554 11.6073 7.21347 11.6073 6.06561C11.6057 4.52689 10.9937 3.05165 9.90566 1.96361C8.81762 0.875564 7.34238 0.263588 5.80365 0.261963ZM5.58044 2.94057C5.71288 2.94057 5.84235 2.97985 5.95248 3.05343C6.0626 3.12701 6.14843 3.2316 6.19911 3.35396C6.2498 3.47632 6.26306 3.61097 6.23722 3.74087C6.21138 3.87077 6.1476 3.99009 6.05395 4.08374C5.9603 4.17739 5.84098 4.24117 5.71108 4.26701C5.58118 4.29285 5.44654 4.27959 5.32417 4.2289C5.20181 4.17822 5.09722 4.09239 5.02364 3.98226C4.95006 3.87214 4.91078 3.74267 4.91078 3.61022C4.91078 3.43262 4.98134 3.26229 5.10692 3.13671C5.23251 3.01112 5.40283 2.94057 5.58044 2.94057ZM6.25009 9.19066C6.01329 9.19066 5.78618 9.09659 5.61873 8.92914C5.45129 8.7617 5.35722 8.53459 5.35722 8.29779V6.06561C5.23882 6.06561 5.12527 6.01858 5.04154 5.93486C4.95782 5.85113 4.91078 5.73758 4.91078 5.61918C4.91078 5.50078 4.95782 5.38723 5.04154 5.3035C5.12527 5.21978 5.23882 5.17274 5.35722 5.17274C5.59402 5.17274 5.82113 5.26682 5.98857 5.43426C6.15602 5.60171 6.25009 5.82881 6.25009 6.06561V8.29779C6.36849 8.29779 6.48204 8.34482 6.56577 8.42855C6.64949 8.51227 6.69652 8.62582 6.69652 8.74422C6.69652 8.86263 6.64949 8.97618 6.56577 9.0599C6.48204 9.14362 6.36849 9.19066 6.25009 9.19066Z"
                                                        fill="#969696"/>
                                                </svg>
                                                <h3 className={'text-[11px] font-semibold text-[#969696]'}>
                                                    100 = Never Hide
                                                </h3>
                                            </div>
                                        </div>
                                        <div
                                            className={'w-full mt-[19px] h-full flex flex-col justify-start items-center'}>
                                            <div className={'flex flex-row gap-[10px]'}>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o1}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.4967 16.9915C33.4967 26.2414 25.9982 33.7399 16.7484 33.7399C7.4985 33.7399 0 26.2414 0 16.9915C0 7.74166 7.4985 0.243164 16.7484 0.243164C25.9982 0.243164 33.4967 7.74166 33.4967 16.9915ZM0.953051 16.9915C0.953051 25.715 8.02485 32.7868 16.7484 32.7868C25.4719 32.7868 32.5437 25.715 32.5437 16.9915C32.5437 8.26802 25.4719 1.19621 16.7484 1.19621C8.02485 1.19621 0.953051 8.26802 0.953051 16.9915Z"
                                                            fill={colorss.hud2c1} fill-opacity="0.26"/>
                                                        <circle cx="16.7475" cy="16.9917" r="15.7632"
                                                                fill={colorss.hud2c1} fill-opacity="0.08"/>
                                                        <path
                                                            d="M30.8693 16.9913C30.8693 24.7902 24.547 31.1125 16.7481 31.1125C8.94922 31.1125 2.62695 24.7902 2.62695 16.9913C2.62695 9.19238 8.94922 2.87012 16.7481 2.87012C24.547 2.87012 30.8693 9.19238 30.8693 16.9913ZM2.88083 16.9913C2.88083 24.65 9.08943 30.8586 16.7481 30.8586C24.4068 30.8586 30.6154 24.65 30.6154 16.9913C30.6154 9.33259 24.4068 3.12399 16.7481 3.12399C9.08943 3.12399 2.88083 9.33259 2.88083 16.9913Z"
                                                            fill={colorss.hud2c1}/>
                                                        <path
                                                            d="M30.8693 16.9913C30.8693 14.8331 30.3746 12.7037 29.4233 10.7665C28.4719 8.82932 27.0892 7.13599 25.3814 5.81655C23.6735 4.49712 21.6859 3.58669 19.5713 3.15521C17.4567 2.72374 15.2714 2.78269 13.1831 3.32753L13.4859 4.48789C15.3968 3.98931 17.3966 3.93537 19.3316 4.3302C21.2666 4.72504 23.0854 5.55815 24.6482 6.76553C26.211 7.97292 27.4763 9.52246 28.3469 11.2951C29.2174 13.0678 29.6701 15.0164 29.6701 16.9913H30.8693Z"
                                                            fill={colorss.hud2c1}/>
                                                        <path
                                                            d="M20.8421 13.067C19.8564 12.0398 18.2558 12.0398 17.2701 13.067L16.5991 13.7624L15.9281 13.0646C14.9399 12.0374 13.3418 12.0374 12.3561 13.0646C11.2459 14.2187 11.2459 16.0925 12.3561 17.2466L16.5991 21.6653L20.8421 17.2491C21.9523 16.095 21.9523 14.2211 20.8421 13.067Z"
                                                            fill={colorss.hud2c1}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o1: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c1}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c1} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c1: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o2}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.6432 16.9913C33.6432 26.2411 26.1447 33.7396 16.8948 33.7396C7.64498 33.7396 0.146484 26.2411 0.146484 16.9913C0.146484 7.74142 7.64498 0.24292 16.8948 0.24292C26.1447 0.24292 33.6432 7.74142 33.6432 16.9913ZM1.09953 16.9913C1.09953 25.7148 8.17134 32.7866 16.8948 32.7866C25.6184 32.7866 32.6902 25.7148 32.6902 16.9913C32.6902 8.26777 25.6184 1.19597 16.8948 1.19597C8.17134 1.19597 1.09953 8.26777 1.09953 16.9913Z"
                                                            fill={colorss.hud2c2} fill-opacity="0.26"/>
                                                        <circle cx="16.894" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c2} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.0158 16.9913C31.0158 24.7902 24.6935 31.1125 16.8946 31.1125C9.0957 31.1125 2.77344 24.7902 2.77344 16.9913C2.77344 9.19238 9.0957 2.87012 16.8946 2.87012C24.6935 2.87012 31.0158 9.19238 31.0158 16.9913ZM3.02732 16.9913C3.02732 24.65 9.23591 30.8586 16.8946 30.8586C24.5533 30.8586 30.7619 24.65 30.7619 16.9913C30.7619 9.33259 24.5533 3.12399 16.8946 3.12399C9.23591 3.12399 3.02732 9.33259 3.02732 16.9913Z"
                                                            fill={colorss.hud2c2}/>
                                                        <path
                                                            d="M31.0158 16.9913C31.0158 14.8331 30.5211 12.7037 29.5698 10.7665C28.6184 8.82932 27.2357 7.13599 25.5278 5.81655C23.82 4.49712 21.8324 3.58669 19.7178 3.15521C17.6032 2.72374 15.4179 2.78269 13.3296 3.32753L13.6324 4.48789C15.5433 3.98931 17.543 3.93537 19.4781 4.3302C21.4131 4.72504 23.2319 5.55815 24.7947 6.76553C26.3575 7.97292 27.6228 9.52246 28.4934 11.2951C29.3639 13.0678 29.8166 15.0164 29.8166 16.9913H31.0158Z"
                                                            fill={colorss.hud2c2}/>
                                                        <path
                                                            d="M16.5168 21.7928C18.9011 21.7928 20.8519 19.842 20.8519 17.4576C20.8519 15.0733 16.5168 10.2324 16.5168 10.2324C16.5168 10.2324 12.1816 15.1456 12.1816 17.4576C12.1816 19.7697 14.1325 21.7928 16.5168 21.7928Z"
                                                            fill={colorss.hud2c2}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o2: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c2}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c1} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c2: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>

                                                    <svg style={{opacity: `${opacityy.hud1o3}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.7897 16.9913C33.7897 26.2411 26.2912 33.7396 17.0413 33.7396C7.79147 33.7396 0.292969 26.2411 0.292969 16.9913C0.292969 7.74142 7.79147 0.24292 17.0413 0.24292C26.2912 0.24292 33.7897 7.74142 33.7897 16.9913ZM1.24602 16.9913C1.24602 25.7148 8.31782 32.7866 17.0413 32.7866C25.7648 32.7866 32.8366 25.7148 32.8366 16.9913C32.8366 8.26777 25.7648 1.19597 17.0413 1.19597C8.31782 1.19597 1.24602 8.26777 1.24602 16.9913Z"
                                                            fill={colorss.hud2c3} fill-opacity="0.26"/>
                                                        <circle cx="17.0405" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c3} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.1623 16.9913C31.1623 24.7902 24.84 31.1125 17.0411 31.1125C9.24219 31.1125 2.91992 24.7902 2.91992 16.9913C2.91992 9.19238 9.24219 2.87012 17.0411 2.87012C24.84 2.87012 31.1623 9.19238 31.1623 16.9913ZM3.1738 16.9913C3.1738 24.65 9.3824 30.8586 17.0411 30.8586C24.6998 30.8586 30.9084 24.65 30.9084 16.9913C30.9084 9.33259 24.6998 3.12399 17.0411 3.12399C9.3824 3.12399 3.1738 9.33259 3.1738 16.9913Z"
                                                            fill={colorss.hud2c3}/>
                                                        <path
                                                            d="M31.1623 16.9913C31.1623 14.8331 30.6676 12.7037 29.7162 10.7665C28.7649 8.82932 27.3822 7.13599 25.6743 5.81655C23.9665 4.49712 21.9789 3.58669 19.8643 3.15521C17.7497 2.72374 15.5643 2.78269 13.4761 3.32753L13.7788 4.48789C15.6898 3.98931 17.6895 3.93537 19.6246 4.3302C21.5596 4.72504 23.3783 5.55815 24.9412 6.76553C26.504 7.97292 27.7693 9.52246 28.6398 11.2951C29.5104 13.0678 29.9631 15.0164 29.9631 16.9913H31.1623Z"
                                                            fill={colorss.hud2c3}/>
                                                        <path
                                                            d="M12.2878 15.5086C12.2116 15.4149 12.1573 15.3052 12.1291 15.1878C12.1009 15.0703 12.0993 14.948 12.1246 14.8298C12.4999 13.056 14.5313 11.7681 16.9557 11.7681C19.38 11.7681 21.4114 13.056 21.7867 14.8298C21.8122 14.9481 21.8109 15.0705 21.7828 15.1882C21.7548 15.3058 21.7006 15.4157 21.6244 15.5096C21.5482 15.6036 21.4519 15.6792 21.3426 15.731C21.2332 15.7827 21.1137 15.8093 20.9927 15.8087L12.9186 15.8087C12.7977 15.809 12.6783 15.7823 12.5691 15.7303C12.4599 15.6784 12.3638 15.6027 12.2878 15.5086ZM22.07 18.2573L19.9927 19.0149L18.1173 18.2618C18.021 18.2233 17.9136 18.2233 17.8173 18.2618L15.9485 19.0098L14.0767 18.2618C13.9846 18.225 13.8821 18.2234 13.7888 18.2573L11.5665 19.0654C11.4726 19.1067 11.3979 19.1822 11.3576 19.2766C11.3174 19.371 11.3145 19.4772 11.3497 19.5736C11.3849 19.67 11.4554 19.7494 11.547 19.7958C11.6385 19.8421 11.7443 19.8518 11.8428 19.823L12.511 19.581L12.511 19.8492C12.511 20.3851 12.7239 20.8989 13.1027 21.2778C13.4816 21.6567 13.9955 21.8695 14.5313 21.8695L19.38 21.8695C19.9158 21.8695 20.4297 21.6567 20.8086 21.2778C21.1874 20.8989 21.4003 20.3851 21.4003 19.8492L21.4003 19.3608L22.3463 19.0169C22.3993 19.0014 22.4486 18.9751 22.4911 18.9398C22.5336 18.9044 22.5684 18.8608 22.5934 18.8114C22.6183 18.7621 22.6329 18.7082 22.6362 18.653C22.6394 18.5978 22.6314 18.5426 22.6124 18.4907C22.5935 18.4387 22.5641 18.3912 22.5261 18.3511C22.488 18.311 22.4422 18.2791 22.3914 18.2574C22.3405 18.2357 22.2858 18.2247 22.2305 18.225C22.1752 18.2254 22.1206 18.237 22.07 18.2593L22.07 18.2573ZM11.7029 17.4249L22.2084 17.4249C22.3156 17.4249 22.4184 17.3823 22.4941 17.3065C22.5699 17.2308 22.6125 17.128 22.6125 17.0208C22.6125 16.9137 22.5699 16.8109 22.4941 16.7351C22.4184 16.6593 22.3156 16.6168 22.2084 16.6168L11.7029 16.6168C11.5957 16.6168 11.4929 16.6593 11.4172 16.7351C11.3414 16.8109 11.2988 16.9137 11.2988 17.0208C11.2988 17.128 11.3414 17.2308 11.4172 17.3065C11.4929 17.3823 11.5957 17.4249 11.7029 17.4249Z"
                                                            fill={colorss.hud2c3}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o3: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c3}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c1} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c3: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o4}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                                         viewBox="0 0 34 34" fill="none">
                                                        <path
                                                            d="M33.9362 16.9915C33.9362 26.2414 26.4377 33.7399 17.1878 33.7399C7.93795 33.7399 0.439453 26.2414 0.439453 16.9915C0.439453 7.74166 7.93795 0.243164 17.1878 0.243164C26.4377 0.243164 33.9362 7.74166 33.9362 16.9915ZM1.3925 16.9915C1.3925 25.715 8.4643 32.7868 17.1878 32.7868C25.9113 32.7868 32.9831 25.715 32.9831 16.9915C32.9831 8.26802 25.9113 1.19621 17.1878 1.19621C8.4643 1.19621 1.3925 8.26802 1.3925 16.9915Z"
                                                            fill={colorss.hud2c4} fill-opacity="0.26"/>
                                                        <circle cx="17.188" cy="16.9917" r="15.7632"
                                                                fill={colorss.hud2c4} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.3087 16.9913C31.3087 24.7902 24.9865 31.1125 17.1876 31.1125C9.38867 31.1125 3.06641 24.7902 3.06641 16.9913C3.06641 9.19238 9.38867 2.87012 17.1876 2.87012C24.9865 2.87012 31.3087 9.19238 31.3087 16.9913ZM3.32028 16.9913C3.32028 24.65 9.52888 30.8586 17.1876 30.8586C24.8463 30.8586 31.0549 24.65 31.0549 16.9913C31.0549 9.33259 24.8463 3.12399 17.1876 3.12399C9.52888 3.12399 3.32028 9.33259 3.32028 16.9913Z"
                                                            fill={colorss.hud2c4}/>
                                                        <path
                                                            d="M31.3087 16.9913C31.3087 14.8331 30.8141 12.7037 29.8627 10.7665C28.9114 8.82932 27.5287 7.13599 25.8208 5.81655C24.113 4.49712 22.1254 3.58669 20.0108 3.15521C17.8962 2.72374 15.7108 2.78269 13.6226 3.32753L13.9253 4.48789C15.8362 3.98931 17.836 3.93537 19.771 4.3302C21.7061 4.72504 23.5248 5.55815 25.0877 6.76553C26.6505 7.97292 27.9158 9.52246 28.7863 11.2951C29.6569 13.0678 30.1095 15.0164 30.1095 16.9913H31.3087Z"
                                                            fill={colorss.hud2c4}/>
                                                        <path
                                                            d="M16.873 23.1691C16.8053 23.169 16.7382 23.1571 16.6746 23.134C16.5519 23.0891 16.4478 23.0043 16.3791 22.8933C16.3103 22.7822 16.2808 22.6512 16.2953 22.5214L16.7446 18.3846H13.308C13.202 18.3848 13.0979 18.3561 13.007 18.3016C12.9161 18.2471 12.8418 18.1688 12.792 18.0752C12.7422 17.9817 12.7189 17.8763 12.7244 17.7704C12.73 17.6646 12.7643 17.5623 12.8237 17.4744L17.4272 10.5895C17.5001 10.4818 17.6068 10.4015 17.7304 10.3613C17.8541 10.3211 17.9877 10.3234 18.1099 10.3678C18.2274 10.4114 18.3277 10.4917 18.396 10.5968C18.4643 10.7019 18.497 10.8262 18.4892 10.9513L18.0399 15.1172H21.4765C21.5825 15.1171 21.6865 15.1458 21.7774 15.2003C21.8683 15.2548 21.9427 15.3331 21.9925 15.4266C22.0423 15.5202 22.0656 15.6256 22.06 15.7314C22.0544 15.8373 22.0201 15.9396 21.9608 16.0274L17.3572 22.9123C17.3037 22.9915 17.2316 23.0563 17.1471 23.1011C17.0627 23.1459 16.9685 23.1692 16.873 23.1691Z"
                                                            fill={colorss.hud2c4}/>
                                                    </svg>
                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o4: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c4}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c4} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c4: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o5}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="35" height="34"
                                                         viewBox="0 0 35 34" fill="none">
                                                        <path
                                                            d="M34.0827 16.9913C34.0827 26.2411 26.5842 33.7396 17.3343 33.7396C8.08443 33.7396 0.585938 26.2411 0.585938 16.9913C0.585938 7.74142 8.08443 0.24292 17.3343 0.24292C26.5842 0.24292 34.0827 7.74142 34.0827 16.9913ZM1.53899 16.9913C1.53899 25.7148 8.61079 32.7866 17.3343 32.7866C26.0578 32.7866 33.1296 25.7148 33.1296 16.9913C33.1296 8.26777 26.0578 1.19597 17.3343 1.19597C8.61079 1.19597 1.53899 8.26777 1.53899 16.9913Z"
                                                            fill={colorss.hud2c5} fill-opacity="0.26"/>
                                                        <circle cx="17.3345" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c5} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.4552 16.9913C31.4552 24.7902 25.133 31.1125 17.3341 31.1125C9.53515 31.1125 3.21289 24.7902 3.21289 16.9913C3.21289 9.19238 9.53515 2.87012 17.3341 2.87012C25.133 2.87012 31.4552 9.19238 31.4552 16.9913ZM3.46677 16.9913C3.46677 24.65 9.67537 30.8586 17.3341 30.8586C24.9928 30.8586 31.2014 24.65 31.2014 16.9913C31.2014 9.33259 24.9928 3.12399 17.3341 3.12399C9.67537 3.12399 3.46677 9.33259 3.46677 16.9913Z"
                                                            fill={colorss.hud2c5}/>
                                                        <path
                                                            d="M31.4552 16.9913C31.4552 14.8331 30.9606 12.7037 30.0092 10.7665C29.0579 8.82932 27.6752 7.13599 25.9673 5.81655C24.2594 4.49712 22.2719 3.58669 20.1573 3.15521C18.0427 2.72374 15.8573 2.78269 13.7691 3.32753L14.0718 4.48789C15.9827 3.98931 17.9825 3.93537 19.9175 4.3302C21.8525 4.72504 23.6713 5.55815 25.2341 6.76553C26.797 7.97292 28.0623 9.52246 28.9328 11.2951C29.8034 13.0678 30.256 15.0164 30.256 16.9913H31.4552Z"
                                                            fill={colorss.hud2c5}/>
                                                        <path
                                                            d="M22.5072 12.8938L22.2925 12.8773C19.8489 12.6863 17.3273 11.0965 17.3037 11.0823L17.1764 10.9998L17.049 11.0823C17.0254 11.0965 14.5039 12.6863 12.0602 12.8773L11.8455 12.8938L11.8408 13.1085C11.8408 13.1698 11.8102 19.2106 17.0561 22.3337L17.1764 22.4044L17.2967 22.3337C22.5426 19.2106 22.5119 13.1698 22.5119 13.1085L22.5072 12.8938Z"
                                                            fill={colorss.hud2c5}/>
                                                    </svg>


                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o5: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c5}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c5} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c5: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>
                                                <div className={'flex flex-col gap-[8px]'}>
                                                    <svg style={{opacity: `${opacityy.hud1o6}%`}}
                                                         xmlns="http://www.w3.org/2000/svg" width="35" height="34"
                                                         viewBox="0 0 35 34" fill="none">
                                                        <path
                                                            d="M34.2291 16.9915C34.2291 26.2414 26.7306 33.7399 17.4808 33.7399C8.23092 33.7399 0.732422 26.2414 0.732422 16.9915C0.732422 7.74166 8.23092 0.243164 17.4808 0.243164C26.7306 0.243164 34.2291 7.74166 34.2291 16.9915ZM1.68547 16.9915C1.68547 25.715 8.75727 32.7868 17.4808 32.7868C26.2043 32.7868 33.2761 25.715 33.2761 16.9915C33.2761 8.26802 26.2043 1.19621 17.4808 1.19621C8.75727 1.19621 1.68547 8.26802 1.68547 16.9915Z"
                                                            fill={colorss.hud2c6} fill-opacity="0.26"/>
                                                        <circle cx="17.48" cy="16.9914" r="15.7632"
                                                                fill={colorss.hud2c6} fill-opacity="0.08"/>
                                                        <path
                                                            d="M31.6017 16.9915C31.6017 24.7904 25.2795 31.1127 17.4805 31.1127C9.68164 31.1127 3.35938 24.7904 3.35938 16.9915C3.35938 9.19262 9.68164 2.87036 17.4805 2.87036C25.2795 2.87036 31.6017 9.19262 31.6017 16.9915ZM3.61325 16.9915C3.61325 24.6502 9.82185 30.8588 17.4805 30.8588C25.1392 30.8588 31.3478 24.6502 31.3478 16.9915C31.3478 9.33284 25.1392 3.12424 17.4805 3.12424C9.82185 3.12424 3.61325 9.33284 3.61325 16.9915Z"
                                                            fill={colorss.hud2c6}/>
                                                        <path
                                                            d="M31.6017 16.9915C31.6017 14.8334 31.107 12.7039 30.1557 10.7667C29.2043 8.82957 27.8216 7.13623 26.1138 5.8168C24.4059 4.49736 22.4184 3.58694 20.3038 3.15546C18.1892 2.72398 16.0038 2.78293 13.9155 3.32778L14.2183 4.48813C16.1292 3.98955 18.129 3.93561 20.064 4.33045C21.999 4.72528 23.8178 5.55839 25.3806 6.76578C26.9434 7.97316 28.2087 9.5227 29.0793 11.2954C29.9499 13.068 30.4025 15.0166 30.4025 16.9915H31.6017Z"
                                                            fill={colorss.hud2c6}/>
                                                        <path
                                                            d="M21.4122 14.1784V13.9664C21.4116 13.507 21.2754 13.0581 21.0207 12.6758C20.7659 12.2936 20.4039 11.9952 19.9801 11.8179C19.5563 11.6407 19.0897 11.5926 18.6386 11.6796C18.1876 11.7666 17.7723 11.9849 17.4449 12.307C17.4255 12.3266 17.4102 12.3497 17.3998 12.3752C17.3895 12.4007 17.3842 12.4279 17.3845 12.4554V17.1573C17.3846 17.1955 17.395 17.233 17.4147 17.2658C17.4343 17.2985 17.4625 17.3254 17.4961 17.3435C17.5298 17.3616 17.5678 17.3702 17.6059 17.3685C17.6441 17.3668 17.6811 17.3548 17.713 17.3338C18.1162 17.0753 18.5845 16.9367 19.0634 16.9342C19.1743 16.9321 19.2817 16.9726 19.3636 17.0473C19.4455 17.122 19.4957 17.2253 19.5038 17.3359C19.5068 17.3934 19.4981 17.4509 19.4781 17.505C19.4582 17.559 19.4274 17.6084 19.3878 17.6502C19.3481 17.6919 19.3003 17.7252 19.2474 17.7479C19.1944 17.7705 19.1374 17.7822 19.0798 17.7821C18.63 17.7821 18.1987 17.9608 17.8807 18.2788C17.5626 18.5969 17.3839 19.0282 17.3839 19.478V21.2735C17.3839 21.3052 17.391 21.3366 17.4046 21.3652C17.4183 21.3938 17.4382 21.419 17.4629 21.4389C17.7638 21.6879 18.118 21.8641 18.498 21.9539C18.8781 22.0437 19.2737 22.0447 19.6542 21.9567C20.0347 21.8687 20.3898 21.6942 20.6918 21.4466C20.9939 21.1991 21.2348 20.8852 21.3958 20.5295C21.412 20.4937 21.4179 20.4541 21.413 20.4151C21.408 20.3762 21.3923 20.3394 21.3676 20.3088C21.3429 20.2782 21.3102 20.2551 21.2732 20.2421C21.2362 20.229 21.1962 20.2265 21.1578 20.2348C20.8936 20.2954 20.6234 20.3259 20.3523 20.326H19.9426C19.8332 20.3273 19.7274 20.2872 19.6463 20.2138C19.5652 20.1404 19.5149 20.039 19.5054 19.9301C19.5015 19.8721 19.5097 19.8139 19.5292 19.7592C19.5488 19.7045 19.5794 19.6543 19.6192 19.6119C19.6589 19.5696 19.707 19.5358 19.7604 19.5127C19.8137 19.4897 19.8712 19.4779 19.9294 19.478H20.3533C20.7963 19.4787 21.2328 19.3717 21.6252 19.1664C22.09 18.9243 22.4762 18.5547 22.7384 18.101C23.0006 17.6473 23.128 17.1282 23.1056 16.6046C23.0832 16.081 22.912 15.5747 22.6121 15.1449C22.3122 14.7152 21.8959 14.3799 21.4122 14.1784ZM20.7762 16.0862H20.5643C20.0583 16.0862 19.573 15.8852 19.2152 15.5274C18.8574 15.1696 18.6564 14.6844 18.6564 14.1784V13.9664C18.6564 13.8539 18.7011 13.7461 18.7806 13.6666C18.8601 13.5871 18.9679 13.5424 19.0804 13.5424C19.1928 13.5424 19.3006 13.5871 19.3802 13.6666C19.4597 13.7461 19.5043 13.8539 19.5043 13.9664V14.1784C19.5043 14.3175 19.5317 14.4554 19.585 14.584C19.6383 14.7126 19.7164 14.8294 19.8148 14.9278C20.0136 15.1266 20.2831 15.2383 20.5643 15.2383H20.7762C20.8887 15.2383 20.9965 15.283 21.076 15.3625C21.1556 15.442 21.2002 15.5498 21.2002 15.6623C21.2002 15.7747 21.1556 15.8825 21.076 15.9621C20.9965 16.0416 20.8887 16.0862 20.7762 16.0862ZM14.8406 11.6345C14.2224 11.6352 13.6297 11.8811 13.1925 12.3183C12.7554 12.7554 12.5095 13.3481 12.5088 13.9664V14.1784C12.0251 14.38 11.6089 14.7154 11.3091 15.1452C11.0093 15.575 10.8382 16.0814 10.816 16.6049C10.7937 17.1285 10.9212 17.6476 11.1835 18.1012C11.4458 18.5549 11.832 18.9244 12.2968 19.1664C12.6893 19.3717 13.1258 19.4787 13.5687 19.478H13.9784C14.0879 19.4764 14.1941 19.5163 14.2754 19.5898C14.3567 19.6632 14.4072 19.7647 14.4167 19.8739C14.4205 19.9319 14.4124 19.9901 14.3928 20.0448C14.3732 20.0995 14.3426 20.1496 14.3029 20.192C14.2631 20.2344 14.2151 20.2682 14.1617 20.2912C14.1083 20.3143 14.0508 20.3261 13.9927 20.326H13.5687C13.2974 20.3261 13.027 20.2953 12.7626 20.2343C12.7243 20.2259 12.6843 20.2284 12.6473 20.2413C12.6102 20.2543 12.5775 20.2774 12.5528 20.3079C12.5281 20.3384 12.5123 20.3751 12.5072 20.4141C12.5022 20.453 12.508 20.4926 12.5242 20.5284C12.6851 20.8843 12.926 21.1982 13.228 21.4459C13.5301 21.6935 13.8852 21.8682 14.2657 21.9563C14.6462 22.0444 15.042 22.0435 15.4221 21.9538C15.8023 21.864 16.1566 21.6878 16.4576 21.4389C16.4823 21.419 16.5022 21.3938 16.5158 21.3652C16.5295 21.3366 16.5366 21.3052 16.5365 21.2735V19.478C16.5365 19.0282 16.3578 18.5969 16.0398 18.2788C15.7218 17.9608 15.2904 17.7821 14.8406 17.7821C14.783 17.7822 14.726 17.7705 14.6731 17.7479C14.6201 17.7252 14.5724 17.6919 14.5327 17.6502C14.493 17.6084 14.4623 17.559 14.4423 17.505C14.4224 17.4509 14.4136 17.3934 14.4167 17.3359C14.4248 17.2252 14.475 17.1219 14.5571 17.0471C14.6391 16.9724 14.7466 16.932 14.8576 16.9342C15.3365 16.9367 15.8048 17.0753 16.2079 17.3338C16.2399 17.3548 16.2769 17.3668 16.3151 17.3685C16.3532 17.3702 16.3912 17.3616 16.4248 17.3435C16.4585 17.3254 16.4867 17.2985 16.5063 17.2658C16.526 17.233 16.5364 17.1955 16.5365 17.1573V12.4554C16.5367 12.3998 16.515 12.3463 16.4761 12.3065C16.0408 11.8758 15.453 11.6343 14.8406 11.6345ZM15.2646 14.1784C15.2646 14.6844 15.0636 15.1696 14.7058 15.5274C14.348 15.8852 13.8627 16.0862 13.3567 16.0862H13.1447C13.0323 16.0862 12.9245 16.0416 12.845 15.9621C12.7654 15.8825 12.7208 15.7747 12.7208 15.6623C12.7208 15.5498 12.7654 15.442 12.845 15.3625C12.9245 15.283 13.0323 15.2383 13.1447 15.2383H13.3567C13.4959 15.2383 13.6338 15.2109 13.7623 15.1576C13.8909 15.1043 14.0078 15.0263 14.1062 14.9278C14.2046 14.8294 14.2827 14.7126 14.336 14.584C14.3892 14.4554 14.4167 14.3175 14.4167 14.1784V13.9664C14.4167 13.8539 14.4613 13.7461 14.5408 13.6666C14.6204 13.5871 14.7282 13.5424 14.8406 13.5424C14.9531 13.5424 15.0609 13.5871 15.1404 13.6666C15.2199 13.7461 15.2646 13.8539 15.2646 13.9664V14.1784Z"
                                                            fill={colorss.hud2c6}/>
                                                    </svg>


                                                    <div
                                                        className={'w-[33px] h-[21px] flex justify-center items-center  dashboard13'}>
                                                        <input onChange={(e) => {
                                                            setOpacityy({
                                                                ...opacityy,
                                                                hud1o6: Number(e.target.value)
                                                            })
                                                        }} placeholder={'100'}
                                                               className={'w-full text-center  placeholder-white text-[9px] text-white bg-transparent outline-none active:outline-none'}
                                                               type="text"/>
                                                    </div>
                                                    <div style={{background: `${colorss.hud2c6}`}}
                                                         className={`w-[33px] relative h-[12px] border1 rounded-[2px]`}>
                                                        <input value={colorss.hud2c6} onChange={(e) => {
                                                            setColorss({
                                                                ...colorss,
                                                                hud2c6: e.target.value
                                                            })
                                                        }}
                                                               className={'w-[33px] absolute top-0 left-0 opacity-0 h-[12px] border-t-none rounded-[5px] !border-none outline-none appearance-none unset'}
                                                               type="color"/>

                                                    </div>
                                                </div>

                                            </div>
                                            <div
                                                className={'mt-[30px] px-[33px] flex-row gap-[10px] w-full flex justify-start items-start'}>
                                                <div
                                                    className={`w-[102px] cursor-pointer active:text-[#E0E0E0] active:bg-gradient-to-r from-gray-500 to-gray-500  transition-400  text-[7px] font-semibold flex flex-row justify-center items-center text-black dashboard14 h-[23px]`}>
                                                    <h1 className={'select-none'}>Save Settings</h1>
                                                </div>
                                                <div
                                                    className={'w-[102px] cursor-pointer active:text-black active:bg-gradient-to-r from-white to-gray-200 transition-400  text-[7px] text-[#E0E0E0] font-semibold  flex flex-row justify-center items-center dashboard15 h-[23px]'}>

                                                    <h1 className={'select-none'}>
                                                        Restore Defaults
                                                    </h1>
                                                </div>
                                                <div onClick={() => {
                                                    setSettings({...settings, settings2: false})
                                                }}
                                                     className={'w-[102px] active:text-black active:bg-gradient-to-r from-white to-gray-200 transition-400 cursor-pointer text-[7px] text-[#E0E0E0] flex justify-center items-center font-semibold  dashboard15 h-[23px]'}>
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ) : ''}
                                <div
                                    className={'w-[340px] h-[230px] items-center flex-col flex pb-[20px]  pt-[20px] dashboard10'}>
                                    <svg className={'w-[200px] h-[100px]'} width="316" height="44" viewBox="0 0 316 44"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M43.592 21.796C43.592 33.8336 33.8336 43.592 21.796 43.592C9.75841 43.592 0 33.8336 0 21.796C0 9.75841 9.75841 0 21.796 0C33.8336 0 43.592 9.75841 43.592 21.796ZM1.24028 21.796C1.24028 33.1486 10.4434 42.3517 21.796 42.3517C33.1486 42.3517 42.3517 33.1486 42.3517 21.796C42.3517 10.4434 33.1486 1.24028 21.796 1.24028C10.4434 1.24028 1.24028 10.4434 1.24028 21.796Z"
                                            fill="white" fill-opacity="0.26"/>
                                        <circle cx="21.7961" cy="21.7961" r="20.5139" fill="white"/>
                                        <path
                                            d="M40.173 21.796C40.173 31.9453 31.9453 40.173 21.796 40.173C11.6466 40.173 3.41895 31.9453 3.41895 21.796C3.41895 11.6466 11.6466 3.41895 21.796 3.41895C31.9453 3.41895 40.173 11.6466 40.173 21.796ZM3.74934 21.796C3.74934 31.7629 11.8291 39.8426 21.796 39.8426C31.7629 39.8426 39.8426 31.7629 39.8426 21.796C39.8426 11.8291 31.7629 3.74934 21.796 3.74934C11.8291 3.74934 3.74934 11.8291 3.74934 21.796Z"
                                            fill="#8D8D8D"/>
                                        <path
                                            d="M40.173 21.796C40.173 18.9874 39.5293 16.2161 38.2912 13.6951C37.0531 11.1741 35.2537 8.97047 33.0311 7.25338C30.8085 5.53629 28.222 4.35148 25.4701 3.78997C22.7182 3.22845 19.8742 3.30516 17.1565 4.01422L17.5505 5.52428C20.0374 4.87544 22.6398 4.80524 25.158 5.31908C27.6762 5.83291 30.0432 6.9171 32.077 8.48837C34.1108 10.0596 35.7574 12.0762 36.8904 14.3831C38.0233 16.69 38.6124 19.2259 38.6124 21.796H40.173Z"
                                            fill="black"/>
                                        <path
                                            d="M27.1232 16.6889C25.8404 15.3521 23.7574 15.3521 22.4746 16.6889L21.6014 17.5938L20.7282 16.6857C19.4423 15.3489 17.3625 15.3489 16.0797 16.6857C14.6349 18.1876 14.6349 20.6262 16.0797 22.1281L21.6014 27.8785L27.1232 22.1313C28.568 20.6294 28.568 18.1908 27.1232 16.6889Z"
                                            fill="black"/>
                                        <path
                                            d="M97.9299 21.796C97.9299 33.8336 88.1715 43.592 76.1339 43.592C64.0963 43.592 54.3379 33.8336 54.3379 21.796C54.3379 9.75841 64.0963 0 76.1339 0C88.1715 0 97.9299 9.75841 97.9299 21.796ZM55.5782 21.796C55.5782 33.1486 64.7813 42.3517 76.1339 42.3517C87.4865 42.3517 96.6896 33.1486 96.6896 21.796C96.6896 10.4434 87.4865 1.24028 76.1339 1.24028C64.7813 1.24028 55.5782 10.4434 55.5782 21.796Z"
                                            fill="white" fill-opacity="0.26"/>
                                        <circle cx="76.134" cy="21.7961" r="20.5139" fill="white"/>
                                        <path
                                            d="M94.5109 21.796C94.5109 31.9453 86.2832 40.173 76.1339 40.173C65.9845 40.173 57.7568 31.9453 57.7568 21.796C57.7568 11.6466 65.9845 3.41895 76.1339 3.41895C86.2832 3.41895 94.5109 11.6466 94.5109 21.796ZM58.0872 21.796C58.0872 31.7629 66.167 39.8426 76.1339 39.8426C86.1008 39.8426 94.1805 31.7629 94.1805 21.796C94.1805 11.8291 86.1008 3.74934 76.1339 3.74934C66.167 3.74934 58.0872 11.8291 58.0872 21.796Z"
                                            fill="#8D8D8D"/>
                                        <path
                                            d="M94.5109 21.796C94.5109 18.9874 93.8671 16.2161 92.6291 13.6951C91.391 11.1741 89.5916 8.97047 87.369 7.25338C85.1464 5.53629 82.5598 4.35148 79.8079 3.78997C77.0561 3.22845 74.2121 3.30516 71.4944 4.01422L71.8884 5.52428C74.3753 4.87544 76.9777 4.80524 79.4959 5.31908C82.0141 5.83291 84.3811 6.9171 86.4149 8.48837C88.4487 10.0596 90.0953 12.0762 91.2283 14.3831C92.3612 16.69 92.9503 19.2259 92.9503 21.796H94.5109Z"
                                            fill="black"/>
                                        <path
                                            d="M75.6417 28.0444C78.7446 28.0444 81.2833 25.5057 81.2833 22.4028C81.2833 19.2999 75.6417 13 75.6417 13C75.6417 13 70 19.3939 70 22.4028C70 25.4117 72.5387 28.0444 75.6417 28.0444Z"
                                            fill="black"/>
                                        <path
                                            d="M152.269 21.796C152.269 33.8336 142.51 43.592 130.473 43.592C118.435 43.592 108.677 33.8336 108.677 21.796C108.677 9.75841 118.435 0 130.473 0C142.51 0 152.269 9.75841 152.269 21.796ZM109.917 21.796C109.917 33.1486 119.12 42.3517 130.473 42.3517C141.825 42.3517 151.028 33.1486 151.028 21.796C151.028 10.4434 141.825 1.24028 130.473 1.24028C119.12 1.24028 109.917 10.4434 109.917 21.796Z"
                                            fill="white" fill-opacity="0.26"/>
                                        <circle cx="130.473" cy="21.7961" r="20.5139" fill="white"/>
                                        <path
                                            d="M148.85 21.796C148.85 31.9453 140.622 40.173 130.473 40.173C120.323 40.173 112.096 31.9453 112.096 21.796C112.096 11.6466 120.323 3.41895 130.473 3.41895C140.622 3.41895 148.85 11.6466 148.85 21.796ZM112.426 21.796C112.426 31.7629 120.506 39.8426 130.473 39.8426C140.44 39.8426 148.519 31.7629 148.519 21.796C148.519 11.8291 140.44 3.74934 130.473 3.74934C120.506 3.74934 112.426 11.8291 112.426 21.796Z"
                                            fill="#8D8D8D"/>
                                        <path
                                            d="M148.85 21.796C148.85 18.9874 148.206 16.2161 146.968 13.6951C145.73 11.1741 143.93 8.97047 141.708 7.25338C139.485 5.53629 136.899 4.35148 134.147 3.78997C131.395 3.22845 128.551 3.30516 125.833 4.01422L126.227 5.52428C128.714 4.87544 131.317 4.80524 133.835 5.31908C136.353 5.83291 138.72 6.9171 140.754 8.48837C142.788 10.0596 144.434 12.0762 145.567 14.3831C146.7 16.69 147.289 19.2259 147.289 21.796H148.85Z"
                                            fill="black"/>
                                        <path
                                            d="M124.287 19.8664C124.188 19.7444 124.117 19.6017 124.081 19.4489C124.044 19.296 124.042 19.1368 124.075 18.983C124.563 16.6746 127.207 14.9985 130.362 14.9985C133.517 14.9985 136.16 16.6746 136.649 18.983C136.682 19.1369 136.68 19.2963 136.644 19.4494C136.607 19.6025 136.537 19.7455 136.438 19.8677C136.338 19.99 136.213 20.0884 136.071 20.1558C135.928 20.2231 135.773 20.2577 135.615 20.2569L125.108 20.2569C124.951 20.2574 124.795 20.2225 124.653 20.155C124.511 20.0874 124.386 19.9888 124.287 19.8664ZM137.017 23.4434L134.314 24.4294L131.873 23.4494C131.748 23.3993 131.608 23.3993 131.483 23.4494L129.051 24.4228L126.615 23.4494C126.495 23.4014 126.362 23.3993 126.24 23.4434L123.348 24.4951C123.226 24.5489 123.129 24.6472 123.077 24.77C123.024 24.8929 123.02 25.0311 123.066 25.1565C123.112 25.282 123.204 25.3854 123.323 25.4456C123.442 25.5059 123.58 25.5186 123.708 25.481L124.578 25.1662L124.578 25.5152C124.578 26.2125 124.855 26.8813 125.348 27.3743C125.841 27.8674 126.509 28.1444 127.207 28.1444L133.517 28.1444C134.214 28.1444 134.883 27.8674 135.376 27.3743C135.869 26.8813 136.146 26.2125 136.146 25.5152L136.146 24.8796L137.377 24.432C137.446 24.4118 137.51 24.3777 137.565 24.3317C137.621 24.2857 137.666 24.2288 137.699 24.1646C137.731 24.1005 137.75 24.0303 137.754 23.9585C137.758 23.8867 137.748 23.8148 137.723 23.7472C137.699 23.6796 137.66 23.6178 137.611 23.5656C137.561 23.5134 137.502 23.4719 137.436 23.4437C137.369 23.4155 137.298 23.4011 137.226 23.4015C137.154 23.4019 137.083 23.4171 137.017 23.4461L137.017 23.4434ZM123.526 22.3602L137.198 22.3602C137.337 22.3602 137.471 22.3048 137.569 22.2062C137.668 22.1076 137.723 21.9738 137.723 21.8344C137.723 21.6949 137.668 21.5612 137.569 21.4626C137.471 21.364 137.337 21.3086 137.198 21.3086L123.526 21.3086C123.386 21.3086 123.253 21.364 123.154 21.4626C123.055 21.5612 123 21.6949 123 21.8344C123 21.9738 123.055 22.1076 123.154 22.2062C123.253 22.3048 123.386 22.3602 123.526 22.3602Z"
                                            fill="black"/>
                                        <path
                                            d="M260.946 21.796C260.946 33.8336 251.187 43.592 239.15 43.592C227.112 43.592 217.354 33.8336 217.354 21.796C217.354 9.75841 227.112 0 239.15 0C251.187 0 260.946 9.75841 260.946 21.796ZM218.594 21.796C218.594 33.1486 227.797 42.3517 239.15 42.3517C250.502 42.3517 259.705 33.1486 259.705 21.796C259.705 10.4434 250.502 1.24028 239.15 1.24028C227.797 1.24028 218.594 10.4434 218.594 21.796Z"
                                            fill="white" fill-opacity="0.26"/>
                                        <circle cx="239.15" cy="21.7961" r="20.5139" fill="white"/>
                                        <path
                                            d="M257.527 21.796C257.527 31.9453 249.299 40.173 239.149 40.173C229 40.173 220.772 31.9453 220.772 21.796C220.772 11.6466 229 3.41895 239.149 3.41895C249.299 3.41895 257.527 11.6466 257.527 21.796ZM221.103 21.796C221.103 31.7629 229.183 39.8426 239.149 39.8426C249.116 39.8426 257.196 31.7629 257.196 21.796C257.196 11.8291 249.116 3.74934 239.149 3.74934C229.183 3.74934 221.103 11.8291 221.103 21.796Z"
                                            fill="#8D8D8D"/>
                                        <path
                                            d="M257.527 21.796C257.527 18.9874 256.883 16.2161 255.645 13.6951C254.407 11.1741 252.607 8.97047 250.385 7.25338C248.162 5.53629 245.575 4.35148 242.824 3.78997C240.072 3.22845 237.228 3.30516 234.51 4.01422L234.904 5.52428C237.391 4.87544 239.993 4.80524 242.512 5.31908C245.03 5.83291 247.397 6.9171 249.431 8.48837C251.464 10.0596 253.111 12.0762 254.244 14.3831C255.377 16.69 255.966 19.2259 255.966 21.796H257.527Z"
                                            fill="black"/>
                                        <path
                                            d="M245.881 16.4635L245.602 16.442C242.422 16.1933 239.14 14.1244 239.109 14.106L238.944 13.9985L238.778 14.106C238.747 14.1244 235.466 16.1933 232.285 16.442L232.006 16.4635L232 16.7428C232 16.8226 231.96 24.684 238.787 28.7483L238.944 28.8403L239.1 28.7483C245.927 24.684 245.887 16.8226 245.887 16.7428L245.881 16.4635Z"
                                            fill="black"/>
                                        <path
                                            d="M315.473 21.796C315.473 33.8336 305.714 43.592 293.677 43.592C281.639 43.592 271.881 33.8336 271.881 21.796C271.881 9.75841 281.639 0 293.677 0C305.714 0 315.473 9.75841 315.473 21.796ZM273.121 21.796C273.121 33.1486 282.324 42.3517 293.677 42.3517C305.029 42.3517 314.233 33.1486 314.233 21.796C314.233 10.4434 305.029 1.24028 293.677 1.24028C282.324 1.24028 273.121 10.4434 273.121 21.796Z"
                                            fill="white" fill-opacity="0.26"/>
                                        <circle cx="293.677" cy="21.7961" r="20.5139" fill="white"/>
                                        <path
                                            d="M312.054 21.796C312.054 31.9453 303.826 40.173 293.677 40.173C283.527 40.173 275.3 31.9453 275.3 21.796C275.3 11.6466 283.527 3.41895 293.677 3.41895C303.826 3.41895 312.054 11.6466 312.054 21.796ZM275.63 21.796C275.63 31.7629 283.71 39.8426 293.677 39.8426C303.644 39.8426 311.723 31.7629 311.723 21.796C311.723 11.8291 303.644 3.74934 293.677 3.74934C283.71 3.74934 275.63 11.8291 275.63 21.796Z"
                                            fill="#8D8D8D"/>
                                        <path
                                            d="M312.054 21.796C312.054 18.9874 311.41 16.2161 310.172 13.6951C308.934 11.1741 307.135 8.97047 304.912 7.25338C302.689 5.53629 300.103 4.35148 297.351 3.78997C294.599 3.22845 291.755 3.30516 289.037 4.01422L289.431 5.52428C291.918 4.87544 294.521 4.80524 297.039 5.31908C299.557 5.83291 301.924 6.9171 303.958 8.48837C305.992 10.0596 307.638 12.0762 308.771 14.3831C309.904 16.69 310.493 19.2259 310.493 21.796H312.054Z"
                                            fill="black"/>
                                        <path
                                            d="M298.793 18.135V17.8591C298.792 17.2613 298.615 16.677 298.283 16.1796C297.952 15.6822 297.481 15.2938 296.929 15.0631C296.378 14.8325 295.77 14.7698 295.184 14.8831C294.597 14.9963 294.056 15.2804 293.63 15.6997C293.605 15.7251 293.585 15.7552 293.571 15.7884C293.558 15.8215 293.551 15.857 293.551 15.8928V22.0117C293.551 22.0614 293.565 22.1102 293.591 22.1529C293.616 22.1955 293.653 22.2305 293.697 22.254C293.741 22.2775 293.79 22.2888 293.84 22.2866C293.889 22.2843 293.937 22.2687 293.979 22.2414C294.504 21.905 295.113 21.7246 295.736 21.7213C295.881 21.7187 296.02 21.7714 296.127 21.8686C296.234 21.9658 296.299 22.1002 296.309 22.2441C296.313 22.319 296.302 22.3938 296.276 22.4642C296.25 22.5345 296.21 22.5988 296.158 22.6531C296.107 22.7075 296.045 22.7507 295.976 22.7802C295.907 22.8098 295.833 22.8249 295.758 22.8248C295.172 22.8248 294.611 23.0574 294.197 23.4712C293.783 23.8851 293.551 24.4465 293.551 25.0318V27.3685C293.551 27.4098 293.56 27.4505 293.578 27.4878C293.595 27.525 293.621 27.5578 293.653 27.5837C294.045 27.9077 294.506 28.1371 295.001 28.2539C295.495 28.3708 296.01 28.3721 296.505 28.2576C297 28.1431 297.462 27.9159 297.855 27.5938C298.249 27.2716 298.562 26.8632 298.772 26.4002C298.793 26.3536 298.8 26.3021 298.794 26.2514C298.787 26.2007 298.767 26.1528 298.735 26.113C298.703 26.0732 298.66 26.0432 298.612 26.0262C298.564 26.0092 298.512 26.0059 298.462 26.0167C298.118 26.0955 297.766 26.1353 297.414 26.1353H296.88C296.738 26.1371 296.6 26.085 296.495 25.9894C296.389 25.8939 296.324 25.762 296.311 25.6201C296.306 25.5447 296.317 25.469 296.343 25.3977C296.368 25.3265 296.408 25.2613 296.46 25.2061C296.511 25.151 296.574 25.107 296.643 25.077C296.713 25.0471 296.788 25.0317 296.863 25.0318H297.415C297.991 25.0327 298.559 24.8935 299.07 24.6263C299.675 24.3113 300.178 23.8303 300.519 23.2398C300.86 22.6493 301.026 21.9738 300.997 21.2924C300.968 20.6111 300.745 19.9521 300.355 19.3929C299.964 18.8336 299.423 18.3973 298.793 18.135ZM297.965 20.6178H297.689C297.031 20.6178 296.399 20.3562 295.934 19.8906C295.468 19.425 295.207 18.7935 295.207 18.135V17.8591C295.207 17.7128 295.265 17.5724 295.368 17.4689C295.472 17.3655 295.612 17.3073 295.758 17.3073C295.905 17.3073 296.045 17.3655 296.149 17.4689C296.252 17.5724 296.31 17.7128 296.31 17.8591V18.135C296.31 18.3161 296.346 18.4955 296.415 18.6628C296.484 18.8302 296.586 18.9822 296.714 19.1103C296.973 19.369 297.324 19.5143 297.689 19.5143H297.965C298.112 19.5143 298.252 19.5725 298.356 19.6759C298.459 19.7794 298.517 19.9198 298.517 20.0661C298.517 20.2124 298.459 20.3528 298.356 20.4562C298.252 20.5597 298.112 20.6178 297.965 20.6178ZM290.241 14.8245C289.436 14.8254 288.665 15.1454 288.096 15.7143C287.527 16.2832 287.207 17.0545 287.206 17.8591V18.135C286.577 18.3974 286.035 18.8339 285.645 19.3932C285.255 19.9525 285.032 20.6115 285.003 21.2929C284.974 21.9742 285.14 22.6497 285.482 23.2401C285.823 23.8305 286.325 24.3114 286.93 24.6263C287.441 24.8935 288.009 25.0327 288.586 25.0318H289.119C289.261 25.0297 289.399 25.0817 289.505 25.1773C289.611 25.2729 289.677 25.405 289.689 25.547C289.694 25.6225 289.684 25.6982 289.658 25.7694C289.633 25.8406 289.593 25.9059 289.541 25.961C289.489 26.0162 289.427 26.0601 289.357 26.0901C289.288 26.1201 289.213 26.1355 289.137 26.1353H288.586C288.233 26.1355 287.881 26.0955 287.537 26.016C287.487 26.0051 287.435 26.0083 287.386 26.0252C287.338 26.0421 287.296 26.0721 287.264 26.1118C287.231 26.1515 287.211 26.1993 287.204 26.25C287.198 26.3007 287.205 26.3522 287.226 26.3988C287.436 26.8619 287.749 27.2705 288.142 27.5928C288.535 27.9151 288.997 28.1424 289.493 28.257C289.988 28.3716 290.503 28.3705 290.998 28.2537C291.492 28.137 291.953 27.9077 292.345 27.5837C292.377 27.5578 292.403 27.525 292.421 27.4878C292.439 27.4505 292.448 27.4098 292.448 27.3685V25.0318C292.448 24.4465 292.215 23.8851 291.801 23.4712C291.388 23.0574 290.826 22.8248 290.241 22.8248C290.166 22.8249 290.092 22.8098 290.023 22.7802C289.954 22.7507 289.892 22.7075 289.84 22.6531C289.788 22.5988 289.748 22.5345 289.723 22.4642C289.697 22.3938 289.685 22.319 289.689 22.2441C289.7 22.1001 289.765 21.9656 289.872 21.8683C289.979 21.7711 290.119 21.7185 290.263 21.7213C290.886 21.7246 291.496 21.905 292.02 22.2414C292.062 22.2687 292.11 22.2843 292.16 22.2866C292.209 22.2888 292.259 22.2775 292.303 22.254C292.346 22.2305 292.383 22.1955 292.409 22.1529C292.434 22.1102 292.448 22.0614 292.448 22.0117V15.8928C292.448 15.8204 292.42 15.7508 292.369 15.699C291.803 15.1384 291.038 14.8241 290.241 14.8245ZM290.793 18.135C290.793 18.7935 290.531 19.425 290.065 19.8906C289.6 20.3562 288.968 20.6178 288.31 20.6178H288.034C287.888 20.6178 287.747 20.5597 287.644 20.4562C287.54 20.3528 287.482 20.2124 287.482 20.0661C287.482 19.9198 287.54 19.7794 287.644 19.6759C287.747 19.5725 287.888 19.5143 288.034 19.5143H288.31C288.491 19.5143 288.67 19.4787 288.838 19.4093C289.005 19.34 289.157 19.2384 289.285 19.1103C289.413 18.9822 289.515 18.8302 289.584 18.6628C289.653 18.4955 289.689 18.3161 289.689 18.135V17.8591C289.689 17.7128 289.747 17.5724 289.851 17.4689C289.954 17.3655 290.095 17.3073 290.241 17.3073C290.387 17.3073 290.528 17.3655 290.631 17.4689C290.734 17.5724 290.793 17.7128 290.793 17.8591V18.135Z"
                                            fill="black"/>
                                        <path
                                            d="M206.607 21.796C206.607 33.8336 196.848 43.592 184.811 43.592C172.773 43.592 163.015 33.8336 163.015 21.796C163.015 9.75841 172.773 0 184.811 0C196.848 0 206.607 9.75841 206.607 21.796ZM164.255 21.796C164.255 33.1486 173.458 42.3517 184.811 42.3517C196.163 42.3517 205.366 33.1486 205.366 21.796C205.366 10.4434 196.163 1.24028 184.811 1.24028C173.458 1.24028 164.255 10.4434 164.255 21.796Z"
                                            fill="white" fill-opacity="0.26"/>
                                        <circle cx="184.811" cy="21.7961" r="20.5139" fill="white"/>
                                        <path
                                            d="M203.188 21.796C203.188 31.9453 194.96 40.173 184.811 40.173C174.661 40.173 166.434 31.9453 166.434 21.796C166.434 11.6466 174.661 3.41895 184.811 3.41895C194.96 3.41895 203.188 11.6466 203.188 21.796ZM166.764 21.796C166.764 31.7629 174.844 39.8426 184.811 39.8426C194.778 39.8426 202.857 31.7629 202.857 21.796C202.857 11.8291 194.778 3.74934 184.811 3.74934C174.844 3.74934 166.764 11.8291 166.764 21.796Z"
                                            fill="#8D8D8D"/>
                                        <path
                                            d="M203.188 21.796C203.188 18.9874 202.544 16.2161 201.306 13.6951C200.068 11.1741 198.268 8.97047 196.046 7.25338C193.823 5.53629 191.237 4.35148 188.485 3.78997C185.733 3.22845 182.889 3.30516 180.171 4.01422L180.565 5.52428C183.052 4.87544 185.654 4.80524 188.173 5.31908C190.691 5.83291 193.058 6.9171 195.092 8.48837C197.125 10.0596 198.772 12.0762 199.905 14.3831C201.038 16.69 201.627 19.2259 201.627 21.796H203.188Z"
                                            fill="black"/>
                                        <path
                                            d="M184.4 29.8353C184.312 29.8352 184.224 29.8198 184.142 29.7897C183.982 29.7313 183.847 29.6209 183.757 29.4764C183.668 29.3318 183.629 29.1614 183.648 28.9925L184.233 23.6089H179.76C179.623 23.6091 179.487 23.5718 179.369 23.5008C179.251 23.4299 179.154 23.3281 179.089 23.2063C179.024 23.0845 178.994 22.9474 179.001 22.8096C179.008 22.6719 179.053 22.5387 179.13 22.4244L185.121 13.4645C185.216 13.3243 185.355 13.2198 185.516 13.1675C185.677 13.1152 185.851 13.1182 186.01 13.176C186.162 13.2328 186.293 13.3373 186.382 13.474C186.471 13.6108 186.513 13.7725 186.503 13.9353L185.918 19.3568H190.391C190.529 19.3566 190.664 19.394 190.782 19.4649C190.901 19.5358 190.998 19.6377 191.062 19.7595C191.127 19.8812 191.157 20.0184 191.15 20.1561C191.143 20.2939 191.098 20.427 191.021 20.5413L185.03 29.5012C184.96 29.6042 184.867 29.6886 184.757 29.7469C184.647 29.8051 184.524 29.8355 184.4 29.8353Z"
                                            fill="black"/>
                                    </svg>

                                    <div className={'flex flex-col items-center'}>
                                        <h3 className={'text-[#939393] mt-[10px] text-[18px] font-semibold'}>
                                            Status Style #2
                                        </h3>
                                        <h4 className={`text-white font-semibold text-[10px]`}>Selected Now</h4>
                                    </div>
                                    <div className={'px-[23px] flex flex-row justify-center w-full gap-[5px]'}>
                                        <div onClick={() => {
                                            setAktifhud({
                                                ...aktifHud,
                                                hud2: !aktifHud.hud2,
                                            })
                                        }}
                                             className={`${aktifHud.hud2 === true ? 'dashboard8' : 'dashboard9 !text-[#ABABAB] '} dashboard8 mt-[22px] cursor-pointer flex justify-center items-center text-[11px] font-bold w-[142px] h-[32px]`}>
                                            <h1 className={'select-none'}>{aktifHud.hud2 === 2 ? 'Selected' : 'Select'}</h1>
                                        </div>
                                        <div onClick={() => {
                                            setSettings({
                                                ...settings,
                                                settings2: !settings.settings2,
                                            })
                                        }}
                                             className={`${aktifHud.hud2 === true ? 'dashboard8' : 'dashboard9 !text-red-600'} mt-[22px] cursor-pointer flex justify-center items-center text-black text-[11px] font-bold w-[32px] h-[32px]`}>
                                            <svg
                                                className={`${aktifHud.hud2 === true ? '!fill-black' : '!fill-[#ABABAB]'} !text-red-600 !stroke-none`}
                                                xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 14 14" fill="none">
                                                <path
                                                    d="M12.8153 7.10486C12.818 7.00906 12.818 6.91327 12.8153 6.81747L13.8078 5.57746C13.8599 5.51235 13.8959 5.43593 13.913 5.35436C13.9301 5.27278 13.9278 5.18833 13.9063 5.1078C13.7433 4.49628 13.4999 3.90907 13.1825 3.36154C13.1409 3.2899 13.0832 3.22897 13.0139 3.18358C12.9446 3.13819 12.8656 3.10961 12.7834 3.1001L11.2054 2.92448C11.1398 2.85529 11.0732 2.78877 11.0058 2.7249L10.8196 1.14296C10.81 1.06061 10.7813 0.981637 10.7358 0.912338C10.6903 0.84304 10.6292 0.785331 10.5575 0.743813C10.01 0.426658 9.42274 0.183711 8.8112 0.0213597C8.73067 -0.000154116 8.64622 -0.00245306 8.56464 0.0146481C8.48307 0.0317493 8.40665 0.0677725 8.34154 0.119815L7.10486 1.10703C7.00906 1.10703 6.91327 1.10703 6.81747 1.10703L5.57746 0.116489C5.51235 0.0644463 5.43593 0.0284232 5.35436 0.011322C5.27278 -0.00577922 5.18833 -0.0034804 5.1078 0.0180334C4.49628 0.181036 3.90907 0.424419 3.36154 0.741817C3.2899 0.783412 3.22897 0.841154 3.18358 0.910448C3.13819 0.979742 3.10961 1.05867 3.1001 1.14096L2.92448 2.72158C2.85529 2.78766 2.78877 2.85418 2.7249 2.92115L1.14296 3.10276C1.06061 3.11234 0.981637 3.14103 0.912338 3.18653C0.84304 3.23204 0.785331 3.29311 0.743813 3.36487C0.426723 3.91247 0.183569 4.49966 0.0206944 5.11113C-0.000728396 5.1917 -0.00291951 5.27619 0.0142977 5.35777C0.0315149 5.43934 0.0676586 5.51574 0.119815 5.58079L1.10703 6.81747C1.10703 6.91327 1.10703 7.00906 1.10703 7.10486L0.116489 8.34487C0.0644463 8.40997 0.0284232 8.48639 0.011322 8.56797C-0.00577922 8.64955 -0.0034804 8.734 0.0180334 8.81453C0.181036 9.42605 0.424419 10.0133 0.741817 10.5608C0.783412 10.6324 0.841154 10.6934 0.910448 10.7387C0.979742 10.7841 1.05867 10.8127 1.14096 10.8222L2.71892 10.9979C2.785 11.067 2.85152 11.1336 2.91849 11.1974L3.10276 12.7794C3.11234 12.8617 3.14103 12.9407 3.18653 13.01C3.23204 13.0793 3.29311 13.137 3.36487 13.1785C3.91247 13.4956 4.49966 13.7388 5.11113 13.9016C5.1917 13.9231 5.27619 13.9252 5.35777 13.908C5.43934 13.8908 5.51574 13.8547 5.58079 13.8025L6.81747 12.8153C6.91327 12.818 7.00906 12.818 7.10486 12.8153L8.34487 13.8078C8.40997 13.8599 8.48639 13.8959 8.56797 13.913C8.64955 13.9301 8.734 13.9278 8.81453 13.9063C9.42615 13.7436 10.0134 13.5002 10.5608 13.1825C10.6324 13.1409 10.6934 13.0832 10.7387 13.0139C10.7841 12.9446 10.8127 12.8656 10.8222 12.7834L10.9979 11.2054C11.067 11.1398 11.1336 11.0732 11.1974 11.0058L12.7794 10.8196C12.8617 10.81 12.9407 10.7813 13.01 10.7358C13.0793 10.6903 13.137 10.6292 13.1785 10.5575C13.4956 10.0099 13.7388 9.42266 13.9016 8.8112C13.9231 8.73062 13.9252 8.64614 13.908 8.56456C13.8908 8.48298 13.8547 8.40659 13.8025 8.34154L12.8153 7.10486ZM6.96116 9.62213C6.43487 9.62213 5.9204 9.46607 5.48281 9.17368C5.04522 8.88129 4.70415 8.4657 4.50275 7.97947C4.30135 7.49324 4.24865 6.95821 4.35133 6.44203C4.454 5.92586 4.70743 5.45172 5.07958 5.07958C5.45172 4.70743 5.92586 4.454 6.44203 4.35133C6.95821 4.24865 7.49324 4.30135 7.97947 4.50275C8.4657 4.70415 8.88129 5.04522 9.17368 5.48281C9.46607 5.9204 9.62213 6.43487 9.62213 6.96116C9.62213 7.6669 9.34178 8.34372 8.84275 8.84275C8.34372 9.34178 7.6669 9.62213 6.96116 9.62213Z"
                                                    fill=""/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> : ''}

            </div>
        </div>
    );
};

export default Dashboardfile;
