"use client"

import React from 'react'
import { Button, DataTablePagination, ScrollArea } from '@merohms/ui'
import { DataTable } from '@merohms/ui'
import { tasks } from '../../../data/dummy-data'
import { Calendar, Search, Plus, Settings2 } from 'lucide-react'
import ReservationDataTable from './_components/table/reservation-table'



const Reservation = () => {
 
  
  return (
    <div className='h-full overflow-y-auto flex flex-col'>
      {/* <div className='flex gap-2'>
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
      </div> */}

      {/* table */}
      <div className='flex-1'>
        <ReservationDataTable data={tasks} />
      </div>
    </div>
  )
}

export default Reservation;