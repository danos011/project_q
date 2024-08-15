import {useEffect} from "react";
import {isMobile} from 'react-device-detect';

export const Project = ({fadeOut}) => {
    const preloadImage = (src) => {
        const img = new window.Image();
        img.src = src;
    };

    useEffect(() => {
        preloadImage('/image/q.webp');
    }, []);

    return (
        <section id={'project'}
                 className={"text-white p-5 lg:pt-[7vh] lg:pr-[50px] h-[90vh] flex flex-col lg:flex-row text-center justify-center gap-3 w-full uppercase"}>
            {!isMobile &&
                <img src="/image/project.webp" alt="project" className={"absolute right-0 top-0 right-animation"}/>}
            <div className={`flex flex-col h-[20%] md:gap-0 md:h-[20%] md:w-[40%] items-center content-center ${fadeOut ? 'fade-in' : ''} `}>
                <div
                    className={"h-full mb-[5vw] md:mb-0  w-full text-start md:text-center content-end uppercase text-8xl md:text-9xl leading-10 tracking-tighter font-bigstem left-animation"}>
                    we are
                </div>
                <div className={"bg-white w-[30vw] lg:w-[120px] ml-[-61vw] lg:ml-0 md:mr-[100px] h-[1vh] left-animation"}/>
            </div>
            <div className={"flex mx-auto min-h-[50vh] lg:h-fit md:w-fit"}>
                <img
                    className={'object-cover max-h-[40vh] mt-[6vw] min-h-[40vh] min-w-[235px] lg:max-h-[408px] items-center md:items-stretch rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] ml-2 lg:mt-14 opacity-1'}
                    alt="Q image"
                    src="/image/q.webp"/>
            </div>
            <div
                className={`flex flex-col w-full md:gap-0 h-[20%] lg:w-[40%] md:items-center text-8xl leading-10 tracking-tighter ${fadeOut ? 'fade-in' : ''}` +
                    "font-bigstem lg:mt-[400px]"}>
                <div
                    className={"uppercase h-full pt-[4vh] lg:pt-0 w-full items-end text-end lg:text-center content-center md:text-6xl md:text-9xl leading-10 tracking-tighter font-bigstem right-animation"}>
                    project
                </div>
                <div className={"bg-white w-[30vw] lg:w-[210px] items-end h-[1vh] ml-[61vw] lg:ml-[30px] right-animation"}/>
            </div>
            {!isMobile && <img src="/image/we.webp" alt="we" className={"absolute left-0 left-animation"}/>}
        </section>
    )
}