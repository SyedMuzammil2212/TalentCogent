import React from 'react';

function Navbar({crazy}) {
    return (
        <div className={'w-full p-4 flex items-center justify-between bg-black text-white rounded-b-2xl' +
            '   '}>
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