import React from 'react';
import Navbar from "@/app/components/navbar";
import Mainbody from "@/app/components/mainbody";

function Page() {
    return (
        <div className={" w-full relative bg-black "} >
            <Navbar crazy={"Logo6"} />
            <Mainbody/>

        </div>
    );
}

export default Page;