import {Image} from "@nextui-org/react";
import {ContactButton} from "./ContactButton";
import {isMobile} from "react-device-detect";

export const ContactUs = () => {


    return (
        <section id={'contactus'} className="p-6 pr-[65px] max-h-[100vh] h-[110vh] flex flex-col gap-[30px] w-full">
            { !isMobile && <img src="/image/contatUs.webp" loading={'lazy'} alt="contactUs"
                               className={"absolute w-fit left-1/2 translate-x-[-50%] translate-y-[-13%]"}/>}
            <h1 className={"font-bigstem text-9xl text-center"}>
                contact us
            </h1>
            <div className={"block mx-auto h-full"}>
                <Image
                    className={'h-fit rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]'}
                    width={250}
                    height={315}
                    loading={'lazy'}
                    alt="Q image"
                    src="/image/q.webp"
                />
            </div>
            <div className={"flex flex-col md:flex-row justify-between h-fit gap-5 px-[5rem] items-center"}>
                <ContactButton image={'/image/telegram.webp'} link={"https://t.me/OverheardinQ"} name={'telegram'}/>
                <ContactButton image={'/image/phone.webp'} name={'+7 931 324 4444'} link={"+7 931 324 4444"} CopyToBuffer/>
                <ContactButton image={'/image/mail.webp'} link={"Partner@qventure.ru"} name={'email'} CopyToBuffer/>
            </div>
        </section>
    )
}