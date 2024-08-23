import {PagesItems} from "./PagesItems";

const linkList = [
    {
        index: 1,
        name: "Инвестиции в криптовалюту"
    },
    {
        index: 2,
        name: "Гид по инвестициям"
    },
    {
        index: 3,
        name: "Инвестиции в стартапы"
    },
    {
        index: 4,
        name: "Инвестиции в активы"
    },
    {
        index: 5,
        name: "Цифровые инвестиции"
    },
    {
        index: 6,
        name: "Инвестиции в технологии"
    },
]


export const KnowledgeBase = () => {
    return (
        <section id={'knowledgeBase'} className="p-5 lg:p-6 lg:pr-[65px] h-full min-h-[100vh] flex flex-col gap-[2rem] w-full">
            <h1 className={"font-bigstem text-[6em] md:text-9xl text-center"}>
                Knowledge Base
            </h1>
            <div className="flex flex-wrap gap-3 md:gap-5 px-6 lg:pl-[5rem] lg:pr-[1rem] pb-10">
                {linkList.map((item, index) => (
                    <PagesItems key={index} item={item} index={index}/>
                ))}
            </div>
        </section>
    )
}