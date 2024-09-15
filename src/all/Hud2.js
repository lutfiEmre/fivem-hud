import React from 'react';
import map from "../img/map.svg";

const Hud2 = () => {
    return (
        <div className={
            'absolute left-[50px] w-fit h-fit bottom-[50px] gap-[110px] flex flex-col'
        }>

            <div className={'flex flex-col gap-[13px]'}>
                <div className={'flex flex-row gap-[12px]'}>
                    <div className={'flex flex-row gap-[3px]'}>
                        <div className={'relative flex justify-center items-center'}>
                            <svg className={'absolute'} xmlns="http://www.w3.org/2000/svg" width="13"
                                 height="18"
                                 viewBox="0 0 13 18"
                                 fill="none">
                                <path
                                    d="M10.14 9.44187V4.59709C10.14 3.6334 9.75716 2.70918 9.07573 2.02775C8.3943 1.34632 7.47009 0.963501 6.5064 0.963501C5.54271 0.963501 4.6185 1.34632 3.93707 2.02775C3.25564 2.70918 2.87281 3.6334 2.87281 4.59709V9.44187C2.87281 10.4056 3.25564 11.3298 3.93707 12.0112C4.6185 12.6926 5.54271 13.0755 6.5064 13.0755C7.47009 13.0755 8.3943 12.6926 9.07573 12.0112C9.75716 11.3298 10.14 10.4056 10.14 9.44187ZM0.450422 9.44187C0.450422 9.28126 0.514225 9.12722 0.627797 9.01365C0.741368 8.90008 0.895406 8.83627 1.05602 8.83627C1.21663 8.83627 1.37067 8.90008 1.48424 9.01365C1.59781 9.12722 1.66162 9.28126 1.66162 9.44187C1.66162 10.7268 2.17205 11.9591 3.08062 12.8677C3.98919 13.7762 5.22148 14.2867 6.5064 14.2867C7.79132 14.2867 9.02361 13.7762 9.93218 12.8677C10.8408 11.9591 11.3512 10.7268 11.3512 9.44187C11.3512 9.28126 11.415 9.12722 11.5286 9.01365C11.6421 8.90008 11.7962 8.83627 11.9568 8.83627C12.1174 8.83627 12.2714 8.90008 12.385 9.01365C12.4986 9.12722 12.5624 9.28126 12.5624 9.44187C12.5605 10.9426 12.0023 12.3894 10.9955 13.5025C9.98877 14.6155 8.60507 15.3156 7.112 15.4676V17.3146C7.112 17.4753 7.04819 17.6293 6.93462 17.7429C6.82105 17.8564 6.66701 17.9202 6.5064 17.9202C6.34579 17.9202 6.19175 17.8564 6.07818 17.7429C5.96461 17.6293 5.9008 17.4753 5.9008 17.3146V15.4676C4.40773 15.3156 3.02404 14.6155 2.01729 13.5025C1.01054 12.3894 0.452266 10.9426 0.450422 9.44187Z"
                                    fill="black"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49"
                                 fill="none">
                                <path
                                    d="M1.73873 48.5807L46.8421 48.5807C47.3658 48.5807 47.7904 48.1561 47.7904 47.6324L47.7904 0.948292C47.7904 0.424549 47.3658 -3.0499e-05 46.8421 -3.04761e-05L12.3639 -2.8969e-05C12.1063 -2.89578e-05 11.8598 0.104765 11.6811 0.290258L1.05586 11.3164C0.885557 11.4932 0.790407 11.729 0.790407 11.9745L0.790409 47.6324C0.790409 48.1561 1.21498 48.5807 1.73873 48.5807Z"
                                    fill="#D8D8D8"/>
                            </svg>
                            <div
                                className={'absolute rounded-[1px] w-[60%]  h-[3px] bg-black bottom-[3px] left-[3px]'}>

                            </div>
                        </div>
                        <div className={'relative flex justify-center items-center'}>
                            <div className={'absolute'}>
                                <h1 className={'Extrabold'}>NE</h1>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49"
                                 fill="none">
                                <path
                                    d="M1.73873 48.5807L46.8421 48.5807C47.3658 48.5807 47.7904 48.1561 47.7904 47.6324L47.7904 0.948292C47.7904 0.424549 47.3658 -3.0499e-05 46.8421 -3.04761e-05L12.3639 -2.8969e-05C12.1063 -2.89578e-05 11.8598 0.104765 11.6811 0.290258L1.05586 11.3164C0.885557 11.4932 0.790407 11.729 0.790407 11.9745L0.790409 47.6324C0.790409 48.1561 1.21498 48.5807 1.73873 48.5807Z"
                                    fill="#D8D8D8"/>
                            </svg>
                        </div>
                    </div>
                    <div className={'ml-[2px] Semibold flex flex-col gap-[px] text-white'}>
                        <h1 className={'text-[17px]'}>LOCATION NAME</h1>
                        <h3 className={'opacity-[0.46] tracking-wide text-[11px] Bold'}>
                            Location Name
                        </h3>
                    </div>
                </div>
                <img src={map} alt=""/>
                <div className={'flex flex-row relative'}>
                    <div className={'flex mt-[10px] flex-row gap-[20px]'}>
                        <div
                            className={'w-[44px]  h-[44px] bg-white bg-opacity-[36%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-black"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                           <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="13"
                                height="13" viewBox="0 0 13 13"
                                fill="none">
  <path
      d="M11.9337 1.07212C10.6714 -0.352861 8.62162 -0.352861 7.35927 1.07212L6.5 2.03678L5.64073 1.06874C4.37526 -0.356246 2.32863 -0.356246 1.06628 1.06874C-0.355426 2.66973 -0.355426 5.26922 1.06628 6.87021L6.5 13L11.9337 6.87359C13.3554 5.2726 13.3554 2.67311 11.9337 1.07212Z"
      fill="black"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'w-[44px]  h-[44px] bg-white bg-opacity-[36%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-black"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white scale-125 rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center w-[25px] h-[25px] flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                            <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="14"
                                 height="16" viewBox="0 0 14 16"
                                 fill="none">
  <path
      d="M6.605 15.0444C10.2377 15.0444 13.21 12.5057 13.21 9.40277C13.21 6.29985 6.605 1.34807e-09 6.605 1.34807e-09C6.605 1.34807e-09 -1.30498e-09 6.39388 -1.91909e-09 9.40277C-2.53319e-09 12.4117 2.97225 15.0444 6.605 15.0444Z"
      fill="black"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'w-[44px]  h-[44px] bg-white bg-opacity-[36%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-black"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                         <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="15" height="14"
                              viewBox="0 0 15 14" fill="none">
  <path
      d="M1.28698 4.86633C1.1878 4.74432 1.11725 4.60162 1.08051 4.44874C1.04377 4.29585 1.04177 4.13668 1.07467 3.98293C1.56304 1.67451 4.20668 -0.00158691 7.36169 -0.00158692C10.5167 -0.00158692 13.1603 1.67451 13.6487 3.98293C13.682 4.13679 13.6802 4.29616 13.6437 4.44928C13.6071 4.6024 13.5367 4.74536 13.4375 4.86761C13.3384 4.98987 13.213 5.0883 13.0707 5.15565C12.9284 5.22301 12.7728 5.25756 12.6154 5.25676L2.10794 5.25676C1.95061 5.25723 1.79518 5.2224 1.65309 5.15483C1.51101 5.08726 1.3859 4.98867 1.28698 4.86633ZM14.0174 8.44332L11.314 9.42926L8.87346 8.44923C8.74814 8.39913 8.60835 8.39913 8.48303 8.44923L6.05104 9.42269L3.61511 8.44923C3.49519 8.40132 3.36183 8.39922 3.24046 8.44332L0.348365 9.49499C0.226133 9.54879 0.128952 9.64709 0.0765474 9.76993C0.0241432 9.89277 0.0204426 10.0309 0.0661966 10.1564C0.111951 10.2819 0.203731 10.3852 0.322909 10.4455C0.442086 10.5058 0.579731 10.5184 0.707905 10.4809L1.5775 10.1661L1.5775 10.5151C1.5775 11.2124 1.85451 11.8811 2.34757 12.3742C2.84064 12.8673 3.50938 13.1443 4.20668 13.1443L10.5167 13.1443C11.214 13.1443 11.8827 12.8673 12.3758 12.3742C12.8689 11.8811 13.1459 11.2124 13.1459 10.5151L13.1459 9.8795L14.377 9.43189C14.446 9.41168 14.5102 9.37753 14.5655 9.33154C14.6208 9.28556 14.6661 9.22871 14.6985 9.16452C14.731 9.10033 14.7499 9.03017 14.7542 8.95836C14.7585 8.88656 14.7479 8.81465 14.7233 8.74707C14.6987 8.67949 14.6604 8.61769 14.6109 8.56549C14.5614 8.51328 14.5018 8.47178 14.4356 8.44356C14.3695 8.41533 14.2982 8.40098 14.2263 8.40139C14.1544 8.4018 14.0833 8.41697 14.0174 8.44595L14.0174 8.44332ZM0.525835 7.3601L14.1975 7.3601C14.337 7.3601 14.4707 7.3047 14.5694 7.20609C14.668 7.10747 14.7234 6.97372 14.7234 6.83426C14.7234 6.6948 14.668 6.56106 14.5694 6.46244C14.4707 6.36383 14.337 6.30843 14.1975 6.30843L0.525835 6.30843C0.386375 6.30843 0.252627 6.36383 0.154013 6.46244C0.0554003 6.56106 1.36672e-09 6.6948 1.39518e-09 6.83426C1.42365e-09 6.97372 0.0554003 7.10747 0.154013 7.20609C0.252627 7.3047 0.386375 7.3601 0.525835 7.3601Z"
      fill="black"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'w-[44px]  h-[44px] bg-white bg-opacity-[36%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-black"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                            <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="13"
                                 height="17" viewBox="0 0 13 17"
                                 fill="none">
  <path
      d="M5.39985 16.8354C5.3118 16.8353 5.22445 16.8199 5.14168 16.7899C4.98204 16.7314 4.84662 16.6211 4.75714 16.4765C4.66765 16.3319 4.62926 16.1615 4.64813 15.9926L5.2328 10.6091H0.760457C0.622513 10.6093 0.487118 10.5719 0.368815 10.501C0.250511 10.43 0.153767 10.3282 0.0889742 10.2064C0.0241811 10.0846 -0.0062133 9.94749 0.00105493 9.80974C0.00832316 9.67199 0.0529796 9.53882 0.130228 9.42453L6.12119 0.464664C6.21595 0.324448 6.35482 0.219903 6.51578 0.167628C6.67673 0.115353 6.85053 0.118344 7.00959 0.176126C7.1625 0.232894 7.29306 0.337391 7.38196 0.474148C7.47085 0.610904 7.51334 0.772649 7.50314 0.935437L6.91847 6.35692H11.3908C11.5288 6.35671 11.6642 6.39408 11.7825 6.46502C11.9008 6.53597 11.9975 6.63779 12.0623 6.75957C12.1271 6.88135 12.1575 7.01848 12.1502 7.15624C12.1429 7.29399 12.0983 7.42716 12.021 7.54144L6.03008 16.5013C5.96043 16.6044 5.86653 16.6887 5.75664 16.747C5.64675 16.8052 5.52423 16.8356 5.39985 16.8354Z"
      fill="black"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'w-[44px]  h-[44px] bg-white bg-opacity-[36%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-black"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                           <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="14"
                                height="15" viewBox="0 0 14 15"
                                fill="none">
  <path
      d="M13.881 2.46334L13.6017 2.44185C10.4215 2.19321 7.14005 0.124261 7.10934 0.105844L6.94358 -0.00158691L6.77783 0.105844C6.74712 0.124261 3.46565 2.19321 0.285482 2.44185L0.00615065 2.46334L5.32926e-06 2.74269C5.32926e-06 2.82251 -0.0399022 10.6839 6.78703 14.7481L6.94358 14.8402L7.10014 14.7481C13.9271 10.6839 13.8872 2.82251 13.8872 2.74269L13.881 2.46334Z"
      fill="black"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'w-[44px]  h-[44px] bg-white bg-opacity-[36%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-black"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                         <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                              viewBox="0 0 16 15" fill="none">
  <path
      d="M13.793 4.13496V3.85909C13.7923 3.2613 13.615 2.67704 13.2834 2.17963C12.9519 1.68222 12.4808 1.29381 11.9293 1.06315C11.3778 0.832486 10.7705 0.769846 10.1835 0.883088C9.59654 0.99633 9.0561 1.28041 8.62999 1.69968C8.60479 1.72508 8.58486 1.75522 8.57137 1.78837C8.55787 1.82151 8.55107 1.857 8.55137 1.89279V8.01169C8.5515 8.06143 8.56508 8.11021 8.59066 8.15286C8.61625 8.19552 8.65289 8.23046 8.69671 8.254C8.74052 8.27753 8.78989 8.28878 8.83958 8.28656C8.88927 8.28433 8.93743 8.26871 8.97897 8.24136C9.50362 7.90496 10.1131 7.72461 10.7363 7.72133C10.8806 7.71865 11.0204 7.77135 11.127 7.86859C11.2336 7.96583 11.2989 8.10021 11.3094 8.24412C11.3134 8.31897 11.302 8.39385 11.276 8.46417C11.2501 8.53449 11.2101 8.59878 11.1584 8.65313C11.1068 8.70747 11.0446 8.75072 10.9757 8.78024C10.9068 8.80976 10.8326 8.82494 10.7577 8.82483C10.1723 8.82483 9.61098 9.05736 9.19709 9.47125C8.7832 9.88514 8.55068 10.4465 8.55068 11.0318V13.3685C8.55062 13.4098 8.55982 13.4505 8.57761 13.4878C8.59539 13.525 8.62131 13.5578 8.65344 13.5837C9.04497 13.9077 9.50595 14.1371 10.0005 14.2539C10.4951 14.3708 11.01 14.3721 11.5052 14.2576C12.0003 14.1431 12.4624 13.9159 12.8555 13.5938C13.2486 13.2716 13.5621 12.8632 13.7716 12.4002C13.7927 12.3536 13.8004 12.3021 13.794 12.2514C13.7875 12.2007 13.7671 12.1528 13.7349 12.113C13.7028 12.0732 13.6603 12.0432 13.6121 12.0262C13.5639 12.0092 13.5119 12.0059 13.4619 12.0167C13.1181 12.0955 12.7664 12.1353 12.4136 12.1353H11.8805C11.7381 12.1371 11.6004 12.085 11.4949 11.9894C11.3893 11.8939 11.3238 11.762 11.3115 11.6201C11.3065 11.5447 11.317 11.469 11.3425 11.3977C11.368 11.3265 11.4078 11.2613 11.4596 11.2061C11.5113 11.151 11.5739 11.107 11.6433 11.077C11.7127 11.0471 11.7876 11.0317 11.8632 11.0318H12.415C12.9914 11.0327 13.5595 10.8935 14.0702 10.6263C14.6751 10.3113 15.1776 9.83031 15.5188 9.23982C15.8601 8.64933 16.0258 7.97379 15.9967 7.29242C15.9676 6.61106 15.7449 5.95211 15.3545 5.39287C14.9642 4.83362 14.4225 4.39726 13.793 4.13496ZM12.9654 6.61784H12.6895C12.031 6.61783 11.3995 6.35625 10.9338 5.89062C10.4682 5.42499 10.2066 4.79346 10.2066 4.13496V3.85909C10.2066 3.71275 10.2647 3.57241 10.3682 3.46894C10.4717 3.36547 10.612 3.30734 10.7584 3.30734C10.9047 3.30734 11.045 3.36547 11.1485 3.46894C11.252 3.57241 11.3101 3.71275 11.3101 3.85909V4.13496C11.3101 4.3161 11.3458 4.49547 11.4151 4.66283C11.4844 4.83018 11.586 4.98224 11.7141 5.11033C11.9728 5.36901 12.3237 5.51434 12.6895 5.51434H12.9654C13.1117 5.51434 13.252 5.57247 13.3555 5.67594C13.459 5.77941 13.5171 5.91975 13.5171 6.06608C13.5171 6.21242 13.459 6.35276 13.3555 6.45623C13.252 6.5597 13.1117 6.61784 12.9654 6.61784ZM5.24087 0.824463C4.43632 0.825376 3.66498 1.14539 3.09607 1.71429C2.52717 2.2832 2.20716 3.05453 2.20625 3.85909V4.13496C1.57679 4.3974 1.03521 4.83388 0.645014 5.3932C0.254821 5.95252 0.0321923 6.6115 0.0032352 7.29287C-0.0257219 7.97423 0.140193 8.64972 0.481524 9.24013C0.822855 9.83054 1.32545 10.3114 1.93037 10.6263C2.44113 10.8935 3.00917 11.0327 3.58562 11.0318H4.11875C4.26133 11.0297 4.39942 11.0817 4.50524 11.1773C4.61106 11.2729 4.67676 11.405 4.68912 11.547C4.69413 11.6225 4.68357 11.6982 4.65809 11.7694C4.63262 11.8406 4.59277 11.9059 4.54103 11.961C4.48929 12.0162 4.42675 12.0601 4.35731 12.0901C4.28787 12.1201 4.21301 12.1355 4.13737 12.1353H3.58562C3.23255 12.1355 2.88062 12.0955 2.53661 12.016C2.48668 12.0051 2.43471 12.0083 2.38649 12.0252C2.33828 12.0421 2.2957 12.0721 2.26352 12.1118C2.23134 12.1515 2.21081 12.1993 2.20423 12.25C2.19765 12.3007 2.20527 12.3522 2.22625 12.3988C2.43573 12.8619 2.74919 13.2705 3.14228 13.5928C3.53536 13.9151 3.99747 14.1424 4.49268 14.257C4.9879 14.3716 5.50288 14.3705 5.99759 14.2537C6.49231 14.137 6.95342 13.9077 7.3451 13.5837C7.37724 13.5578 7.40315 13.525 7.42094 13.4878C7.43872 13.4505 7.44792 13.4098 7.44787 13.3685V11.0318C7.44787 10.4465 7.21535 9.88514 6.80145 9.47125C6.38756 9.05736 5.8262 8.82483 5.24087 8.82483C5.16591 8.82494 5.09171 8.80976 5.02281 8.78024C4.95391 8.75072 4.89175 8.70747 4.84011 8.65313C4.78848 8.59878 4.74846 8.53449 4.7225 8.46417C4.69654 8.39385 4.68518 8.31897 4.68912 8.24412C4.69968 8.10009 4.76507 7.9656 4.87182 7.86835C4.97858 7.77109 5.11856 7.71848 5.26294 7.72133C5.88616 7.72461 6.49562 7.90496 7.02026 8.24136C7.0618 8.26871 7.10997 8.28433 7.15965 8.28656C7.20934 8.28878 7.25871 8.27753 7.30253 8.254C7.34635 8.23046 7.38299 8.19552 7.40857 8.15286C7.43416 8.11021 7.44774 8.06143 7.44787 8.01169V1.89279C7.44811 1.82037 7.41987 1.75076 7.36924 1.69899C6.80273 1.13843 6.03784 0.824143 5.24087 0.824463ZM5.79262 4.13496C5.79262 4.79346 5.53103 5.42499 5.0654 5.89062C4.59977 6.35625 3.96824 6.61783 3.30974 6.61784H3.03387C2.88754 6.61784 2.7472 6.5597 2.64372 6.45623C2.54025 6.35276 2.48212 6.21242 2.48212 6.06608C2.48212 5.91975 2.54025 5.77941 2.64372 5.67594C2.7472 5.57247 2.88754 5.51434 3.03387 5.51434H3.30974C3.49089 5.51434 3.67026 5.47866 3.83761 5.40934C4.00496 5.34002 4.15702 5.23841 4.28511 5.11033C4.4132 4.98224 4.5148 4.83018 4.58412 4.66283C4.65344 4.49547 4.68912 4.3161 4.68912 4.13496V3.85909C4.68912 3.71275 4.74725 3.57241 4.85072 3.46894C4.9542 3.36547 5.09454 3.30734 5.24087 3.30734C5.3872 3.30734 5.52754 3.36547 5.63101 3.46894C5.73449 3.57241 5.79262 3.71275 5.79262 3.85909V4.13496Z"
      fill="black"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'w-[44px]  h-[44px] bg-white bg-opacity-[36%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-black"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                       <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="14" height="15"
                            viewBox="0 0 14 15" fill="none">
  <path
      d="M14 7C13.9979 5.14414 13.2597 3.36491 11.9474 2.05261C10.6351 0.740322 8.85586 0.00213768 7 0C5.14414 0.00213768 3.36491 0.740322 2.05261 2.05261C0.740322 3.36491 0.00213768 5.14414 0 7C0.000182759 7.08354 0.0197993 7.16589 0.0572982 7.24053C0.0947971 7.31518 0.14915 7.38008 0.216058 7.4301L6.46154 12.1154V13.4615H5.92308C5.78027 13.4615 5.64331 13.5183 5.54233 13.6193C5.44135 13.7202 5.38462 13.8572 5.38462 14C5.38462 14.1428 5.44135 14.2798 5.54233 14.3808C5.64331 14.4817 5.78027 14.5385 5.92308 14.5385H8.07692C8.21973 14.5385 8.35669 14.4817 8.45767 14.3808C8.55865 14.2798 8.61539 14.1428 8.61539 14C8.61539 13.8572 8.55865 13.7202 8.45767 13.6193C8.35669 13.5183 8.21973 13.4615 8.07692 13.4615H7.53846V12.1154L13.7846 7.43077C13.8515 7.38061 13.9058 7.31558 13.9432 7.24081C13.9805 7.16604 14 7.08359 14 7ZM12.8988 6.46154H10.2193C10.1157 3.90721 9.28308 2.25952 8.52923 1.27885C9.69948 1.59348 10.7454 2.25871 11.5265 3.18517C12.3076 4.11163 12.7865 5.25495 12.8988 6.46154ZM8.77692 7.53846L7 10.7376L5.22308 7.53846H8.77692ZM3.99067 7.53846L5.30317 9.90029L2.15385 7.53846H3.99067ZM10.0093 7.53846H11.8462L8.69683 9.90029L10.0093 7.53846ZM5.47077 1.27885C4.71692 2.25952 3.88433 3.90721 3.78067 6.46154H1.10115C1.21348 5.25495 1.69236 4.11163 2.47347 3.18517C3.25459 2.25871 4.30052 1.59348 5.47077 1.27885Z"
      fill="black"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'flex mt-[10px] right-[-600px] absolute flex-row gap-[20px]'}>
                        <div
                            className={'w-[44px]  h-[44px] bg-white border-[1px] border-[rgba(255,255,255,0.1)] bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-white"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white bg-opacity-[8%] w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                           <svg className={'w-[12px] h-[12px] '} xmlns="http://www.w3.org/2000/svg" width="13"
                                height="13" viewBox="0 0 13 13"
                                fill="none">
  <path
      d="M11.9337 1.07212C10.6714 -0.352861 8.62162 -0.352861 7.35927 1.07212L6.5 2.03678L5.64073 1.06874C4.37526 -0.356246 2.32863 -0.356246 1.06628 1.06874C-0.355426 2.66973 -0.355426 5.26922 1.06628 6.87021L6.5 13L11.9337 6.87359C13.3554 5.2726 13.3554 2.67311 11.9337 1.07212Z"
      fill="white"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'w-[44px]  h-[44px] bg-white border-[1px] border-[rgba(255,255,255,0.1)] bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-white"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white bg-opacity-[8%] w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
       <svg className={'w-[12px] h-[12px] '} xmlns="http://www.w3.org/2000/svg" width="14"
            height="16" viewBox="0 0 14 16"
            fill="none">
  <path
      d="M6.605 15.0444C10.2377 15.0444 13.21 12.5057 13.21 9.40277C13.21 6.29985 6.605 1.34807e-09 6.605 1.34807e-09C6.605 1.34807e-09 -1.30498e-09 6.39388 -1.91909e-09 9.40277C-2.53319e-09 12.4117 2.97225 15.0444 6.605 15.0444Z"
      fill="white"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'w-[44px]  h-[44px] bg-white border-[1px] border-[rgba(255,255,255,0.1)] bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-white"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] bg-opacity-[8%] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                         <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="15" height="14"
                              viewBox="0 0 15 14" fill="none">
  <path
      d="M1.28698 4.86633C1.1878 4.74432 1.11725 4.60162 1.08051 4.44874C1.04377 4.29585 1.04177 4.13668 1.07467 3.98293C1.56304 1.67451 4.20668 -0.00158691 7.36169 -0.00158692C10.5167 -0.00158692 13.1603 1.67451 13.6487 3.98293C13.682 4.13679 13.6802 4.29616 13.6437 4.44928C13.6071 4.6024 13.5367 4.74536 13.4375 4.86761C13.3384 4.98987 13.213 5.0883 13.0707 5.15565C12.9284 5.22301 12.7728 5.25756 12.6154 5.25676L2.10794 5.25676C1.95061 5.25723 1.79518 5.2224 1.65309 5.15483C1.51101 5.08726 1.3859 4.98867 1.28698 4.86633ZM14.0174 8.44332L11.314 9.42926L8.87346 8.44923C8.74814 8.39913 8.60835 8.39913 8.48303 8.44923L6.05104 9.42269L3.61511 8.44923C3.49519 8.40132 3.36183 8.39922 3.24046 8.44332L0.348365 9.49499C0.226133 9.54879 0.128952 9.64709 0.0765474 9.76993C0.0241432 9.89277 0.0204426 10.0309 0.0661966 10.1564C0.111951 10.2819 0.203731 10.3852 0.322909 10.4455C0.442086 10.5058 0.579731 10.5184 0.707905 10.4809L1.5775 10.1661L1.5775 10.5151C1.5775 11.2124 1.85451 11.8811 2.34757 12.3742C2.84064 12.8673 3.50938 13.1443 4.20668 13.1443L10.5167 13.1443C11.214 13.1443 11.8827 12.8673 12.3758 12.3742C12.8689 11.8811 13.1459 11.2124 13.1459 10.5151L13.1459 9.8795L14.377 9.43189C14.446 9.41168 14.5102 9.37753 14.5655 9.33154C14.6208 9.28556 14.6661 9.22871 14.6985 9.16452C14.731 9.10033 14.7499 9.03017 14.7542 8.95836C14.7585 8.88656 14.7479 8.81465 14.7233 8.74707C14.6987 8.67949 14.6604 8.61769 14.6109 8.56549C14.5614 8.51328 14.5018 8.47178 14.4356 8.44356C14.3695 8.41533 14.2982 8.40098 14.2263 8.40139C14.1544 8.4018 14.0833 8.41697 14.0174 8.44595L14.0174 8.44332ZM0.525835 7.3601L14.1975 7.3601C14.337 7.3601 14.4707 7.3047 14.5694 7.20609C14.668 7.10747 14.7234 6.97372 14.7234 6.83426C14.7234 6.6948 14.668 6.56106 14.5694 6.46244C14.4707 6.36383 14.337 6.30843 14.1975 6.30843L0.525835 6.30843C0.386375 6.30843 0.252627 6.36383 0.154013 6.46244C0.0554003 6.56106 1.36672e-09 6.6948 1.39518e-09 6.83426C1.42365e-09 6.97372 0.0554003 7.10747 0.154013 7.20609C0.252627 7.3047 0.386375 7.3601 0.525835 7.3601Z"
      fill="white"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'w-[44px]  h-[44px] bg-white border-[1px] border-[rgba(255,255,255,0.1)] bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-opacity-[8%] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-white"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white bg-opacity-[8%] w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                            <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="13"
                                 height="17" viewBox="0 0 13 17"
                                 fill="none">
  <path
      d="M5.39985 16.8354C5.3118 16.8353 5.22445 16.8199 5.14168 16.7899C4.98204 16.7314 4.84662 16.6211 4.75714 16.4765C4.66765 16.3319 4.62926 16.1615 4.64813 15.9926L5.2328 10.6091H0.760457C0.622513 10.6093 0.487118 10.5719 0.368815 10.501C0.250511 10.43 0.153767 10.3282 0.0889742 10.2064C0.0241811 10.0846 -0.0062133 9.94749 0.00105493 9.80974C0.00832316 9.67199 0.0529796 9.53882 0.130228 9.42453L6.12119 0.464664C6.21595 0.324448 6.35482 0.219903 6.51578 0.167628C6.67673 0.115353 6.85053 0.118344 7.00959 0.176126C7.1625 0.232894 7.29306 0.337391 7.38196 0.474148C7.47085 0.610904 7.51334 0.772649 7.50314 0.935437L6.91847 6.35692H11.3908C11.5288 6.35671 11.6642 6.39408 11.7825 6.46502C11.9008 6.53597 11.9975 6.63779 12.0623 6.75957C12.1271 6.88135 12.1575 7.01848 12.1502 7.15624C12.1429 7.29399 12.0983 7.42716 12.021 7.54144L6.03008 16.5013C5.96043 16.6044 5.86653 16.6887 5.75664 16.747C5.64675 16.8052 5.52423 16.8356 5.39985 16.8354Z"
      fill="white"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'w-[44px]  h-[44px] bg-white border-[1px] border-[rgba(255,255,255,0.1)] bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-opacity-[8%] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-white"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white w-[35px] bg-opacity-[8%] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                           <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="14"
                                height="15" viewBox="0 0 14 15"
                                fill="none">
  <path
      d="M13.881 2.46334L13.6017 2.44185C10.4215 2.19321 7.14005 0.124261 7.10934 0.105844L6.94358 -0.00158691L6.77783 0.105844C6.74712 0.124261 3.46565 2.19321 0.285482 2.44185L0.00615065 2.46334L5.32926e-06 2.74269C5.32926e-06 2.82251 -0.0399022 10.6839 6.78703 14.7481L6.94358 14.8402L7.10014 14.7481C13.9271 10.6839 13.8872 2.82251 13.8872 2.74269L13.881 2.46334Z"
      fill="white"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'w-[44px]  h-[44px] bg-white border-[1px] border-[rgba(255,255,255,0.1)] bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-opacity-[8%] bg-white flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-white"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white bg-opacity-[8%] w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                         <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                              viewBox="0 0 16 15" fill="none">
  <path
      d="M13.793 4.13496V3.85909C13.7923 3.2613 13.615 2.67704 13.2834 2.17963C12.9519 1.68222 12.4808 1.29381 11.9293 1.06315C11.3778 0.832486 10.7705 0.769846 10.1835 0.883088C9.59654 0.99633 9.0561 1.28041 8.62999 1.69968C8.60479 1.72508 8.58486 1.75522 8.57137 1.78837C8.55787 1.82151 8.55107 1.857 8.55137 1.89279V8.01169C8.5515 8.06143 8.56508 8.11021 8.59066 8.15286C8.61625 8.19552 8.65289 8.23046 8.69671 8.254C8.74052 8.27753 8.78989 8.28878 8.83958 8.28656C8.88927 8.28433 8.93743 8.26871 8.97897 8.24136C9.50362 7.90496 10.1131 7.72461 10.7363 7.72133C10.8806 7.71865 11.0204 7.77135 11.127 7.86859C11.2336 7.96583 11.2989 8.10021 11.3094 8.24412C11.3134 8.31897 11.302 8.39385 11.276 8.46417C11.2501 8.53449 11.2101 8.59878 11.1584 8.65313C11.1068 8.70747 11.0446 8.75072 10.9757 8.78024C10.9068 8.80976 10.8326 8.82494 10.7577 8.82483C10.1723 8.82483 9.61098 9.05736 9.19709 9.47125C8.7832 9.88514 8.55068 10.4465 8.55068 11.0318V13.3685C8.55062 13.4098 8.55982 13.4505 8.57761 13.4878C8.59539 13.525 8.62131 13.5578 8.65344 13.5837C9.04497 13.9077 9.50595 14.1371 10.0005 14.2539C10.4951 14.3708 11.01 14.3721 11.5052 14.2576C12.0003 14.1431 12.4624 13.9159 12.8555 13.5938C13.2486 13.2716 13.5621 12.8632 13.7716 12.4002C13.7927 12.3536 13.8004 12.3021 13.794 12.2514C13.7875 12.2007 13.7671 12.1528 13.7349 12.113C13.7028 12.0732 13.6603 12.0432 13.6121 12.0262C13.5639 12.0092 13.5119 12.0059 13.4619 12.0167C13.1181 12.0955 12.7664 12.1353 12.4136 12.1353H11.8805C11.7381 12.1371 11.6004 12.085 11.4949 11.9894C11.3893 11.8939 11.3238 11.762 11.3115 11.6201C11.3065 11.5447 11.317 11.469 11.3425 11.3977C11.368 11.3265 11.4078 11.2613 11.4596 11.2061C11.5113 11.151 11.5739 11.107 11.6433 11.077C11.7127 11.0471 11.7876 11.0317 11.8632 11.0318H12.415C12.9914 11.0327 13.5595 10.8935 14.0702 10.6263C14.6751 10.3113 15.1776 9.83031 15.5188 9.23982C15.8601 8.64933 16.0258 7.97379 15.9967 7.29242C15.9676 6.61106 15.7449 5.95211 15.3545 5.39287C14.9642 4.83362 14.4225 4.39726 13.793 4.13496ZM12.9654 6.61784H12.6895C12.031 6.61783 11.3995 6.35625 10.9338 5.89062C10.4682 5.42499 10.2066 4.79346 10.2066 4.13496V3.85909C10.2066 3.71275 10.2647 3.57241 10.3682 3.46894C10.4717 3.36547 10.612 3.30734 10.7584 3.30734C10.9047 3.30734 11.045 3.36547 11.1485 3.46894C11.252 3.57241 11.3101 3.71275 11.3101 3.85909V4.13496C11.3101 4.3161 11.3458 4.49547 11.4151 4.66283C11.4844 4.83018 11.586 4.98224 11.7141 5.11033C11.9728 5.36901 12.3237 5.51434 12.6895 5.51434H12.9654C13.1117 5.51434 13.252 5.57247 13.3555 5.67594C13.459 5.77941 13.5171 5.91975 13.5171 6.06608C13.5171 6.21242 13.459 6.35276 13.3555 6.45623C13.252 6.5597 13.1117 6.61784 12.9654 6.61784ZM5.24087 0.824463C4.43632 0.825376 3.66498 1.14539 3.09607 1.71429C2.52717 2.2832 2.20716 3.05453 2.20625 3.85909V4.13496C1.57679 4.3974 1.03521 4.83388 0.645014 5.3932C0.254821 5.95252 0.0321923 6.6115 0.0032352 7.29287C-0.0257219 7.97423 0.140193 8.64972 0.481524 9.24013C0.822855 9.83054 1.32545 10.3114 1.93037 10.6263C2.44113 10.8935 3.00917 11.0327 3.58562 11.0318H4.11875C4.26133 11.0297 4.39942 11.0817 4.50524 11.1773C4.61106 11.2729 4.67676 11.405 4.68912 11.547C4.69413 11.6225 4.68357 11.6982 4.65809 11.7694C4.63262 11.8406 4.59277 11.9059 4.54103 11.961C4.48929 12.0162 4.42675 12.0601 4.35731 12.0901C4.28787 12.1201 4.21301 12.1355 4.13737 12.1353H3.58562C3.23255 12.1355 2.88062 12.0955 2.53661 12.016C2.48668 12.0051 2.43471 12.0083 2.38649 12.0252C2.33828 12.0421 2.2957 12.0721 2.26352 12.1118C2.23134 12.1515 2.21081 12.1993 2.20423 12.25C2.19765 12.3007 2.20527 12.3522 2.22625 12.3988C2.43573 12.8619 2.74919 13.2705 3.14228 13.5928C3.53536 13.9151 3.99747 14.1424 4.49268 14.257C4.9879 14.3716 5.50288 14.3705 5.99759 14.2537C6.49231 14.137 6.95342 13.9077 7.3451 13.5837C7.37724 13.5578 7.40315 13.525 7.42094 13.4878C7.43872 13.4505 7.44792 13.4098 7.44787 13.3685V11.0318C7.44787 10.4465 7.21535 9.88514 6.80145 9.47125C6.38756 9.05736 5.8262 8.82483 5.24087 8.82483C5.16591 8.82494 5.09171 8.80976 5.02281 8.78024C4.95391 8.75072 4.89175 8.70747 4.84011 8.65313C4.78848 8.59878 4.74846 8.53449 4.7225 8.46417C4.69654 8.39385 4.68518 8.31897 4.68912 8.24412C4.69968 8.10009 4.76507 7.9656 4.87182 7.86835C4.97858 7.77109 5.11856 7.71848 5.26294 7.72133C5.88616 7.72461 6.49562 7.90496 7.02026 8.24136C7.0618 8.26871 7.10997 8.28433 7.15965 8.28656C7.20934 8.28878 7.25871 8.27753 7.30253 8.254C7.34635 8.23046 7.38299 8.19552 7.40857 8.15286C7.43416 8.11021 7.44774 8.06143 7.44787 8.01169V1.89279C7.44811 1.82037 7.41987 1.75076 7.36924 1.69899C6.80273 1.13843 6.03784 0.824143 5.24087 0.824463ZM5.79262 4.13496C5.79262 4.79346 5.53103 5.42499 5.0654 5.89062C4.59977 6.35625 3.96824 6.61783 3.30974 6.61784H3.03387C2.88754 6.61784 2.7472 6.5597 2.64372 6.45623C2.54025 6.35276 2.48212 6.21242 2.48212 6.06608C2.48212 5.91975 2.54025 5.77941 2.64372 5.67594C2.7472 5.57247 2.88754 5.51434 3.03387 5.51434H3.30974C3.49089 5.51434 3.67026 5.47866 3.83761 5.40934C4.00496 5.34002 4.15702 5.23841 4.28511 5.11033C4.4132 4.98224 4.5148 4.83018 4.58412 4.66283C4.65344 4.49547 4.68912 4.3161 4.68912 4.13496V3.85909C4.68912 3.71275 4.74725 3.57241 4.85072 3.46894C4.9542 3.36547 5.09454 3.30734 5.24087 3.30734C5.3872 3.30734 5.52754 3.36547 5.63101 3.46894C5.73449 3.57241 5.79262 3.71275 5.79262 3.85909V4.13496Z"
      fill="white"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'w-[44px]  h-[44px] bg-white  border-[1px] border-[rgba(255,255,255,0.1)] bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                            <div
                                className={'w-[41px]  h-[41px] bg-white bg-opacity-[8%] flex justify-center items-center rounded-[50%]'}>
                                <div className="relative w-[40px] h-[40px] flex justify-center items-center">
                                    <svg className="absolute size-full z-20" width="40" height="40"
                                         viewBox="0 0 36 36"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none"
                                                className="stroke-current text-[#8D8D8D]"
                                                stroke-width="0.5"></circle>
                                        <g className="origin-center -rotate-90 transform">
                                            <circle cx="18" cy="17.7" r="15.9" fill="none"
                                                    className="stroke-current text-white"
                                                    stroke-width="2" stroke-dasharray="100"
                                                    stroke-dashoffset="80"></circle>
                                        </g>
                                    </svg>
                                    <div
                                        className="bg-white bg-opacity-[8%] w-[35px] h-[35px] rounded-[50%] flex justify-center top-0 bottom-0 items-center transform ">
                        <span
                            className="text-center flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-white">
                       <svg className={'w-[12px] h-[12px]'} xmlns="http://www.w3.org/2000/svg" width="14" height="15"
                            viewBox="0 0 14 15" fill="none">
  <path
      d="M14 7C13.9979 5.14414 13.2597 3.36491 11.9474 2.05261C10.6351 0.740322 8.85586 0.00213768 7 0C5.14414 0.00213768 3.36491 0.740322 2.05261 2.05261C0.740322 3.36491 0.00213768 5.14414 0 7C0.000182759 7.08354 0.0197993 7.16589 0.0572982 7.24053C0.0947971 7.31518 0.14915 7.38008 0.216058 7.4301L6.46154 12.1154V13.4615H5.92308C5.78027 13.4615 5.64331 13.5183 5.54233 13.6193C5.44135 13.7202 5.38462 13.8572 5.38462 14C5.38462 14.1428 5.44135 14.2798 5.54233 14.3808C5.64331 14.4817 5.78027 14.5385 5.92308 14.5385H8.07692C8.21973 14.5385 8.35669 14.4817 8.45767 14.3808C8.55865 14.2798 8.61539 14.1428 8.61539 14C8.61539 13.8572 8.55865 13.7202 8.45767 13.6193C8.35669 13.5183 8.21973 13.4615 8.07692 13.4615H7.53846V12.1154L13.7846 7.43077C13.8515 7.38061 13.9058 7.31558 13.9432 7.24081C13.9805 7.16604 14 7.08359 14 7ZM12.8988 6.46154H10.2193C10.1157 3.90721 9.28308 2.25952 8.52923 1.27885C9.69948 1.59348 10.7454 2.25871 11.5265 3.18517C12.3076 4.11163 12.7865 5.25495 12.8988 6.46154ZM8.77692 7.53846L7 10.7376L5.22308 7.53846H8.77692ZM3.99067 7.53846L5.30317 9.90029L2.15385 7.53846H3.99067ZM10.0093 7.53846H11.8462L8.69683 9.90029L10.0093 7.53846ZM5.47077 1.27885C4.71692 2.25952 3.88433 3.90721 3.78067 6.46154H1.10115C1.21348 5.25495 1.69236 4.11163 2.47347 3.18517C3.25459 2.25871 4.30052 1.59348 5.47077 1.27885Z"
      fill="white"/>
</svg>
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*<div className={'mt-[5px] gap-[10px] flex flex-row'}>*/}
                {/*    <div*/}
                {/*        className={'w-[48px] relative flex justify-center items-center h-[48px] rounded-[1px] bg-[#56D6FF]'}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"*/}
                {/*             fill="none">*/}
                {/*            <path*/}
                {/*                d="M1.29584 0.935921C2.48956 -0.308034 4.42788 -0.308034 5.62161 0.935921L6.43417 1.77803L7.24673 0.932966C8.44341 -0.310989 10.3788 -0.310989 11.5725 0.932966C12.9169 2.33057 12.9169 4.59982 11.5725 5.99743L6.43417 11.3485L1.29584 6.00038C-0.0485792 4.60278 -0.0485792 2.33352 1.29584 0.935921Z"*/}
                {/*                fill="black"/>*/}
                {/*        </svg>*/}

                {/*        <div className={'w-[41px] absolute bottom-[3px] left-[3px]'}>*/}
                {/*            <div*/}
                {/*                className={'w-[100%] rounded-[1px] bg-black h-[5px]'}>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div*/}
                {/*        className={'w-[48px] relative flex justify-center items-center h-[48px] rounded-[1px] bg-[#56FFAE]'}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"*/}
                {/*             fill="none">*/}
                {/*            <path*/}
                {/*                d="M1.29584 0.935921C2.48956 -0.308034 4.42788 -0.308034 5.62161 0.935921L6.43417 1.77803L7.24673 0.932966C8.44341 -0.310989 10.3788 -0.310989 11.5725 0.932966C12.9169 2.33057 12.9169 4.59982 11.5725 5.99743L6.43417 11.3485L1.29584 6.00038C-0.0485792 4.60278 -0.0485792 2.33352 1.29584 0.935921Z"*/}
                {/*                fill="black"/>*/}
                {/*        </svg>*/}

                {/*        <div className={'w-[41px] absolute bottom-[3px] left-[3px]'}>*/}
                {/*            <div*/}
                {/*                className={'w-[30%] rounded-[1px] bg-black h-[5px]'}>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div*/}
                {/*        className={'w-[48px] relative flex justify-center items-center h-[48px] rounded-[1px] bg-[#FFBB56]'}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"*/}
                {/*             fill="none">*/}
                {/*            <path*/}
                {/*                d="M1.29584 0.935921C2.48956 -0.308034 4.42788 -0.308034 5.62161 0.935921L6.43417 1.77803L7.24673 0.932966C8.44341 -0.310989 10.3788 -0.310989 11.5725 0.932966C12.9169 2.33057 12.9169 4.59982 11.5725 5.99743L6.43417 11.3485L1.29584 6.00038C-0.0485792 4.60278 -0.0485792 2.33352 1.29584 0.935921Z"*/}
                {/*                fill="black"/>*/}
                {/*        </svg>*/}

                {/*        <div className={'w-[41px] absolute bottom-[3px] left-[3px]'}>*/}
                {/*            <div*/}
                {/*                className={'w-[100%] rounded-[1px] bg-black h-[5px]'}>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div*/}
                {/*        className={'w-[48px] relative flex justify-center items-center h-[48px] rounded-[1px] bg-[#FF5674]'}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"*/}
                {/*             fill="none">*/}
                {/*            <path*/}
                {/*                d="M1.29584 0.935921C2.48956 -0.308034 4.42788 -0.308034 5.62161 0.935921L6.43417 1.77803L7.24673 0.932966C8.44341 -0.310989 10.3788 -0.310989 11.5725 0.932966C12.9169 2.33057 12.9169 4.59982 11.5725 5.99743L6.43417 11.3485L1.29584 6.00038C-0.0485792 4.60278 -0.0485792 2.33352 1.29584 0.935921Z"*/}
                {/*                fill="black"/>*/}
                {/*        </svg>*/}

                {/*        <div className={'w-[41px] absolute bottom-[3px] left-[3px]'}>*/}
                {/*            <div*/}
                {/*                className={'w-[100%] rounded-[1px] bg-black h-[5px]'}>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div*/}
                {/*        className={'w-[48px] relative flex justify-center items-center h-[48px] rounded-[1px] bg-[#D8D8D8]'}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"*/}
                {/*             fill="none">*/}
                {/*            <path*/}
                {/*                d="M1.29584 0.935921C2.48956 -0.308034 4.42788 -0.308034 5.62161 0.935921L6.43417 1.77803L7.24673 0.932966C8.44341 -0.310989 10.3788 -0.310989 11.5725 0.932966C12.9169 2.33057 12.9169 4.59982 11.5725 5.99743L6.43417 11.3485L1.29584 6.00038C-0.0485792 4.60278 -0.0485792 2.33352 1.29584 0.935921Z"*/}
                {/*                fill="black"/>*/}
                {/*        </svg>*/}

                {/*        <div className={'w-[41px] absolute bottom-[3px] left-[3px]'}>*/}
                {/*            <div*/}
                {/*                className={'w-[100%] rounded-[1px] bg-black h-[5px]'}>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div*/}
                {/*        className={'w-[48px] relative flex justify-center items-center h-[48px] rounded-[1px] bg-[#D8D8D8]'}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"*/}
                {/*             fill="none">*/}
                {/*            <path*/}
                {/*                d="M1.29584 0.935921C2.48956 -0.308034 4.42788 -0.308034 5.62161 0.935921L6.43417 1.77803L7.24673 0.932966C8.44341 -0.310989 10.3788 -0.310989 11.5725 0.932966C12.9169 2.33057 12.9169 4.59982 11.5725 5.99743L6.43417 11.3485L1.29584 6.00038C-0.0485792 4.60278 -0.0485792 2.33352 1.29584 0.935921Z"*/}
                {/*                fill="black"/>*/}
                {/*        </svg>*/}

                {/*        <div className={'w-[41px] absolute bottom-[3px] left-[3px]'}>*/}
                {/*            <div*/}
                {/*                className={'w-[100%] rounded-[1px] bg-black h-[5px]'}>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>
        </div>
    );
};

export default Hud2;
