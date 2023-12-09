/**
 Created by: carlos
 At: 9/12/23 - 13:02
 */
import {CiBookmarkCheck, CiLogout} from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import {SideBarItem} from "@/components/SideBar/SideBarItem";
import {IoCalendarOutline, IoCheckboxOutline, IoListOutline} from "react-icons/io5";

const menuItems= [
    {
        icon:<IoCalendarOutline/>,
        title:'Dashboard',
        path:'/dashboard'
    },
    {
        icon:<IoCheckboxOutline/>,
        title:'Rest todos',
        path:'/dashboard/rest-todos'
    },
    {
        icon:<IoListOutline/>,
        title:'Server action',
        path:'/dashboard/server/todos'
    }
]

export const SideBar = () => {
    return (
        <aside
            className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    {/* TODO: Next/Link hacia dashboard */}
                    <Link href="/dashboard" title="home">
                        {/* Next/Image */}
                        <Image width={128} height={64} src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/a57a4dc79978ad9e141972054ce9f71e/nextjs3.webp" className="w-32"
                             alt="tailus logo"/>
                    </Link>
                </div>
                <div className="mt-8 text-center">
                    {/* Next/Image */}
                    <Image width={100} height={100} src="https://cdn-icons-png.flaticon.com/512/219/219970.png" alt=""
                         className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>
                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        menuItems.map(item=><SideBarItem key={item.path} title={item.title} href={item.path} logo={item.icon}/> )
                    }


                </ul>
            </div>
            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout/>
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside>
    );
};
