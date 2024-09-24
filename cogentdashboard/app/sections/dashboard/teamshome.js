import Members from '@/app/components/members'
import TeamsNav from '@/app/components/teamsnav'
import Teamstable from '@/app/components/teamstable'
import React from 'react'

const Teamshome = () => {
  return (
    <div>
        <TeamsNav/>
        <Members/>
        <Teamstable/>
    </div>
  )
}

export default Teamshome