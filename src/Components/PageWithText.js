import {Card, CardBody} from "@nextui-org/react";

export const PageWithText = ({title, coloredText, afterTitle, description, textId}) => {


    return (
        <section id={textId}
                 className="p-5 md:p-10 md:pr-[65px] pr-0 h-[80vh] lg:h-[100vh] flex flex-col gap-4 items-center gap-3 w-full">
            <div className={"flex flex-col justify-between font-bigstem"}>
                <h1 className={"text-[6em] lg:text-9xl uppercase"}>
                    {title}<a className={"text-[#7e3aae]"}>{coloredText}</a>
                </h1>
                <div className={"text-4xl lg:text-6xl uppercase"}>
                    {afterTitle}
                </div>
            </div>
            <Card shadow={'none'} radius={"sm"}
                  className={"w-[75%] max-h-[65vh] bg-[#32327e]/[0.21] text-white"}>
                <CardBody
                    className={"p-5 md:px-[8rem] md:py-[8rem] text-center font-bajazzo text-xl md:text-3xl font-[200]"}>
                    {description}
                </CardBody>
            </Card>
        </section>
    )
}