import {useEffect, useState} from "react";
import {NavbarItemCustom} from "./NavbarItemCustom";
import {Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle} from "@nextui-org/navbar";
import {Link} from "react-router-dom";

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
        <>
            <style>{
                isMenuOpen ?
                    `body {
                        overflow: hidden;
                    }` :
                    null
            }</style>
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
                    <NavbarItemCustom handleSelect={handleSelect} name={'база знаний'} anchor={'knowledgeBase'}/>
                    <NavbarItemCustom handleSelect={handleSelect} name={'портфолио'} anchor={'portfolio'}/>
                    <NavbarItemCustom handleSelect={handleSelect} name={'контакты'} anchor={'contactus'}/>
                </NavbarMenu>
            </Navbar>
        </>
    )
}
