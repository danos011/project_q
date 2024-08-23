import {Card, CardBody} from "@nextui-org/card";
import {Nav} from "../../LandingPage/Nav";
import {PageNav} from "./PageNav";

export const Page2 = () => {
    return (
        <div className={"container max-w-full overflow-y-hidden"}>
            <PageNav/>
            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h1 className={"text-[4em] md:text-[8em] lg:text-7xl uppercase md:mx-auto md:w-[60%]"}>
                        Полный гид по инвестициям в 2024 году:Платформы, направления и технологии
                    </h1>
                    <div className={"text-4xl md:text-5xl lg:text-5xl uppercase md:mx-auto md:w-[70%] text-[#7e3aae]"}>
                        Инвестиции в 2024 году: Платформы, технологии и тренды
                    </div>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"indent-10 p-5 py-3 h-full flex justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        В 2024 году мир инвестиций продолжает активно развиваться. Варианты вложений расширяются, и
                        инвесторы могут выбирать между традиционными активами, такими как акции и валютный рынок, и
                        инновационными технологиями, такими как криптовалюты и NFT. Ключевую роль в этом процессе играют
                        инвестиционные платформы, которые позволяют удобно и безопасно инвестировать в разные активы. В
                        этой статье мы рассмотрим основные направления инвестиций, включая технологии, цифровые
                        инновации, стартапы, а также обсудим лучшие платформы для инвестиций в 2024 году.
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Важность платформ для инвестиций в 2024 году
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Выбор правильной платформы для инвестиций становится решающим фактором для успешного
                            инвестирования. Инвестиционные платформы помогают частным лицам и компаниям управлять своими
                            активами, предлагая доступ к разнообразным финансовым инструментам. В 2024 году популярными
                            остаются такие направления, как:
                        </div>
                        <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                            <li><i className={"text-[#7e3aae]"}>Платформы для инвестиций в акции:</i> Эти платформы
                                предоставляют доступ к мировым и локальным фондовым рынкам. Среди лучших платформ для
                                инвестиций в акции можно выделить такие, как <a className={"font-semibold"}>Interactive
                                    Brokers</a>, <a className={"font-semibold"}>Тинькофф Инвестиции</a> и
                                <a className={"font-semibold"}>Robinhood</a>.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Платформы для инвестиций в валютный рынок:</i> Валютный
                                рынок остаётся одной из наиболее популярных сфер для вложений. <a
                                    className={"font-semibold"}>Forex-брокеры</a> и
                                специализированные платформы для трейдинга на валютных рынках предлагают инструменты для
                                управления валютными активами. Инвестиции в валютный рынок требуют хорошего понимания
                                макроэкономики и трейдинговых стратегий.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Платформы для инвестиций в бизнес и
                                стартапы:</i> Инвестиции в стартапы и
                                развивающиеся компании предлагают высокий потенциал роста. Платформы краудинвестинга,
                                такие как <a className={"font-semibold"}>StartEngine</a> и <a
                                    className={"font-semibold"}>SeedInvest</a>, дают возможность частным лицам
                                инвестировать в
                                стартапы на ранних этапах. Эти платформы часто используются для привлечения капитала в
                                области новых технологий.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Платформы для инвестиций в бизнес и
                                стартапы:</i> Российские платформы для инвестиций, такие как <a
                                className={"font-semibold"}>БКС Мир Инвестиций</a>, <a
                                className={"font-semibold"}>Финам</a> и
                                <a className={"font-semibold"}> ВТБ Мои Инвестиции</a>, предлагают доступ к инвестициям
                                в
                                акции российских компаний,
                                облигации и другие финансовые инструменты.
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Инвестиции в технологии: Новые тренды 2024 года
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Технологии остаются одним из самых перспективных направлений для инвесторов в 2024 году.
                            Инвестиции в новые технологии позволяют вкладывать средства в компании, которые занимаются
                            разработкой и внедрением инноваций. Среди ключевых направлений можно выделить:
                        </div>
                        <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                            <li><i className={"text-[#7e3aae]"}>Инвестиции в информационные
                                технологии:</i> Информационные технологии продолжают играть ведущую роль в глобальной
                                экономике. Инвестиции в IT-компании, занимающиеся кибербезопасностью, облачными
                                решениями и большими данными, имеют высокий потенциал роста.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Инвестиции в цифровые технологии: </i> Цифровизация
                                бизнеса и общества продолжает набирать обороты. Вложения в компании, занимающиеся
                                цифровыми технологиями, включают в себя инвестиции в программное обеспечение, финтех,
                                искусственный интеллект и блокчейн. Компании, такие как Microsoft и Amazon, являются
                                лидерами в этом секторе.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Инвестиции в развитие технологий в
                                России: </i> Российские IT-компании и стартапы также демонстрируют высокий потенциал.
                                Вложения в финтех-проекты, блокчейн и разработки в области искусственного интеллекта
                                становятся всё более актуальными на российском рынке.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Инвестиции в новые технологии: </i> Технологии, такие
                                как квантовые вычисления, искусственный интеллект и блокчейн, представляют собой новый
                                рубеж для инвесторов. Эти направления предлагают огромные возможности для роста и
                                инноваций в различных отраслях экономики.
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h3 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Платформы для разумных инвестиций: Как сделать правильный выбор?
                    </h3>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Для тех, кто предпочитает долгосрочные и консервативные инвестиции, важным шагом становится
                            выбор платформы для разумных инвестиций. Такие платформы, как Wealthfront и Betterment,
                            предлагают автоматизированные стратегии и удобные интерфейсы для управления активами. Эти
                            платформы обеспечивают понятный интерфейс и позволяют инвесторам сосредоточиться на
                            достижении своих финансовых целей.
                        </div>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        NFT-инвестиции и криптовалютный трейдинг: Тренды 2024 года
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-9 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10 flex flex-col gap-5"}>
                            <div>
                                Инвестиции в NFT продолжают набирать популярность. NFT (невзаимозаменяемые токены)
                                представляют собой уникальные цифровые активы, такие как произведения искусства,
                                видеоконтент и коллекционные предметы. Платформы, такие как OpenSea и Rarible, позволяют
                                инвесторам покупать и продавать NFT. Однако рынок NFT остаётся высоковолатильным,
                                поэтому
                                важно проводить тщательный анализ перед инвестициями.
                            </div>
                            <div>
                                Трейдинг криптовалют остаётся одним из самых активных направлений в инвестициях.
                                Платформы,
                                такие как <a className={"text-[#7e3aae]"}>Binance</a>, <a
                                className={"text-[#7e3aae]"}>Coinbase</a> и <a className={"text-[#7e3aae]"}>Bybit</a>,
                                предлагают широкий спектр инструментов для торговли
                                криптовалютами. В 2024 году трейдеры активно используют алгоритмические стратегии и
                                автоматизированные системы для оптимизации своей торговли на крипторынке.
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Какие риски связаны с инвестициями в криптовалюту?
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Инвестирование в криптовалюту связано с рядом рисков, о которых нужно помнить.
                        </div>
                        <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                            <li><i className={'text-[#7e3aae]'}>Волатильность:</i> Цены на криптовалюты могут колебаться
                                на десятки процентов в
                                течение одного дня. Это делает их высокорискованным активом.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Регуляторные риски: </i> Государственные органы могут
                                вводить новые законы и
                                регуляции, которые могут повлиять на стоимость и доступность криптовалют.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Кибербезопасность: </i> Криптовалютные биржи и кошельки
                                подвержены хакерским атакам.
                                Важно использовать надёжные платформы и защищать свои средства.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Отсутствие страховки: </i> В отличие от банковских
                                счетов, ваши криптовалютные активы
                                не застрахованы. В случае утраты доступа или хакерской атаки вы можете потерять все свои
                                средства.
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase md:mx-auto md:w-[80%]"}>
                        Заключение: Как сделать осознанный выбор платформы для инвестиций?
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Выбор правильной платформы для инвестиций зависит от ваших целей, уровня риска и
                            предпочитаемых направлений вложений. Независимо от того, интересуют ли вас инвестиции в
                            валютный рынок, технологии или стартапы, важно тщательно изучить платформы и стратегии,
                            прежде чем делать вложения. Помните о рисках и используйте платформы, которые предлагают
                            высокий уровень безопасности и удобства.
                        </div>
                    </CardBody>
                </Card>
            </section>
        </div>
    )
}