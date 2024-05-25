"use client"

import React from 'react'
import { columns } from './columns'
import { DataTable } from '@merohms/ui'
import { Button } from '@merohms/ui'
import { tasks } from '../../../../data/dummy-data'
import { Calendar, Search, Plus, Settings2 } from 'lucide-react'

const ReservationTable = () => {
    return (
        <div className='h-full flex flex-col'>
            {/* header */}
            <div>
                Reservation
            </div>

            <div className='flex gap-2'>
                <div className="ml-auto h-[--height-button] px-3 flex gap-2 items-center border rounded-md cursor-pointer">
                    <Button variant="ghost" className="p-0">
                        <Search size={16} />
                    </Button>
                </div>
                <div className="h-[--height-button] px-3 flex gap-2 items-center border rounded-md cursor-pointer">
                    <Settings2 size={16} />
                    <Button variant="ghost" className="p-0">Filter</Button>
                </div>

                <div className="h-[--height-button] px-3 flex gap-2 items-center border rounded-md cursor-pointer">
                    <Calendar size={16} />
                    <Button variant="ghost" className="p-0">Last 30 days</Button>
                </div>

                <div className="h-[--height-button] px-3 flex gap-2 items-center border rounded-md cursor-pointer">
                    <Plus size={16} />
                    <Button variant="ghost" className="p-0">New Reservation</Button>
                </div>
            </div>

            {/* table */}
            <div className='mt-3 w-full flex-1'>
                <DataTable data={tasks} columns={columns} />
            </div>
        </div>
    )
}

export default ReservationTable;