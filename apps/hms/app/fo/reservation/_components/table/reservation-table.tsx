"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import React from 'react'
import { columns } from './columns'
import { DataTable, DataTablePagination, DataTableToolbar, ScrollArea } from "@merohms/ui"
import { priorities, statuses } from "./data"

interface ReservationDataTableProps {
    data: any[]
}

const ReservationDataTable = ({ data }: ReservationDataTableProps) => {
    const [rowSelection, setRowSelection] = React.useState({});
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

    const table = useReactTable({
        data,
        columns,
        initialState: {
            pagination: {
              pageIndex: 0,
              pageSize: 20,
            },
          },
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })


    return (
        <div className="h-full flex flex-col gap-2 justify-between">
            <div>
                <DataTableToolbar table={table} priorities={priorities} statuses={statuses} />
            </div>

            <div className='h-full w-full flex-1 overflow-y-auto'>
                <ScrollArea>
                    <DataTable table={table} columns={columns} />
                </ScrollArea>
            </div>

            <div className="sticky bottom-0 bg-white rounded-lg border">
                <DataTablePagination table={table} />
            </div>
        </div>
    )
}

export default ReservationDataTable