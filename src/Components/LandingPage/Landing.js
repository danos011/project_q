import {Nav} from "./Nav";
import {Project} from "./Project";
import {AboutUs} from "./AboutUs";
import {Portfolio} from "./Portfolio";
import {ContactUs} from "./ContactUs";
import {useEffect, useState} from "react";
import {KnowledgeBase} from "../KnowledgeBase/KnowledgeBase";

export const Landing = () => {
    const [intro, setIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [classname, setClassName] = useState('');

    useEffect(() => {
        if (!intro) {
            setFadeOut(true);
        }
    }, [intro]);

    useEffect(() => {
        setClassName(`z-[-1] w-full object-cover h-[100vh] ${fadeOut ? 'fade-out' : ''}`)
        setTimeout(() => {
            setIntro(false)
        }, 3620);
    }, [])


    return (
        <>
            <style>{
                intro ?
                    `body {
                        overflow: hidden;
                        background: black;
                    }` :
                    `body {
                        background: black;
                    }`}</style>
            {
                intro ?

                    <video controls={false} autoPlay={true} playsInline={true} muted={true}
                           src="/video/intro_transcoded.webm"
                           className={classname}/>
                    :
                    <div className={"container max-w-full overflow-y-hidden"}>
                        <Nav/>
                        <div className={`flex flex-col gap-[10vh]`}>
                            <Project fadeOut={fadeOut}/>

                            <AboutUs title={"Сферы"} belowTitle={"деятельности"} boxTitle={"Кто"}
                                     coloredBoxTitle={"мы ?"}
                                     boxDescription={"Q Venture Capital компания, специализирующаяся на разработке " +
                                         "программного обеспечения в сфере финансовых технологий, торговлей (трейдинг) " +
                                         "и венчурным инвестированием в инновационные проекты в WEB3."}/>

                            {/*<PageWithText title={'web'} coloredText={'3'} afterTitle={"Инновационные решения"}*/}
                            {/*              textId={'web3'}*/}
                            {/*              description={"Разработка децентрализованных финансовых платформ, смарт-контрактов, " +*/}
                            {/*                  "NFT, кошельков для криптовалют и других решений, использующих технологии " +*/}
                            {/*                  "блокчейн для улучшения качества финансовых услуг и создания новых бизнес-моделей."}/>*/}

                            {/*<PageWithText title={'трей'} coloredText={'динг'} afterTitle={"торговые операции"}*/}
                            {/*              textId={'trading'}*/}
                            {/*              description={"Компьютерный алгоритм, который автоматически анализирует ситуацию " +*/}
                            {/*                  "на финансовом рынке и предоставляет подробную информацию, используя торговые " +*/}
                            {/*                  "индикаторы, а также искусственный интеллект для анализа рынка." +*/}
                            {/*                  "Команда опытных инвесторов и трейдеров на основе своего опыта, а также " +*/}
                            {/*                  "используя собственный алгоритм инвестирует средства в торговые активы."}/>*/}

                            {/*<PageWithText title={'Инвес'} coloredText={'тиции'} afterTitle={"Венчур"} textId={'invest'}*/}
                            {/*              description={"Инвестиции в стартапы, оценивая их риски, с учетом анализа трендов, " +*/}
                            {/*                  "предлагая собственные аналитические инструменты и технологические решения, " +*/}
                            {/*                  "а также обеспечивая необходимую финансовую поддержку. " +*/}
                            {/*                  "Инвестируя ваши средства вы гарантированно получаете 5% от ваших вложений ежемесячно!"}/>*/}
                            <KnowledgeBase/>

                            <Portfolio/>

                            <ContactUs/>
                        </div>

                    </div>
            }
        </>
    )
}