import {
    BookIcon,
    ClapperboardIcon,
    MusicIcon,
    SearchIcon,
    TvIcon,
} from "lucide-react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "./ui/badge";
import { MediaType } from "@/types";
import { searchMedia } from "@/queries/search";
import { useDebounce } from "@uidotdev/usehooks";

function MediaIcon({ type }: { type: MediaType }) {
    if (type === "movie") return <ClapperboardIcon className="mr-2 h-4 w-4" />;
    if (type === "show") return <TvIcon className="mr-2 h-4 w-4" />;
    if (type === "music") return <MusicIcon className="mr-2 h-4 w-4" />;
    return <BookIcon className="mr-2 h-4 w-4" />;
}

export function SearchBar() {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "/") {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const deboucedQuery = useDebounce(query, 300);

    /* const { data } = useQuery({
        queryKey: ["search", deboucedQuery],
        queryFn: () => searchMedia(deboucedQuery)
    }); */

    return (
        <>
            <Button
                size="sm"
                variant="outline"
                className="flex w-full justify-between gap-2 px-2"
            >
                <span className="flex items-center gap-2 opacity-80">
                    <SearchIcon size={15} />
                    Quick Search
                </span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    /
                </kbd>
            </Button>
            <p className="text-sm text-muted-foreground"></p>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    onValueChange={setQuery}
                    placeholder="Harry Potter, Mr. Robot, Batman ..."
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {/* {data?.results?.map((media) => (
                            <CommandItem className="flex gap-2" key={media.id}>
                                <MediaIcon type={media.type} />
                                <span>{media.name}</span>
                                {media.tags.map((tag) => (
                                    <Badge variant="secondary" key={tag}>
                                        {tag}
                                    </Badge>
                                ))}
                            </CommandItem>
                        ))} */}
                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </CommandDialog>
        </>
    );
}


