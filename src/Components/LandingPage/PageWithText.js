import {Card, CardBody} from "@nextui-org/card";

export const PageWithText = ({title, coloredText, afterTitle, description, textId}) => {


    return (
        <section id={textId}
                 className="p-5 lg:p-10 lg:pr-[65px] h-full lg:h-[100vh] flex flex-col gap-4 items-center w-full">
            <div className={"flex flex-col justify-between font-bigstem"}>
                <h1 className={"text-[4em] md:text-[8em] lg:text-9xl uppercase"}>
                    {title}<a className={"text-[#7e3aae]"}>{coloredText}</a>
                </h1>
                <div className={"text-4xl md:text-5xl lg:text-6xl uppercase"}>
                    {afterTitle}
                </div>
            </div>
            <Card shadow={'none'} radius={"sm"}
                  className={"w-[75%] mx-auto h-full bg-[#32327e]/[0.21] text-white"}>
                <CardBody
                    className={"p-5 py-3 h-full flex justify-center lg:px-[8rem] lg:py-[8rem] text-center font-bajazzo " +
                        "text-xl md:text-3xl font-[100] md:font-[200]"}>
                    {description}
                </CardBody>
            </Card>
        </section>
    )
}