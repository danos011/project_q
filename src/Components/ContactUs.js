import {Card, CardBody, Image} from "@nextui-org/react";
import {ContactButton} from "./ContactButton";
import {isMobile} from "react-device-detect";
import {useState} from "react";

export const ContactUs = () => {


    return (
        <section id={'contactus'}
                 className="p-5 md:p-6 lg:pr-[65px] max-h-[90vh] h-[90vh] flex flex-col gap-[30px] w-full">
            {!isMobile && <img src="/image/contatUs.webp" loading={'lazy'} alt="contactUs"
                               className={"absolute w-fit left-1/2 translate-x-[-50%] translate-y-[-13%]"}/>}
            <h1 className={"pt-3 font-bigstem text-7xl md:text-9xl text-center"}>
                contact us
            </h1>
            <div className={"block mx-auto h-full"}>
                <Image
                    className={'h-fit pt-[4vh] rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] object-cover'}
                    width={250}
                    height={315}
                    loading={'lazy'}
                    alt="Q image"
                    src="/image/q.webp"
                />
            </div>
            <div className={"flex flex-row justify-between h-fit gap-5 md:px-[5rem] items-center"}>
                <ContactButton image={'/image/telegram.webp'} link={"https://t.me/OverheardinQ"} name={'telegram'} type={'tel'}/>
                <ContactButton  name={'+7 931 324 4444'} link={"+7 931 324 4444"} type={'phone'}/>
                <ContactButton image={'/image/mail.webp'} link={"Partner@qventure.ru"} name={'email'} type={'email'}/>
            </div>
        </section>
    )
}