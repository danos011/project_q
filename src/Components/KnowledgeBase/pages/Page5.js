import {Card, CardBody} from "@nextui-org/card";
import {Nav} from "../../LandingPage/Nav";

export const Page5 = () => {
    return (
        <div className={"container max-w-full overflow-y-hidden"}>
            <Nav/>
            <section
                className="p-5 lg:p-10 lg:pr-[65px] h-full lg:min-h-[100vh] flex flex-col gap-4 items-center w-full">
                <div className={"flex flex-col justify-between font-bigstem"}>
                    <h1 className={"text-[4em] md:text-[8em] lg:text-6xl uppercase text-wrap"}>
                        Инвестиции в криптовалюту: Полный гид для начинающих
                    </h1>
                    <div className={"text-4xl md:text-5xl lg:text-6xl uppercase"}>
                        Узнайте, как начать инвестировать в криптовалюту. Пошаговое руководство для начинающих. Советы,
                        риски и возможности криптоинвестирования.
                    </div>
                </div>
                <Card shadow={'none'} radius={"sm"}
                      className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                    <CardBody
                        className={"p-5 py-3 h-full flex justify-center lg:px-[8rem] lg:py-[8rem] text-center font-bajazzo " +
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
        </div>
    )
}