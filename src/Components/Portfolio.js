import {PortfolioItem} from "./PortfolioItem";
import {isMobile} from "react-device-detect";

export const Portfolio = () => {

    const linkList = [
        {
            link: 'https://cryptorank.io/ico/allora',
            name: 'Allora',
            image: '/image/allora.webp',
        },
        {
            link: 'https://cryptorank.io/ico/gudchain',
            name: 'Gudchain',
            image: '/image/gud.webp',
        },
        {
            link: 'https://cryptorank.io/ico/zkx',
            name: 'ZKX',
            image: '/image/zkx.webp',
        },
        {
            link: 'https://cryptorank.io/ico/renzo-protocol',
            name: 'Renzo',
            image: '/image/renzo.webp',
        },
        {
            link: 'https://cryptorank.io/ico/bring',
            name: 'Bring',
            image: '/image/bring.webp',
        },
        {
            link: 'https://cryptorank.io/ico/agentlayer',
            name: 'AgentLayer',
            image: '/image/agent.webp',
        },
        {
            link: 'https://cryptorank.io/ico/wasabi',
            name: 'Wasabi',
            image: '/image/wasabi.webp',
        },
        {
            link: 'https://cryptorank.io/ico/holdstation',
            name: 'Holdstation',
            image: '/image/hold.webp',
        },
        {
            link: 'https://cryptorank.io/ico/rio-network',
            name: 'Rio Network',
            image: '/image/rio.webp',
        },
        {
            link: 'https://cryptorank.io/ico/zyfi',
            name: 'Zyfi',
            image: '/image/zyfi.webp',
        },
        {
            link: 'https://cryptorank.io/ico/codatta',
            name: 'codatta',
            image: '/image/codatta.webp',
        },
        {
            link: 'https://cryptorank.io/ico/kimafinance#funding-rounds',
            name: 'Kima',
            image: '/image/kima.webp',
        },
        {
            link: 'https://cryptorank.io/ico/bluwhale',
            name: 'Bluwhale',
            image: '/image/bluewave.webp',
        },
    ]


    return (
        <section id={'portfolio'} className="p-5 lg:p-6 lg:pr-[65px] h-full flex flex-col gap-[2rem] w-full">
            {!isMobile && <img src="/image/Portfolio.webp" loading={'lazy'} alt="Portfolio"
                               className={"absolute left-1/2 translate-x-[-50%] translate-y-[-20%]"}/>}
            <h1 className={"font-bigstem text-[6em] md:text-9xl text-center"}>
                portfolio
            </h1>
            <div className="flex flex-wrap gap-3 md:gap-5 px-6 lg:pl-[5rem] lg:pr-[1rem] pb-10">
                {linkList.map((item, index) => (
                    <PortfolioItem item={item} index={index}/>
                ))}
            </div>
        </section>
    )
}