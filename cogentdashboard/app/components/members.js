import Plus from '@/public/icons/plus'
import Share from '@/public/icons/share'
import React from 'react'

const Members = () => {
  return (
    <div className="wrapper px-[3rem]">
        <div className='navWrapper flex w-[100%] h-[6rem] items-center justify-between border-b-2 border-[#E2E4E9] ' >
        <div className="left flex">
              <div className="icon">
                
              </div>
              <div className="text px-[1rem]">
                <p className='font-semibold text-lg text-[#0A0D14]	'>Members</p>
                <p className='text-[#525866]'>Display all the team members and essential details.</p>
              </div>
        </div>
        <div className="right flex px-2 gap-4 ">
                <div className="export flex gap-4 items-center justify-center px-4 py-2 border-2 border-[#E2E4E9] rounded-[10px] text-[#525866] font-medium shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]">
                    <Share/>
                <button >Export</button>
                </div>

                <div className="Invite flex gap-4 items-center bg-[#1F3AF1] justify-center px-4 py-2 rounded-[10px] text-[#ffffff] font-medium shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]">
                    <Plus/>
                <button className='' >Invite Member</button>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Members