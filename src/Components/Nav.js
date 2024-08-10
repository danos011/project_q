import {
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {useState} from "react";

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
                className={`w-full mt-0 h-full py-4 flex justify-end bg-transparent font-bigstem`}
                position="sticky"
                onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className={"w-[10%]"} justify={'end'}>
                <NavbarMenuToggle className={"text-white"} isSelected={true}
                                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarMenu  className={"bg-transparent mt-[30px] flex flex-col gap-[4rem]"}>
                <NavbarMenuItem onClick={() => handleSelect('aboutus')} href={"#about us"}
                                className={" h-[60px] flex flex-row gap-3"}>
                    <div className={"w-[5px] h-full bg-white"}/>
                    <div
                        color={"foreground"}
                        className="w-full pt-4 text-white bg-transparent  uppercase cursor-pointer text-[3em] hover:text-[#7e3aae]"
                    >
                        сферы деятельности
                    </div>
                </NavbarMenuItem>

                <div className={"flex flex-col"}>
                    <NavbarMenuItem onClick={() => handleSelect('web3')} href={"#web3"}
                                    className={" h-[60px] flex flex-row gap-3"}>
                        <div className={"w-[5px] h-full bg-white"}/>
                        <div
                            color={"foreground"}
                            className="w-full pt-4 text-white bg-transparent  uppercase cursor-pointer text-[3em] hover:text-[#7e3aae]"
                        >
                            web3
                        </div>
                    </NavbarMenuItem>

                    <NavbarMenuItem onClick={() => handleSelect('trading')} href={"#trading"}
                                    className={" h-[60px] flex flex-row gap-3"}>
                        <div className={"w-[5px] h-full bg-white"}/>
                        <div
                            color={"foreground"}
                            className="w-full pt-4 text-white bg-transparent  uppercase cursor-pointer text-[3em] hover:text-[#7e3aae]"
                        >
                            трейдинг
                        </div>
                    </NavbarMenuItem>

                    <NavbarMenuItem onClick={() => handleSelect('invest')} href={"#invest"}
                                    className={" h-[60px] flex flex-row gap-3"}>
                        <div className={"w-[5px] h-full bg-white"}/>
                        <div
                            color={"foreground"}
                            className="w-full pt-4 text-white bg-transparent  uppercase cursor-pointer text-[3em] hover:text-[#7e3aae]"
                        >
                            инвестиции
                        </div>
                    </NavbarMenuItem>
                </div>

                <NavbarMenuItem onClick={() => handleSelect('portfolio')} href={"#portfolio"}
                                className={" h-[60px] flex flex-row gap-3"}>
                    <div className={"w-[5px] h-full bg-white"}/>
                    <div
                        color={"foreground"}
                        className="w-full pt-4 text-white bg-transparent  uppercase cursor-pointer text-[3em] hover:text-[#7e3aae]"
                    >
                        портфолио
                    </div>
                </NavbarMenuItem>

                <NavbarMenuItem onClick={() => handleSelect('contactus')} href={"#contactus"}
                                className={" h-[60px] flex flex-row gap-3"}>
                    <div className={"w-[5px] h-full bg-white"}/>
                    <div
                        color={"foreground"}
                        className="w-full pt-4 text-white bg-transparent  uppercase cursor-pointer text-[3em] hover:text-[#7e3aae]"
                    >
                        контакты
                    </div>
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    )
}
