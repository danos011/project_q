import {useEffect} from "react";
import { isMobile } from 'react-device-detect';

export const Project = ({fadeOut}) => {
    const preloadImage = (src) => {
        const img = new window.Image();
        img.src = src;
    };

    useEffect(() => {
        preloadImage('/image/q.webp');
    }, []);

    return (
        <section id={'project'} className={"text-white p-10 pt-[90px] pr-[50px] h-[100vh] flex flex-row text-center gap-3 w-full uppercase"}>
            {!isMobile && <img src="/image/project.webp" alt="project" className={"absolute right-0 top-0 right-animation"}/>}
            <div className={`flex flex-col gap-10 w-[40%] items-center ${fadeOut ? 'fade-in' : ''} `}>
                <div
                    className={"uppercase text-9xl leading-10 tracking-tighter top-0 font-bigstem left-animation"}>
                    we are
                </div>
                <div className={"bg-white w-[120px] mr-[100px] h-[10px] left-animation"}/>
            </div>
            <img
                className={'h-fit rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] w-[20%] ml-2 mt-14 opacity-1'}
                width={400}
                height={500}
                alt="Q image"
                src="/image/q.webp"/>
            <div
                className={`flex flex-col gap-10 uppercase w-1/3 text-8xl leading-10 tracking-tighter ${fadeOut ? 'fade-in' : ''}` +
                    "font-bigstem w-[40%] items-center mt-[400px]"}>
                <div
                    className={"uppercase text-9xl leading-10 tracking-tighter font-bigstem right-animation"}>
                    project
                </div>
                <div className={"bg-white w-[210px] h-[10px] ml-[30px] right-animation"}/>
            </div>
            { !isMobile && <img src="/image/we.webp" alt="we"  className={"absolute left-0 left-animation"}/>}
        </section>
    )
}