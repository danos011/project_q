import {useEffect, useRef, useState} from "react";
import {Card, CardBody} from "@nextui-org/card";

export const AboutUs = ({title, belowTitle, boxTitle, boxDescription, coloredBoxTitle}) => {
    const [hasPlayed, setHasPlayed] = useState(false);
    const [invest, setInvest] = useState('');
    const [ball, setBall] = useState('');
    const [light, setLight] = useState('');
    const [gifLoaded, setGifLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const preloadImages = async () => {
            const imageUrls = [
                '/gifs/invest.gif',
                '/gifs/ball.gif',
                '/gifs/lights.gif',
                '/image/invest.webp',
                '/image/ball.webp',
                '/image/lights.webp',
            ];

            await Promise.all(imageUrls.map(url => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = (event) => {
                        console.error(`Error loading image: ${url}`, event);
                        reject(event);
                    };
                });
            }));

            setGifLoaded(true);
        };

        preloadImages().then();
    }, []);

    useEffect(() => {
        setInvest("/image/invest.webp")
        setBall("/image/ball.webp")
        setLight("/image/light.webp")
    }, [])

    useEffect(() => {
        if (gifLoaded) {
            setTimeout(() => {
                setBall("/image/ball.webp");
                setLight("/image/lights.webp");
                setInvest("/image/invest.webp");
            }, 7000);
        }
    }, [hasPlayed, gifLoaded]);


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
            setInvest("/gifs/invest.gif")
            setBall("/gifs/ball.gif")
            setLight("/gifs/lights.gif")
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
                setInvest("/image/invest.webp")
                setBall("/image/ball.webp")
                setLight("/image/light.webp")
            }
        };
    }, [hasPlayed]);


    return (
        <section id={'aboutus'}
                 className="p-5 lg:p-10 lg:pr-[65px] h-full flex flex-col gap-[7vh] md:gap-[5vh] md:gap-[10vh] place-items-center w-full">
            <div className={"flex flex-col md:flex-row gap-3 justify-between"}>
                <div className={"flex flex-col md:items-start font-bigstem w-full md:w-[60%] md:h-full"}>
                    <h1 className={"text-[6em] md:text-[8em] lg:text-9xl leading-none uppercase"}>
                        {title}
                    </h1>
                    <div className={"text-[3em] lg:text-6xl uppercase text-[#7e3aae]"}>
                        {belowTitle}
                    </div>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-full md:w-[40%] p-3 bg-[#32327e]/[0.21] text-white overflow-hidden"}>
                    <CardBody className={"flex flex-col gap-1"}>
                        <h2 className={"text-[2em] lg:text-5xl uppercase font-bigstem font-[200]"}>{boxTitle} <a
                            className={"text-[#7e3aae]"}>{coloredBoxTitle}</a></h2>
                        <div className={"text-[0.75em] lg:text-base indent-6 font-bajazzo text-justify uppercase"}>
                            {boxDescription}
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div
                className={"flex flex-row gap-2 lg:gap-8 justify-between uppercase " +
                    "font-bigstem text-[3em] lg:text-[7em] leading-none w-full lg:w-[100%]"}
                ref={ref}>
                <div className={"mt-[13vh] flex w-[33%] flex-col lg:w-[33%]"}>
                    <div>web3</div>
                    <div className={"flex justify-center h-[13vh] px-[3vw] md:px-[7vw] lg:h-[25vh]"}>
                        <img src={ball}
                             className={`${hasPlayed ? "transition-opacity duration-500" : ""}`} alt={'ball'}/>
                    </div>
                </div>
                <div className={"self-start w-[33%] flex flex-col lg:w-[33%]"}>
                    <div>trading</div>
                    <div className={"flex justify-center h-[13vh] px-[3vw] md:px-[7vw] lg:h-[25vh] "}>
                        <img alt={'invest'} src={light} loading={'lazy'}
                             className={`${hasPlayed ? "transition-opacity duration-500" : ""}`}/>
                    </div>
                </div>
                <div className={"self-end flex w-[33%] flex-col lg:w-[33%]"}>
                    <div>invest</div>
                    <div className={"flex justify-center h-[13vh] px-[3vw] md:px-[7vw] lg:h-[25.6vh] "}>
                        <img alt={'invest'} src={invest} loading={'lazy'}
                             className={`${hasPlayed ? "transition-opacity duration-500" : ""}`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}