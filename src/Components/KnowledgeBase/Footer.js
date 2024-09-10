import {Link} from "react-router-dom";

export const Footer = ({next, prev}) => {
    return <footer className={"flex justify-between mx-5 md:mx-10 mb-5"}>
        {
            prev ?
                <Link
                    className={"text-white flex justify-start font-bigstem  py-2 px-5 text-xl  bg-[#32327e]/[0.21] rounded-xl cursor-pointer hover:text-[#7e3aae]"}
                    to={`/${prev}`}>Prev</Link>
                :
                <div/>
        }
        {
            next ?
                <Link
                    className={"text-white flex justify-end font-bigstem  py-2 px-5 text-xl bg-[#32327e]/[0.21] rounded-xl cursor-pointer hover:text-[#7e3aae]"}
                    to={`/${next}`}>Next</Link>
                :
                <div/>
        }
    </footer>
}