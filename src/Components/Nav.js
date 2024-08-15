import {
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {useState} from "react";
import {NavbarItemCustom} from "./NavbarItemCustom";

export const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const handleSelect = (id) => {
        setIsMenuOpen(false)
        scrollToSection(id)
    };

    return (
        <Navbar isBlurred={isMenuOpen} isMenuOpen={isMenuOpen}
                className={`w-full mt-0 h-full lg:py-2 lg:py-4 flex justify-end bg-transparent font-bigstem`}
                position="sticky"
                onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className={"w-[10%]"} justify={'end'}>
                <NavbarMenuToggle className={"text-white"} isSelected={true}
                                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarMenu className={"bg-transparent p-6 lg:mt-[30px] flex flex-col gap-[4rem]"}>
                <NavbarItemCustom handleSelect={handleSelect} name={'сферы деятельности'} anchor={'aboutus'}/>

                <div className={"flex flex-col"}>
                    <NavbarItemCustom handleSelect={handleSelect} name={'web3'} anchor={'web3'}/>
                    <NavbarItemCustom handleSelect={handleSelect} name={'трейдинг'} anchor={'trading'}/>
                    <NavbarItemCustom handleSelect={handleSelect} name={'инвестиции'} anchor={'invest'}/>
                </div>

                <NavbarItemCustom handleSelect={handleSelect} name={'портфолио'} anchor={'portfolio'}/>
                <NavbarItemCustom handleSelect={handleSelect} name={'контакты'} anchor={'contactus'}/>
            </NavbarMenu>
        </Navbar>
    )
}
