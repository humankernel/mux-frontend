import { createLazyFileRoute } from '@tanstack/react-router'
import { BookIcon, CopyIcon, FilmIcon, FolderIcon, MusicIcon, ScanEyeIcon, ScanIcon, TvIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from '@/components/table/data-table'
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTableColumnHeader } from '@/components/table/column-header'

export const Route = createLazyFileRoute('/dashboard/libraries')({
    component: LibrariesPage
})

type Libraries = "movies" | "shows" | "music" | "books"

function LibrariesPage() {
    const [selected, setSelected] = useState<Libraries>("movies")

    console.log(selected)

    const handleSelected = (selected: Libraries) => () => setSelected(selected)

    return <section>

        <div className="w-fit mx-auto mb-10" role="group">
            <Button onClick={handleSelected("movies")} size="sm" variant="outline" className='inline-flex rounded-r-none'>
                <FilmIcon className='mr-2 w-4 h-4' />
                Movies
            </Button>
            <Button onClick={handleSelected("shows")} size="sm" variant="outline" className='inline-flex rounded-none'>
                <TvIcon className='mr-2 w-4 h-4' />
                Tv Shows
            </Button>
            <Button onClick={handleSelected("music")} size="sm" variant="outline" className='inline-flex rounded-none'>
                <MusicIcon className='mr-2 w-4 h-4' />
                Music
            </Button>
            <Button onClick={handleSelected("books")} size="sm" variant="outline" className='inline-flex rounded-l-none'>
                <BookIcon className='mr-2 w-4 h-4' />
                Books
            </Button>
        </div>

        <div className="w-fit border p-2 inline-flex gap-2 rounded-xl mb-4" role="group">
            <Button size="sm" variant="outline"> <FolderIcon className='mr-2 w-4 h-4' /> Add Folder </Button>
            <Button size="sm" variant="outline"> <ScanIcon className='mr-2 w-4 h-4' /> Scan </Button>
        </div>

        <DataTable columns={columns} data={medias} />
    </section>
}


type Media = {
    id: string
    title: string
    path: string
    lastUpdated: string
}

export const medias: Media[] = [
    {
        id: "1",
        title: "Harry Potter",
        path: "/mnt/d/movies/harry potter",
        lastUpdated: "2024-10-10"
    },
    {
        id: "2",
        title: "Batman Arkham Kinght",
        path: "/mnt/d/movies/batman",
        lastUpdated: "2020-10-10"
    },
]

const columns: ColumnDef<Media>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />
    },
    {
        accessorKey: "path",
        header: "Path",
    },
    {
        accessorKey: "lastUpdated",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Last Updated" />

    },
    {
        id: "actions",
        cell: ({ row }) => {
            const item = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(item.id)}
                        >
                            <CopyIcon className='mr-2 h-4 w-4' />
                            Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ScanEyeIcon className='mr-2 w-4 h-4' />
                            Identity
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]




