import React, {useState} from 'react';
import frontsvg from "../img/car/front.svg";
import leftsvg from "../img/car/left.svg";
import rightsvg from "../img/car/right.svg";
import backleft from "../img/car/backleft.svg";
import backright from "../img/car/backright.svg";
import partysvg from "../img/car/party.svg";
import carbg from "../img/carbg.svg";
import neoncarsvg from "../img/neonscar.svg";
import RangeSliderr from "../components/RangeSliderr";
import map from "../img/map.svg";
import allsvg from "../img/car/all.svg";

const MenuFile = () => {
    const [ved1,setVed1] = useState({
        "menu1": "vehicle",
        "vehicle1": "doors",
        "vehicle2": allsvg,
        "music1": "addsong"
    })
    return (
        <div className={'absolute left-[50px] w-fit h-fit bottom-[50px] gap-[110px] flex flex-col'}>
            <div className={'flex flex-col gap-[70px]'}>
                {/*<div className={'flex flex-col'}>*/}
                {/*    <div*/}
                {/*        className={'w-[369px] p-[8px] h-[58px] flex flex-row justify-between items-center menu1bg1'}>*/}
                {/*        <div className={'flex flex-row gap-[14px] justify-center items-center'}>*/}
                {/*            <div*/}
                {/*                className={'menu1bg2 bg-white relative menu1ds1 rounded-[1px] w-[32px] h-[32px] flex justify-center items-center'}>*/}
                {/*                <h1 className={'Extrabold text-[12px]'}>NE</h1>*/}
                {/*            </div>*/}
                {/*            <div className={'ml-[2px] Semibold flex flex-col gap-[px] text-white'}>*/}
                {/*                <h1 className={'text-[12px]'}>LOCATION NAME</h1>*/}
                {/*                <h3 className={'opacity-[0.46] tracking-wide  text-[8px] Bold'}>*/}
                {/*                    Location Name*/}
                {/*                </h3>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className={'bg-white relative rounded-[1px] w-[32px] h-[32px] flex justify-center items-center'}>*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16"*/}
                {/*                 fill="none">*/}
                {/*                <path*/}
                {/*                    d="M2.2 7.7V3.3C2.2 2.42479 2.54768 1.58542 3.16655 0.966548C3.78542 0.347678 4.62479 0 5.5 0C6.37521 0 7.21458 0.347678 7.83345 0.966548C8.45232 1.58542 8.8 2.42479 8.8 3.3V7.7C8.8 8.57521 8.45232 9.41458 7.83345 10.0335C7.21458 10.6523 6.37521 11 5.5 11C4.62479 11 3.78542 10.6523 3.16655 10.0335C2.54768 9.41458 2.2 8.57521 2.2 7.7ZM11 7.7C11 7.55413 10.9421 7.41424 10.8389 7.31109C10.7358 7.20795 10.5959 7.15 10.45 7.15C10.3041 7.15 10.1642 7.20795 10.0611 7.31109C9.95795 7.41424 9.9 7.55413 9.9 7.7C9.9 8.86695 9.43643 9.98611 8.61127 10.8113C7.78611 11.6364 6.66695 12.1 5.5 12.1C4.33305 12.1 3.21389 11.6364 2.38873 10.8113C1.56357 9.98611 1.1 8.86695 1.1 7.7C1.1 7.55413 1.04205 7.41424 0.938909 7.31109C0.835764 7.20795 0.695869 7.15 0.55 7.15C0.404131 7.15 0.264236 7.20795 0.161091 7.31109C0.0579464 7.41424 0 7.55413 0 7.7C0.00167483 9.063 0.508696 10.377 1.42302 11.3878C2.33734 12.3986 3.594 13.0345 4.95 13.1725V14.85C4.95 14.9959 5.00795 15.1358 5.11109 15.2389C5.21424 15.3421 5.35413 15.4 5.5 15.4C5.64587 15.4 5.78576 15.3421 5.88891 15.2389C5.99205 15.1358 6.05 14.9959 6.05 14.85V13.1725C7.406 13.0345 8.66266 12.3986 9.57698 11.3878C10.4913 10.377 10.9983 9.063 11 7.7Z"*/}
                {/*                    fill="black"/>*/}
                {/*            </svg>*/}
                {/*            <div className={'w-[27px] absolute bottom-[1px] left-[2px]'}>*/}
                {/*                <div className={' bg-black h-[3px] rounded-[1px] w-[100%]'}></div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <img src={map} alt=""/>*/}
                {/*    <div className={'w-full flex flex-row menu1bg4 p-[2px] h-[30px]'}>*/}
                {/*        <div*/}
                {/*            onClick={() => {*/}
                {/*                setVed1({*/}
                {/*                    ...ved1,*/}
                {/*                    menu1: 'media'*/}
                {/*                })*/}
                {/*            }}*/}
                {/*            className={`w-[120px] ${ved1.menu1 === 'media' ? 'menu1bg5 !font-bold !text-[#020710]' : ''} cursor-pointer  text-[10px] font-medium text-[#9F9F9F] h-full flex justify-center items-center`}>*/}
                {/*            Media*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            onClick={() => {*/}
                {/*                setVed1({*/}
                {/*                    ...ved1,*/}
                {/*                    menu1: 'vehicle'*/}
                {/*                })*/}
                {/*            }}*/}
                {/*            className={`w-[120px] ${ved1.menu1 === 'vehicle' ? 'menu1bg5 !font-bold !text-[#020710]' : ''} cursor-pointer  text-[10px] font-medium text-[#9F9F9F] h-full flex justify-center items-center`}>*/}
                {/*            Vehicle*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            onClick={() => {*/}
                {/*                setVed1({*/}
                {/*                    ...ved1,*/}
                {/*                    menu1: 'map'*/}
                {/*                })*/}
                {/*            }}*/}
                {/*            className={`w-[120px] ${ved1.menu1 === 'map' ? 'menu1bg5 !font-bold !text-[#020710]' : ''} cursor-pointer  text-[10px] font-medium text-[#9F9F9F] h-full flex justify-center items-center`}>*/}
                {/*            Map*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={'flex flex-col  gap-[7px]'}>
                    <div
                        className={'w-[369px] p-[8px] h-[58px]  flex flex-row justify-between items-center menu1bg1'}>
                        <div className={'flex flex-row gap-[14px] justify-center items-center'}>
                            <div
                                className={'menu1bg2 bg-white relative menu1ds1 rounded-[1px] w-[32px] h-[32px] flex justify-center items-center'}>
                                <h1 className={'Extrabold text-[12px]'}>NE</h1>
                            </div>
                            <div className={'ml-[2px] Semibold flex flex-col gap-[px] text-white'}>
                                <h1 className={'text-[12px]'}>LOCATION NAME</h1>
                                <h3 className={'opacity-[0.46] tracking-wide  text-[8px] Bold'}>
                                    Location Name
                                </h3>
                            </div>
                        </div>
                        <div
                            className={'bg-white relative rounded-[1px] w-[32px] h-[32px] flex justify-center items-center'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                 viewBox="0 0 11 16"
                                 fill="none">
                                <path
                                    d="M2.2 7.7V3.3C2.2 2.42479 2.54768 1.58542 3.16655 0.966548C3.78542 0.347678 4.62479 0 5.5 0C6.37521 0 7.21458 0.347678 7.83345 0.966548C8.45232 1.58542 8.8 2.42479 8.8 3.3V7.7C8.8 8.57521 8.45232 9.41458 7.83345 10.0335C7.21458 10.6523 6.37521 11 5.5 11C4.62479 11 3.78542 10.6523 3.16655 10.0335C2.54768 9.41458 2.2 8.57521 2.2 7.7ZM11 7.7C11 7.55413 10.9421 7.41424 10.8389 7.31109C10.7358 7.20795 10.5959 7.15 10.45 7.15C10.3041 7.15 10.1642 7.20795 10.0611 7.31109C9.95795 7.41424 9.9 7.55413 9.9 7.7C9.9 8.86695 9.43643 9.98611 8.61127 10.8113C7.78611 11.6364 6.66695 12.1 5.5 12.1C4.33305 12.1 3.21389 11.6364 2.38873 10.8113C1.56357 9.98611 1.1 8.86695 1.1 7.7C1.1 7.55413 1.04205 7.41424 0.938909 7.31109C0.835764 7.20795 0.695869 7.15 0.55 7.15C0.404131 7.15 0.264236 7.20795 0.161091 7.31109C0.0579464 7.41424 0 7.55413 0 7.7C0.00167483 9.063 0.508696 10.377 1.42302 11.3878C2.33734 12.3986 3.594 13.0345 4.95 13.1725V14.85C4.95 14.9959 5.00795 15.1358 5.11109 15.2389C5.21424 15.3421 5.35413 15.4 5.5 15.4C5.64587 15.4 5.78576 15.3421 5.88891 15.2389C5.99205 15.1358 6.05 14.9959 6.05 14.85V13.1725C7.406 13.0345 8.66266 12.3986 9.57698 11.3878C10.4913 10.377 10.9983 9.063 11 7.7Z"
                                    fill="black"/>
                            </svg>
                            <div className={'w-[27px] absolute bottom-[1px] left-[2px]'}>
                                <div className={' bg-black h-[3px] rounded-[1px] w-[100%]'}></div>
                            </div>
                        </div>

                    </div>
                    <div
                        className={'w-full overflow-hidden gap-[5px] flex flex-col p-[2px] h-[246px] menu1bg4'}>
                        {ved1.menu1 === 'vehicle' ? <div className={'w-full h-full overflow-hidden '}>
                            <div className={'w-full gap-[5px] flex flex-row p-[2px]  '}>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            vehicle1: 'doors'
                                        })
                                    }}
                                    className={`w-[50%] ${ved1.vehicle1 === "doors" ? 'text-[#020710] menu1bg5' : 'text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>
                                    <svg
                                        className={`${ved1.vehicle1 === 'doors' ? 'fill-black' : 'fill-[#9F9F9F]'}`}
                                        xmlns="http://www.w3.org/2000/svg" width="12" height="10"
                                        viewBox="0 0 12 10"
                                        fill="none">
                                        <path
                                            d="M10.6336 9.68401C10.6083 9.84233 10.4718 9.95883 10.3115 9.95883H1.97629C1.53592 9.95883 1.10534 9.78921 0.806842 9.46463C0.734399 9.38605 0.6677 9.29913 0.603802 9.20871H10.7094L10.6336 9.68401ZM10.8152 8.12765H0.382921C0.292874 8.12765 0.209207 8.15187 0.134458 8.19099C-0.0963774 7.34039 -0.0452585 6.33006 0.407233 5.44252C0.516532 5.22886 0.681232 5.04781 0.873706 4.90591L4.87626 1.95699C5.92827 1.18388 7.19886 0.764709 8.50531 0.764709H11.6737C11.8744 0.764709 12.0275 0.944144 11.9959 1.14229L10.8807 8.13427C10.859 8.13161 10.8376 8.12765 10.8152 8.12765ZM8.4416 6.25256C8.4416 6.31244 8.49013 6.36097 8.55 6.36097H10.1357C10.1956 6.36097 10.2441 6.31244 10.2441 6.25256V5.99861C10.2441 5.93874 10.1956 5.89021 10.1357 5.89021H8.54998C8.49013 5.89021 8.44158 5.93874 8.44158 5.99861L8.4416 6.25256ZM8.50531 1.58024C7.36685 1.58024 6.27895 1.93743 5.35904 2.61431L2.78201 4.51285H10.6322L11.1003 1.58024H8.50531ZM0.382921 8.38304H10.8151C10.9726 8.38304 11.1003 8.51069 11.1003 8.66817C11.1003 8.82564 10.9726 8.9533 10.8151 8.9533H0.382898C0.225423 8.9533 0.0977659 8.82564 0.0977659 8.66817C0.0977659 8.51069 0.225446 8.38304 0.382921 8.38304Z"
                                            fill=""/>
                                    </svg>
                                    Doors
                                </div>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            vehicle1: 'neons'
                                        })
                                    }}
                                    className={`w-[50%] ${ved1.vehicle1 === "neons" ? 'text-[#020710] menu1bg5' : '!text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>
                                    <svg
                                        className={`${ved1.vehicle1 === 'neons' ? '!fill-black' : 'fill-[#9F9F9F]'}`}
                                        xmlns="http://www.w3.org/2000/svg" width="8" height="12"
                                        viewBox="0 0 8 12"
                                        fill="none">
                                        <path
                                            d="M7.85576 5.73935L2.79503 11.1616C2.7414 11.2188 2.67061 11.257 2.59334 11.2705C2.51607 11.284 2.43652 11.272 2.36668 11.2362C2.29685 11.2005 2.24052 11.1431 2.20621 11.0726C2.17189 11.002 2.16144 10.9223 2.17644 10.8453L2.83885 7.53184L0.234836 6.55404C0.178911 6.53312 0.129039 6.49867 0.0896759 6.45377C0.0503123 6.40888 0.0226833 6.35493 0.00925708 6.29675C-0.00416912 6.23857 -0.00297422 6.17797 0.0127349 6.12036C0.0284441 6.06276 0.0581781 6.00994 0.0992809 5.96663L5.16001 0.544415C5.21364 0.487181 5.28443 0.448943 5.3617 0.435472C5.43897 0.422 5.51852 0.434026 5.58836 0.469733C5.65819 0.505441 5.71452 0.562893 5.74883 0.633421C5.78315 0.703949 5.7936 0.783724 5.7786 0.86071L5.11438 4.17775L7.7184 5.1542C7.77391 5.17526 7.82338 5.20967 7.86244 5.25439C7.90149 5.29911 7.92894 5.35276 7.94233 5.4106C7.95573 5.46844 7.95468 5.52869 7.93927 5.58603C7.92385 5.64337 7.89455 5.69602 7.85395 5.73935H7.85576Z"
                                            fill=""/>
                                    </svg>
                                    Neons
                                </div>
                            </div>
                            {ved1.vehicle1 === 'doors' ? (
                                    <div className={'w-full h-[190px] flex justify-between  '}>
                                        <div className={'flex flex-col gap-[6px] ml-[22px] mt-[16px]'}>
                                            <div
                                                onClick={() => {
                                                    setVed1({
                                                        ...ved1,
                                                        vehicle2: frontsvg,
                                                    })
                                                }}
                                                className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                                Bonnet
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setVed1({
                                                        ...ved1,
                                                        vehicle2: leftsvg,
                                                    })
                                                }}
                                                className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                                Left Front Door
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setVed1({
                                                        ...ved1,
                                                        vehicle2: rightsvg,
                                                    })
                                                }}
                                                className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                                Right Front Door
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setVed1({
                                                        ...ved1,
                                                        vehicle2: backleft,
                                                    })
                                                }}
                                                className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                                Left Back Door
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setVed1({
                                                        ...ved1,
                                                        vehicle2: backright,
                                                    })
                                                }}
                                                className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                                Right Back Door
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setVed1({
                                                        ...ved1,
                                                        vehicle2: partysvg,
                                                    })
                                                }}
                                                className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                                Trunk
                                            </div>

                                        </div>
                                        <div className={'flex justify-center items-center'}>
                                            <img className={'h-[206px] absolute right-0'} src={carbg} alt=""/>
                                            <img className={''} src={ved1.vehicle2} alt=""/>
                                        </div>
                                    </div>) :
                                <div className={'w-full h-[190px] flex justify-between  '}>
                                    <div className={'flex flex-col gap-[6px] ml-[22px] mt-[16px]'}>
                                        <div
                                            className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                            ALL
                                        </div>
                                        <div
                                            className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                            FRONT
                                        </div>
                                        <div
                                            className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                            LEFT
                                        </div>
                                        <div
                                            className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                            RIGHT
                                        </div>
                                        <div
                                            className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                            REAR
                                        </div>
                                        <div
                                            className={'w-[80px] cursor-pointer text-[9px] h-[23px] font-semibold menu1bg6 flex justify-center items-center text-[#A8A8A8]'}>
                                            PARTY
                                        </div>

                                    </div>
                                    <div className={'flex justify-center items-center'}>
                                        <img className={'h-[206px] absolute right-0'} src={carbg} alt=""/>
                                        <div className={'relative'}>
                                            <img className={''} src={neoncarsvg} alt=""/>

                                        </div>
                                    </div>
                                </div>}
                            <div
                                className={'w-full h-full z-20 gap-[5px] :!rounded-[0px] menu1bg4  flex flex-row p-[2px]  '}>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'media'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "media" ? 'text-[#020710] menu1bg5' : 'text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Media
                                </div>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'vehicle'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "vehicle" ? 'text-[#020710] menu1bg5' : '!text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Vehicle
                                </div>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'map'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "map" ? 'text-[#020710] menu1bg5' : '!text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Map
                                </div>
                            </div>
                        </div> : ''}
                        {ved1.menu1 === 'media' ? <div className={'w-full h-full overflow-hidden '}>
                            <div className={'w-full gap-[5px] flex flex-row p-[2px]  '}>
                                <div onClick={() => {
                                    setVed1({
                                        ...ved1,
                                        music1: 'addsong'
                                    })
                                }}
                                     className={`w-[25%] ${ved1.music1 === "addsong" ? 'text-[#020710] menu1bg7' : 'text-[#9F9F9F]'} rounded-[4px] cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Add Song
                                </div>
                                <div onClick={() => {
                                    setVed1({
                                        ...ved1,
                                        music1: 'musicplayer'
                                    })
                                }}
                                     className={`w-[25%] ${ved1.music1 === "musicplayer" ? 'text-[#020710] menu1bg7' : 'text-[#9F9F9F]'} rounded-[4px] cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Music Player
                                </div>
                                <div onClick={() => {
                                    setVed1({
                                        ...ved1,
                                        music1: 'musiclist'
                                    })
                                }}
                                     className={`w-[25%] ${ved1.music1 === "musiclist" ? 'text-[#020710] menu1bg7' : 'text-[#9F9F9F]'} rounded-[4px] cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Music List
                                </div>
                                <div onClick={() => {
                                    setVed1({
                                        ...ved1,
                                        music1: 'tracklist'
                                    })
                                }}
                                     className={`w-[25%] ${ved1.music1 === "tracklist" ? 'text-[#020710] menu1bg7' : 'text-[#9F9F9F]'} rounded-[4px] cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Track List
                                </div>


                            </div>
                            <div className={'w-full h-[190px]'}>
                                {ved1.music1 === 'musicplayer' ? <div className={'flex flex-col px-[17px]'}>
                                    <div className={'flex justify-between'}>
                                        <div className={'flex flex-col items-center py-[30px]'}>
                                            <h1 className={'font-semibold text-[12px] text-[#969696]'}>PATLAT</h1>
                                            <h1 className={'font-semibold text-[9px] text-[#ADADAD]'}>BLOK3</h1>
                                        </div>
                                        <div className={'mr-10'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="116" height="122"
                                                 viewBox="0 0 116 122" fill="none">
                                                <g filter="url(#filter0_d_72_5118)">
                                                    <path
                                                        d="M41.7391 53.2174V68.5217C41.7391 69.0291 41.5376 69.5157 41.1788 69.8745C40.82 70.2332 40.3335 70.4348 39.8261 70.4348H37.913C37.4057 70.4348 36.9191 70.2332 36.5603 69.8745C36.2016 69.5157 36 69.0291 36 68.5217V53.2174C36 52.71 36.2016 52.2234 36.5603 51.8647C36.9191 51.5059 37.4057 51.3043 37.913 51.3043H39.8261C40.3335 51.3043 40.82 51.5059 41.1788 51.8647C41.5376 52.2234 41.7391 52.71 41.7391 53.2174ZM49.3913 36H47.4783C46.9709 36 46.4843 36.2016 46.1255 36.5603C45.7668 36.9191 45.5652 37.4057 45.5652 37.913V83.8261C45.5652 84.3335 45.7668 84.82 46.1255 85.1788C46.4843 85.5376 46.9709 85.7391 47.4783 85.7391H49.3913C49.8987 85.7391 50.3853 85.5376 50.744 85.1788C51.1028 84.82 51.3043 84.3335 51.3043 83.8261V37.913C51.3043 37.4057 51.1028 36.9191 50.744 36.5603C50.3853 36.2016 49.8987 36 49.3913 36ZM58.9565 43.6522H57.0435C56.5361 43.6522 56.0495 43.8537 55.6908 44.2125C55.332 44.5713 55.1304 45.0578 55.1304 45.5652V76.1739C55.1304 76.6813 55.332 77.1679 55.6908 77.5266C56.0495 77.8854 56.5361 78.087 57.0435 78.087H58.9565C59.4639 78.087 59.9505 77.8854 60.3092 77.5266C60.668 77.1679 60.8696 76.6813 60.8696 76.1739V45.5652C60.8696 45.0578 60.668 44.5713 60.3092 44.2125C59.9505 43.8537 59.4639 43.6522 58.9565 43.6522ZM68.5217 51.3043H66.6087C66.1013 51.3043 65.6147 51.5059 65.256 51.8647C64.8972 52.2234 64.6957 52.71 64.6957 53.2174V68.5217C64.6957 69.0291 64.8972 69.5157 65.256 69.8745C65.6147 70.2332 66.1013 70.4348 66.6087 70.4348H68.5217C69.0291 70.4348 69.5157 70.2332 69.8745 69.8745C70.2332 69.5157 70.4348 69.0291 70.4348 68.5217V53.2174C70.4348 52.71 70.2332 52.2234 69.8745 51.8647C69.5157 51.5059 69.0291 51.3043 68.5217 51.3043ZM78.087 47.4783H76.1739C75.6665 47.4783 75.18 47.6798 74.8212 48.0386C74.4624 48.3973 74.2609 48.8839 74.2609 49.3913V72.3478C74.2609 72.8552 74.4624 73.3418 74.8212 73.7006C75.18 74.0593 75.6665 74.2609 76.1739 74.2609H78.087C78.5943 74.2609 79.0809 74.0593 79.4397 73.7006C79.7985 73.3418 80 72.8552 80 72.3478V49.3913C80 48.8839 79.7985 48.3973 79.4397 48.0386C79.0809 47.6798 78.5943 47.4783 78.087 47.4783Z"
                                                        fill="url(#paint0_linear_72_5118)"
                                                        fill-opacity="0.22"
                                                        shape-rendering="crispEdges"/>
                                                    <path
                                                        d="M42.0447 68.5217V53.2174C42.0447 52.629 41.8109 52.0647 41.3949 51.6486C40.9788 51.2325 40.4145 50.9988 39.8261 50.9988H37.913C37.3246 50.9988 36.7603 51.2325 36.3443 51.6486C35.9282 52.0647 35.6944 52.629 35.6944 53.2174V68.5217C35.6944 69.1101 35.9282 69.6745 36.3443 70.0905C36.7603 70.5066 37.3246 70.7403 37.913 70.7403H39.8261C40.4145 70.7403 40.9788 70.5066 41.3949 70.0905C41.8109 69.6745 42.0447 69.1101 42.0447 68.5217ZM49.3913 35.6944H47.4783C46.8899 35.6944 46.3255 35.9282 45.9095 36.3443C45.4934 36.7603 45.2597 37.3246 45.2597 37.913V83.8261C45.2597 84.4145 45.4934 84.9788 45.9095 85.3949C46.3255 85.8109 46.8899 86.0447 47.4783 86.0447H49.3913C49.9797 86.0447 50.544 85.8109 50.9601 85.3949C51.3762 84.9788 51.6099 84.4145 51.6099 83.8261V37.913C51.6099 37.3246 51.3762 36.7603 50.9601 36.3443C50.544 35.9282 49.9797 35.6944 49.3913 35.6944ZM58.9565 43.3466H57.0435C56.4551 43.3466 55.8908 43.5804 55.4747 43.9964C55.0586 44.4125 54.8249 44.9768 54.8249 45.5652V76.1739C54.8249 76.7623 55.0586 77.3266 55.4747 77.7427C55.8908 78.1588 56.4551 78.3925 57.0435 78.3925H58.9565C59.5449 78.3925 60.1092 78.1588 60.5253 77.7427C60.9414 77.3266 61.1751 76.7623 61.1751 76.1739V45.5652C61.1751 44.9768 60.9414 44.4125 60.5253 43.9964C60.1092 43.5804 59.5449 43.3466 58.9565 43.3466ZM68.5217 50.9988H66.6087C66.0203 50.9988 65.456 51.2325 65.0399 51.6486C64.6238 52.0647 64.3901 52.629 64.3901 53.2174V68.5217C64.3901 69.1101 64.6238 69.6745 65.0399 70.0905C65.456 70.5066 66.0203 70.7403 66.6087 70.7403H68.5217C69.1101 70.7403 69.6745 70.5066 70.0905 70.0905C70.5066 69.6745 70.7403 69.1101 70.7403 68.5217V53.2174C70.7403 52.629 70.5066 52.0647 70.0905 51.6486C69.6745 51.2325 69.1101 50.9988 68.5217 50.9988ZM78.087 47.1727H76.1739C75.5855 47.1727 75.0212 47.4065 74.6051 47.8225C74.1891 48.2386 73.9553 48.8029 73.9553 49.3913V72.3478C73.9553 72.9362 74.1891 73.5005 74.6051 73.9166C75.0212 74.3327 75.5855 74.5664 76.1739 74.5664H78.087C78.6754 74.5664 79.2397 74.3327 79.6557 73.9166C80.0718 73.5005 80.3056 72.9362 80.3056 72.3478V49.3913C80.3056 48.8029 80.0718 48.2386 79.6557 47.8225C79.2397 47.4065 78.6754 47.1727 78.087 47.1727Z"
                                                        stroke="url(#paint1_linear_72_5118)"
                                                        stroke-opacity="0.41"
                                                        stroke-width="0.611111"
                                                        shape-rendering="crispEdges"/>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_72_5118" x="0.0467377"
                                                            y="0.0469513"
                                                            width="115.907" height="121.645"
                                                            filterUnits="userSpaceOnUse"
                                                            color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0"
                                                                 result="BackgroundImageFix"/>
                                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                       result="hardAlpha"/>
                                                        <feOffset/>
                                                        <feGaussianBlur stdDeviation="17.671"/>
                                                        <feComposite in2="hardAlpha" operator="out"/>
                                                        <feColorMatrix type="matrix"
                                                                       values="0 0 0 0 0.8375 0 0 0 0 0.809583 0 0 0 0 0.809583 0 0 0 0.19 0"/>
                                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                                 result="effect1_dropShadow_72_5118"/>
                                                        <feBlend mode="normal" in="SourceGraphic"
                                                                 in2="effect1_dropShadow_72_5118"
                                                                 result="shape"/>
                                                    </filter>
                                                    <linearGradient id="paint0_linear_72_5118" x1="58"
                                                                    y1="36"
                                                                    x2="58" y2="85.7391"
                                                                    gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white"/>
                                                        <stop offset="1" stop-color="#404040"
                                                              stop-opacity="0.39"/>
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_72_5118" x1="58"
                                                                    y1="36"
                                                                    x2="58" y2="85.7391"
                                                                    gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#E1E1E1"/>
                                                        <stop offset="1" stop-color="#E1E1E1"
                                                              stop-opacity="0.32"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                    <div
                                        className={'w-full text-[8px] text-[#A6A6A6] font-semibold justify-between flex items-center'}>
                                        <h1>00.00</h1>
                                        <h1>02.18</h1>
                                    </div>
                                    <RangeSliderr/>
                                </div> : ''}
                                {ved1.music1 === 'addsong' ?
                                    <div
                                        className={'flex container gap-[7px] px-[14px] py-[15px] overflow-auto h-[190px] flex-col w-full'}>
                                        <div className={'flex flex-row gap-[4px]'}>
                                            <div
                                                className={'w-full flex-row gap-[8px] items-center flex px-[9px] py-[8px] menu1bg8 h-[38px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18"
                                                     height="19"
                                                     viewBox="0 0 18 19" fill="none">
                                                    <path
                                                        d="M16.5 0.426025H1.5C1.10218 0.426025 0.720644 0.584061 0.43934 0.865365C0.158035 1.14667 0 1.5282 0 1.92603V16.926C0 17.3239 0.158035 17.7054 0.43934 17.9867C0.720644 18.268 1.10218 18.426 1.5 18.426H16.5C16.8978 18.426 17.2794 18.268 17.5607 17.9867C17.842 17.7054 18 17.3239 18 16.926V1.92603C18 1.5282 17.842 1.14667 17.5607 0.865365C17.2794 0.584061 16.8978 0.426025 16.5 0.426025ZM9.05344 15.2067L8.54156 15.7176C7.76459 16.4744 6.72084 16.8947 5.63625 16.8875C4.55167 16.8804 3.51353 16.4464 2.7466 15.6794C1.97967 14.9125 1.54565 13.8744 1.5385 12.7898C1.53136 11.7052 1.95167 10.6614 2.70844 9.88446L4.95844 7.63446C5.63392 6.96075 6.52169 6.54149 7.47111 6.44785C8.42053 6.35421 9.37311 6.59194 10.1672 7.12071C10.3325 7.23136 10.4472 7.40315 10.4858 7.59831C10.5245 7.79346 10.4841 7.99599 10.3734 8.16134C10.2628 8.32668 10.091 8.4413 9.89584 8.47998C9.70069 8.51866 9.49816 8.47823 9.33281 8.36759C8.82782 8.0304 8.22154 7.87872 7.61726 7.93838C7.01297 7.99804 6.44806 8.26535 6.01875 8.69477L3.76875 10.9448C3.27644 11.4371 2.99987 12.1048 2.99987 12.801C2.99987 13.4973 3.27644 14.165 3.76875 14.6573C4.26106 15.1496 4.92877 15.4262 5.625 15.4262C6.32123 15.4262 6.98894 15.1496 7.48125 14.6573L7.99219 14.1454C8.13292 14.0047 8.32379 13.9256 8.52281 13.9256C8.72184 13.9256 8.91271 14.0047 9.05344 14.1454C9.19417 14.2861 9.27323 14.477 9.27323 14.676C9.27323 14.875 9.19417 15.0659 9.05344 15.2067ZM15.2916 8.96759L13.0416 11.2176C12.3661 11.8913 11.4783 12.3106 10.5289 12.4042C9.57947 12.4978 8.62689 12.2601 7.83281 11.7313C7.66747 11.6207 7.55285 11.4489 7.51417 11.2537C7.47549 11.0586 7.51592 10.8561 7.62656 10.6907C7.73721 10.5254 7.909 10.4107 8.10416 10.3721C8.29931 10.3334 8.50184 10.3738 8.66719 10.4845C9.17254 10.8206 9.77858 10.9717 10.3826 10.912C10.9866 10.8524 11.5514 10.5858 11.9813 10.1573L14.2313 7.90728C14.7236 7.41497 15.0001 6.74725 15.0001 6.05103C15.0001 5.3548 14.7236 4.68708 14.2313 4.19478C13.7389 3.70247 13.0712 3.42589 12.375 3.42589C11.6788 3.42589 11.0111 3.70247 10.5187 4.19478L10.0078 4.70665C9.86708 4.84738 9.67621 4.92644 9.47719 4.92644C9.27816 4.92644 9.08729 4.84738 8.94656 4.70665C8.80583 4.56592 8.72677 4.37505 8.72677 4.17603C8.72677 3.977 8.80583 3.78613 8.94656 3.6454L9.45844 3.13446C10.2354 2.3777 11.2792 1.95739 12.3637 1.96453C13.4483 1.97167 14.4865 2.40569 15.2534 3.17262C16.0203 3.93956 16.4544 4.97769 16.4615 6.06228C16.4686 7.14686 16.0483 8.19062 15.2916 8.96759Z"
                                                        fill="#969696"/>
                                                </svg>
                                                <div className={'w-[1.5px] h-full bg-[#D9D9D93D]'}></div>
                                                <input placeholder={' www.youtube.com/w/devdusaifsa.mp4'}
                                                       className={'ml-[2px] text-[9px]  w-full h-ful bg-transparent font-semibold active:outline-none text-[#959595] outline-none bg-none'}
                                                       type="text"/>
                                            </div>
                                            <div
                                                className={'menu1bg8 flex justify-center cursor-pointer items-center w-[38px] h-[38px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                                     viewBox="0 0 9 9" fill="none">
                                                    <path
                                                        d="M3.37844 8.7359V-0.00384521H5.3613V8.7359H3.37844ZM0 5.35746V3.3746H8.73974V5.35746H0Z"
                                                        fill="#959595"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={'flex flex-col gap-[7px]'}>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <h4 className={'text-[9px] text-[#9B9B9B] font-semibold'}>
                                                    Song Added
                                                </h4>
                                            </div>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <h4 className={'text-[9px] text-[#9B9B9B] font-semibold'}>
                                                    Song Added
                                                </h4>
                                            </div>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <h4 className={'text-[9px] text-[#9B9B9B] font-semibold'}>
                                                    Song Added
                                                </h4>
                                            </div>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <h4 className={'text-[9px] text-[#9B9B9B] font-semibold'}>
                                                    Song Added
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    : ''}
                                {ved1.music1 === 'musiclist' ?
                                    <div
                                        className={'flex container gap-[7px] px-[14px] py-[15px] overflow-auto h-[190px] flex-col w-full'}>
                                        <div className={'flex flex-row gap-[4px]'}>
                                            <div
                                                className={'w-full flex-row gap-[8px] items-center flex px-[9px] py-[8px] menu1bg8 h-[38px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17"
                                                     height="17"
                                                     viewBox="0 0 17 17" fill="none">
                                                    <path
                                                        d="M11.7689 7.19699C11.7689 8.10219 11.5005 8.98706 10.9976 9.73971C10.4947 10.4924 9.77986 11.079 8.94356 11.4254C8.10727 11.7718 7.18703 11.8624 6.29922 11.6858C5.41141 11.5092 4.59591 11.0733 3.95583 10.4333C3.31576 9.79319 2.87986 8.97768 2.70327 8.08987C2.52667 7.20207 2.61731 6.28183 2.96371 5.44553C3.31012 4.60924 3.89674 3.89444 4.64938 3.39154C5.40203 2.88863 6.2869 2.62021 7.19211 2.62021C8.40594 2.62021 9.57006 3.10241 10.4284 3.96072C11.2867 4.81903 11.7689 5.98315 11.7689 7.19699ZM16.8082 16.8131C16.7475 16.8739 16.6754 16.9221 16.596 16.955C16.5167 16.9879 16.4316 17.0049 16.3457 17.0049C16.2597 17.0049 16.1747 16.9879 16.0953 16.955C16.0159 16.9221 15.9438 16.8739 15.8831 16.8131L11.7918 12.721C10.369 13.9047 8.54462 14.4943 6.69819 14.3672C4.85176 14.2401 3.12541 13.4061 1.87821 12.0386C0.631017 10.6711 -0.0410025 8.87551 0.00193806 7.02522C0.0448786 5.17492 0.799473 3.4124 2.10876 2.10427C3.41805 0.796135 5.18124 0.0430985 7.03157 0.00179325C8.88191 -0.039512 10.6769 0.634094 12.0433 1.8825C13.4097 3.1309 14.2422 4.85799 14.3676 6.70453C14.4931 8.55107 13.9019 10.3749 12.7169 11.7967L16.8082 15.888C16.869 15.9487 16.9173 16.0208 16.9502 16.1002C16.9831 16.1795 17 16.2646 17 16.3505C17 16.4365 16.9831 16.5215 16.9502 16.6009C16.9173 16.6803 16.869 16.7524 16.8082 16.8131ZM7.19211 13.0814C8.35594 13.0814 9.49363 12.7363 10.4613 12.0897C11.429 11.4431 12.1832 10.5241 12.6286 9.44886C13.074 8.37362 13.1905 7.19046 12.9635 6.04899C12.7364 4.90753 12.176 3.85902 11.353 3.03607C10.5301 2.21312 9.48157 1.65268 8.3401 1.42563C7.19863 1.19858 6.01547 1.31511 4.94023 1.76049C3.86499 2.20586 2.94597 2.96009 2.29938 3.92778C1.65279 4.89546 1.30768 6.03316 1.30768 7.19699C1.30941 8.75711 1.92993 10.2528 3.0331 11.356C4.13627 12.4592 5.63199 13.0797 7.19211 13.0814Z"
                                                        fill="#969696"/>
                                                </svg>
                                                <div className={'w-[1.5px] h-full bg-[#D9D9D93D]'}></div>
                                                <input placeholder={'Search Song'}
                                                       className={'ml-[2px] text-[9px]  w-full h-ful bg-transparent font-semibold active:outline-none text-[#959595] outline-none bg-none'}
                                                       type="text"/>
                                            </div>

                                        </div>
                                        <div className={'flex flex-col gap-[7px]'}>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <svg className={'cursor-pointer w-[11px]'}
                                                         xmlns="http://www.w3.org/2000/svg" width="14"
                                                         height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0_367_1367)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.362 5.86865L2.55894 0.152963C2.03651 -0.130707 1.43686 -0.103479 1.43343 0.908466L1.39546 12.1044C1.39232 13.0295 2.03503 13.1775 2.51582 12.8675L11.3575 7.2117C11.7219 6.84187 11.7239 6.24094 11.362 5.86865Z"
                                                                  fill="#717171"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1367">
                                                                <rect width="13.0035" height="13.0035"
                                                                      fill="white"
                                                                      transform="translate(0.0439453) rotate(0.194319)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg className={'cursor-pointer'}
                                                         xmlns="http://www.w3.org/2000/svg" width="9"
                                                         height="9"
                                                         viewBox="0 0 9 9" fill="none">
                                                        <rect x="0.390625" y="1.25955" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-45 0.390625 1.25955)"
                                                              fill="#717171"/>
                                                        <rect x="1.65039" y="8.1871" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-135 1.65039 8.1871)"
                                                              fill="#717171"/>
                                                    </svg>


                                                </div>
                                            </div>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <svg className={'cursor-pointer w-[11px]'}
                                                         xmlns="http://www.w3.org/2000/svg" width="14"
                                                         height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0_367_1367)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.362 5.86865L2.55894 0.152963C2.03651 -0.130707 1.43686 -0.103479 1.43343 0.908466L1.39546 12.1044C1.39232 13.0295 2.03503 13.1775 2.51582 12.8675L11.3575 7.2117C11.7219 6.84187 11.7239 6.24094 11.362 5.86865Z"
                                                                  fill="#717171"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1367">
                                                                <rect width="13.0035" height="13.0035"
                                                                      fill="white"
                                                                      transform="translate(0.0439453) rotate(0.194319)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg className={'cursor-pointer'}
                                                         xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                                         viewBox="0 0 9 9" fill="none">
                                                        <rect x="0.390625" y="1.25955" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-45 0.390625 1.25955)"
                                                              fill="#717171"/>
                                                        <rect x="1.65039" y="8.1871" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-135 1.65039 8.1871)"
                                                              fill="#717171"/>
                                                    </svg>


                                                </div>
                                            </div>

                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <svg className={'cursor-pointer w-[11px]'}
                                                         xmlns="http://www.w3.org/2000/svg" width="14"
                                                         height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0_367_1367)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.362 5.86865L2.55894 0.152963C2.03651 -0.130707 1.43686 -0.103479 1.43343 0.908466L1.39546 12.1044C1.39232 13.0295 2.03503 13.1775 2.51582 12.8675L11.3575 7.2117C11.7219 6.84187 11.7239 6.24094 11.362 5.86865Z"
                                                                  fill="#717171"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1367">
                                                                <rect width="13.0035" height="13.0035"
                                                                      fill="white"
                                                                      transform="translate(0.0439453) rotate(0.194319)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg className={'cursor-pointer'}
                                                         xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                                         viewBox="0 0 9 9" fill="none">
                                                        <rect x="0.390625" y="1.25955" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-45 0.390625 1.25955)"
                                                              fill="#717171"/>
                                                        <rect x="1.65039" y="8.1871" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-135 1.65039 8.1871)"
                                                              fill="#717171"/>
                                                    </svg>


                                                </div>
                                            </div>

                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <svg className={'cursor-pointer w-[11px]'}
                                                         xmlns="http://www.w3.org/2000/svg" width="14"
                                                         height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0_367_1367)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.362 5.86865L2.55894 0.152963C2.03651 -0.130707 1.43686 -0.103479 1.43343 0.908466L1.39546 12.1044C1.39232 13.0295 2.03503 13.1775 2.51582 12.8675L11.3575 7.2117C11.7219 6.84187 11.7239 6.24094 11.362 5.86865Z"
                                                                  fill="#717171"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1367">
                                                                <rect width="13.0035" height="13.0035"
                                                                      fill="white"
                                                                      transform="translate(0.0439453) rotate(0.194319)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg className={'cursor-pointer'}
                                                         xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                                         viewBox="0 0 9 9" fill="none">
                                                        <rect x="0.390625" y="1.25955" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-45 0.390625 1.25955)"
                                                              fill="#717171"/>
                                                        <rect x="1.65039" y="8.1871" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-135 1.65039 8.1871)"
                                                              fill="#717171"/>
                                                    </svg>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    : ''}
                                {ved1.music1 === 'tracklist' ?
                                    <div
                                        className={'flex container gap-[7px] px-[14px] py-[15px] overflow-auto h-[190px] flex-col w-full'}>
                                        <div className={'flex flex-row gap-[4px]'}>
                                            <div
                                                className={'w-full flex-row gap-[8px] items-center flex px-[9px] py-[8px] menu1bg8 h-[38px]'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                     viewBox="0 0 17 17" fill="none">
                                                    <path
                                                        d="M11.7689 7.19699C11.7689 8.10219 11.5005 8.98706 10.9976 9.73971C10.4947 10.4924 9.77986 11.079 8.94356 11.4254C8.10727 11.7718 7.18703 11.8624 6.29922 11.6858C5.41141 11.5092 4.59591 11.0733 3.95583 10.4333C3.31576 9.79319 2.87986 8.97768 2.70327 8.08987C2.52667 7.20207 2.61731 6.28183 2.96371 5.44553C3.31012 4.60924 3.89674 3.89444 4.64938 3.39154C5.40203 2.88863 6.2869 2.62021 7.19211 2.62021C8.40594 2.62021 9.57006 3.10241 10.4284 3.96072C11.2867 4.81903 11.7689 5.98315 11.7689 7.19699ZM16.8082 16.8131C16.7475 16.8739 16.6754 16.9221 16.596 16.955C16.5167 16.9879 16.4316 17.0049 16.3457 17.0049C16.2597 17.0049 16.1747 16.9879 16.0953 16.955C16.0159 16.9221 15.9438 16.8739 15.8831 16.8131L11.7918 12.721C10.369 13.9047 8.54462 14.4943 6.69819 14.3672C4.85176 14.2401 3.12541 13.4061 1.87821 12.0386C0.631017 10.6711 -0.0410025 8.87551 0.00193806 7.02522C0.0448786 5.17492 0.799473 3.4124 2.10876 2.10427C3.41805 0.796135 5.18124 0.0430985 7.03157 0.00179325C8.88191 -0.039512 10.6769 0.634094 12.0433 1.8825C13.4097 3.1309 14.2422 4.85799 14.3676 6.70453C14.4931 8.55107 13.9019 10.3749 12.7169 11.7967L16.8082 15.888C16.869 15.9487 16.9173 16.0208 16.9502 16.1002C16.9831 16.1795 17 16.2646 17 16.3505C17 16.4365 16.9831 16.5215 16.9502 16.6009C16.9173 16.6803 16.869 16.7524 16.8082 16.8131ZM7.19211 13.0814C8.35594 13.0814 9.49363 12.7363 10.4613 12.0897C11.429 11.4431 12.1832 10.5241 12.6286 9.44886C13.074 8.37362 13.1905 7.19046 12.9635 6.04899C12.7364 4.90753 12.176 3.85902 11.353 3.03607C10.5301 2.21312 9.48157 1.65268 8.3401 1.42563C7.19863 1.19858 6.01547 1.31511 4.94023 1.76049C3.86499 2.20586 2.94597 2.96009 2.29938 3.92778C1.65279 4.89546 1.30768 6.03316 1.30768 7.19699C1.30941 8.75711 1.92993 10.2528 3.0331 11.356C4.13627 12.4592 5.63199 13.0797 7.19211 13.0814Z"
                                                        fill="#969696"/>
                                                </svg>
                                                <div className={'w-[1.5px] h-full bg-[#D9D9D93D]'}></div>
                                                <input placeholder={'Search Song'}
                                                       className={'ml-[2px] text-[9px]  w-full h-ful bg-transparent font-semibold active:outline-none text-[#959595] outline-none bg-none'}
                                                       type="text"/>
                                            </div>

                                        </div>
                                        <div className={'flex flex-col gap-[7px]'}>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <h4 className={'text-[9px] text-[#9B9B9B] font-bold'}>
                                                        Playing Now
                                                    </h4>

                                                </div>
                                            </div>
                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <svg className={'cursor-pointer w-[11px]'}
                                                         xmlns="http://www.w3.org/2000/svg" width="14"
                                                         height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0_367_1367)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.362 5.86865L2.55894 0.152963C2.03651 -0.130707 1.43686 -0.103479 1.43343 0.908466L1.39546 12.1044C1.39232 13.0295 2.03503 13.1775 2.51582 12.8675L11.3575 7.2117C11.7219 6.84187 11.7239 6.24094 11.362 5.86865Z"
                                                                  fill="#717171"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1367">
                                                                <rect width="13.0035" height="13.0035"
                                                                      fill="white"
                                                                      transform="translate(0.0439453) rotate(0.194319)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg className={'cursor-pointer'}
                                                         xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                                         viewBox="0 0 9 9" fill="none">
                                                        <rect x="0.390625" y="1.25955" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-45 0.390625 1.25955)"
                                                              fill="#717171"/>
                                                        <rect x="1.65039" y="8.1871" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-135 1.65039 8.1871)"
                                                              fill="#717171"/>
                                                    </svg>


                                                </div>
                                            </div>

                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <svg className={'cursor-pointer w-[11px]'}
                                                         xmlns="http://www.w3.org/2000/svg" width="14"
                                                         height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0_367_1367)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.362 5.86865L2.55894 0.152963C2.03651 -0.130707 1.43686 -0.103479 1.43343 0.908466L1.39546 12.1044C1.39232 13.0295 2.03503 13.1775 2.51582 12.8675L11.3575 7.2117C11.7219 6.84187 11.7239 6.24094 11.362 5.86865Z"
                                                                  fill="#717171"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1367">
                                                                <rect width="13.0035" height="13.0035"
                                                                      fill="white"
                                                                      transform="translate(0.0439453) rotate(0.194319)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg className={'cursor-pointer'}
                                                         xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                                         viewBox="0 0 9 9" fill="none">
                                                        <rect x="0.390625" y="1.25955" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-45 0.390625 1.25955)"
                                                              fill="#717171"/>
                                                        <rect x="1.65039" y="8.1871" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-135 1.65039 8.1871)"
                                                              fill="#717171"/>
                                                    </svg>


                                                </div>
                                            </div>

                                            <div
                                                className={'w-full px-[9px] flex flex-row justify-between py-[6px] flex items-center menu1bg8 h-[47px]'}>
                                                <div className={'flex flex-row gap-[10px]'}>
                                                    <svg className={'w-[30px]'}
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="33" height="33"
                                                         viewBox="0 0 33 33" fill="none">
                                                        <rect x="0.920898" y="0.615845" width="31.7185"
                                                              height="31.7185"
                                                              rx="0.991202" fill="#696969"/>
                                                        <path
                                                            d="M22.3422 11.1814L16.9357 9.55948C16.8549 9.53525 16.7697 9.53022 16.6867 9.54481C16.6037 9.55939 16.5252 9.59318 16.4576 9.64347C16.39 9.69377 16.335 9.75917 16.2972 9.83447C16.2593 9.90977 16.2396 9.99288 16.2396 10.0772V17.3936C15.6859 16.8983 14.979 16.6081 14.237 16.5715C13.4951 16.5348 12.763 16.7539 12.1632 17.1922C11.5634 17.6304 11.1321 18.2613 10.9416 18.9793C10.751 19.6973 10.8126 20.4589 11.1162 21.1369C11.4197 21.815 11.9467 22.3683 12.6092 22.7044C13.2717 23.0405 14.0295 23.139 14.7559 22.9836C15.4823 22.8281 16.1333 22.428 16.6002 21.8502C17.067 21.2724 17.3215 20.5518 17.3209 19.809V14.0476L22.0313 15.4607C22.1121 15.485 22.1973 15.49 22.2803 15.4754C22.3633 15.4608 22.4418 15.427 22.5094 15.3767C22.577 15.3264 22.632 15.261 22.6698 15.1857C22.7077 15.1104 22.7274 15.0273 22.7274 14.9431V11.6991C22.7274 11.5829 22.6899 11.4698 22.6205 11.3765C22.5511 11.2833 22.4535 11.2149 22.3422 11.1814Z"
                                                            fill="#101010"/>
                                                    </svg>
                                                    <div
                                                        className={'flex flex-col justify-center gap-0 gap-[0px]'}>
                                                        <h1 className={'text-[#DEDEDE] text-[10px] font-semibold'}>Music
                                                            Name</h1>
                                                        <h1 className={'text-[#939393] text-[8px] font-bold'}>Song
                                                            Artist</h1>
                                                    </div>
                                                </div>
                                                <div className={'flex items-center flex-row gap-[9px]'}>

                                                    <svg className={'cursor-pointer w-[11px]'}
                                                         xmlns="http://www.w3.org/2000/svg" width="14"
                                                         height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0_367_1367)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                  d="M11.362 5.86865L2.55894 0.152963C2.03651 -0.130707 1.43686 -0.103479 1.43343 0.908466L1.39546 12.1044C1.39232 13.0295 2.03503 13.1775 2.51582 12.8675L11.3575 7.2117C11.7219 6.84187 11.7239 6.24094 11.362 5.86865Z"
                                                                  fill="#717171"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_367_1367">
                                                                <rect width="13.0035" height="13.0035"
                                                                      fill="white"
                                                                      transform="translate(0.0439453) rotate(0.194319)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <svg className={'cursor-pointer'}
                                                         xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                                                         viewBox="0 0 9 9" fill="none">
                                                        <rect x="0.390625" y="1.25955" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-45 0.390625 1.25955)"
                                                              fill="#717171"/>
                                                        <rect x="1.65039" y="8.1871" width="1.78128"
                                                              height="9.79702" rx="0.498758"
                                                              transform="rotate(-135 1.65039 8.1871)"
                                                              fill="#717171"/>
                                                    </svg>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    : ''}
                            </div>
                            <div
                                className={'w-full h-full z-20 gap-[5px] :!rounded-[0px] menu1bg4  flex flex-row p-[2px]  '}>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'media'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "media" ? 'text-[#020710] menu1bg5' : 'text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Media
                                </div>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'vehicle'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "vehicle" ? 'text-[#020710] menu1bg5' : '!text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Vehicle
                                </div>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'map'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "map" ? 'text-[#020710] menu1bg5' : '!text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Map
                                </div>
                            </div>
                        </div> : ''}
                        {ved1.menu1 === 'map' ? <div className={'w-full h-full overflow-hidden '}>
                            <div className={'w-full  h-[217px]'}>
                                <img className={'w-full h-[217px] object-cover'} src={map} alt=""/>
                            </div>
                            <div
                                className={'w-full h-full z-30 gap-[5px] bg-black :!rounded-[0px] menu1bg4  flex flex-row p-[2px]  '}>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'media'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "media" ? 'text-[#020710] menu1bg5' : 'text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Media
                                </div>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'vehicle'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "vehicle" ? 'text-[#020710] menu1bg5' : '!text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Vehicle
                                </div>
                                <div
                                    onClick={() => {
                                        setVed1({
                                            ...ved1,
                                            menu1: 'map'
                                        })
                                    }}
                                    className={`w-[33%] ${ved1.menu1 === "map" ? 'text-[#020710] menu1bg5' : '!text-[#9F9F9F]'} cursor-pointer duration-300 font-bold flex justify-center items-center gap-[3px] text-[10px]  h-[23px]`}>

                                    Map
                                </div>
                            </div>
                        </div> : ''}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MenuFile;
