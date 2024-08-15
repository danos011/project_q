import {useEffect, useRef, useState} from "react";
import {isMobile} from "react-device-detect";

export const PortfolioItem = ({item, index}) => {

    const ref = useRef(null);

    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasPlayed) {
                setHasPlayed(true);
                observer.unobserve(entry.target);
            }
        }, {
            rootMargin: '0px 0px 75px 0px',
            threshold: 0.1
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasPlayed]);

    return (
        <>
            {
                isMobile ?
                    <div key={index} ref={ref} className="flex flex-col h-fit w-full mb-5 cursor-pointer"
                         onClick={() => window.open(item.link)}>
                        <div
                            className={`relative flex flex-row ${index % 2 === 0 ? `justify-start ${hasPlayed ? "left-animation" : ""}`
                                : `justify-end ${hasPlayed ? "right-animation" : ""}`}`}>
                            {index % 2 === 0 &&
                                <img src={item.image} alt={'image'} className={"w-[50px] h-[50px] cursor-pointer"} loading={'lazy'}/>
                            }
                            <div onClick={() => window.open(item.link)}
                                 className={`cursor-pointer bg-[#32327e]/[0.21] font-bigstem flex items-center justify-center text-center leading-none
                            text-[30px] p-2 pt-3 rounded-lg px-4 w-[30%]`}>
                                {item.name}
                            </div>
                            {index % 2 === 1 &&
                                <img src={item.image} alt={'image'} className={"w-[50px] md:w-[65px] md:h-[65px] h-[50px] cursor-pointer"} loading={'lazy'}/>
                            }
                        </div>
                    </div>
                    :
                    <div key={index} ref={ref} className="flex flex-col w-[calc(50%-1rem)] mb-5"
                         onClick={() => window.open(item.link)}>
                        <div
                            className={`relative flex flex-row items-center ${index % 2 === 0 ? `justify-start ${hasPlayed ? "left-animation" : ""}`
                                : `justify-end ${hasPlayed ? "right-animation" : ""}`}`}>
                            {index % 2 === 0 &&
                                <img src={item.image} alt={'image'} className="w-[80px] h-[80px] cursor-pointer" loading={'lazy'}/>
                            }
                            <div
                                className={`cursor-pointer bg-[#32327e]/[0.21] font-bigstem flex items-center justify-center leading-none
                            lg:text-3xl p-2 pt-3 text-center rounded-lg px-4 w-[30%]`}>
                                {item.name}
                            </div>
                            {index % 2 === 1 &&
                                <img src={item.image} alt={'image'} className="w-[80px] h-[80px] cursor-pointer" loading={'lazy'}/>
                            }
                        </div>
                    </div>
            }
        </>
    )
}