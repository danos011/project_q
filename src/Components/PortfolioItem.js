import {useEffect, useRef, useState} from "react";

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
        <div key={index} ref={ref} className="flex flex-col w-[calc(50%-1rem)] mb-5">
            <div
                className={`relative flex flex-row ${index % 2 === 0 ? `justify-start ${hasPlayed ? "left-animation" : ""}`
                    : `justify-end ${hasPlayed ? "right-animation" : ""}`}`}>
                {index % 2 === 0 &&
                    <div className={`bg-[#32327e] ${index % 2 === 0 ? 'mr-[-8px]' : 'ml-[-8px]'} w-4 z-10`}/>
                }
                <div onClick={() => window.open(item.link)}
                     className={`cursor-pointer bg-[#32327e]/[0.21] font-bigstem flex items-center leading-none 
                     text-[24px] p-2 pt-3 rounded-lg  ${index % 2 === 0 ? 'pl-4' : 'pr-4'} `}>
                    {item.link}
                </div>
                {index % 2 === 1 &&
                    <div className={`bg-[#32327e] ${index % 2 === 0 ? 'mr-[-8px]' : 'ml-[-8px]'} w-4 z-10`}/>
                }
            </div>
        </div>
    )
}