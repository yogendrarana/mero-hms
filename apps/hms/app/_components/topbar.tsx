import React from 'react'
import { Bell, User } from 'lucide-react'

const Topbar = () => {
    return (
        <div className='h-full'>

            <div className='h-full ml-auto flex items-center'>
                <button>
                    <Bell />
                </button>

                <button>
                    <User />
                </button>
            </div>
        </div>
    )
}

export default Topbar