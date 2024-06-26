"use client"

import React from 'react'
import ProfileDropdownMenu from './profile-dropdown'
import NotificationDropdown from './notification-dropdown'
import SettingDropdown from './setting-dropdown'
import RefreshButton from '../../components/button/refresh-button'

const Topbar = () => {
    return (
        <div className='h-full'>
            <div className='h-full ml-auto flex items-center'>
                <div className='ml-auto flex space-x-2'>
                    <RefreshButton />
                    <NotificationDropdown />
                    <SettingDropdown />
                    <ProfileDropdownMenu />
                </div>
            </div>
        </div>
    )
}

export default Topbar;