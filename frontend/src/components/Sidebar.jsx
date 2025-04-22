import React, { useState} from "react";
import {Link} from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { useMode } from "../context/ModeContext";

import { TbLayoutDashboardFilled,TbWallet, TbLogout } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { LuGoal,LuArrowLeftFromLine,LuArrowRightFromLine } from "react-icons/lu";

const sideBarItems = [
    {name: "Dashboard", href: "/",icon: TbLayoutDashboardFilled },
    {name: "My Wallet", href: "/mywallet",icon: TbWallet },
    {name: "Transactions", href: "/transactions",icon: GrTransaction},
    {name: "Goals", href: "/goals",icon: LuGoal },
]

export default function Sidebar(){
    const [isSidebarOpen,setIsSidebarOpen] = useState(true);
    // const {mode, toggleMode} = useMode();
    
    return(
        <motion.div className={`justify-between p-8 h-svh flex flex-col bg-accent flex-shrink-0 transition-all duration-[250ms] ease-in-out ${isSidebarOpen ? "w-54 " : "w-24 pl-4 pr-2"}` }
        animate={{width: isSidebarOpen ? 230 : 90}}
        >
            <div className="h-full flex flex-col relative">
                <motion.button className="max-w-fit  text-primary-1 rounded-full text_hover p-2 bottom-2 right-4 absolute" onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? <LuArrowLeftFromLine size={24}/> :<LuArrowRightFromLine size={24}/>}</motion.button>

                {/* ====================== navbar ===================== */}
                <nav className="grid gap-4 ">
                    {sideBarItems.map((item,index) => (
                        <Link key={index} to={item.href}>
                            <motion.div className="flex items-center py-2 px-4 text-primary-1 text_hover rounded-lg">
                                <item.icon size={20} className="mr-2"/>

                                <AnimatePresence>

                                {isSidebarOpen && 
                                <motion.span className="whitespace-nowrap" initial={{opacity:0,width:0}}
                                animate={{opacity:1, width: "auto"}}
                                exit={{opacity:1, width: 0}}
                                transition={{duration:0.2, delay: 0.3}}
                                >
                                    {item.name}
                                </motion.span>}

                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
            {/* ================== Lock out ============== */}
            <Link to={"/login"} className=" text_hover rounded-lg  py-2 flex items-center px-4 text-primary-1"><TbLogout size={24} className="mr-2"/>{isSidebarOpen && <span>Logout</span>}</Link>
        </motion.div>
    )
}