import {ContactButton} from "./ContactButton";
import {isMobile} from "react-device-detect";

export const ContactUs = () => {


    return (
        <section id={'contactus'}
                 className="p-5 md:p-6 lg:pr-[65px] h-[100vh] flex flex-col gap-[30px] w-full">
            {!isMobile && <img src="/image/contatUs.webp" loading={'lazy'} alt="contactUs"
                               className={"absolute w-fit left-1/2 translate-x-[-50%] translate-y-[-13%]"}/>}
            <h1 className={"font-bigstem text-[5em] md:text-[8em] lg:text-9xl text-center"}>
                contact us
            </h1>
            <div className={"flex items-center mx-auto h-full"}>
                <img
                    className={'h-fit w-[250px] md:h-[315px] md:pt-[4vh] ' +
                        'rounded-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] object-cover'}
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