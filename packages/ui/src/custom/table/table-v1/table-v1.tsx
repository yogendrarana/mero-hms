import React, { FC } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from "../../../components/table"
import { cn } from '@merohms/lib'

// prop types
export interface ITableV1 {
    data: any[],
    cloumns: string[],
    className?: string
}

const TableV1: FC<ITableV1> = ({
    data,
    cloumns,
    className = ''
}) => {
    return (
        <div className={cn(
            className,
            'w-full border rounded-lg overflow-hidden'
        )}>
            <Table className='flex flex-col'>
                <TableHeader className='bg-gray-100'>
                    <TableRow className='border-b'>
                        {
                            cloumns.map((cloumn, index) => (
                                <TableHead
                                    key={index}
                                    className="py-4 text-left"
                                >{cloumn}</TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody className=''>
                    {data.map((invoice) => (
                        <TableRow key={invoice.invoice} className='border-b'>
                            {
                                Object.keys(invoice).map((key, index) => (
                                    <TableCell
                                        key={index}
                                    >{invoice[key]}</TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableV1;