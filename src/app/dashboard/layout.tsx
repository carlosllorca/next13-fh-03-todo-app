/**
 Created by: carlos
 At: 9/12/23 - 12:13
 */
import {CiBellOn, CiBookmarkCheck, CiChat1, CiLogout, CiMenuBurger, CiSearch} from "react-icons/ci";
import {SideBar, TopMenu} from "@/components";
import {ReactNode} from "react";

export default function DashboardLayout({children}:{children:ReactNode}) {
    return (
        <>
            <SideBar/>
            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                <TopMenu/>

                <div className="px-6 pt-6">
                    {children}
                </div>
            </div>
        </>
    );
};
