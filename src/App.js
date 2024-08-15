import './css/App.css';
import {
    NextUIProvider,
} from "@nextui-org/react";
import {Nav} from "./Components/Nav";
import {ContactUs} from "./Components/ContactUs";
import {Project} from "./Components/Project";
import {AboutUs} from "./Components/AboutUs";
import {PageWithText} from "./Components/PageWithText";
import {useEffect, useState} from "react";
import {Portfolio} from "./Components/Portfolio";


function App() {
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
                           src="/video/intro_transcoded.mp4"
                           className={classname}/>
                    :
                    <NextUIProvider className={"container max-w-full overflow-y-hidden"}>
                        <Nav/>
                        <div className={`flex flex-col gap-[10vh]`}>
                            <Project fadeOut={fadeOut}/>

                            <AboutUs title={"Сферы"} belowTitle={"деятельности"} boxTitle={"Кто"}
                                     coloredBoxTitle={"мы ?"}
                                     boxDescription={"Q Venture Capital компания, специализирующаяся на разработке " +
                                         "программного обеспечения в сфере финансовых технологий, торговлей (трейдинг) " +
                                         "и венчурным инвестированием в инновационные проекты в WEB3."}/>

                            <PageWithText title={'web'} coloredText={'3'} afterTitle={"Инновационные решения"}
                                          textId={'web3'}
                                          description={"Разработка децентрализованных финансовых платформ, смарт-контрактов, " +
                                              "NFT, кошельков для криптовалют и других решений, использующих технологии " +
                                              "блокчейн для улучшения качества финансовых услуг и создания новых бизнес-моделей."}/>

                            <PageWithText title={'трей'} coloredText={'динг'} afterTitle={"торговые операции"}
                                          textId={'trading'}
                                          description={"Компьютерный алгоритм, который автоматически анализирует ситуацию " +
                                              "на финансовом рынке и предоставляет подробную информацию, используя торговые " +
                                              "индикаторы, а также искусственный интеллект для анализа рынка.\n" +
                                              "Команда опытных инвесторов и трейдеров на основе своего опыта, а также " +
                                              "используя собственный алгоритм инвестирует средства в торговые активы.\n"}/>

                            <PageWithText title={'Инвес'} coloredText={'тиции'} afterTitle={"Венчур"} textId={'invest'}
                                          description={"Инвестиции в стартапы, оценивая их риски, с учетом анализа трендов, " +
                                              "предлагая собственные аналитические инструменты и технологические решения, " +
                                              "а также обеспечивая необходимую финансовую поддержку. " +
                                              "Инвестируя ваши средства вы гарантированно получаете 5% от ваших вложений ежемесячно!"}/>


                            <Portfolio/>

                            <ContactUs/>
                        </div>

                    </NextUIProvider>
            }
        </>
    );
}

export default App;
