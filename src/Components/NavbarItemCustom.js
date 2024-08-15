import {NavbarMenuItem} from "@nextui-org/react";

export const NavbarItemCustom = ({handleSelect, anchor, name}) => {
    return <>
        <NavbarMenuItem onClick={() => handleSelect(anchor)} href={`#${anchor}`}
                        className={"group h-full md:h-[10vh] flex flex-row gap-3"}>
            <div className={"w-[1vw] md:w-[0.5vw] h-full bg-white group-hover:bg-[#7e3aae]"}/>
            <div
                color={"foreground"}
                className="w-fit flex justify-start items-center text-white bg-transparent uppercase cursor-pointer text-[2em]
                        group-hover:text-[#7e3aae] leading-none"
            >
                {name}
            </div>
        </NavbarMenuItem>
    </>
}