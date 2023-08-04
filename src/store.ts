import { writable } from "svelte/store";
import type { GameState } from "./logic";

export const game = writable<GameState>();
