import Bell from '@/public/icons/bell'
import Serach from '@/public/icons/serach'
import Usericon from '@/public/icons/usericon'
import React from 'react'

const TeamsNav = () => {
  return (
    <div className="wrapper px-[3rem]">
        <div className='navWrapper flex w-[100%] h-[6rem] items-center justify-between border-b-2 border-[#E2E4E9]' >
        <div className="left flex">
              <div className="icon">
                <Usericon/>
              </div>
              <div className="text px-[1rem]">
                <p className='font-semibold text-lg text-[#0A0D14]	'>Teams</p>
                <p className='text-[#525866]'>Manage and collaborate within your organization's teams.</p>
              </div>
        </div>
        <div className="right flex px-2 gap-4 ">
                <div className='p-2 bg-red cursor-pointer' ><Serach/></div>
               <div className='p-2 bg-red cursor-pointer'>  <Bell/> </div>
        </div>
    </div>
    </div>
  )
}

export default TeamsNav