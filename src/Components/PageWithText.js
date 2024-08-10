import {Card, CardBody} from "@nextui-org/react";

export const PageWithText = ({title, coloredText, afterTitle, description, textId}) => {


    return (
        <section id={textId} className="p-10 pr-[65px] h-[100vh] flex flex-col gap-4 items-center gap-3 w-full">
            <div className={"flex flex-col justify-between font-bigstem"}>
                <h1 className={"text-9xl uppercase"}>
                    {title}<a className={"text-[#7e3aae]"}>{coloredText}</a>
                </h1>
                <div className={"text-6xl uppercase"}>
                    {afterTitle}
                </div>
            </div>
            <Card shadow={'none'} radius={"sm"}
                  className={"w-[75%] max-h-[65vh] bg-[#32327e]/[0.21] text-white"}>
                <CardBody className={"px-[8rem] py-[8rem] text-center font-bajazzo text-3xl font-[200]"}>
                    {description}
                </CardBody>
            </Card>
        </section>
    )
}