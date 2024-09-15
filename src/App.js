import './App.css';
import React, {useEffect, useState} from "react";
import background from './img/bg.svg'
import map from './img/map.svg'
import Hud1 from "./all/Hud1";
import Hud2 from "./all/Hud2";
import Hud3 from "./all/Hud3";
import Hud4 from "./all/Hud4";
import Hud5 from "./all/Hud5";
import Hud6 from "./all/Hud6";
import Hud7 from "./all/Hud7";
import Hud8a from "./all/Hud8";
import carbg from './img/carbg.svg'
import doorsvg from './img/door.svg'
import neoncarsvg from './img/neonscar.svg'
import RangeSliderr from "./components/RangeSliderr";
import remove from './img/Group 128.svg'
import pause from './img/Group 120.svg'
import dasd1 from './img/dasd1.svg'
import allsvg from './img/car/all.svg'
import frontsvg from './img/car/front.svg'
import leftsvg from './img/car/left.svg'
import backleft from './img/car/backleft.svg'
import backright from './img/car/backright.svg'
import partysvg from './img/car/party.svg'
import rearsvg from './img/car/rear.svg'
import rightsvg from './img/car/right.svg'
import speedo1 from './img/speedo1.svg'
import speedo2 from './img/speedo2.svg'
import speedo3 from './img/speedo3.svg'
import speedo4 from './img/speedo4.svg'
import speedo5 from './img/speedo5.svg'
import speedo6 from './img/speedo6.svg'
import speedo7 from './img/speedo7.svg'
import speedo8 from './img/speedo8.svg'
import speedo9 from './img/speedo9.svg'
import speedo10 from './img/speedo10.svg'
import Test from "./Test";
import speedos1 from './img/speedos/speedo1.svg'
import speedos1a from './img/speedos/speedo1a.svg'
import Hud8 from "./components/Hud8";
import {SemiCircleProgress} from "react-semicircle-progressbar";
import ProgressBar from "./components/ProgressBar";
import Speedometer1 from "./all/Speedometer1";
import Speedometer21 from "./all/Speedometer2";
import Speedometer3 from "./all/Speedometer3";
import Speedometer4 from "./all/Speedometer4";

import Menufile from './all/MenuFile'
import Dashboardfile from './all/Dashboardfile'


function App() {
    const backenddegeri = 80
    const [aktifHud, setAktifhud] = useState({
        hud1: false,
        hud2: false,
        hud3: false,
        hud4: false,
        hud5: false,
        hud6: false,
        hud7: false,
        hud8: false,
        menu1: true,
        speedometer1: true,
        speedometer2: false,
        speedometer3: false,
        speedometer4: false,
        speedometer5: false,
        speedometer6: false,
        speedometer7: false,
        speedometer8: false,
        speedometer9: false,
        speedometer10: false,
        speedotype: 1,
        dashboard: true,
    })




    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className={'w-full h-full '}>
                {aktifHud.hud1 && <Hud1/>}
                {aktifHud.hud2 && <Hud2/>}
                {aktifHud.hud3 && <Hud3/>}
                {aktifHud.hud4 && <Hud4/>}
                {aktifHud.hud5 && <Hud5 />}
                {aktifHud.hud6 && <Hud6/>}
                {aktifHud.hud7 && <Hud7/>}
                {aktifHud.hud8 && <Hud8/>}
                {aktifHud.speedometer1 && <Speedometer1/>}
                {aktifHud.speedometer2 && <Speedometer21/>}
                {aktifHud.speedometer3 && <Speedometer3/>}
                {aktifHud.speedometer4 && <Speedometer4/>}
                {aktifHud.menu1 && <Menufile/>}
                {aktifHud.dashboard && <Dashboardfile aktifHud={aktifHud} setAktifhud={setAktifhud}/>}
            </div>
            <div className={'absolute -z-10 top-0 left-0 w-full h-full'}>
                <img className={'w-full h-full bg-cover object-cover'} src={background} alt=""/>
            </div>
        </div>
    );
}

export default App;

// <div className={'w-[120px]  h-[120px] bg-[#D9D9D9] bg-opacity-[0.26]  rounded-[50%] flex justify-center items-center'}>
//     <div className={'w-[110px] h-[110px] bg-white rounded-[50%] flex justify-center items-center'}>
//         <div
//             className="progress-bar w-[100px] border-2 z-20 h-[100px]  rounded-[50%] flex justify-center items-center"
//             role="progressbar"
//             aria-valuenow="75" aria-valuemin="0"
//             aria-valuemax="100">
//             <div style={{
//                 background: `radial-gradient(closest-side, white 79%, transparent 80%), conic-gradient(black 40%, white 0)`
//             }} className={'w-full h-full -z-10  rounded-[50%] stroke-[1px] stroke-[#8D8D8D]'}>
//
//             </div>
//         </div>
//
//     </div>
// </div>

// <div className={'skill w-[160px] h-[160px] relative'}>
//     <div className={'outer boxshadow p-[20px] w-[160px] h-[160px] border-red-600  rounded-[50%]'}>
//         <div className={'inner boxshadow2 w-[120px] border-[1px] rounded-[50%] h-[120px]'}></div>
//     </div>
// </div>