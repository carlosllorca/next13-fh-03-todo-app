'use client'
import {CiBookmarkCheck} from "react-icons/ci";
import Link from "next/link";
import {ReactElement} from "react";
import {usePathname} from "next/navigation";
interface Props {

    title:string
    logo?:ReactElement,
    href?:string
}
export const SideBarItem = ({href="",title,logo=<CiBookmarkCheck size={30}/>}:Props) => {
    const pathName = usePathname()
    return (
        <li>
            <Link href={href}
               className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${href===pathName?'text-white bg-gradient-to-r from-sky-600 to-cyan-400':''}`}>
                {logo}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    );
};
