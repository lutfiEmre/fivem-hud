import React from 'react';
import speedos1 from '../img/speedos/speedo1.svg'
import speedos1a from '../img/speedos/speedo1a.svg'

const Speedometer2 = () => {
    return (
        <div className={'absolute right-[50px] bottom-[50px] w-fit'}>
            <div className={'flex flex-col'}>
                <div className={'flex flex-row items-center gap-[8px]'}>
                    <h1 className={'michroma-regular text-white text-[56px]'}>
                        <span className={'opacity-35 michroma-regular'}>0</span>45
                    </h1>
                    <div className={'flex flex-col mt-3 gap-[5px]'}>
                        <div className={'flex flex-row gap-[5px]'}>
                            <div
                                className={'bg-[#D6D6D6] flex justify-center items-center w-[24px] h-[24px] rounded-[2px] bg-opacity-25'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"
                                     viewBox="0 0 13 16"
                                     fill="none">
                                    <path
                                        d="M11.2863 9.02995C11.4108 8.61738 11.1695 8.18146 10.7569 8.0647C10.6791 8.04135 10.609 8.01799 10.5312 8.00243C10.5234 7.30963 10.3833 6.64018 10.1264 6.03301L5.89956 9.0533C7.38635 8.96767 8.88092 9.13114 10.321 9.55927C10.7336 9.67604 11.1695 9.44251 11.2863 9.02995ZM8.02567 15.1527C8.08265 15.1656 8.14041 15.1717 8.19669 15.1717C8.55321 15.1717 8.874 14.9262 8.95534 14.5635L9.73377 11.0941C9.81893 10.714 9.61062 10.3301 9.2457 10.194C7.56414 9.56916 5.71391 9.56916 4.03235 10.194C3.66743 10.3301 3.4592 10.714 3.54428 11.0941L4.3227 14.5635C4.41697 14.9839 4.83506 15.2485 5.25238 15.1526C5.67203 15.0584 5.93576 14.6425 5.84149 14.223L5.22038 11.4529C6.15691 11.2187 7.12083 11.2187 8.05735 11.4529L7.43625 14.223C7.34221 14.6426 7.60602 15.0585 8.02567 15.1527ZM0.559569 10.9527C0.707469 11.1628 0.948781 11.2796 1.19009 11.2796C1.34578 11.2796 1.50925 11.2329 1.64158 11.1317L12.5395 3.34745C12.8898 3.09835 12.9677 2.61573 12.7186 2.26544C12.4695 1.91515 11.9868 1.83731 11.6365 2.0864L8.6941 4.18815C8.64024 4.14681 8.58263 4.11451 8.52705 4.07722C8.80534 3.69284 8.97434 3.225 8.97434 2.71693C8.97434 1.43253 7.92346 0.381653 6.63906 0.381653C5.35466 0.381653 4.30379 1.43253 4.30379 2.71693C4.30379 3.22742 4.47465 3.69704 4.75535 4.08244C3.70985 4.76838 2.95315 5.99495 2.78586 7.44974C2.76251 7.62878 2.74694 7.8156 2.74694 8.00243C2.6691 8.01799 2.59904 8.04135 2.5212 8.0647C2.1242 8.17368 1.88289 8.58624 1.98408 8.98324L0.738606 9.87064C0.388315 10.1197 0.310473 10.6024 0.559569 10.9527Z"
                                        fill="#D6D6D6"/>
                                </svg>
                            </div>
                            <div
                                className={'bg-[#D6D6D6] flex justify-center items-center w-[24px] h-[24px] rounded-[2px] bg-opacity-25'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"
                                     viewBox="0 0 13 16"
                                     fill="none">
                                    <path
                                        d="M11.2863 9.02995C11.4108 8.61738 11.1695 8.18146 10.7569 8.0647C10.6791 8.04135 10.609 8.01799 10.5312 8.00243C10.5234 7.30963 10.3833 6.64018 10.1264 6.03301L5.89956 9.0533C7.38635 8.96767 8.88092 9.13114 10.321 9.55927C10.7336 9.67604 11.1695 9.44251 11.2863 9.02995ZM8.02567 15.1527C8.08265 15.1656 8.14041 15.1717 8.19669 15.1717C8.55321 15.1717 8.874 14.9262 8.95534 14.5635L9.73377 11.0941C9.81893 10.714 9.61062 10.3301 9.2457 10.194C7.56414 9.56916 5.71391 9.56916 4.03235 10.194C3.66743 10.3301 3.4592 10.714 3.54428 11.0941L4.3227 14.5635C4.41697 14.9839 4.83506 15.2485 5.25238 15.1526C5.67203 15.0584 5.93576 14.6425 5.84149 14.223L5.22038 11.4529C6.15691 11.2187 7.12083 11.2187 8.05735 11.4529L7.43625 14.223C7.34221 14.6426 7.60602 15.0585 8.02567 15.1527ZM0.559569 10.9527C0.707469 11.1628 0.948781 11.2796 1.19009 11.2796C1.34578 11.2796 1.50925 11.2329 1.64158 11.1317L12.5395 3.34745C12.8898 3.09835 12.9677 2.61573 12.7186 2.26544C12.4695 1.91515 11.9868 1.83731 11.6365 2.0864L8.6941 4.18815C8.64024 4.14681 8.58263 4.11451 8.52705 4.07722C8.80534 3.69284 8.97434 3.225 8.97434 2.71693C8.97434 1.43253 7.92346 0.381653 6.63906 0.381653C5.35466 0.381653 4.30379 1.43253 4.30379 2.71693C4.30379 3.22742 4.47465 3.69704 4.75535 4.08244C3.70985 4.76838 2.95315 5.99495 2.78586 7.44974C2.76251 7.62878 2.74694 7.8156 2.74694 8.00243C2.6691 8.01799 2.59904 8.04135 2.5212 8.0647C2.1242 8.17368 1.88289 8.58624 1.98408 8.98324L0.738606 9.87064C0.388315 10.1197 0.310473 10.6024 0.559569 10.9527Z"
                                        fill="#D6D6D6"/>
                                </svg>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-[5px]'}>
                            <div
                                className={'bg-[#63DAFF] flex justify-center items-center w-[24px] h-[24px] rounded-[2px] bg-opacity-25'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"
                                     viewBox="0 0 13 16"
                                     fill="none">
                                    <path
                                        d="M11.2863 9.02995C11.4108 8.61738 11.1695 8.18146 10.7569 8.0647C10.6791 8.04135 10.609 8.01799 10.5312 8.00243C10.5234 7.30963 10.3833 6.64018 10.1264 6.03301L5.89956 9.0533C7.38635 8.96767 8.88092 9.13114 10.321 9.55927C10.7336 9.67604 11.1695 9.44251 11.2863 9.02995ZM8.02567 15.1527C8.08265 15.1656 8.14041 15.1717 8.19669 15.1717C8.55321 15.1717 8.874 14.9262 8.95534 14.5635L9.73377 11.0941C9.81893 10.714 9.61062 10.3301 9.2457 10.194C7.56414 9.56916 5.71391 9.56916 4.03235 10.194C3.66743 10.3301 3.4592 10.714 3.54428 11.0941L4.3227 14.5635C4.41697 14.9839 4.83506 15.2485 5.25238 15.1526C5.67203 15.0584 5.93576 14.6425 5.84149 14.223L5.22038 11.4529C6.15691 11.2187 7.12083 11.2187 8.05735 11.4529L7.43625 14.223C7.34221 14.6426 7.60602 15.0585 8.02567 15.1527ZM0.559569 10.9527C0.707469 11.1628 0.948781 11.2796 1.19009 11.2796C1.34578 11.2796 1.50925 11.2329 1.64158 11.1317L12.5395 3.34745C12.8898 3.09835 12.9677 2.61573 12.7186 2.26544C12.4695 1.91515 11.9868 1.83731 11.6365 2.0864L8.6941 4.18815C8.64024 4.14681 8.58263 4.11451 8.52705 4.07722C8.80534 3.69284 8.97434 3.225 8.97434 2.71693C8.97434 1.43253 7.92346 0.381653 6.63906 0.381653C5.35466 0.381653 4.30379 1.43253 4.30379 2.71693C4.30379 3.22742 4.47465 3.69704 4.75535 4.08244C3.70985 4.76838 2.95315 5.99495 2.78586 7.44974C2.76251 7.62878 2.74694 7.8156 2.74694 8.00243C2.6691 8.01799 2.59904 8.04135 2.5212 8.0647C2.1242 8.17368 1.88289 8.58624 1.98408 8.98324L0.738606 9.87064C0.388315 10.1197 0.310473 10.6024 0.559569 10.9527Z"
                                        fill="#63DAFF"/>
                                </svg>
                            </div>
                            <div
                                className={'bg-[#63DAFF] flex justify-center items-center w-[24px] h-[24px] rounded-[2px] bg-opacity-25'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"
                                     viewBox="0 0 13 16"
                                     fill="none">
                                    <path
                                        d="M11.2863 9.02995C11.4108 8.61738 11.1695 8.18146 10.7569 8.0647C10.6791 8.04135 10.609 8.01799 10.5312 8.00243C10.5234 7.30963 10.3833 6.64018 10.1264 6.03301L5.89956 9.0533C7.38635 8.96767 8.88092 9.13114 10.321 9.55927C10.7336 9.67604 11.1695 9.44251 11.2863 9.02995ZM8.02567 15.1527C8.08265 15.1656 8.14041 15.1717 8.19669 15.1717C8.55321 15.1717 8.874 14.9262 8.95534 14.5635L9.73377 11.0941C9.81893 10.714 9.61062 10.3301 9.2457 10.194C7.56414 9.56916 5.71391 9.56916 4.03235 10.194C3.66743 10.3301 3.4592 10.714 3.54428 11.0941L4.3227 14.5635C4.41697 14.9839 4.83506 15.2485 5.25238 15.1526C5.67203 15.0584 5.93576 14.6425 5.84149 14.223L5.22038 11.4529C6.15691 11.2187 7.12083 11.2187 8.05735 11.4529L7.43625 14.223C7.34221 14.6426 7.60602 15.0585 8.02567 15.1527ZM0.559569 10.9527C0.707469 11.1628 0.948781 11.2796 1.19009 11.2796C1.34578 11.2796 1.50925 11.2329 1.64158 11.1317L12.5395 3.34745C12.8898 3.09835 12.9677 2.61573 12.7186 2.26544C12.4695 1.91515 11.9868 1.83731 11.6365 2.0864L8.6941 4.18815C8.64024 4.14681 8.58263 4.11451 8.52705 4.07722C8.80534 3.69284 8.97434 3.225 8.97434 2.71693C8.97434 1.43253 7.92346 0.381653 6.63906 0.381653C5.35466 0.381653 4.30379 1.43253 4.30379 2.71693C4.30379 3.22742 4.47465 3.69704 4.75535 4.08244C3.70985 4.76838 2.95315 5.99495 2.78586 7.44974C2.76251 7.62878 2.74694 7.8156 2.74694 8.00243C2.6691 8.01799 2.59904 8.04135 2.5212 8.0647C2.1242 8.17368 1.88289 8.58624 1.98408 8.98324L0.738606 9.87064C0.388315 10.1197 0.310473 10.6024 0.559569 10.9527Z"
                                        fill="#63DAFF"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full h-full flex gap-[5px] flex-row'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17"
                         fill="none">
                        <path
                            d="M0.912325 0.180269C0.792444 0.18001 0.673693 0.20343 0.562887 0.249187C0.452082 0.294943 0.351405 0.362135 0.266636 0.446903C0.181867 0.531672 0.114676 0.632349 0.0689195 0.743155C0.023163 0.85396 -0.000257627 0.972712 2.13736e-06 1.09259V15.6885C2.13736e-06 16.1447 0.456054 16.6008 0.912325 16.6008H9.12258C9.57863 16.6008 10.0347 16.1447 10.0347 15.6885V11.1273H10.491C10.947 11.1273 10.947 11.5833 10.947 11.5833V13.408C10.947 14.3201 11.4031 14.7763 12.3154 14.7763C13.2277 14.7763 13.6838 14.3201 13.6838 13.408V8.39052C13.6838 7.4782 11.8593 6.56609 11.8593 5.65377V2.91702H10.947L10.0347 2.0047V1.09259C10.0349 0.97273 10.0115 0.853996 9.96579 0.743205C9.92004 0.632414 9.85287 0.531747 9.76813 0.446981C9.68338 0.362215 9.58273 0.295019 9.47195 0.24925C9.36117 0.20348 9.24244 0.180039 9.12258 0.180269H0.912325ZM1.82443 2.0047H8.21026V5.65377H1.82443V2.0047ZM10.0347 4.74145H10.947V6.10982C10.947 7.02215 12.7714 7.93447 12.7714 8.84657V13.408C12.7714 13.864 12.3154 13.864 12.3154 13.864C12.3154 13.864 11.8593 13.864 11.8593 13.408V11.1273C11.8593 10.6712 11.4031 10.215 10.947 10.215H10.0347V4.74145Z"
                            fill="#FFC163"/>
                    </svg>
                    <div className={'relative w-full h-[5px]'}>
                        <div className={'w-[50%] h-[5px] bg-[#FFC163] rounded-[2px]'}></div>
                        <div
                            className={'absolute top-0 left-0 w-full h-[5px] bg-[#A37735] bg-opacity-[0.48] rounded-[2px]'}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speedometer2;