"use client";
import Downarrow from '@/public/icons/downarrow';
import Filter from '@/public/icons/filter';
import Serach from '@/public/icons/serach';
import Sorticon from '@/public/icons/sorticon';
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Tablesort from '@/public/icons/tablesort';

const Teamstable = () => {
    const invoices = [
        {
            name: "",
            email: "Paid",
            title: "$250.00",
            joinDate: "Credit Card",
            projectname: "monday",
            projectDes:"campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
            status: ["Active","Absent"]
        },
        {
            name: "",
            email: "Pending",
            title: "$150.00",
            joinDate: "PayPal",
            projectname: "monday",
            projectDes:"campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
            status: ["Active","Absent"]
        },
        {
            name: "",
            email: "Unpaid",
            title: "$350.00",
            joinDate: "Bank Transfer",
            projectname: "monday",
            projectDes:"campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
            status: ["Active","Absent"]
        },
        {
            name: "",
            email: "Paid",
            title: "$450.00",
            joinDate: "Credit Card",
            projectname: "monday",
            projectDes:"campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
            status: ["Active","Absent"]
        },
        {
            name: "",
            email: "Paid",
            title: "$550.00",
            joinDate: "PayPal",
            projectname: "monday",
            projectDes:"campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
            status: ["Active","Absent"]
        },
        {
            name: "",
            email: "Pending",
            title: "$200.00",
            joinDate: "Bank Transfer",
            projectname: "monday",
            projectDes:"campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
            status: ["Active","Absent"]
        },
        {
            name: "",
            email: "Unpaid",
            title: "$300.00",
            joinDate: "Credit Card",
            projectname: "monday",
            projectDes:"campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
            status: ["Active","Absent"]
        },
    ]


    const [search, setSearch] = useState();
    const [tab, setTab] = useState(1);

    return (
        <div className='tableWrapper px-[3rem] py-[1rem] '>
            <div className="top flex justify-between items-center">
                <div className="leftbuttons w-fit bg-[#F6F8FA] h-[3rem] px-6 py-4 flex items-center justify-center gap-8 rounded-lg text-[#868C98]">
                    <button className={`${tab == 1 ? "px-6 py-1 bg-white rounded-md text-[#0A0D14] shadow-[0px_6px_10px_0px_rgba(27,28,29,0.06),_0px_2px_4px_0px_rgba(27,28,29,0.02)] " : "bg-[#F6F8FA "} text-medium `}>
                        All
                    </button>

                    <button className={`${tab == 2 ? "px-6 py-1 bg-white rounded-md text-[#0A0D14] shadow-[0px_6px_10px_0px_rgba(27,28,29,0.06),_0px_2px_4px_0px_rgba(27,28,29,0.02)] " : "bg-[#F6F8FA "} text-medium `} >
                        Active
                    </button>

                    <button className={`${tab == 3 ? "px-6 py-1 bg-white rounded-md text-[#0A0D14] shadow-[0px_6px_10px_0px_rgba(27,28,29,0.06),_0px_2px_4px_0px_rgba(27,28,29,0.02)] " : "bg-[#F6F8FA "} text-medium `} >
                        Absent
                    </button>
                </div>

                <div className="rightsection flex gap-6 py-2 px-4">
                    <div className=" border-[1px] border-[#EFEFEF] flex items-center w-[500px] h-[44px] px-4 rounded-lg  ">
                        <Serach />
                        <input
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            className=" w-full pl-4 h-full outline-none placeholder:inter placeholder:font-regular placeholder:text-[16px] placeholder:text-[#DCDCDC] "
                            placeholder="Search Here..."
                        />
                    </div>
                    <div className="export flex gap-2 items-center justify-center px-4 py-1 border-2 border-[#E2E4E9] rounded-[10px] text-[#525866] font-medium shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]">
                        <Filter />
                        <button >Filter</button>
                    </div>
                    <div className="export flex gap-2 items-center justify-center px-4 py-1 border-2 border-[#E2E4E9] rounded-[10px] text-[#525866] font-medium shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]">
                        <Sorticon />
                        <button >Sort by</button>
                        <Downarrow size={28} />
                    </div>
                </div>
            </div>
            <div className="bottom">

                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F6F8FA] " >
                            <TableHead>
                                <input className='w-[20px] h-[20px] shadow-[0px_2px_2px_0px_rgba(27,28,29,0.12)]' type="checkbox" name="" id="" />
                            </TableHead>
                            <TableHead > <div className="one flex items-center gap-2"> <div> Member Name</div> <Tablesort /></div> </TableHead>
                            <TableHead >
                                <div className="flex items-center gap-2">
                                    <div >
                                        Title </div> <Tablesort /></div> 
                            </TableHead>
                            <TableHead > <div className="flex items-center gap-2">
                                <div>
                                Project
                                </div> <Tablesort/>
                                </div> </TableHead>
                            <TableHead className="text-left">Member Documents  </TableHead>
                            <TableHead className="text-left">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-left">{invoice.totalAmount}</TableCell>
                                <TableCell className="text-left">{invoice.totalAmount}</TableCell>
                                <TableCell className="text-left">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}></TableCell>
                            <TableCell className="text-left"></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}

export default Teamstable