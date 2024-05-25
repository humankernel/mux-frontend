import { env } from "@/env";
import { SearchRes } from "@/types/api";

//const LIMIT = 20;
const API_BASE = `http://${env.API_HOST}:${env.API_PORT}`;

export async function searchMedia(name: string): Promise<SearchRes> {
  const encodedName = encodeURIComponent(name);

  const response = await fetch(`${API_BASE}/search&name=${encodedName}`);
  const data = await response.json();
  return data;
}
