import {Card, CardBody, Image} from "@nextui-org/react";
import {useState} from "react";

export const ContactButton = ({image, link, name, CopyToBuffer = false}) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isCopy, setIsCopy] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(!isPressed);
    };

    const handleMouseUp = () => {
        setIsPressed(!isPressed);
    };

    const handleNewWindow = () => {
        window.open(link);
    }

    const handleCopyToBuffer = () => {
        setIsCopy(true)
        navigator.clipboard.writeText(link)
            .catch(err => {
                console.log('Something went wrong', err);
            });
        setTimeout(() => {
            setIsCopy(false)
        }, 3000);
    }


    return (
        <div onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onClick={CopyToBuffer ? handleCopyToBuffer : handleNewWindow}
             className={`flex flex-col self-end mb-4 cursor-pointer ${isPressed ? 'scale-compressed' : ''} 
             scale-animation ${name === '+7 931 324 4444' ? "mt-8" : null}`}>

            {name === '+7 931 324 4444' ?
                <div className={"ml-7 h-full"}>
                    <Image
                        width={120}
                        height={120}
                        src={image}
                    />
                </div>
                :
                <div className={"h-full"}>
                    <Image
                        width={180}
                        height={180}
                        src={image}
                    />
                </div>
            }
            <Card shadow={'none'} radius={"sm"}
                  className={`bg-[#32327e]/[0.21] text-white w-[185px] h-[52px] ${name !== '+7 931 324 4444' ? "mb-10" : 'mt-4'}`}>
                <CardBody
                    className={"px-10 py-3 flex justify-center items-center font-bigstem text-xl font-thin uppercase text-wrap"}>
                    {CopyToBuffer ?
                        isCopy ? <div className={"text-base"}>Скопрованно в буфер</div> :
                            name
                        : name}
                </CardBody>
            </Card>
        </div>
    )
}