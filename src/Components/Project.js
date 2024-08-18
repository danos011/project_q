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
                 className={"text-white p-5 lg:pt-[7vh] lg:pr-[50px] h-[90vh] lg:h-[100vh]" +
                     " flex flex-col lg:flex-row text-center justify-center gap-3 w-full uppercase"}>
            {/*{!isMobile &&*/}
            {/*    <img src="/image/project.webp" alt="project" className={"absolute right-0 top-0 right-animation"}/>}*/}
            <div
                className={`flex flex-col justify-between gap-5 h-[25%] md:h-[20%] md:w-[40%] items-center ${fadeOut ? 'fade-in' : ''}`}>
                <div className="w-full flex-grow" />
                <div
                    className="w-full text-start md:text-center justify-end uppercase text-[5em] md:text-[7em] lg:text-9xl leading-10 tracking-tighter font-bigstem left-animation">
                    we are
                </div>

                <div
                    className="bg-white w-[120px] lg:ml-[250px] mr-auto h-[1vh] left-animation"/>
            </div>
            <div className={"flex mx-auto min-h-[50vh] lg:h-fit md:w-fit"}>
                <img
                    className={'object-cover max-h-[40vh] mt-[6vw] min-h-[40vh] min-w-[30vh] lg:max-h-[408px] items-center md:items-stretch rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] ml-2 lg:mt-14 opacity-1'}
                    alt="Q"
                    src="/image/q.webp"/>
            </div>
            <div
                className={`flex flex-col gap-4 w-full h-[20%] lg:w-[40%] md:items-center leading-10 tracking-tighter ${fadeOut ? 'fade-in' : ''}` +
                    "font-bigstem lg:mt-[400px]"}>
                <div
                    className={"flex uppercase h-full w-full items-end lg:text-center " +
                        "content-center text-[5em] justify-end md:justify-center md:text-[7em] lg:text-9xl leading-10 tracking-tighter font-bigstem right-animation"}>
                    project
                </div>
                <div
                    className={"bg-white justify-end ml-auto w-[120px] md:w-[100px] lg:w-[200px] md:items-end h-[1vh]  lg:mr-[12vw]  right-animation"}/>
            </div>
            {/*{!isMobile && <img src="/image/we.webp" alt="we" className={"absolute left-0 left-animation"}/>}*/}
        </section>
    )
}