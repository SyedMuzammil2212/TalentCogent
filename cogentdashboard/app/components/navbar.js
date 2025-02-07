import React from 'react';

function Navbar({crazy}) {
    return (
        <div className={'w-full p-4 flex items-center justify-between bg-white text-black rounded-b-2xl' +
            ' shadow-xl sticky top-0 left-0 z-50   '}>
            <div> {crazy} </div>

            <div className={' flex items-center justify-center gap-4 '} >
                <span>One</span>
                <span>Three</span>
                <span>Four</span>
                <span>Five</span>
            </div>

            <div>
                More
            </div>
        </div>
    );
}

export default Navbar;