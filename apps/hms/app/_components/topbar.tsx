"use client"

import React from 'react'
import ProfileDropdownMenu from './profile-dropdown'
import NotificationDropdown from './notification-dropdown'

const Topbar = () => {
    return (
        <div className='h-full'>
            <div className='h-full ml-auto flex items-center'>
                <div className='ml-auto flex space-x-2'>
                    <NotificationDropdown />
                    <ProfileDropdownMenu />
                </div>
            </div>
        </div>
    )
}

export default Topbar;