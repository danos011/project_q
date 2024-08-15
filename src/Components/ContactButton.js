import {Card, CardBody, Image} from "@nextui-org/react";
import {useState} from "react";

export const ContactButton = ({image, link, name, type}) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(!isPressed);
    };

    const handleMouseUp = () => {
        setIsPressed(!isPressed);
    };

    const handleNewWindow = () => {
        if (type === 'tel') {
            window.open(link);
        }
    }

    const getHref = () => {
        switch (type) {
            case 'email':
                return 'mailto: Partner@qventure.ru'
            case 'phone':
                return 'tel:+79313244444'
            default:
                return '#'
        }
    }


    return (
        <a
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleNewWindow}
            href={getHref}
            className={`flex flex-col items-center mb-4 cursor-pointer transition-transform ${isPressed ? 'scale-90' : 'scale-100'}`}
        >
            {type !== 'phone' && (
                <div className="w-16 h-16 md:w-24 md:h-24 mb-2">
                    <img
                        src={image}
                        alt={type}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            )}
            <Card shadow="none" radius="sm" className="bg-[#32327e]/[0.21] text-white w-24 h-16 md:w-32 md:h-12 flex items-center justify-center">
                <CardBody className="justify-center p-0 md:py-2 text-center font-light text-sm text-xl uppercase font-bigstem">
                    {name}
                </CardBody>
            </Card>
        </a>
    )
}