import {Link} from "react-router-dom";

export const PageNav = () => {
    return (
        <Link to={'/'}
              className={"fixed text-white font-bigstem  py-2 px-5 text-xl top-0 right-0 mt-5 mr-5 bg-[#32327e]/[0.21] rounded-xl cursor-pointer hover:text-[#7e3aae]"}>
            HOME
        </Link>
    )
}