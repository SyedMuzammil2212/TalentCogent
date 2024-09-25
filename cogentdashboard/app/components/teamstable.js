"use client";
import Downarrow from '@/public/icons/downarrow';
import Filter from '@/public/icons/filter';
import Serach from '@/public/icons/serach';
import Sorticon from '@/public/icons/sorticon';
import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    TableCell
} from "@/components/ui/table";
import Tablesort from '@/public/icons/tablesort';
import Avatar from '@/public/icons/avatar';
import Projecticon from '@/public/icons/projecticon';
import Documenticon from '@/public/icons/documenticon';
import Kebabmenu from '@/public/icons/kebabmenu';
import Activeicon from '@/public/icons/activeicon';
import Absenticon from '@/public/icons/absenticon';

const Teamstable = () => {
    // Initial data for the team members
    const initialData = [
        {
            name: "James Brown",
            email: "james@email.com",
            title: "Marketing Manager",
            joinDate: "Since Aug, 2021",
            projectname: "Monday",
            projectDes: "Campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
        },
        {
            name: "Sophia Williams",
            email: "sophia@email.com",
            title: "HR Assistant",
            joinDate: "Since July, 2021",
            projectname: "Monday",
            projectDes: "Campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
        },
        {
            name: "Arthur Taylor",
            email: "arthur@email.com",
            title: "Entrepreneur / CEO",
            joinDate: "Since June, 2021",
            projectname: "Monday",
            projectDes: "Campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
        },
        {
            name: "Emma Wright",
            email: "emma@email.com",
            title: "Front-end Developer",
            joinDate: "Since Sep, 2022",
            projectname: "Monday",
            projectDes: "Campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
        },
        {
            name: "Matthew Johnson",
            email: "matthew@email.com",
            title: "Data Software Engineer",
            joinDate: "Since Feb, 2022",
            projectname: "Monday",
            projectDes: "Campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
        },
        {
            name: "Laura Perez",
            email: "laura@email.com",
            title: "Fashion Designer",
            joinDate: "Since Mar, 2022",
            projectname: "Monday",
            projectDes: "Campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
        },
        {
            name: "Wei Chen",
            email: "wei@email.com",
            title: "Operations Manager",
            joinDate: "Since July, 2021",
            projectname: "Monday",
            projectDes: "Campaign Strategy",
            documentName: "brown-james.pdf",
            docSize: "2.3MB",
        },
    ];

    // Function to randomly assign status
    const getRandomStatus = () => {
        const statuses = ["Active", "Absent"];
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    // State to hold the team data with status
    const [teamData, setTeamData] = useState([]);

    // Populate the team data with random status on component mount
    useEffect(() => {
        const updatedData = initialData.map(member => ({
            ...member,
            status: getRandomStatus(), // Assign random status to each team member
        }));
        setTeamData(updatedData);
    }, []);

    return (
        <div className='tableWrapper px-[3rem] py-[1rem]'>
            <div className="top flex justify-between items-center">
                {/* ... Top section with tabs and search/filter/sort ... */}
            </div>
            <div className="bottom">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F6F8FA]">
                            <TableHead>
                                <input className='w-[20px] h-[20px] shadow-[0px_2px_2px_0px_rgba(27,28,29,0.12)]' type="checkbox" />
                            </TableHead>
                            <TableHead><div className="one flex items-center gap-2"> <div className='header text-[#525866]'> Member Name</div> <Tablesort /></div></TableHead>
                            <TableHead><div className="flex items-center gap-2"> <div className='header text-[#525866]'>Title</div> <Tablesort /></div></TableHead>
                            <TableHead><div className="flex items-center gap-2"> <div className='header text-[#525866]'>Project</div> <Tablesort /></div></TableHead>
                            <TableHead className="text-left text-[#525866]">Member Documents</TableHead>
                            <TableHead className="text-left text-[#525866]">Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {teamData.map((member, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    <input className='w-[20px] h-[20px]' type="checkbox" />
                                </TableCell>

                                <TableCell className="font-medium">
                                    <div className='flex gap-4'>
                                        <Avatar />
                                        <div className="text flex flex-col">
                                            <p className='text-[#0A0D14] text-[16px]'>{member.name}</p>
                                            <p className='text-[#525866]'>{member.email}</p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="font-medium">
                                    <div className='flex gap-4'>
                                        <div className="text flex flex-col">
                                            <p className='font-normal text-[16px] text-[#0A0D14]'>{member.title}</p>
                                            <p className='text-[#525866]'>{member.joinDate}</p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="font-medium">
                                    <div className='flex gap-4'>
                                        <Projecticon />
                                        <div className="text flex flex-col">
                                            <p>{member.projectname}</p>
                                            <p className='text-[#525866]'>{member.projectDes}</p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="font-medium">
                                    <div className='flex gap-4'>
                                        <Documenticon />
                                        <div className="text flex flex-col">
                                            <p>{member.documentName}</p>
                                            <p className='text-[#525866]'>{member.docSize}</p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="font-medium">
                                    <div className='flex gap-4'>
                                        <div className="flex items-center border-2 border-[#E2E4E9] px-3 py-1 rounded-lg gap-2 text-[#525866]">
                                            {/* Conditionally render the status icon */}
                                            {member.status === "Active" ? <Activeicon /> : <Absenticon />}
                                            {member.status}
                                        </div>
                                        <Kebabmenu />
                                    </div>
                                </TableCell>
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
    );
};

export default Teamstable;