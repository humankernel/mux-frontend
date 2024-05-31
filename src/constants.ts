import {
  BookIcon,
  ClapperboardIcon,
  FileClockIcon,
  FolderTreeIcon,
  ImageDownIcon,
  LucideIcon,
  MusicIcon,
  SettingsIcon,
  TvIcon,
} from "lucide-react";

export type LinkType = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export const LINKS: LinkType[] = [
  { name: "Movies", url: "/movies", icon: ClapperboardIcon },
  { name: "TV Shows", url: "/shows", icon: TvIcon },
  { name: "Music", url: "/music", icon: MusicIcon },
  { name: "Books", url: "/books", icon: BookIcon },
];

export const DASHBOARD_SETTINGS_LINKS: LinkType[] = [
  { name: "General", url: "settings", icon: SettingsIcon },
  { name: "Agents", url: "agents", icon: ImageDownIcon },
];

export const DASHBOARD_MANAGE_LINKS: LinkType[] = [
  { name: "Libraries", url: "libraries", icon: FolderTreeIcon },
  { name: "Logs", url: "logs", icon: FileClockIcon },
];
