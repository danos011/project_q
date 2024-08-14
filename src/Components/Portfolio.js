import {PortfolioItem} from "./PortfolioItem";

export const Portfolio = () => {

    const linkList = [
        {link: 'https://cryptorank.io/ico/allora'},
        {link: 'https://cryptorank.io/ico/gudchain'},
        {link: 'https://cryptorank.io/ico/zkx'},
        {link: 'https://cryptorank.io/ico/renzo-protocol'},
        {link: 'https://cryptorank.io/ico/bring'},
        {link: 'https://cryptorank.io/ico/agentlayer'},
        {link: 'https://cryptorank.io/ico/wasabi'},
        {link: 'https://cryptorank.io/ico/holdstation'},
        {link: 'https://cryptorank.io/ico/rio-network'},
        {link: 'https://cryptorank.io/ico/zyfi'},
        {link: 'https://cryptorank.io/ico/codatta'},
        {link: 'https://cryptorank.io/ico/kimafinance#funding-rounds'},
        {link: 'https://cryptorank.io/ico/bluwhale'},
    ]


    return (
        <section id={'portfolio'} className="p-6 pr-[65px] h-[100vh] flex flex-col gap-[2rem] w-full">
            <img src="/image/Portfolio.webp" loading={'lazy'} alt="Portfolio"
                 className={"absolute left-1/2 translate-x-[-50%] translate-y-[-20%]"}/>
            <h1 className={"font-bigstem text-9xl text-center"}>
                portfolio
            </h1>
            <div className="flex flex-wrap gap-5 pl-[5rem] pr-[1rem] pb-10">
                {linkList.map((item, index) => (
                    <PortfolioItem item={item} index={index}/>
                ))}
            </div>
        </section>
    )
}