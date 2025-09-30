import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

export const UserDashboard = () => {
  useUserAuth();
  return (
    <div className='h-[200px] bg-amber-700 text-black'>
      Hello Dashboard
    </div>
  )
}

export default UserDashboard
