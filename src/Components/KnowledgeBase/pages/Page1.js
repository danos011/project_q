import {Card, CardBody} from "@nextui-org/card";
import {Nav} from "../../LandingPage/Nav";

export const Page1 = () => {
    return (
        <div className={"container max-w-full overflow-y-hidden"}>
            <Nav/>
            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h1 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Инвестиции в криптовалюту: Полный гид для начинающих
                    </h1>
                    <div className={"text-4xl md:text-5xl lg:text-5xl uppercase md:mx-auto md:w-[70%] text-[#7e3aae]"}>
                        Узнайте, как начать инвестировать в криптовалюту. Пошаговое руководство для начинающих. Советы,
                        риски и возможности криптоинвестирования.
                    </div>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"indent-10 p-5 py-3 h-full flex justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        Криптовалюта — это цифровая или виртуальная валюта, которая использует криптографию для
                        обеспечения
                        безопасности транзакций. Она не имеет физической формы и существует исключительно в
                        онлайн-пространстве. За последние несколько лет криптовалюты привлекли внимание инвесторов по
                        всему
                        миру, и если вы хотите узнать больше о том, как начать инвестировать в этот динамично
                        развивающийся
                        рынок, то вы находитесь в правильном месте.
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Почему стоит рассмотреть инвестиции в криптовалюту?
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Криптовалюты, такие как Биткойн (Bitcoin), Эфириум (Ethereum) и другие, стали одной из самых
                            обсуждаемых тем в мире финансов. Инвестиции в криптовалюту предлагают уникальные
                            возможности,
                            такие как:
                        </div>
                        <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                            <li><i className={"text-[#7e3aae]"}>Высокий потенциал доходности:</i> Несмотря на высокую волатильность, некоторые
                                криптовалюты
                                продемонстрировали впечатляющие уровни роста.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Децентрализованный характер:</i> Отсутствие посредников, таких как банки и
                                правительственные органы,
                                привлекает тех, кто ищет финансовую свободу.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Инновационные технологии:</i> Блокчейн — основа криптовалют — это прорывная
                                технология, которая
                                меняет подход к различным отраслям экономики.
                            </li>
                        </ul>
                        <div className={"indent-10"}>
                            Однако важно помнить, что инвестиции в криптовалюту сопряжены с определенными рисками,
                            такими
                            как высокая волатильность и возможные регуляторные изменения.
                        </div>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Как выбрать криптовалюту для инвестиций?
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Выбор криптовалюты для инвестиций — это один из важнейших шагов, который нужно сделать. На
                            рынке представлено множество различных криптовалют, и каждая из них имеет свои особенности.
                        </div>
                        <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                            <li><i className={"text-[#7e3aae]"}>Биткойн (Bitcoin):</i> Первая и наиболее популярная криптовалюта. Биткойн
                                зарекомендовал себя как "цифровое золото" и стал базовой точкой для многих инвесторов.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Эфириум (Ethereum): </i> Вторая по величине криптовалюта. Она предлагает уникальные
                                возможности для создания децентрализованных приложений (dApps) и смарт-контрактов.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Альткойны: </i> Существует множество других криптовалют, таких как Лайткойн
                                (Litecoin), Рипл (Ripple) и многие другие, каждая из которых предлагает свои
                                преимущества и технологии.
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h3 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Ключевые факторы выбора криптовалюты для инвестиций
                    </h3>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Выбор криптовалюты для инвестиций — это один из важнейших шагов, который нужно сделать. На
                            рынке представлено множество различных криптовалют, и каждая из них имеет свои особенности.
                        </div>
                        <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                            <li><i className={"text-[#7e3aae]"}>Капитализация рынка:</i> Чем выше рыночная капитализация криптовалюты, тем больше
                                доверия она вызывает у инвесторов.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Технология:</i> Анализируйте технологию, на которой основана криптовалюта, и её
                                потенциал для реального использования.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Команда разработчиков:</i> Обратите внимание на команду, стоящую за проектом, их опыт
                                и репутацию в криптоиндустрии.
                            </li>
                            <li><i className={"text-[#7e3aae]"}>Ликвидность:</i> Важно, чтобы выбранная вами криптовалюта имела достаточный объём
                                торгов, что позволит вам легко входить и выходить из инвестиций.
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Как начать инвестировать в криптовалюту? Пошаговое руководство
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-9 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Для того чтобы успешно начать инвестировать в криптовалюту, нужно следовать нескольким
                            шагам.
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            <div className={"font-semibold"}>Шаг 1: Выбор криптовалютной биржи</div>
                            <div className={"indent-10"}>
                                Первое, что необходимо сделать — это выбрать криптовалютную биржу. Это платформа, на
                                которой
                                вы можете покупать, продавать и хранить свои криптовалюты. Наиболее популярные биржи
                                включают:
                            </div>
                            <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                                <li className={"font-semibold text-[#7e3aae]"}>Binance</li>
                                <li className={"font-semibold text-[#7e3aae]"}>Coinbase</li>
                                <li className={"font-semibold text-[#7e3aae]"}>Kraken</li>
                            </ul>
                            <div className={"indent-10"}>
                                При выборе биржи обратите внимание на её репутацию, безопасность и удобство
                                использования.
                            </div>
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            <div className={"font-semibold"}>Шаг 2: Регистрация и настройка аккаунта</div>
                            <div className={"indent-10"}>
                                После выбора биржи вам нужно будет пройти процесс регистрации. Обычно это включает
                                предоставление вашей личной информации и подтверждение личности. Также рекомендуется
                                включить двухфакторную аутентификацию для повышения безопасности вашего аккаунта.
                            </div>
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            <div className={"font-semibold"}>Шаг 3: Финансирование вашего аккаунта</div>
                            <div className={"indent-10"}>
                                Для покупки криптовалюты вам нужно будет пополнить свой аккаунт. Большинство бирж
                                принимают
                                депозиты в фиатных валютах, таких как доллар или евро, а также в других криптовалютах.
                            </div>
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            <div className={"font-semibold"}>Шаг 4: Покупка криптовалюты</div>
                            <div className={"indent-10"}>
                                После пополнения аккаунта вы можете приступить к покупке криптовалюты. Важно помнить,
                                что
                                цены на криптовалюты могут значительно колебаться, поэтому стоит уделить внимание
                                анализу
                                рынка перед покупкой.
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
                            <li><i className={'text-[#7e3aae]'}>Волатильность:</i> Цены на криптовалюты могут колебаться на десятки процентов в
                                течение одного дня. Это делает их высокорискованным активом.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Регуляторные риски: </i> Государственные органы могут вводить новые законы и
                                регуляции, которые могут повлиять на стоимость и доступность криптовалют.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Кибербезопасность: </i> Криптовалютные биржи и кошельки подвержены хакерским атакам.
                                Важно использовать надёжные платформы и защищать свои средства.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Отсутствие страховки: </i> В отличие от банковских счетов, ваши криптовалютные активы
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
                            Чтобы минимизировать риски и максимально использовать возможности криптоинвестирования,
                            следуйте этим советам:
                        </div>
                        <ul className={"ml-10 text-justify flex flex-col gap-5 list-disc"}>
                            <li><i className={'text-[#7e3aae]'}>Диверсификация портфеля:</i> Не вкладывайте все свои деньги в одну криптовалюту.
                                Разделите инвестиции между несколькими проектами, чтобы снизить риски.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Тщательное исследование: </i> Изучайте информацию о криптовалютах, в которые
                                планируете инвестировать. Следите за новостями и анализируйте рынок.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Холодные кошельки:</i> Для долгосрочного хранения криптовалют используйте холодные
                                кошельки, такие как аппаратные устройства, которые не подключены к интернету.
                            </li>
                            <li><i className={'text-[#7e3aae]'}>Осторожность с кредитным плечом: </i> Криптовалютные биржи могут предложить торговлю
                                с использованием кредитного плеча. Это может увеличить ваши прибыли, но также и убытки.
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </section>

            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-8 items-center w-full">
                <div className={"flex flex-col gap-5 justify-between font-bigstem"}>
                    <h2 className={"text-3xl md:text-[8em] lg:text-7xl uppercase  md:mx-auto md:w-[80%]"}>
                        Перспективы криптовалютного рынка в будущем
                    </h2>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex flex-col gap-5 justify-center lg:px-[8rem] lg:py-[8rem] text-justify font-bajazzo " +
                            "text-xl md:text-3xl font-[100] md:font-[200]"}>
                        <div className={"indent-10"}>
                            Рынок криптовалют продолжает развиваться, и его перспективы зависят от множества факторов,
                            включая технологические инновации и регуляторные изменения. Многие эксперты предсказывают
                            дальнейший рост популярности криптовалют, а также их интеграцию в глобальные финансовые
                            системы. Тем не менее, инвесторам важно оставаться в курсе всех изменений и адаптировать
                            свою стратегию в соответствии с новыми тенденциями.
                            Инвестиции в криптовалюту — это увлекательный и потенциально прибыльный способ вложения
                            средств, но также сопряжённый с высокими рисками. Прежде чем начать, необходимо провести
                            тщательное исследование и подготовку. Следуя рекомендациям, вы сможете минимизировать риски
                            и сделать свои инвестиции успешными.
                        </div>
                    </CardBody>
                </Card>
            </section>
        </div>
    )
}