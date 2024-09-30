import Globe from '@/public/icons/globe'
import Rightarrow from '@/public/icons/rightarrow'
import Usflag from '@/public/icons/usflag'
import React from 'react'

const Generalsettings = () => {
  return (
    <div>
      <div className="wrapper w-[70%] h-screen justify-between flex">
        <div className="left h-[100%] w-[50%] py-10">
          <div className="menu h-fit w-fit border-2 rounded-2xl p-4 flex flex-col gap-3">
            <p className='text-[#868C98] tracking-wider ' >SELECT MENU</p>
            <div className="content flex items-center p-2 bg-[#F6F8FA] rounded-lg justify-between px-2 gap-3">
              <Globe />
              <p className='text-[#0A0D14] w-fit text-[16px] font-medium' >Regional Prefrence</p>
              <div className=" flex items-center justify-center shadow-[0px_4px_8px_rgba(27,28,29,0.06)] container h-[30px] w-[30px] bg-white rounded-2xl">
                <Rightarrow />
              </div>
            </div>
          </div>
        </div>
      <div className="center h-[100%] w-[50%] bg-white ">

    <div className="contacts my-10 h-[500px]">

            <div className="uppertext pb-4 border-b-2">
              <p className='text-[#0A0D14] font-semibold text-lg' >Regional Preferences</p>
              <p className='text-[#525866]' >Select your preferences for your region.</p>
            </div>
            <div className="inputs flex flex-col">
              <label htmlFor="">Language</label>
              <div className="dropdown">
                <div className="flag">
                  <Usflag/>
                </div>
                <div className="menu">
                  <div className="input w-full">
                  
                  </div>

                </div>
              </div>

          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Generalsettings