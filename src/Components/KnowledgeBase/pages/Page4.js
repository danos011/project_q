import {Card, CardBody} from "@nextui-org/card";
import {Nav} from "../../LandingPage/Nav";
import {PageNav} from "./PageNav";

export const Page4 = () => {
    return (
        <div className={"container max-w-full overflow-y-hidden"}>
            <PageNav/>
            <style>{
                `body {
                        background: black;
                    }`}</style>
            <div className={"container max-w-full overflow-y-hidden"}>
                <PageNav/>
                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h1 className={"text-[4em] md:text-[8em] lg:text-7xl uppercase md:mx-auto md:w-[60%]"}>
                            Инвестиции в активы: Полное руководство по выбору и управлению активами
                        </h1>
                        <div
                            className={"text-4xl md:text-5xl lg:text-5xl uppercase md:mx-auto md:w-[70%] text-[#7e3aae]"}>
                            Инвестиции в активы: Что выбрать в 2024 году?
                        </div>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"indent-10 p-5 py-3 h-full flex justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            В 2024 году инвестиции в активы остаются одним из самых важных способов для сохранения и
                            увеличения капитала. В зависимости от целей, стратегии и уровня риска, инвесторы могут
                            выбирать между различными типами активов, такими как финансовые, реальные, цифровые и
                            другие. Понимание того, как работают разные категории активов и как управлять инвестициями,
                            поможет добиться успеха в долгосрочной перспективе. В этом руководстве мы разберем ключевые
                            аспекты инвестирования в активы и расскажем, как выбрать правильные инструменты для своего
                            портфеля.
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                            Основные виды инвестиций в активы

                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10"}>
                                Инвестиции в активы могут принимать различные формы, в зависимости от типа актива и
                                целей инвестора. Рассмотрим основные виды активов, в которые можно вкладывать деньги
                            </div>
                            <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                                <li><i className={"text-[#7e3aae]"}>Инвестиции в финансовые активы:</i> Финансовые
                                    активы — это активы, которые имеют денежную стоимость и могут быть конвертированы в
                                    наличные. К ним относятся акции, облигации, депозиты и деривативы. Финансовые активы
                                    широко используются в инвестиционных портфелях благодаря их ликвидности и
                                    способности приносить доход в виде дивидендов или процентных выплат.
                                </li>
                                <li><i className={"text-[#7e3aae]"}>Инвестиции в реальные активы:</i> Реальные активы —
                                    это физические объекты, такие как недвижимость, оборудование и сырьевые товары.
                                    Инвестиции в реальные активы часто рассматриваются как способ защиты капитала от
                                    инфляции, так как их стоимость имеет тенденцию к росту в долгосрочной перспективе.
                                    Примеры реальных активов включают в себя здания, производственные предприятия и
                                    земельные участки.
                                </li>
                                <li><i className={"text-[#7e3aae]"}>Инвестиции в цифровые активы:</i> Цифровые активы
                                    представляют собой относительно новый класс активов, включающий в себя криптовалюты,
                                    токены и другие цифровые финансовые инструменты. Вложения в цифровые активы могут
                                    быть очень доходными, но также сопряжены с высоким риском. Например, инвестиции в
                                    цифровые финансовые активы, такие как Биткойн или Эфириум, привлекли внимание
                                    инвесторов благодаря их потенциальному росту.

                                </li>
                                <li><i className={"text-[#7e3aae]"}>Инвестиции в оборотные активы:</i> Оборотные активы
                                    — это активы, которые используются компанией в течение одного операционного цикла,
                                    такие как товарные запасы, дебиторская задолженность и наличные средства. Инвестиции
                                    в оборотные активы важны для поддержания операционной деятельности компании и
                                    обеспечения её финансовой устойчивости.
                                </li>
                                <li><i className={"text-[#7e3aae]"}>Инвестиции в долгосрочные активы:</i> Долгосрочные
                                    активы — это активы, которые компания планирует использовать на протяжении более
                                    одного года. К ним относятся здания, оборудование, патенты и другие материальные и
                                    нематериальные активы. Инвестиции в долгосрочные активы помогают компаниям расширять
                                    своё производство и обеспечивать долгосрочный рост.
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                            Как выбрать активы для инвестиций?
                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10"}>
                                Выбор активов для инвестиций зависит от множества факторов, включая уровень риска,
                                временные горизонты и цели инвестора. Вот несколько шагов, которые помогут вам выбрать
                                правильные активы:
                            </div>
                            <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                                <li><i className={"text-[#7e3aae]"}>Определите свою инвестиционную
                                    стратегию:</i> Прежде чем выбрать активы для инвестиций, важно определить свою
                                    стратегию. Если ваша цель — стабильный доход, вы можете сосредоточиться на
                                    инвестициях в финансовые активы, такие как облигации или акции компаний с высокой
                                    дивидендной доходностью. Если же вы готовы к большему риску ради потенциально
                                    высокой доходности, можно рассмотреть инвестиции в цифровые активы или венчурные
                                    проекты.
                                </li>
                                <li><i className={"text-[#7e3aae]"}>Оцените риски: </i> Каждый тип актива имеет свои
                                    риски. Финансовые активы могут быть подвержены рыночным колебаниям, реальные активы
                                    — рискам, связанным с управлением и амортизацией, а цифровые активы — высоким
                                    колебаниям цен и регуляторным рискам. Оцените, насколько вы готовы к этим рискам и
                                    как они вписываются в вашу стратегию.
                                </li>
                                <li><i className={"text-[#7e3aae]"}>Диверсифицируйте портфель: </i> Диверсификация
                                    помогает снизить риски, распределяя капитал между различными типами активов. Это
                                    может включать инвестиции в финансовые активы, такие как акции и облигации, а также
                                    в реальные активы, например, недвижимость. Включение в портфель цифровых активов
                                    может дополнительно диверсифицировать ваш инвестиционный портфель.
                                </li>
                                <li><i className={"text-[#7e3aae]"}>Исследуйте возможности инвестиций в иностранные
                                    активы: </i> Инвестиции в иностранные активы, такие как акции зарубежных компаний,
                                    облигации или недвижимость, могут помочь вам диверсифицировать портфель и получить
                                    доступ к развивающимся рынкам. Важно учитывать валютные риски и особенности
                                    регулирования в других странах.
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                            Чистые активы и их роль в инвестициях
                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10"}>
                                Чистые активы — это разница между общими активами компании и её обязательствами. Этот
                                показатель используется для оценки финансового состояния предприятия. При инвестировании
                                в акции компании важно учитывать её чистые активы, так как они могут служить индикатором
                                стабильности бизнеса и его способности генерировать прибыль в будущем.
                            </div>
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                            Инвестиции в управление активами: Как эффективно управлять портфелем?
                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-9 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10 flex flex-col gap-5"}>
                                <div>
                                    Управление активами — это процесс принятия решений по выбору, покупке и продаже
                                    активов с целью максимизации прибыли и минимизации рисков. Инвестиции в управление
                                    активами могут включать в себя использование профессиональных услуг управляющих
                                    компаний, которые помогают эффективно распределять капитал и достигать финансовых
                                    целей. Важно регулярно пересматривать свои инвестиции и вносить корректировки в
                                    портфель в зависимости от изменений на рынке.
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                            Инвестиции в ценные бумаги и активы: Основные возможности
                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10"}>
                                Ценные бумаги, такие как акции и облигации, являются одними из наиболее распространенных
                                финансовых активов. Инвестиции в ценные бумаги могут предоставлять стабильный доход и
                                потенциал для роста капитала. Важно выбирать ценные бумаги на основе анализа финансового
                                состояния эмитента и рыночных перспектив. Кроме того, инвесторы могут рассматривать
                                другие активы, такие как фонды, деривативы и опционы, для диверсификации своих вложений.
                            </div>
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase md:mx-auto md:w-[80%]"}>
                            Инвестиции в цифровые финансовые активы: Перспективы и риски
                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10"}>
                                Цифровые финансовые активы, такие как криптовалюты и токены, становятся всё более
                                популярными среди инвесторов. В 2024 году инвестиции в цифровые активы продолжают расти
                                благодаря увеличению институционального интереса и развитию блокчейн-технологий. Однако
                                важно помнить о высокой волатильности и возможных регуляторных рисках, связанных с этим
                                классом активов.
                            </div>
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase md:mx-auto md:w-[80%]"}>
                            Инвестиции в долгосрочные активы: Как обеспечить стабильный рост?
                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10"}>
                                Долгосрочные активы играют ключевую роль в обеспечении устойчивого роста бизнеса.
                                Инвестиции в долгосрочные активы, такие как недвижимость, оборудование или
                                интеллектуальная собственность, могут помочь компании расширить свои операции и повысить
                                эффективность. Для частных инвесторов долгосрочные активы также могут стать надежным
                                источником пассивного дохода и защиты от инфляции.
                            </div>
                        </CardBody>
                    </Card>
                </section>

                <section
                    className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                    <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                        <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase md:mx-auto md:w-[80%]"}>
                            Заключение: Как выбрать активы для инвестиций в 2024 году?
                        </h2>
                    </div>
                    <Card shadow={'none'} radius={"sm"}
                          className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                        <CardBody
                            className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                                "text-xl md:text-3xl font-[100] md:font-[200]"}>
                            <div className={"indent-10"}>
                                Инвестиции в активы — это важный инструмент для сохранения и увеличения капитала. В 2024
                                году инвесторы имеют доступ к широкому спектру активов, включая финансовые, реальные,
                                цифровые и иностранные. Выбор активов зависит от ваших целей, уровня риска и временного
                                горизонта. Независимо от того, выбираете ли вы инвестиции в финансовые активы,
                                недвижимость или цифровые финансовые инструменты, важно помнить о диверсификации и
                                регулярном управлении своим портфелем.
                            </div>
                        </CardBody>
                    </Card>
                </section>
            </div>
        </div>
    )
}